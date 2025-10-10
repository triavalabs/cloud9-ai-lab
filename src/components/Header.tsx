import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-center items-center">
          <div className="glass-card px-6 py-3 border-primary/30 hover:border-primary/60 transition-all">
            <img 
              src={logo} 
              alt="PixelCloud9 Logo" 
              className="h-16 md:h-20 w-auto object-contain drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
