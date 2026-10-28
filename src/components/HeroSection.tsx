import { Link } from "react-router-dom";
import { FaArrowRight, FaShieldAlt, FaRocket, FaLock } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 text-white py-24 sm:py-32">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_35%_at_50%_25%,rgba(6,182,212,0.18),transparent_100%)] pointer-events-none" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(35%_30%_at_80%_40%,rgba(99,102,241,0.15),transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Modern Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md shadow-xs">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>Applied AI Architecture & Sovereign Edge Systems</span>
        </div>

        {/* Primary Screen-Reader H1 Landmark */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-[1.12] tracking-tight text-white max-w-4xl mx-auto">
          Architecting Sovereign AI & Production ML for Enterprise Operations
        </h1>

        <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-10 text-slate-300 leading-relaxed font-normal">
          <strong className="text-white font-semibold">Cueligence</strong> transforms mission-critical workflows into competitive advantages. We engineer production-grade machine learning pipelines, custom deep learning models, and privacy-preserving edge architectures powered by our proprietary toolchain: <span className="text-cyan-300 font-medium">EdgeLabel</span> and <span className="text-blue-300 font-medium">EdgeChart</span>.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all duration-200 text-base shadow-lg shadow-blue-500/25 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            <span>Schedule Strategic Briefing</span>
            <FaArrowRight className="text-xs" aria-hidden="true" />
          </Link>
          <Link
            to="/case-studies"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200 text-base focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Explore Client Case Studies
          </Link>
        </div>

        {/* Proven Metrics Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8 border-t border-slate-800">
          <div className="flex items-center justify-center gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <FaRocket className="text-cyan-400 text-2xl flex-shrink-0" aria-hidden="true" />
            <div className="text-left">
              <div className="text-2xl font-bold text-white">+22%</div>
              <div className="text-xs text-slate-400">Conversion Lift (Enterprise Retail AI)</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <FaShieldAlt className="text-indigo-400 text-2xl flex-shrink-0" aria-hidden="true" />
            <div className="text-left">
              <div className="text-2xl font-bold text-white">-20%</div>
              <div className="text-xs text-slate-400">Hospital Readmissions (Healthcare AI)</div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-3.5 p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <FaLock className="text-emerald-400 text-2xl flex-shrink-0" aria-hidden="true" />
            <div className="text-left">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-xs text-slate-400">Data Sovereignty (Zero-Cloud Leakage)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
