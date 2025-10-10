import { Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Background gradient glow */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden">
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 animate-pulse" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Build on <span className="glow-text">Cloud9</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Let's map your first automation and reclaim your time. Book a free audit and discover what's possible.
            </p>
            
            <button className="btn-hero group text-lg">
              <Calendar className="inline-block mr-2 w-5 h-5" />
              Book a Free Audit
            </button>
            
            <p className="text-sm text-muted-foreground mt-8">
              No commitment required • 30-minute session
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
