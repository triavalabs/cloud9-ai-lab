import React, { useState } from "react";
import logo from "@/assets/logo-gradient.svg";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="container mx-auto max-w-6xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Hamburger - Left */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo - Left on desktop, Center on mobile */}
          <div className="absolute left-1/2 -translate-x-1/2 md:relative md:left-auto md:translate-x-0 flex items-center">
            <img 
              src={logo} 
              alt="PixelCloud9 Logo" 
              className="h-auto w-[100px] md:w-[140px]" 
              loading="eager" 
              decoding="async" 
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium px-4 py-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-accent/50 transition-all duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium px-4 py-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-accent/50 transition-all duration-300"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium px-4 py-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-accent/50 transition-all duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Theme Toggle */}
          <div>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border/30 pt-4 space-y-3 animate-fade-in">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 px-4 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 px-4 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 px-4 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;