import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Ready-to-Use Website",
    price: "$499",
    period: "one-time",
    description: "A fully built website delivered and ready to launch for your business.",
    features: [
      "Up to 5 custom pages",
      "Mobile responsive design",
      "Contact form integration",
      "Social media links",
      "SSL certificate included",
      "SEO-optimized structure",
      "1 round of revisions",
      "Delivered in 7–10 business days",
    ],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Website + Maintenance",
    price: "$499",
    period: "one-time",
    addon: "+ $99/mo",
    addonLabel: "maintenance",
    description: "Everything in the website package, plus ongoing monthly support and updates.",
    features: [
      "Everything in Ready-to-Use",
      "Monthly content updates",
      "Security & software updates",
      "Uptime monitoring",
      "Performance optimization",
      "Priority email support",
      "Monthly analytics report",
      "Bug fixes & troubleshooting",
    ],
    highlighted: true,
    cta: "Get the Full Package",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 gradient-navy">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-body font-semibold tracking-widest uppercase text-sm">
            Pricing
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-primary-foreground/70 font-body mt-4 text-lg">
            No hidden fees. Choose what works for your business.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 md:p-10 relative ${
                plan.highlighted
                  ? "bg-card border-2 border-secondary shadow-2xl shadow-secondary/10 scale-[1.02]"
                  : "bg-card/10 border border-primary-foreground/20"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 gradient-gold px-4 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-4 h-4 text-accent-foreground" />
                  <span className="text-accent-foreground font-body font-semibold text-sm">
                    Recommended
                  </span>
                </div>
              )}
              <h3
                className={`font-heading text-2xl font-bold mb-2 ${
                  plan.highlighted ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`font-body mb-6 ${
                  plan.highlighted ? "text-muted-foreground" : "text-primary-foreground/60"
                }`}
              >
                {plan.description}
              </p>
              <div className="mb-8">
                <span
                  className={`font-heading text-5xl font-bold ${
                    plan.highlighted ? "text-foreground" : "text-primary-foreground"
                  }`}
                >
                  {plan.price}
                </span>
                <span
                  className={`font-body ml-2 ${
                    plan.highlighted ? "text-muted-foreground" : "text-primary-foreground/60"
                  }`}
                >
                  {plan.period}
                </span>
                {plan.addon && (
                  <div className="mt-1">
                    <span className="text-gradient-gold font-heading text-2xl font-bold">
                      {plan.addon}
                    </span>
                    <span
                      className={`font-body ml-2 ${
                        plan.highlighted ? "text-muted-foreground" : "text-primary-foreground/60"
                      }`}
                    >
                      {plan.addonLabel}
                    </span>
                  </div>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        plan.highlighted ? "text-secondary" : "text-secondary"
                      }`}
                    />
                    <span
                      className={`font-body ${
                        plan.highlighted ? "text-foreground" : "text-primary-foreground/80"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-lg font-body font-semibold text-lg transition-opacity hover:opacity-90 ${
                  plan.highlighted
                    ? "gradient-gold text-accent-foreground"
                    : "border border-secondary text-secondary hover:bg-secondary/10"
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
