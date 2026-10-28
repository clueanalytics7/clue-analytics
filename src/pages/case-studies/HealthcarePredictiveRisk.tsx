import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const HealthcarePredictiveRisk: React.FC = () => {
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
            <span className="px-3 py-1 rounded-full bg-rose-100 dark:bg-rose-950/80 text-rose-800 dark:text-rose-300 text-xs font-semibold uppercase tracking-wider">
              Healthcare & Life Sciences
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
              -20% Readmission Rate
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            Healthcare Predictive Risk: Early Clinical Intervention at Scale
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            How a regional hospital network harnessed HIPAA-compliant predictive risk classifiers to identify high-risk deterioration early and save lives.
          </p>
        </div>

        {/* Key Metrics Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xs mb-12">
          <div className="text-center sm:text-left">
            <div className="text-3xl font-extrabold text-rose-600 dark:text-rose-400">+15%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">High-Risk Patients Identified</div>
          </div>
          <div className="text-center sm:text-left sm:border-l sm:border-gray-100 dark:sm:border-gray-800 sm:pl-6">
            <div className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">-20%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">30-Day Hospital Readmissions</div>
          </div>
          <div className="text-center sm:text-left sm:border-l sm:border-gray-100 dark:sm:border-gray-800 sm:pl-6">
            <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">92%</div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">Model Precision Score</div>
          </div>
        </div>

        {/* Narrative Content */}
        <div className="space-y-10 text-gray-700 dark:text-gray-300 leading-relaxed">
          <section className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Challenge</h2>
            <p className="mb-4">
              Emergency room and critical care staff struggled with delayed warning signs for chronic condition deterioration. Legacy scoring formulas (like standard Charlson indices) relied on static retrospective records, missing acute micro-trend shifts in patient telemetry.
            </p>
            <p>
              The provider required an on-premises machine learning inference solution capable of continuous risk assessment without transferring protected health information (PHI) outside their firewall.
            </p>
          </section>

          <section className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Solution & Architecture</h2>
            <p className="mb-4">
              Cueligence architected a privacy-first clinical risk scoring system:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-rose-500 mt-1 flex-shrink-0" />
                <span><strong>EHR & Vitals Ingestion:</strong> Ingestion pipeline processing lab panels, oxygen saturation, and nurse observations into temporal risk embeddings.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-rose-500 mt-1 flex-shrink-0" />
                <span><strong>Clinical Telemetry with EdgeChart:</strong> Rendered real-time risk trajectory curves directly on nurse station displays with colorblind-safe palettes, allowing clinicians to immediately distinguish trajectory trends.</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCheckCircle className="text-rose-500 mt-1 flex-shrink-0" />
                <span><strong>Air-Gapped Privacy:</strong> Deployed as a secure on-premise container suite requiring zero internet connectivity.</span>
              </li>
            </ul>
          </section>

          <section className="p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Impact & Outcomes</h2>
            <p className="mb-4">
              Following 6 months of live operation across three inpatient facilities:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700">
                <div className="font-bold text-gray-900 dark:text-white mb-1">Clinical Intervention</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Flagged 15% more deteriorating patients 8 hours ahead of critical crash indicators.</div>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200/60 dark:border-gray-700">
                <div className="font-bold text-gray-900 dark:text-white mb-1">Economic Value</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Reduced penalty costs through a 20% reduction in preventable 30-day readmissions.</div>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-2xl font-bold mb-1">Building healthcare or diagnostic AI?</h3>
            <p className="text-blue-200 text-sm">Consult with our bio-informatics and clinical ML specialists.</p>
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

export default HealthcarePredictiveRisk;
