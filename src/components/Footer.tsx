const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading font-bold mb-2">
              <span className="glow-text">PixelCloud9</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Automation for the AI Age
            </p>
          </div>
          
          {/* Links */}
          <div className="flex gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Services
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            Powered by PixelCloud9 — Automation for the AI Age
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} PixelCloud9. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
