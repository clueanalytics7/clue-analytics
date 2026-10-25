import React, { useState, useRef, useEffect } from "react";
import { FaLayerGroup, FaTags, FaChartLine, FaExternalLinkAlt, FaChevronDown, FaCheck } from "react-icons/fa";

interface SuiteProduct {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  badgeColor: string;
  icon: React.ReactNode;
  url: string;
  isExternal: boolean;
  isActive?: boolean;
}

const products: SuiteProduct[] = [
  {
    id: "clue-analytics",
    name: "Clue Analytics",
    tagline: "AI & ML Strategy, Architecture & Consulting",
    badge: "Hub",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300",
    icon: <FaLayerGroup className="text-blue-600 dark:text-blue-400 text-lg" />,
    url: "/",
    isExternal: false,
    isActive: true,
  },
  {
    id: "edgelabel",
    name: "EdgeLabel",
    tagline: "High-speed edge annotation & computer vision dataset labeling",
    badge: "Annotation",
    badgeColor: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300",
    icon: <FaTags className="text-emerald-600 dark:text-emerald-400 text-lg" />,
    url: "https://github.com/clueanalytics7/edgelabel",
    isExternal: true,
  },
  {
    id: "edgechart",
    name: "EdgeChart",
    tagline: "Interactive telemetry & real-time time-series data visualization",
    badge: "Visualization",
    badgeColor: "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300",
    icon: <FaChartLine className="text-amber-600 dark:text-amber-400 text-lg" />,
    url: "https://github.com/clueanalytics7/edgechart",
    isExternal: true,
  },
];

export const ProductSuiteSwitcher: React.FC<{ isMobile?: boolean; onCloseMobile?: () => void }> = ({
  isMobile = false,
  onCloseMobile,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (isMobile) {
    return (
      <div className="py-2 border-t border-b border-gray-200 dark:border-gray-800 my-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 px-3 mb-2">
          Clue Analytics Suite
        </p>
        <div className="space-y-1">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.url}
              target={product.isExternal ? "_blank" : undefined}
              rel={product.isExternal ? "noopener noreferrer" : undefined}
              onClick={() => onCloseMobile?.()}
              className={`flex items-start gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                product.isActive
                  ? "bg-blue-50 dark:bg-blue-950/50 text-blue-900 dark:text-blue-200 font-medium"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <div className="mt-0.5 flex-shrink-0">{product.icon}</div>
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900 dark:text-white">{product.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                  {product.isExternal && (
                    <FaExternalLinkAlt className="text-gray-400 text-[10px] ml-auto flex-shrink-0" />
                  )}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate mt-0.5">{product.tagline}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Switch between Clue Analytics products"
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition focus-visible:ring-2 focus-visible:ring-blue-500"
      >
        <FaLayerGroup className="text-blue-600 dark:text-blue-400 text-sm" aria-hidden="true" />
        <span>Products</span>
        <FaChevronDown
          className={`text-xs text-gray-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-orientation="vertical"
          className="absolute left-0 mt-2 w-80 rounded-xl bg-white dark:bg-gray-900 shadow-xl border border-gray-200 dark:border-gray-800 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <div className="px-3 py-2 border-b border-gray-100 dark:border-gray-800">
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Clue Analytics Ecosystem
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
              Integrated tooling for intelligent data workflows
            </p>
          </div>

          <div className="p-1.5 space-y-1">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.url}
                target={product.isExternal ? "_blank" : undefined}
                rel={product.isExternal ? "noopener noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                role="menuitem"
                className={`group flex items-start gap-3 p-2.5 rounded-lg text-sm transition-colors ${
                  product.isActive
                    ? "bg-blue-50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-100"
                    : "hover:bg-gray-50 dark:hover:bg-gray-800/80 text-gray-700 dark:text-gray-300"
                }`}
              >
                <div className="mt-0.5 p-2 rounded-md bg-white dark:bg-gray-800 shadow-xs border border-gray-200/60 dark:border-gray-700 flex-shrink-0">
                  {product.icon}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {product.name}
                    </span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${product.badgeColor}`}>
                      {product.badge}
                    </span>
                    {product.isActive ? (
                      <FaCheck className="text-blue-600 dark:text-blue-400 text-xs ml-auto" title="Current app" />
                    ) : (
                      <FaExternalLinkAlt className="text-gray-400 text-[10px] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 mt-0.5 leading-relaxed">
                    {product.tagline}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="px-3 py-2 border-t border-gray-100 dark:border-gray-800 mt-1 bg-gray-50/70 dark:bg-gray-800/40 rounded-b-xl flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>Open Source Suite</span>
            <a
              href="https://github.com/clueanalytics7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1 font-medium"
            >
              GitHub Org <FaExternalLinkAlt className="text-[9px]" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSuiteSwitcher;
