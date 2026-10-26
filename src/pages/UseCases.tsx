import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaShoppingCart, FaHeartbeat, FaLeaf, FaGraduationCap, FaBriefcase, FaShieldAlt, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const useCases = [
  {
    sector: "Retail & E-Commerce",
    headline: "Behavioral Recommendation Engines",
    description: "Accelerate conversions through hyper-personalized AI-driven product matching based on session clickstreams and cross-category purchase history.",
    icon: <FaShoppingCart className="text-blue-500" />,
    tag: "Recommendation Systems",
  },
  {
    sector: "Healthcare & Life Sciences",
    headline: "Predictive Risk & Early Diagnostics",
    description: "Identify high-risk patient trajectories early using audited machine learning classifiers trained on longitudinal clinical telemetry and diagnostic indicators.",
    icon: <FaHeartbeat className="text-rose-500" />,
    tag: "Risk Modeling",
  },
  {
    sector: "Precision Agriculture",
    headline: "Crop Yield & Climate Forecasting",
    description: "Optimize planting cycles, water management, and harvest timing using multispectral satellite data, drone imagery, and predictive weather modeling.",
    icon: <FaLeaf className="text-emerald-500" />,
    tag: "Computer Vision & IoT",
  },
  {
    sector: "Higher Education",
    headline: "Student Engagement & Retention",
    description: "Analyze learning management system attendance and assessment trends to flag students at academic risk and deploy timely human interventions.",
    icon: <FaGraduationCap className="text-indigo-500" />,
    tag: "Predictive Analytics",
  },
  {
    sector: "Enterprise Operations",
    headline: "Workflow Automation & Telemetry",
    description: "Eliminate manual bottlenecks in reconciliation, inventory forecasting, and document extraction using custom ML and real-time telemetry dashboards.",
    icon: <FaBriefcase className="text-amber-500" />,
    tag: "Process Optimization",
  },
  {
    sector: "Fintech & Banking",
    headline: "Sub-Second Fraud Detection",
    description: "Detect anomalous transaction flows and credit risks in real-time with ultra-low false positive rates using low-latency edge inference.",
    icon: <FaShieldAlt className="text-cyan-500" />,
    tag: "Anomaly Detection",
  },
];

const caseStudies = [
  {
    title: "Retail Chain Personalization",
    sector: "Retail",
    story: "Collaborated with a regional retailer to deploy an edge-aware recommendation engine. Personalized user journeys drove a 22% increase in repeat purchases within 90 days.",
    metric: "+22% Repeat Purchase Lift",
    link: "/case-studies/retail-personalization",
  },
  {
    title: "Healthcare Predictive Risk",
    sector: "Healthcare",
    story: "Implemented validated risk classification models that proactively identified 15% more high-risk cardiac patients, drastically improving early clinical intervention.",
    metric: "15% Earlier Risk Detection",
    link: "/case-studies/healthcare-predictive-risk",
  },
  {
    title: "Smart Agriculture Forecasting",
    sector: "AgriTech",
    story: "Leveraged multispectral drone imagery annotated via EdgeLabel to boost harvest yield forecasts by 30% across 50,000 acres.",
    metric: "30% Yield Forecast Precision",
    link: "/case-studies/smart-agriculture-forecasting",
  },
  {
    title: "Educational Engagement AI",
    sector: "EdTech",
    story: "Built predictive retention classifiers analyzing course telemetry to intervene with at-risk students, lifting semester retention by 18%.",
    metric: "18% Retention Gain",
    link: "/case-studies/educational-engagement-ai",
  },
  {
    title: "Restaurant Efficiency AI",
    sector: "Hospitality",
    story: "Applied time-series forecasting to kitchen prep queues and staffing, reducing perishable food waste by 25% while lifting fulfillment speed.",
    metric: "25% Food Waste Reduction",
    link: "/case-studies/restaurant-efficiency-ai",
  },
];

const UseCases: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-b from-blue-900 via-indigo-950 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(45%_35%_at_50%_30%,rgba(59,130,246,0.2),transparent_100%)] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
            Proven Industry Impact
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Applied AI Across Mission-Critical Domains
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            From automated edge annotation with EdgeLabel to live telemetry charting with EdgeChart, explore how our engineering delivers audited, measurable business transformations.
          </p>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Industry Solution Blueprints
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Engineered architectures tailored to your sector's regulatory and operational realities.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-xs hover:shadow-lg hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300">
                    {item.sector}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2.5">
                  {item.headline}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                <span className="font-medium">{item.tag}</span>
                <Link to="/contact" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center gap-1">
                  Inquire <FaArrowRight className="text-[9px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Carousel Section */}
      <section className="bg-gray-100/70 dark:bg-gray-900/50 py-20 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Verified Case Studies
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mt-2">
              Quantifiable Results Delivered to Clients
            </h2>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className="pb-14"
          >
            {caseStudies.map((caseStudy, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                        {caseStudy.sector}
                      </span>
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded">
                        {caseStudy.metric}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {caseStudy.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {caseStudy.story}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                    <Link
                      to={caseStudy.link}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <span>Read Deep-Dive Analysis</span>
                      <FaArrowRight className="text-xs" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 shadow-sm transition focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span>Schedule a Strategy Session</span>
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UseCases;
