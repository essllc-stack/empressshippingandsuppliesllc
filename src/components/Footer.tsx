import { Anchor } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Anchor className="w-6 h-6 text-secondary" />
            <span className="text-primary-foreground font-heading font-bold text-lg">
              Empress Shipping & Supplies LLC
            </span>
          </div>
          <p className="text-primary-foreground/50 font-body text-sm">
            © {new Date().getFullYear()} Empress Shipping & Supplies LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
