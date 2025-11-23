import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Systems Audit
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  OS Deploy
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  AI Operator
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/pixelcloud9-os" className="text-muted-foreground hover:text-primary transition-colors">
                  The PixelCloud9 OS
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-muted-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link to="/founder" className="text-muted-foreground hover:text-primary transition-colors">
                  Founder Story
                </Link>
              </li>
              <li>
                <a 
                  href="https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-muted-foreground">Blog (Coming Soon)</span>
              </li>
              <li>
                <span className="text-muted-foreground">Documentation (Coming Soon)</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="PixelCloud9" className="h-6" />
            <span className="text-muted-foreground text-sm">
              © 2025 PixelCloud9 • Built with ❤️ by PixelCloud9
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="mailto:robin@pixelcloud9.com" className="hover:text-primary transition-colors">
              robin@pixelcloud9.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
