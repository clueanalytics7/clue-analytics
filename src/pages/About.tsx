import { useState } from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaRocket, FaCogs, FaTags, FaChartLine, FaExternalLinkAlt } from "react-icons/fa";

import { submitContact } from "../services/api";

export default function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      await submitContact({ name, email, message });
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Failed to send message. Please email clueanalytics7@gmail.com directly.";
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
            Who We Are
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Pioneering Practical Intelligence at the Edge & Enterprise
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Cueligence is an applied AI and machine learning engineering consultancy. We partner with organizations to convert ambitious data concepts into robust, revenue-driving production systems.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xl mb-6">
              <FaRocket />
            </div>
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Business-First AI</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              We reject hype-driven AI projects. Every model, pipeline, and integration we design begins with measurable financial and operational metrics.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl mb-6">
              <FaShieldAlt />
            </div>
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Data Sovereignty & Privacy</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              Our edge-first philosophy ensures client data remains under client control, minimizing cloud latency and eliminating sensitive data leakage.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 flex items-center justify-center text-xl mb-6">
              <FaCogs />
            </div>
            <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Complete Tooling Autonomy</h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              We empower your team with source-available tools, documented architectures, and comprehensive team upskilling rather than black-box vendor lock-in.
            </p>
          </div>
        </div>

        {/* The Cueligence Suite Alignment */}
        <div className="rounded-2xl p-8 sm:p-12 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm mb-20">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Our Technology Ecosystem
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mt-2">
              Built on Purpose-Engineered Edge Tooling
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
              To deliver maximum speed and data privacy for our clients, our engineering division develops and maintains specialized tooling that directly powers our client engagements:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <FaTags className="text-emerald-500 text-lg" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">EdgeLabel</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold">
                    Dataset Annotation
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Enables rapid, offline labeling of computer vision and NLP corpora directly within browser memory. Used in our client engagements for proprietary training set preparation.
                </p>
              </div>
              <a
                href="https://github.com/clueanalytics7/edgelabel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5"
              >
                <span>Explore EdgeLabel Repository</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </div>

            <div className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200/60 dark:border-gray-700/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <FaChartLine className="text-amber-500 text-lg" />
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">EdgeChart</h3>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-semibold">
                    Interactive Telemetry
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Lightweight SVG charting designed with colorblind-safe accessibility and low-latency rendering for edge IoT telemetry and live model evaluation graphs.
                </p>
              </div>
              <a
                href="https://github.com/clueanalytics7/edgechart"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1.5"
              >
                <span>Explore EdgeChart Repository</span>
                <FaExternalLinkAlt className="text-[10px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact & Consultation Section */}
        <div className="max-w-3xl mx-auto rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 sm:p-10 shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Connect With Our Advisory Team
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Have a technical project in mind or seeking strategic AI guidance? Drop us a note or email us at{' '}
              <a href="mailto:clueanalytics7@gmail.com" className="text-blue-600 dark:text-blue-400 font-semibold underline">
                clueanalytics7@gmail.com
              </a>.
            </p>
          </div>

          {submitted ? (
            <motion.div
              className="p-4 rounded-xl bg-green-50 dark:bg-green-950/60 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-center font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              role="status"
            >
              Thank you for reaching out! A member of our senior engineering team will respond within 24 business hours.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <p className="text-red-600 dark:text-red-400 text-sm text-center" role="alert" id="about-form-error">
                  {error}
                </p>
              )}
              <div>
                <label htmlFor="about-name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="about-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Chen"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <label htmlFor="about-email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  id="about-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@organization.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
                  required
                  disabled={isLoading}
                  aria-invalid={!!error}
                  aria-describedby={error ? "about-form-error" : undefined}
                />
              </div>
              <div>
                <label htmlFor="about-message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Project Details or Objectives
                </label>
                <textarea
                  id="about-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Briefly describe your objectives, data scope, or question..."
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-xs"
                  required
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-sm transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
