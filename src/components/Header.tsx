// src/components/Header.tsx
import React from "react";
// If your SVG is in /public/assets, use the absolute path:
const logo = "/assets/logo.svg";
// If it's in src/assets, instead do: import logo from "../assets/logo.svg";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="h-16 flex items-center">
          {/* Logo container (glass + subtle border + hover) */}
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-2xl
                       ring-1 ring-primary/30 hover:ring-primary/60 transition-all
                       px-4 py-1 backdrop-blur supports-[backdrop-filter]:bg-white/5"
            aria-label="PixelCloud9 Home"
          >
            {/* Logo */}
            <img
              src={logo}
              alt="PixelCloud9 Logo"
              className="block h-auto w-[120px] sm:w-[140px] lg:w-[164px]"
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
