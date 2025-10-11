import { ArrowRight } from "lucide-react";
import Particles from "./Particles";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28 lg:pt-32 xl:pt-36">
      {/* Background gradient glow */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Hero image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Animated particles */}
      <Particles />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-fade-in">
          AI Systems That Save You Time and Win You Clients
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
          We help you automate booking, follow-ups, and customer messages — so you can focus on what you do best.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-slow" style={{ animationDelay: '0.6s', opacity: 0 }}>
          <button className="btn-hero group">
            Start with an Audit
            <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
          <button className="btn-outline-hero">
            See How It Works
          </button>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
