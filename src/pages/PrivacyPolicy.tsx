import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaShieldAlt } from 'react-icons/fa';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <FaArrowLeft className="text-xs" /> Back to Home
        </Link>

        <div className="p-8 sm:p-12 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-sm space-y-8">
          <div className="border-b border-gray-100 dark:border-gray-800 pb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <FaShieldAlt /> Data Governance
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Privacy Policy & Data Protection
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Last updated: October 2026
            </p>
          </div>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              1. Our Privacy Philosophy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              At Cueligence, privacy is not an afterthought — it is the foundation of our engineering architecture. Both our strategic consulting services and our open-source tools (EdgeLabel and EdgeChart) are designed to minimize data collection and maintain total client data sovereignty.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              2. Data Collected via This Portal
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-3">
              When using the Cueligence web portal, we may process:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li><strong>Contact Inquiries:</strong> Name, professional email address, and project details provided explicitly via our contact or briefing forms.</li>
              <li><strong>Anonymous Telemetry:</strong> Aggregated, pseudonymized site usage metrics collected through Google Analytics only when you consent via our cookie notification.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              3. Toolchain & Edge Data Privacy (EdgeLabel & EdgeChart)
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              When utilizing <strong>EdgeLabel</strong> for dataset annotation or <strong>EdgeChart</strong> for client telemetry:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300 mt-2">
              <li>Image and text datasets loaded into EdgeLabel are processed exclusively inside your local device memory (Client-Side execution) and are never uploaded to Cueligence servers.</li>
              <li>Telemetry graphs rendered with EdgeChart operate locally within your application container.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              4. Cookies & Tracking Preferences
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              You maintain complete control over cookie consent. Declining cookies stops all non-essential analytics tracking immediately. You can update your preferences at any time by clearing your browser cache.
            </p>
          </section>

          <section className="pt-4 border-t border-gray-100 dark:border-gray-800">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              5. Contacting Our Data Governance Officer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
              For any questions regarding this policy or to request data deletion, contact us directly at{' '}
              <a href="mailto:clueanalytics7@gmail.com" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                clueanalytics7@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
