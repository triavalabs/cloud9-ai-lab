// src/components/Header.tsx
import React from "react";
import logo from "@/assets/logo.svg";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-16 flex items-center justify-center">
          {/* Logo container (glass + subtle border + hover) */}
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-2xl
                       ring-1 ring-primary/30 hover:ring-primary/70 transition-all duration-300
                       px-6 py-2 backdrop-blur supports-[backdrop-filter]:bg-white/5
                       hover:bg-white/10 hover:shadow-[var(--shadow-glow)] hover:scale-105"
            aria-label="PixelCloud9 Home"
          >
            {/* Logo */}
            <img
              src={logo}
              alt="PixelCloud9 Logo"
              className="block h-auto w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px] transition-all duration-300"
              loading="eager"
              decoding="async"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
