import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.svg";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "AI Voice Agent", to: "/services" },
        { label: "Smart Website + Chat", to: "/services" },
        { label: "Google Business Profile Optimization", to: "/services" },
        { label: "GoHighLevel CRM & Automation", to: "/services" },
        { label: "AI Systems Audit", to: "/services" },
      ]
    },
    {
      title: "Company",
      links: [
        { label: "The PixelCloud9 OS", to: "/pixelcloud9-os" },
        { label: "Founder Story", to: "/founder" },
        { label: "Contact", href: "https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing" },
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Blog (Coming Soon)", disabled: true },
        { label: "Documentation (Coming Soon)", disabled: true },
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
      ]
    }
  ];

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 md:px-6 py-10 md:py-16">
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.disabled ? (
                      <span className="text-muted-foreground">{link.label}</span>
                    ) : link.to ? (
                      <Link to={link.to} className="text-muted-foreground hover:text-primary transition-colors">
                        {link.label}
                      </Link>
                    ) : (
                      <a 
                        href={link.href}
                        target={link.href?.startsWith('http') ? "_blank" : undefined}
                        rel={link.href?.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile Collapsible */}
        <div className="md:hidden space-y-2 mb-8">
          {footerSections.map((section) => (
            <Collapsible key={section.title}>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors">
                <span className="font-semibold text-foreground">{section.title}</span>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 py-2">
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      {link.disabled ? (
                        <span className="text-muted-foreground text-sm">{link.label}</span>
                      ) : link.to ? (
                        <Link to={link.to} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                          {link.label}
                        </Link>
                      ) : (
                        <a 
                          href={link.href}
                          target={link.href?.startsWith('http') ? "_blank" : undefined}
                          rel={link.href?.startsWith('http') ? "noopener noreferrer" : undefined}
                          className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-border">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="PixelCloud9" className="h-5 md:h-6" />
              <span className="text-muted-foreground text-xs md:text-sm">
                © 2025 PixelCloud9
              </span>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4 text-xs md:text-sm text-muted-foreground">
              <span className="hidden lg:inline">Built on GoHighLevel, Twilio, Calendly, and proven automation systems.</span>
              <a href="mailto:robin@pixelcloud9.com" className="hover:text-primary transition-colors">
                robin@pixelcloud9.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;