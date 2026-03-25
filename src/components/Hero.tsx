import { Anchor, ArrowRight, Ship } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 gradient-navy opacity-85" />

      {/* Animated ships */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-[12%] animate-sail-right opacity-20">
          <Ship className="w-10 h-10 text-secondary" />
        </div>
        <div className="absolute top-[28%] animate-sail-left opacity-15" style={{ animationDelay: "-8s" }}>
          <Ship className="w-8 h-8 text-secondary" />
        </div>
        <div className="absolute top-[65%] animate-sail-right opacity-10" style={{ animationDelay: "-15s" }}>
          <Ship className="w-12 h-12 text-secondary" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <Anchor className="w-8 h-8 text-secondary" />
            <span className="text-secondary font-body font-semibold tracking-widest uppercase text-sm">
              Empress Shipping & Supplies LLC
            </span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Your Business
            <span className="block text-gradient-gold">Deserves a Website</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 font-body max-w-xl mb-10 leading-relaxed">
            Get a professionally built, ready-to-use website for your business — plus optional monthly maintenance so you never have to worry about updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#pricing"
              className="gradient-gold text-accent-foreground font-body font-semibold px-8 py-4 rounded-lg text-lg inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              View Pricing <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#features"
              className="border border-primary-foreground/30 text-primary-foreground font-body font-semibold px-8 py-4 rounded-lg text-lg hover:bg-primary-foreground/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
