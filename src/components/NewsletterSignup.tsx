import { useState } from "react";
import { motion } from "framer-motion";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL = 'https://europe-west1-clue-analytics.cloudfunctions.net/api';

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    // Client-side validation
    if (!email) {
      setError("Please enter an email address.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setSubmitted(true);
      setEmail("");
      console.log("Newsletter Signup:", data.message);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to subscribe. Please try again.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-blue-50 dark:bg-gray-900/90 transition-colors" aria-labelledby="newsletter-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 id="newsletter-heading" className="text-3xl font-extrabold mb-4 text-blue-900 dark:text-blue-300">
            Stay Ahead in AI & Machine Learning
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Subscribe to our research briefing for bi-weekly insights on ML systems, EdgeLabel techniques, and enterprise AI architectures.
          </p>

          {submitted ? (
            <motion.div
              className="p-4 rounded-xl bg-green-50 dark:bg-green-950/60 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-base font-medium"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              role="status"
            >
              Thank you for subscribing! Check your inbox for updates.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-stretch max-w-md mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="newsletter-email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                placeholder="Enter your corporate email"
                className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs flex-grow"
                required
                disabled={isLoading}
                aria-invalid={!!error}
                aria-describedby={error ? "email-error" : undefined}
              />
              <button
                type="submit"
                className={`px-6 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 flex-shrink-0 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                aria-label="Subscribe to briefing"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>
          )}

          {error && (
            <p className="mt-3 text-red-600 dark:text-red-400 text-sm font-medium" role="alert" id="email-error">
              {error}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
