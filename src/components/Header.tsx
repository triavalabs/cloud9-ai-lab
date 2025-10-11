// src/components/Header.tsx
import React from "react";
import logo from "@/assets/logo.svg";
const Header: React.FC = () => {
  return <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-start pt-4 md:pt-6 py-[76px]">
      <div className="h-24 md:h-28 lg:h-32 xl:h-36 flex items-center justify-center">
        <img src={logo} alt="PixelCloud9 Logo" className="block h-auto w-[140px] sm:w-[160px] md:w-[180px] lg:w-[200px] xl:w-[220px]" loading="eager" decoding="async" />
      </div>
    </header>;
};
export default Header;