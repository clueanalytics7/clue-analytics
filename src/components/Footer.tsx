import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import CueligenceLogo from "./CueligenceLogo";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="inline-block focus-visible:ring-2 focus-visible:ring-blue-500 rounded-md"
              aria-label="Cueligence Home"
            >
              <CueligenceLogo size={32} />
            </Link>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-sm">
              Empowering organizations with enterprise AI & ML architecture, custom deep learning models, and sovereign edge engineering powered by EdgeLabel and EdgeChart.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://x.com/ClueAnalytics/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Cueligence on X (formerly Twitter)"
                className="text-slate-400 hover:text-cyan-400 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 rounded p-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/ClueAnalytics/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Cueligence on LinkedIn"
                className="text-slate-400 hover:text-cyan-400 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 rounded p-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="mailto:clueanalytics7@gmail.com"
                aria-label="Email Cueligence Advisory"
                className="text-slate-400 hover:text-cyan-400 transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 rounded p-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Consulting & Services
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Cueligence
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-slate-400 hover:text-white transition-colors">
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Advisory
                </Link>
              </li>
              <li>
                <Link to="/fun" className="text-slate-400 hover:text-white transition-colors">
                  Cognitive Break & Demos
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Open Source Ecosystem Column */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-4">
              Toolchain & Ecosystem
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://github.com/clueanalytics7/edgelabel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>EdgeLabel (Annotation)</span>
                  <FaExternalLinkAlt className="text-[10px]" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/clueanalytics7/edgechart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>EdgeChart (Telemetry)</span>
                  <FaExternalLinkAlt className="text-[10px]" aria-hidden="true" />
                </a>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-white transition-colors">
                  Research & Intelligence
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy & Data Governance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Cueligence. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/contact" className="hover:text-slate-200 transition-colors">
              Security & Inquiries
            </Link>
            <Link to="/admin" className="hover:text-slate-200 transition-colors">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
