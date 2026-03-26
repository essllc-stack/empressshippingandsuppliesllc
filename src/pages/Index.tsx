import Hero from "@/components/Hero";
import WhyWebsite from "@/components/WhyWebsite";
import Features from "@/components/Features";
import SocialMediaWarning from "@/components/SocialMediaWarning";
import PriceComparison from "@/components/PriceComparison";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import ProductGrid from "@/components/ProductGrid";
import { CartDrawer } from "@/components/CartDrawer";
import { Anchor } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Floating cart button */}
      <div className="fixed top-4 right-4 z-50">
        <CartDrawer />
      </div>
      <Hero />
      <ProductGrid />
      <WhyWebsite />
      <Features />
      <SocialMediaWarning />
      <PriceComparison />
      <Pricing />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
