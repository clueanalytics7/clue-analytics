import { Link } from "react-router-dom";
import { FaArrowRight, FaShieldAlt, FaRocket, FaChartPie } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-900 via-indigo-950 to-gray-900 text-white py-24 sm:py-32">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_35%_at_50%_30%,rgba(59,130,246,0.22),transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Modern Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Enterprise AI Solutions & Edge Tooling</span>
        </div>

        {/* Primary Screen-Reader H1 Landmark */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white max-w-4xl mx-auto">
          AI & Machine Learning Consulting That Drives Real Results
        </h1>

        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 text-gray-200 leading-relaxed">
          We help organizations harness intelligent systems through expert strategy, production ML deployment, and integrated edge tools like EdgeLabel and EdgeChart.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-200 text-base shadow-lg shadow-blue-600/30 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            <span>Book a Free Consultation</span>
            <FaArrowRight className="text-xs" aria-hidden="true" />
          </Link>
          <Link
            to="/case-studies"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-gray-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200 text-base focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
          >
            Explore Case Studies
          </Link>
        </div>

        {/* Proven Metrics Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8 border-t border-white/10">
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
            <FaRocket className="text-blue-400 text-2xl flex-shrink-0" aria-hidden="true" />
            <div className="text-left">
              <div className="text-2xl font-bold text-white">+22%</div>
              <div className="text-xs text-gray-400">Sales Repeat Lift (Retail AI)</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
            <FaShieldAlt className="text-emerald-400 text-2xl flex-shrink-0" aria-hidden="true" />
            <div className="text-left">
              <div className="text-2xl font-bold text-white">15%</div>
              <div className="text-xs text-gray-400">Risk Identification (Healthcare)</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
            <FaChartPie className="text-amber-400 text-2xl flex-shrink-0" aria-hidden="true" />
            <div className="text-left">
              <div className="text-2xl font-bold text-white">30%</div>
              <div className="text-xs text-gray-400">Forecast Precision (AgriTech)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
