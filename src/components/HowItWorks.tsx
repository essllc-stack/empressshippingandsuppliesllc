import { Phone, FileText, Rocket } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "1",
    title: "Schedule a Free Consultation",
    description: "Book a free call to discuss your business needs, goals, and vision for your website.",
  },
  {
    icon: FileText,
    number: "2",
    title: "Your Website Is Ready",
    description: "We already have a website set and ready to go for your business to use — no long waits.",
  },
  {
    icon: Rocket,
    number: "3",
    title: "You're All Good to Go",
    description: "Sit back and relax — we'll send you your website flash fast so you can start growing your business.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 gradient-navy">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-body font-semibold tracking-widest uppercase text-sm">
            Simple Process
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-3">
            What Happens Next?
          </h2>
          <p className="text-primary-foreground/70 font-body mt-4 text-lg">
            Getting your website is easy — just three simple steps.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="text-center relative">
              <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <span className="font-heading text-6xl font-bold text-primary-foreground/10 absolute -top-4 left-1/2 -translate-x-1/2 select-none pointer-events-none">
                {step.number}
              </span>
              <h3 className="font-heading text-xl font-bold text-primary-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-primary-foreground/70 font-body leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
