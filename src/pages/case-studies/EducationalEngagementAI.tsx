import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const EducationalEngagementAI: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <FaArrowLeft className="text-xs" /> Back to Case Studies
        </Link>

        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              Higher Education & EdTech
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
              +18% Retention Gain
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Educational Engagement AI: Proactive Student Retention Modeling
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            How a major university leveraged predictive behavioral sequence models to identify struggling students early and improve graduation trajectories.
          </p>
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xs mb-12">
          <div className="text-center sm:text-left">
            <div className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">+18%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">First-Year Student Retention</div>
          </div>
          <div className="text-center sm:text-left sm:border-l sm:border-gray-100 dark:sm:border-gray-800 sm:pl-6">
            <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">89%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Intervention Acceptance Rate</div>
          </div>
          <div className="text-center sm:text-left sm:border-l sm:border-gray-100 dark:sm:border-gray-800 sm:pl-6">
            <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">3 Weeks</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Earlier Academic Flagging</div>
          </div>
        </div>

        {/* Narrative Content */}
        <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Challenge</h2>
            <p className="mb-4">
              With over 18,000 undergraduate students, academic advisors could only spot students in distress after midterm grades were submitted — often too late to prevent course withdrawals or semester dropouts.
            </p>
            <p>
              The institution needed a privacy-preserving model to detect disengagement micro-signals without intrusive surveillance.
            </p>
          </section>

          <section className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Solution & Architecture</h2>
            <p className="mb-4">
              Clue Analytics engineered an ethical learning analytics pipeline:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-indigo-500 mt-1 flex-shrink-0" />
                <span><strong>Behavioral Engagement Telemetry:</strong> Aggregated LMS logins, submission cadences, and discussion forum engagement into anonymous risk indicators.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-indigo-500 mt-1 flex-shrink-0" />
                <span><strong>Advisor Dashboards with EdgeChart:</strong> Rendered cohort engagement distributions with accessible color scales and screen-reader navigable fallback tables for academic counseling teams.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-indigo-500 mt-1 flex-shrink-0" />
                <span><strong>Bias Audits & Explainability:</strong> Applied SHAP (SHapley Additive exPlanations) to ensure zero demographic bias in academic risk predictions.</span>
              </li>
            </ul>
          </section>

          <section className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Outcomes & Retention</h2>
            <p className="mb-4">
              During the pilot year across STEM and liberal arts faculties:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700">
                <div className="font-bold text-gray-900 dark:text-white mb-1">Student Retention</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Lifted first-to-second year retention by 18% through proactive peer-tutoring connections.</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700">
                <div className="font-bold text-gray-900 dark:text-white mb-1">Early Intervention</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Identified declining assignment engagement an average of 3 weeks prior to exam failures.</div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold mb-1">Need predictive analytics in education or enterprise?</h3>
            <p className="text-blue-200 text-sm">Consult with our machine learning engineers for compliant, audited models.</p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-white text-blue-900 font-semibold hover:bg-blue-50 shadow-md transition inline-flex items-center gap-2"
          >
            <span>Consult With Us</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EducationalEngagementAI;
