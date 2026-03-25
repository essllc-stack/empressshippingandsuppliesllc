import { TrendingUp, Users, Globe, ShieldCheck } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "77%", label: "of consumers are more likely to buy from a business with a professional website" },
  { icon: Users, value: "97%", label: "of people search online to find a local business" },
  { icon: Globe, value: "70%", label: "of small businesses with a website grow faster than those without" },
  { icon: ShieldCheck, value: "84%", label: "of consumers say a website makes a business more credible" },
];

const WhyWebsite = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-body font-semibold tracking-widest uppercase text-sm">
            The Facts
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
            Your Business Thrives With an Online Presence
          </h2>
          <p className="text-muted-foreground font-body mt-4 text-lg leading-relaxed">
            In today's digital world, potential clients are searching for services like yours online every single day. Without a professional website, you're invisible to them.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="bg-card rounded-xl p-6 border border-border text-center hover:border-secondary/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="font-heading text-4xl font-bold text-gradient-gold">{stat.value}</span>
              <p className="text-muted-foreground font-body mt-2 text-sm leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;
