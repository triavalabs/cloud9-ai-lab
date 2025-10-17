const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © Pixel Cloud9 2025
          </p>
          
          <div className="flex gap-6">
            <a 
              href="#tos" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <a 
              href="#privacy" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            Built with ❤️ by Pixel Cloud9.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
