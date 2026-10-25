import React from "react";
import { FaTags, FaChartLine, FaRobot, FaExternalLinkAlt, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ProductsSection: React.FC = () => {
  return (
    <section className="section py-20 bg-gray-50 dark:bg-gray-900/60 border-y border-gray-200/80 dark:border-gray-800" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-950/80 text-blue-800 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4">
            Ecosystem & Products
          </div>
          <h2 id="products-heading" className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            The Clue Analytics Intelligent Toolchain
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Our strategic consulting is backed by dedicated, edge-optimized tools built for modern machine learning workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* EdgeLabel Card */}
          <div className="flex flex-col justify-between rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-md border border-gray-200/80 dark:border-gray-700 hover:shadow-xl hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xl shadow-xs border border-emerald-100 dark:border-emerald-800">
                    <FaTags aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      EdgeLabel
                    </h3>
                    <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                      Annotation & Dataset Labeling
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-medium bg-emerald-50 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 rounded-md border border-emerald-200 dark:border-emerald-800">
                  Open Source
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Ultra-fast, edge-native data annotation workspace for Computer Vision and NLP datasets. Built for high-throughput labeling without leaking sensitive client data to external servers.
              </p>

              <ul className="space-y-2.5 mb-8 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-emerald-500 text-xs flex-shrink-0" />
                  <span>Bounding boxes, polygons, and multi-class semantic segmentation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-emerald-500 text-xs flex-shrink-0" />
                  <span>Offline-first execution with zero cloud storage dependencies</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-emerald-500 text-xs flex-shrink-0" />
                  <span>Exports seamlessly to YOLO, COCO, VOC, and PyTorch dataloaders</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Part of the Clue Analytics ML Suite
              </span>
              <a
                href="https://github.com/clueanalytics7/edgelabel"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-md py-1 px-2"
                aria-label="Explore EdgeLabel repository on GitHub"
              >
                <span>View EdgeLabel</span>
                <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* EdgeChart Card */}
          <div className="flex flex-col justify-between rounded-2xl bg-white dark:bg-gray-800 p-8 shadow-md border border-gray-200/80 dark:border-gray-700 hover:shadow-xl hover:border-amber-500/40 dark:hover:border-amber-500/40 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center text-xl shadow-xs border border-amber-100 dark:border-amber-800">
                    <FaChartLine aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      EdgeChart
                    </h3>
                    <p className="text-xs font-medium text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                      Telemetry & Interactive Analytics
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-medium bg-amber-50 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300 rounded-md border border-amber-200 dark:border-amber-800">
                  Open Source
                </span>
              </div>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Lightweight, high-density data visualization and telemetry charting tailored for time-series metrics, model convergence graphs, and edge performance monitoring.
              </p>

              <ul className="space-y-2.5 mb-8 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-amber-500 text-xs flex-shrink-0" />
                  <span>Colorblind-safe accessible categorical & continuous palettes</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-amber-500 text-xs flex-shrink-0" />
                  <span>High-fps rendering for real-time telemetry and IoT streaming</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <FaCheckCircle className="text-amber-500 text-xs flex-shrink-0" />
                  <span>Accessible keyboard focus and screen-reader data fallback tables</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Part of the Clue Analytics ML Suite
              </span>
              <a
                href="https://github.com/clueanalytics7/edgechart"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md py-1 px-2"
                aria-label="Explore EdgeChart repository on GitHub"
              >
                <span>View EdgeChart</span>
                <FaExternalLinkAlt className="text-xs" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Consulting Bridge Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-blue-300 text-sm font-semibold mb-2">
              <FaRobot />
              <span>Full-Spectrum AI Strategy</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
              Need custom integrations with EdgeLabel or EdgeChart?
            </h3>
            <p className="mt-2 text-blue-100 text-sm sm:text-base leading-relaxed">
              We engineer custom training loops, model deployment pipelines, and specialized dashboards tailored specifically to your organizational datasets.
            </p>
          </div>
          <Link
            to="/contact"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-blue-900 hover:bg-blue-50 font-semibold shadow-md transition-all duration-200 focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Consult With Us</span>
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
