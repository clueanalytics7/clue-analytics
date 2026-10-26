import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaClock, FaTags, FaChartLine } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL = 'https://europe-west1-clue-analytics.cloudfunctions.net/api';

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);

    const { name, email, message } = formData;

    if (!name) {
      setError("Please enter your name.");
      return;
    }
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!message) {
      setError("Please enter a message.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(`${BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to send message. Please try again.";
      setError(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Hero Header */}
      <section className="relative py-20 bg-gradient-to-b from-blue-900 via-indigo-950 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(45%_35%_at_50%_30%,rgba(59,130,246,0.2),transparent_100%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
            Get In Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Let's Engineer Your Intelligent Future
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Whether you are evaluating AI readiness, deploying custom computer vision models, or scaling EdgeLabel/EdgeChart pipelines, our team is ready to collaborate.
          </p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Advisory Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Consulting Inquiries & Advisory
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                We review all technical inquiries with senior machine learning architects to assess feasibility, scope, and strategic alignment.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Direct Email</h3>
                  <a href="mailto:clueanalytics7@gmail.com" className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                    clueanalytics7@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <FaClock aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">Turnaround SLA</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Typically within 24 business hours from a senior ML engineer.
                  </p>
                </div>
              </div>
            </div>

            {/* Toolchain Inquiries Highlight */}
            <div className="p-6 rounded-2xl bg-gray-100/80 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-800">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wider">
                Toolchain Support & Deployments
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Need enterprise hosting, dedicated labeling queues, or on-prem integration for EdgeLabel or EdgeChart?
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium">
                  <FaTags className="text-emerald-500" /> EdgeLabel Integrations
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium">
                  <FaChartLine className="text-amber-500" /> EdgeChart Dashboards
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 sm:p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send a Message
              </h2>

              {submitted ? (
                <motion.div
                  className="p-6 rounded-xl bg-green-50 dark:bg-green-950/60 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  role="status"
                >
                  <h3 className="font-bold text-lg mb-2">Message Delivered!</h3>
                  <p className="text-sm leading-relaxed">
                    Thank you for reaching out. We have logged your request and our lead consultant will get in touch with you shortly.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <p className="text-red-600 dark:text-red-400 text-sm font-medium" role="alert" id="contact-form-error">
                      {error}
                    </p>
                  )}

                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Jordan Smith"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jordan@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
                      required
                      disabled={isLoading}
                      aria-invalid={!!error}
                      aria-describedby={error ? "contact-form-error" : undefined}
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      How Can We Help You?
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Outline your project scope, timeline, data challenges, or tooling inquiries..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
                      required
                      disabled={isLoading}
                    />
                  </div>

                  <button
                    type="submit"
                    className={`w-full py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-sm transition-all focus-visible:ring-2 focus-visible:ring-blue-500 ${
                      isLoading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={isLoading}
                  >
                    {isLoading ? "Transmitting..." : "Send Consultation Request"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
