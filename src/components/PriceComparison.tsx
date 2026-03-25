import { Check, X } from "lucide-react";

const comparisons = [
  { feature: "Custom website (5 pages)", empress: "$499 one-time", agency: "$3,000 – $10,000+" },
  { feature: "Delivery time", empress: "7–10 business days", agency: "4–12 weeks" },
  { feature: "Monthly maintenance", empress: "$49/mo", agency: "$200 – $500/mo" },
  { feature: "Mobile responsive", empress: true, agency: true },
  { feature: "SEO optimized", empress: true, agency: "Often extra cost" },
  { feature: "SSL certificate", empress: true, agency: "Sometimes extra" },
  { feature: "Revisions included", empress: true, agency: "Limited / billable" },
  { feature: "Hidden fees", empress: false, agency: "Common" },
];

const PriceComparison = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-body font-semibold tracking-widest uppercase text-sm">
            Compare & Save
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-3">
            Affordable & Fast — Without the Agency Price Tag
          </h2>
          <p className="text-muted-foreground font-body mt-4 text-lg">
            Typical web agencies charge thousands. We deliver the same quality for a fraction of the cost.
          </p>
        </div>
        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border">
          {/* Header */}
          <div className="grid grid-cols-3 gradient-navy text-primary-foreground">
            <div className="p-4 md:p-5 font-body font-semibold">Feature</div>
            <div className="p-4 md:p-5 font-body font-semibold text-center gradient-gold text-accent-foreground">
              Empress Shipping & Supplies LLC
            </div>
            <div className="p-4 md:p-5 font-body font-semibold text-center">Typical Agency</div>
          </div>
          {/* Rows */}
          {comparisons.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-card" : "bg-muted/30"}`}
            >
              <div className="p-4 md:p-5 font-body text-foreground text-sm md:text-base flex items-center">
                {row.feature}
              </div>
              <div className="p-4 md:p-5 flex items-center justify-center">
                {typeof row.empress === "boolean" ? (
                  row.empress ? (
                    <Check className="w-5 h-5 text-secondary" />
                  ) : (
                    <X className="w-5 h-5 text-destructive" />
                  )
                ) : (
                  <span className="font-body font-semibold text-foreground text-sm md:text-base text-center">
                    {row.empress}
                  </span>
                )}
              </div>
              <div className="p-4 md:p-5 flex items-center justify-center">
                {typeof row.agency === "boolean" ? (
                  row.agency ? (
                    <Check className="w-5 h-5 text-secondary" />
                  ) : (
                    <X className="w-5 h-5 text-destructive" />
                  )
                ) : (
                  <span className="font-body text-muted-foreground text-sm md:text-base text-center">
                    {row.agency}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceComparison;
