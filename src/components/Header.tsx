import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.svg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryNavItems: Array<{ label: string; path: string; isExternal?: boolean; icon?: typeof Phone }> = [
    { label: "Voice AI Demo", path: "tel:+18005551234", isExternal: true, icon: Phone },
    { label: "Services", path: "/services" },
  ];

  const secondaryNavItems = [
    { label: "The OS", path: "/pixelcloud9-os" },
    { label: "Founder", path: "/founder" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="PixelCloud9" className="h-6 md:h-8" />
            <span className="font-heading font-semibold text-lg md:text-xl text-foreground">PixelCloud9</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {primaryNavItems.map((item) => (
              item.isExternal ? (
                <a
                  key={item.path}
                  href={item.path}
                  className="text-foreground hover:text-primary transition-colors font-medium flex items-center gap-2"
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </Link>
              )
            ))}
            {secondaryNavItems.map((item) => (
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
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-1">
              {/* Primary Items */}
              {primaryNavItems.map((item) => (
                item.isExternal ? (
                  <a
                    key={item.path}
                    href={item.path}
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-muted rounded-xl transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.icon && <item.icon className="w-5 h-5 text-primary" />}
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="px-4 py-3 text-foreground hover:bg-muted rounded-xl transition-colors font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}

              {/* Divider */}
              <div className="my-2 border-t border-border" />

              {/* Secondary Items */}
              {secondaryNavItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-4 py-3 text-muted-foreground hover:bg-muted rounded-xl transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* CTA */}
              <a
                href="https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-button-primary mt-3 mx-4"
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