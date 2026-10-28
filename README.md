# Cueligence — Applied AI & Sovereign Edge Intelligence Hub

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB.svg?logo=react)](https://react.dev/)
[![WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-success.svg)](https://www.w3.org/WAI/WCAG21/quickref/)

**Cueligence** is an applied artificial intelligence and machine learning consulting firm engineering enterprise AI strategy, custom deep learning model development, and high-performance sovereign edge systems.

---

## 🌐 The Cueligence Intelligent Toolchain

Cueligence acts as the consulting and solutions hub for our open-source and edge-native ML ecosystem:

```
                           ┌───────────────────────────────┐
                           │        Cueligence Hub         │
                           │  (Consulting, Solutions, SSO) │
                           └───────────────┬───────────────┘
                                           │
                   ┌───────────────────────┴───────────────────────┐
                   ▼                                               ▼
    ┌──────────────────────────────┐                ┌──────────────────────────────┐
    │          EdgeLabel           │                │          EdgeChart           │
    │  (Computer Vision & NLP      │                │  (Interactive Telemetry,     │
    │   Annotation Workspaces)     │                │   Time-Series & ML Viz)      │
    └──────────────────────────────┘                └──────────────────────────────┘
```

- **[EdgeLabel](https://github.com/clueanalytics7/edgelabel)**: High-performance, edge-native data annotation workspace for Computer Vision (bounding boxes, polygons, segmentation) and NLP datasets. Operates with offline-first memory processing to ensure strict client data sovereignty without cloud leaks.
- **[EdgeChart](https://github.com/clueanalytics7/edgechart)**: Lightweight, accessible SVG telemetry and time-series charting designed for real-time model convergence curves, IoT streaming, and operational dashboards with colorblind-safe palettes (Okabe-Ito scale).
- **Cueligence Hub**: The strategic consulting advisory that guides enterprises from feasibility assessments to production deployments powered by EdgeLabel and EdgeChart.

---

## ✨ Key Features & Technical Highlights

### 1. Clean HTML5 Architecture (No `#` Hash URLs)
- Migrated from legacy `HashRouter` to standard, clean HTML5 `BrowserRouter` (`/about`, `/blog`, `/case-studies`).
- Enhanced SEO indexing, social media link unfurling (OpenGraph / Twitter cards), and clean analytics path mapping.
- Dynamic dual-subpath support (`/cueligence` and `/clue-analytics`) alongside root domain hosting (`cueligence.ai` / `cueligence.com`).
- Server rewrites configured in `firebase.json` alongside static fallback routing in `public/404.html`.

### 2. WCAG 2.1 AA Accessibility & Professional Standards
- **Keyboard Navigation**: Global high-contrast `:focus-visible` indicators and a dedicated `Skip to main content` landmark.
- **Visual Design Tokens**: Unified design tokens (`src/styles/tokens.css`) defining Okabe-Ito colorblind-friendly data visualization palettes and high-contrast bounding box stroke values.
- **Screen Reader Support**: Strict heading hierarchy (`<h1>` through `<h3>`), semantic landmarks (`<main id="main-content">`, `<nav>`, `<article>`), and `aria-invalid` / `aria-describedby` form validation.
- **Vestibular Motion Safety**: Built-in support for `prefers-reduced-motion: reduce`.

### 3. Integrated Suite Switcher & Navigation
- Reusable dropdown component (`src/components/ProductSuiteSwitcher.tsx`) allowing users to seamlessly transition between Cueligence, EdgeLabel, and EdgeChart.
- Fully responsive navigation with a collapsible mobile drawer.
- System-wide dark mode toggle synchronized via `localStorage`.

---

## 📂 Project Structure

```
cueligence/
├── .github/
│   └── workflows/
│       ├── firebase-hosting-merge.yml       # Automated deployment on merge to main
│       ├── firebase-hosting-pull-request.yml# Preview channel deployment for PRs
│       └── deploy-gh-pages.yml              # Automated GitHub Pages pipeline
├── public/
│   ├── 404.html                            # Static SPA redirect fallback
│   ├── favicon.svg                         # Cueligence cybernetic gradient favicon
│   └── assets/                             # Logos and media
├── src/
│   ├── components/
│   │   ├── CookieConsent.tsx               # Accessible WCAG cookie banner
│   │   ├── CueligenceLogo.tsx              # Vector SVG brandmark & logotype
│   │   ├── Footer.tsx                      # Categorized links & ecosystem mapping
│   │   ├── HeroSection.tsx                 # High-contrast hero with proof metrics
│   │   ├── Layout.tsx                      # Root layout with skip-to-content
│   │   ├── Navbar.tsx                      # Responsive navigation & dark mode toggle
│   │   ├── NewsletterSignup.tsx            # Accessible research briefing form
│   │   ├── ProductsSection.tsx             # EdgeLabel & EdgeChart showcase
│   │   ├── ProductSuiteSwitcher.tsx        # Cross-product ecosystem switcher
│   │   └── ServicesSection.tsx             # Core consulting capabilities
│   ├── pages/
│   │   ├── About.tsx                       # Mission, values, and toolchain philosophy
│   │   ├── Admin.tsx                       # Secure subscriber & inquiry dashboard
│   │   ├── Blog.tsx                        # Live multi-source RSS intelligence feed
│   │   ├── Contact.tsx                     # Two-column inquiry and consultation form
│   │   ├── Fun.tsx                         # Interactive cognitive break flashcards
│   │   ├── PrivacyPolicy.tsx               # Data sovereignty & toolchain privacy
│   │   ├── UseCases.tsx                    # Industry solution blueprints & carousel
│   │   └── case-studies/                   # Quantified enterprise case studies
│   ├── styles/
│   │   ├── global.css                      # Tailwind base and focus-visible utilities
│   │   └── tokens.css                      # Shared design tokens & accessible palettes
│   ├── App.tsx                             # Home page composition
│   ├── firebase.ts                         # Firebase client configuration
│   └── main.tsx                            # Root entry with BrowserRouter & Suspense
├── firebase.json                           # Firebase Hosting SPA rewrite rules
├── package.json                            # Scripts & dependencies
├── package-lock.json                       # Deterministic dependency lock
├── tailwind.config.js                      # Tailwind design configuration
└── vite.config.ts                          # Vite config with allowedHosts & port 3000
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v20.x` or `v22.x` (LTS recommended)
- **npm**: `v10.x` or higher

### Installation
```bash
# Clone the repository
git clone https://github.com/clueanalytics7/cueligence.git
cd cueligence

# Install dependencies using deterministic lockfile
npm ci
```

### Local Development Server
```bash
npm run dev
```
The development server will boot on `http://localhost:3000`.

### Production Build & Linting
```bash
# Validate TypeScript and build bundle
npm run build

# Run ESLint validation
npm run lint
```

---

## 🔄 CI/CD & Automated Deployment

The repository includes GitHub Actions workflows configured with pinned `ubuntu-24.04` runners and automated dependency management:

1. **Deploy to Firebase Hosting**:
   - Automatically builds and deploys to the live channel on push/merge to the `main` branch via `.github/workflows/firebase-hosting-merge.yml`.
   - Generates ephemeral preview URLs for pull requests via `.github/workflows/firebase-hosting-pull-request.yml`.
2. **Deploy to GitHub Pages**:
   - Build and publish to GitHub Pages via `.github/workflows/deploy-gh-pages.yml`.

---

## 🛡️ License & Ecosystem

Part of the **Cueligence Ecosystem**:
- [Cueligence Hub](https://github.com/clueanalytics7)
- [EdgeLabel Annotation Suite](https://github.com/clueanalytics7/edgelabel)
- [EdgeChart Telemetry Engine](https://github.com/clueanalytics7/edgechart)

© 2026 Cueligence. All rights reserved.
