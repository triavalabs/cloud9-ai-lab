// src/components/Header.tsx
import React from "react";
import logo from "@/assets/logo.svg";
const Header: React.FC = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-start pt-4 md:pt-6 py-[105px]">
      <div className="h-24 md:h-28 lg:h-32 xl:h-36 flex items-center justify-center">
        <a href="/" className="inline-flex items-center justify-center rounded-2xl
                     ring-1 ring-primary/30 hover:ring-primary/70 transition-all duration-300
                     px-6 py-3 backdrop-blur supports-[backdrop-filter]:bg-white/5
                     hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,255,0.4)]" aria-label="PixelCloud9 Home">
          <img src={logo} alt="PixelCloud9 Logo" className="block h-auto w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px]" loading="eager" decoding="async" />
        </a>
      </div>
    </header>;
};
export default Header;