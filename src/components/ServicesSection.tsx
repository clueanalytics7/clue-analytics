import { FaBrain, FaTools, FaChalkboardTeacher } from "react-icons/fa";

const services = [
  {
    icon: <FaBrain className="text-blue-600 dark:text-blue-400 text-3xl" aria-hidden="true" />,
    title: "AI Strategy Consulting",
    description: "Align AI initiatives with your enterprise goals using proven frameworks, feasibility studies, and deep domain knowledge.",
  },
  {
    icon: <FaTools className="text-blue-600 dark:text-blue-400 text-3xl" aria-hidden="true" />,
    title: "ML Development & Deployment",
    description: "Custom-built models, end-to-end MLOps pipelines, and scalable edge/cloud deployments tailored to your specific data.",
  },
  {
    icon: <FaChalkboardTeacher className="text-blue-600 dark:text-blue-400 text-3xl" aria-hidden="true" />,
    title: "Training & Technical Workshops",
    description: "Upskill internal engineering and product teams with hands-on AI/ML curriculum, model evaluation, and governance.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            What We Do
          </p>
          <h2 id="services-heading" className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Comprehensive AI & Machine Learning Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            From initial strategy formulation to edge hardware deployment, we accelerate your AI maturity.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-950/80 flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
