import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { app } from '../firebase';
import SubscriberTable from '../components/SubscriberTable';
import MessageTable from '../components/MessageTable';

const auth = getAuth(app);

interface Subscriber {
  id: string;
  email: string;
  subscribed_at: string;
}

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  sent_at: string;
}

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsAuthenticated(!!user);
      if (user) {
        const idToken = await user.getIdToken();
        fetchData(idToken);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchData = async (idToken: string) => {
    try {
      const subscribersResponse = await fetch('https://europe-west1-clue-analytics.cloudfunctions.net/api/subscribers', {
        headers: { Authorization: `Bearer ${idToken}` },
      });
      if (!subscribersResponse.ok) throw new Error('Failed to fetch subscribers');
      const subscribersData = await subscribersResponse.json();
      setSubscribers(subscribersData);

      const messagesResponse = await fetch('https://europe-west1-clue-analytics.cloudfunctions.net/api/messages', {
        headers: { Authorization: `Bearer ${idToken}` },
      });
      if (!messagesResponse.ok) throw new Error('Failed to fetch messages');
      const messagesData = await messagesResponse.json();
      setMessages(messagesData);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
      setIsAuthenticated(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      const idToken = await userCredential.user.getIdToken();
      localStorage.setItem('adminIdToken', idToken);
      setIsAuthenticated(true);
      fetchData(idToken);
    } catch {
      setError('Invalid credentials or authentication failed');
    }
  };

  const handleLogout = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('adminIdToken');
      setIsAuthenticated(false);
      setSubscribers([]);
      setMessages([]);
      setUsername('');
      setPassword('');
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-16 px-4 transition-colors">
        <div className="max-w-md mx-auto p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">Admin Authentication</h1>
          {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Username / Email</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
                required
              />
            </div>
            <button type="submit" className="w-full py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold shadow-xs transition">
              Login to Console
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 py-10 px-6 transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Operations Dashboard</h1>
          <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition">
            Logout
          </button>
        </div>

        {error && <p className="text-red-500 mb-6">{error}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs rounded-2xl p-6 text-center">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Briefing Subscribers</h2>
            <p className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mt-2">{subscribers.length}</p>
          </div>
          <div className="bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs rounded-2xl p-6 text-center">
            <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400">Total Inquiries & Messages</h2>
            <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400 mt-2">{messages.length}</p>
          </div>
        </div>

        <SubscriberTable subscribers={subscribers} />
        <div className="mt-12">
          <MessageTable messages={messages} />
        </div>
      </div>
    </div>
  );
};

export default Admin;

