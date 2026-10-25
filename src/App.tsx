import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProductsSection from "./components/ProductsSection";
import NewsletterSignup from "./components/NewsletterSignup";
import Analytics from "./components/Analytics";

export default function App() {
  return (
    <>
      <Analytics />
      <div className="flex flex-col space-y-0">
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <NewsletterSignup />
      </div>
    </>
  );
}
