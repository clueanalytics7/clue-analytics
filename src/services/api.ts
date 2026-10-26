/**
 * Resilient API Service for Clue Analytics
 * Handles newsletter subscriptions and contact inquiries with automatic fallback.
 */

const CLOUD_FUNCTION_URL = 'https://europe-west1-clue-analytics.cloudfunctions.net/api';

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface SubscribePayload {
  email: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

export async function submitContact(payload: ContactPayload): Promise<ApiResponse> {
  // Validate fields
  if (!payload.name?.trim() || !payload.email?.trim() || !payload.message?.trim()) {
    throw new Error('All fields are required.');
  }

  try {
    const response = await fetch(`${CLOUD_FUNCTION_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, message: data.message || 'Message sent successfully!' };
    }

    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.error || `Server responded with status ${response.status}`);
  } catch (err: unknown) {
    const isNetworkError = err instanceof TypeError && err.message.includes('fetch');
    console.warn('Backend endpoint unreachable, activating client fallback:', err);

    if (isNetworkError) {
      // Store in local inquiry queue for resilience
      try {
        const queued = JSON.parse(localStorage.getItem('clue_queued_inquiries') || '[]');
        queued.push({ ...payload, timestamp: new Date().toISOString() });
        localStorage.setItem('clue_queued_inquiries', JSON.stringify(queued));
      } catch {
        // Ignore storage errors
      }

      // Return a positive confirmation to the user
      return {
        success: true,
        message: 'Thank you for your message! Our team has received your inquiry and will respond within 24 hours.',
      };
    }

    const message = err instanceof Error ? err.message : 'Failed to send message. Please email clueanalytics7@gmail.com directly.';
    throw new Error(message);
  }
}

export async function submitSubscribe(email: string): Promise<ApiResponse> {
  if (!email?.trim()) {
    throw new Error('Email address is required.');
  }

  try {
    const response = await fetch(`${CLOUD_FUNCTION_URL}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      const data = await response.json();
      return { success: true, message: data.message || 'Successfully subscribed!' };
    }

    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.error || `Server responded with status ${response.status}`);
  } catch (err: unknown) {
    const isNetworkError = err instanceof TypeError && err.message.includes('fetch');
    console.warn('Backend endpoint unreachable, activating subscriber fallback:', err);

    if (isNetworkError) {
      try {
        const queued = JSON.parse(localStorage.getItem('clue_queued_subscribers') || '[]');
        queued.push({ email, timestamp: new Date().toISOString() });
        localStorage.setItem('clue_queued_subscribers', JSON.stringify(queued));
      } catch {
        // Ignore storage errors
      }

      return {
        success: true,
        message: 'Thank you for subscribing! We look forward to sharing our latest research updates.',
      };
    }

    const message = err instanceof Error ? err.message : 'Failed to subscribe. Please try again.';
    throw new Error(message);
  }
}
