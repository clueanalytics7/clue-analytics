import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import ProductSuiteSwitcher from "./ProductSuiteSwitcher";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/blog", label: "Blog" },
  { path: "/case-studies", label: "Case Studies" },
  { path: "/contact", label: "Contact" },
  { path: "/fun", label: "Fun" },
];

export default function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <nav
      className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/80 dark:border-gray-800 transition-colors"
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-2xl font-bold tracking-tight text-blue-900 dark:text-blue-300 focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg py-1 px-1 transition-colors"
              aria-label="Clue Analytics Home"
            >
              Clue Analytics
            </Link>
          </div>

          {/* Desktop Navigation Links & Suite Switcher */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <ProductSuiteSwitcher />

            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={active ? "page" : undefined}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 ${
                    active
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Dark / Light Mode Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              className="p-2 ml-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {theme === "light" ? (
                <FaMoon className="w-4 h-4 text-gray-700" aria-hidden="true" />
              ) : (
                <FaSun className="w-4 h-4 text-amber-400" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Menu & Theme Toggle Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {theme === "light" ? (
                <FaMoon className="w-4 h-4" aria-hidden="true" />
              ) : (
                <FaSun className="w-4 h-4 text-amber-400" aria-hidden="true" />
              )}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              {mobileMenuOpen ? (
                <FaTimes className="w-5 h-5" aria-hidden="true" />
              ) : (
                <FaBars className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 pt-3 pb-6 space-y-2 shadow-lg"
        >
          <ProductSuiteSwitcher isMobile onCloseMobile={() => setMobileMenuOpen(false)} />

          <div className="pt-2 space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    active
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
