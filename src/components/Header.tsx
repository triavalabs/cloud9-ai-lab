import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.svg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Services", path: "/services" },
    { label: "The OS", path: "/pixelcloud9-os" },
    { label: "Case Studies", path: "/case-studies" },
    { label: "Founder", path: "/founder" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="PixelCloud9" className="h-8" />
            <span className="font-heading font-semibold text-xl text-foreground">PixelCloud9</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button-primary"
            >
              Get Free Audit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-foreground hover:text-primary transition-colors font-medium text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-button-primary mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Free Audit
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
