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
          <div className="flex gap-6">
            <a href="#tos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/30 text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            © Pixel Cloud9 2025
          </p>
          <p className="text-xs text-muted-foreground">
            Built with ❤️ by Pixel Cloud9.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
