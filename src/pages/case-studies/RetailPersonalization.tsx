import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const RetailPersonalization: React.FC = () => {
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
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
              Retail & E-Commerce
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
              +22% Repeat Purchase Lift
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Retail Chain Personalization: Dynamic Recommendation Engine
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            How a regional 45-store retail chain implemented edge-aware collaborative filtering to lift repeat purchases and eliminate catalog deadstock.
          </p>
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xs mb-12">
          <div className="text-center sm:text-left">
            <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">+22%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Repeat Purchases (90 Days)</div>
          </div>
          <div className="text-center sm:text-left sm:border-l sm:border-gray-100 dark:sm:border-gray-800 sm:pl-6">
            <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">18%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Higher Customer CSAT</div>
          </div>
          <div className="text-center sm:text-left sm:border-l sm:border-gray-100 dark:sm:border-gray-800 sm:pl-6">
            <div className="text-3xl font-extrabold text-purple-600 dark:text-purple-400">-12%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Inventory Overstock Reduction</div>
          </div>
        </div>

        {/* Narrative Content */}
        <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Challenge</h2>
            <p className="mb-4">
              The client faced stagnant retention across both their digital storefront and loyalty app. Traditional rule-based merchandising failed to capture nuanced regional preferences, resulting in high shopping cart abandonment and missed cross-sell opportunities.
            </p>
            <p>
              Furthermore, corporate data privacy guidelines prohibited streaming raw customer browsing telemetry to unvetted third-party cloud analytics platforms.
            </p>
          </section>

          <section className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Solution & Architecture</h2>
            <p className="mb-4">
              Cueligence architected a hybrid collaborative filtering and deep retrieval model:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                <span><strong>Real-time Embeddings:</strong> Two-tower neural network vectorizing user sessions and product features in real-time.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                <span><strong>Edge Telemetry with EdgeChart:</strong> Integrated lightweight, privacy-first EdgeChart dashboards inside the merchant portal to monitor conversion lift and model drift in real time.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                <span><strong>Edge Labeling for Visual Merchandising:</strong> Product image classification curated using EdgeLabel to tag seasonal apparel attributes with zero cloud dependency.</span>
              </li>
            </ul>
          </section>

          <section className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Business Outcomes</h2>
            <p className="mb-4">
              Within 90 days of staged rollout across 45 regional branches and online storefronts, the client recorded:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700">
                <div className="font-bold text-gray-900 dark:text-white mb-1">Direct ROI</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">22% surge in repeat order conversion over the baseline control cohort.</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700">
                <div className="font-bold text-gray-900 dark:text-white mb-1">Inventory Optimization</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">12% decrease in excess inventory through intelligent predictive restocking suggestions.</div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold mb-1">Facing similar merchandising challenges?</h3>
            <p className="text-blue-200 text-sm">Schedule a technical consultation to explore custom recommendation pipelines.</p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-white text-blue-900 font-semibold hover:bg-blue-50 shadow-md transition inline-flex items-center gap-2"
          >
            <span>Book Consultation</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RetailPersonalization;
