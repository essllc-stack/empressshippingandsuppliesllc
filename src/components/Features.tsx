import { Globe, Smartphone, Zap, Shield, Search, Palette } from "lucide-react";

const features = [
  { icon: Globe, title: "Custom Domain", desc: "Your business name, your domain — fully configured and ready to go." },
  { icon: Smartphone, title: "Mobile Responsive", desc: "Looks great on every device, from phones to desktops." },
  { icon: Zap, title: "Fast & Reliable", desc: "Lightning-fast load times with reliable hosting included." },
  { icon: Shield, title: "SSL Secured", desc: "Every site comes with a free SSL certificate for security." },
  { icon: Search, title: "SEO Optimized", desc: "Built with search engines in mind so customers can find you." },
  { icon: Palette, title: "Professional Design", desc: "Clean, modern design tailored to your brand identity." },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-body font-semibold tracking-widest uppercase text-sm">
            What You Get
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
            Everything Your Business Needs
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-card rounded-xl p-8 border border-border hover:border-secondary/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
