import { AlertTriangle, Instagram, Facebook, Globe } from "lucide-react";

const limitations = [
  "You don't own your social media page — platforms can shut it down anytime",
  "Social algorithms limit who sees your posts (only 5–10% of followers)",
  "You can't rank on Google with just a Facebook page",
  "No custom branding or professional email address",
  "Limited ways to capture leads and convert visitors to paying customers",
  "Clients can't easily find your services, hours, or contact info",
];

const SocialMediaWarning = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary font-body font-semibold tracking-widest uppercase text-sm">
                Reality Check
              </span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Social Media Won't Cut It Alone
              </h2>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                Having a Facebook or Instagram page is great for engagement — but it's not a substitute for a professional website. Here's why:
              </p>
              <ul className="space-y-3">
                {limitations.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="font-body text-foreground text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
                Social Media vs. Website
              </h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <Instagram className="w-6 h-6 text-muted-foreground" />
                    <Facebook className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="h-3 rounded-full bg-muted overflow-hidden">
                      <div className="h-full rounded-full bg-muted-foreground/40 w-[35%]" />
                    </div>
                    <span className="text-muted-foreground font-body text-xs mt-1 block">
                      Limited reach & control
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <Globe className="w-6 h-6 text-secondary" />
                    <span className="w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="h-3 rounded-full bg-muted overflow-hidden">
                      <div className="h-full rounded-full gradient-gold w-[90%]" />
                    </div>
                    <span className="text-foreground font-body text-xs mt-1 block font-semibold">
                      Full control, SEO, credibility & conversions
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <a
                  href="#pricing"
                  className="gradient-gold text-accent-foreground font-body font-semibold px-6 py-3 rounded-lg inline-block hover:opacity-90 transition-opacity"
                >
                  Get Your Website Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaWarning;
