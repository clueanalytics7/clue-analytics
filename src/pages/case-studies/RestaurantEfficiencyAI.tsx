import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const RestaurantEfficiencyAI: React.FC = () => {
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
            <span className="px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 text-xs font-semibold uppercase tracking-wider">
              Hospitality & Retail Operations
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
              -25% Perishable Waste
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Restaurant Efficiency AI: Predictive Inventory & Staffing Optimization
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            How a regional restaurant group harnessed machine learning time-series models to balance staffing, reduce prep spoilage, and boost fulfillment speed.
          </p>
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xs mb-12">
          <div className="text-center sm:text-left">
            <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">-25%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Perishable Food Waste</div>
          </div>
          <div className="text-center sm:text-left sm:border-l sm:border-gray-100 dark:sm:border-gray-800 sm:pl-6">
            <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">+15%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Labor Hour Utilization</div>
          </div>
          <div className="text-center sm:text-left sm:border-l sm:border-gray-100 dark:sm:border-gray-800 sm:pl-6">
            <div className="text-3xl font-extrabold text-amber-600 dark:text-amber-400">10%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Customer CSAT Lift</div>
          </div>
        </div>

        {/* Narrative Content */}
        <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Challenge</h2>
            <p className="mb-4">
              A regional restaurant group with 18 locations experienced extreme demand fluctuations driven by local events, weather changes, and delivery app order surges. Kitchen managers routinely over-prepped perishable proteins or found themselves short-staffed during sudden rush hours.
            </p>
            <p>
              Inaccurate estimates accounted for hundreds of thousands of dollars in annual inventory write-offs.
            </p>
          </section>

          <section className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Solution & Architecture</h2>
            <p className="mb-4">
              Clue Analytics built an automated forecasting and kitchen operations engine:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                <span><strong>Multi-Variate Time Series:</strong> Integrated POS sales history, local holiday schedules, weather forecasts, and delivery platform queues into a continuous forecasting model.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                <span><strong>Kitchen Telemetry with EdgeChart:</strong> Rendered intuitive shift-level demand prediction curves on kitchen display tablets using EdgeChart's low-overhead SVG engine.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-amber-500 mt-1 flex-shrink-0" />
                <span><strong>Automated Order Generation:</strong> Generated recommended prep schedules and supplier orders directly to regional commissary distributors.</span>
              </li>
            </ul>
          </section>

          <section className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Measurable Results</h2>
            <p className="mb-4">
              Within 120 days across all 18 test locations:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700">
                <div className="font-bold text-gray-900 dark:text-white mb-1">Waste Elimination</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Cut discarded perishable inventory by 25%, delivering immediate gross margin expansion.</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700">
                <div className="font-bold text-gray-900 dark:text-white mb-1">Service Consistency</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Staff utilization improved by 15%, slashing order wait times during peak dining windows.</div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold mb-1">Optimizing inventory, demand, or labor?</h3>
            <p className="text-blue-200 text-sm">Let our engineers design an automated forecasting model for your business.</p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 px-6 py-3 rounded-xl bg-white text-blue-900 font-semibold hover:bg-blue-50 shadow-md transition inline-flex items-center gap-2"
          >
            <span>Talk With Us</span>
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantEfficiencyAI;
