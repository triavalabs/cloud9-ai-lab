import { ArrowRight } from "lucide-react";
import Particles from "./Particles";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28 lg:pt-32 xl:pt-36">
      {/* Background gradient glow */}
      <div className="absolute inset-0 opacity-40" style={{
      background: 'var(--gradient-hero)'
    }} />
      
      {/* Hero image */}
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{
      backgroundImage: `url(${heroBg})`
    }} />
      
      {/* Animated particles */}
      <Particles />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20 animate-fade-in">
          <span className="text-sm md:text-base font-medium text-primary">💡 Save 10+ hours per week in month one!</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          AI Systems That <span className="glow-text">Save You Time</span> and Win You Clients
        </h1>
        
        <p style={{
        animationDelay: '0.2s',
        opacity: 0
      }} className="text-lg mb-6 max-w-2xl mx-auto animate-fade-in text-zinc-50 md:text-xl">
          Built for service-based businesses who want to grow without adding more chaos.
        </p>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in" style={{
        animationDelay: '0.3s',
        opacity: 0
      }}>We automate booking, follow-ups, and customer messages —  
so you can focus on what you do best.</p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-slow" style={{
        animationDelay: '0.4s',
        opacity: 0
      }}>
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
    </section>;
};
export default Hero;