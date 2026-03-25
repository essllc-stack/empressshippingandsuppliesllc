import Hero from "@/components/Hero";
import WhyWebsite from "@/components/WhyWebsite";
import Features from "@/components/Features";
import SocialMediaWarning from "@/components/SocialMediaWarning";
import PriceComparison from "@/components/PriceComparison";
import Pricing from "@/components/Pricing";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
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
