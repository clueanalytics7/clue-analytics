const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const axios = require('axios');
const NodeCache = require('node-cache');
const rateLimit = require('express-rate-limit');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');

const app = express();
const cache = new NodeCache({ stdTTL: 3600 });

admin.initializeApp();
const db = admin.database();

app.use(express.json());
app.use(cors({ origin: true }));

const subscribeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: 'Too many subscription attempts from this IP, please try again later.',
  keyGenerator: (req) => req.headers['x-forwarded-for']?.split(',')[0].trim() || req.ip,
});

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Too many contact messages from this IP, please try again later.',
  keyGenerator: (req) => req.headers['x-forwarded-for']?.split(',')[0].trim() || req.ip,
});

// Access environment variables with safe fallbacks
const sendgridApiKey = functions.config().sendgrid?.api_key || process.env.SENDGRID_API_KEY;
if (sendgridApiKey) {
  try {
    sgMail.setApiKey(sendgridApiKey);
  } catch (e) {
    console.warn('Failed to set SendGrid API key:', e.message);
  }
} else {
  console.warn('SENDGRID_API_KEY is not set. Data will be saved in Firebase without email forwarding.');
}

const adminEmail = functions.config().admin?.email || process.env.ADMIN_EMAIL || 'clueanalytics7@gmail.com';
const fromEmail = process.env.SENDER_EMAIL || 'clueanalytics7@gmail.com';

// Middleware to verify Firebase ID token
const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized: No token provided' });
  }

  const idToken = authHeader.split('Bearer ')[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};

app.get('/fetch-feed', async (req, res) => {
  const { url } = req.query;
  if (!url) return res.status(400).json({ error: 'URL parameter is required' });

  const cachedFeed = cache.get(url);
  if (cachedFeed) {
    console.log(`Serving cached feed for ${url}`);
    return res.json(cachedFeed);
  }

  try {
    const response = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ClueAnalyticsBot/1.0)' } });
    const feedData = response.data;
    cache.set(url, feedData);
    console.log(`Fetched and cached feed for ${url}`);
    res.send(feedData);
  } catch (err) {
    console.error(`Error fetching feed from ${url}:`, err.message);
    res.status(500).json({ error: `Failed to fetch feed: ${err.message}` });
  }
});

app.post('/subscribe', subscribeLimiter, async (req, res) => {
  const { email } = req.body;
  if (!email || typeof email !== 'string') return res.status(400).json({ error: 'Email is required and must be a string' });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return res.status(400).json({ error: 'Invalid email address' });

  try {
    const ref = db.ref('subscribers').push();
    await ref.set({ email, subscribed_at: new Date().toISOString() });
    console.log(`Subscribed email: ${email}`);

    if (sendgridApiKey) {
      try {
        const subscriberMsg = {
          to: email,
          from: fromEmail,
          subject: 'Thank You for Subscribing to Clue Analytics!',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #1d4ed8;">Welcome to Clue Analytics!</h2>
              <p>Thank you for subscribing to our research briefing. We look forward to sharing our latest insights in applied AI and edge tooling.</p>
              <p style="margin-top: 20px;"><a href="https://clueanalytics7.github.io/clue-analytics/" style="background-color: #1d4ed8; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Visit Website</a></p>
            </div>
          `,
        };
        await sgMail.send(subscriberMsg);
        console.log(`Confirmation email sent to ${email}`);
      } catch (sgError) {
        console.warn('SendGrid send failed, but subscription was recorded:', sgError.message);
      }
    }

    res.status(200).json({ message: 'Successfully subscribed!' });
  } catch (err) {
    console.error('Error processing subscription:', err.message);
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

app.post('/contact', contactLimiter, async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || typeof name !== 'string') return res.status(400).json({ error: 'Name is required and must be a string' });
  if (!email || typeof email !== 'string') return res.status(400).json({ error: 'Email is required and must be a string' });
  if (!message || typeof message !== 'string') return res.status(400).json({ error: 'Message is required and must be a string' });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return res.status(400).json({ error: 'Invalid email address' });

  try {
    const ref = db.ref('messages').push();
    await ref.set({ name, email, message, sent_at: new Date().toISOString() });
    console.log(`Message stored from ${name} (${email}): ${message}`);

    if (sendgridApiKey) {
      try {
        const adminMsg = {
          to: adminEmail,
          from: fromEmail,
          subject: 'New Consultation Inquiry - Clue Analytics',
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
              <h2 style="color: #1d4ed8;">New Contact Inquiry</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong> ${message}</p>
            </div>
          `,
        };
        await sgMail.send(adminMsg);
      } catch (sgError) {
        console.warn('SendGrid admin notification failed, but message was saved:', sgError.message);
      }
    }

    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (err) {
    console.error('Error processing message:', err.message);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.get('/subscribers', authenticate, async (req, res) => {
  try {
    const snapshot = await db.ref('subscribers').once('value');
    const subscribers = snapshot.val() ? Object.entries(snapshot.val()).map(([id, data]) => ({ id, ...data })) : [];
    res.json(subscribers);
  } catch (err) {
    console.error('Error retrieving subscribers:', err.message);
    res.status(500).json({ error: 'Failed to retrieve subscribers' });
  }
});

app.get('/messages', authenticate, async (req, res) => {
  try {
    const snapshot = await db.ref('messages').once('value');
    const messages = snapshot.val() ? Object.entries(snapshot.val()).map(([id, data]) => ({ id, ...data })) : [];
    res.json(messages);
  } catch (err) {
    console.error('Error retrieving messages:', err.message);
    res.status(500).json({ error: 'Failed to retrieve messages' });
  }
});

exports.api = functions.region('europe-west1').https.onRequest(app);
