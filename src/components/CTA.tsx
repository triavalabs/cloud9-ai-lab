import { Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-12 md:py-24 px-6 relative">
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
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Let's Map Out Your <span className="glow-text">Automation Opportunities</span>
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              No sales pitch, just a 30-minute strategy call to find your automation quick wins.
            </p>
            
            <button className="btn-hero group text-base md:text-lg">
              <Calendar className="inline-block mr-2 w-5 h-5" />
              Book Your Strategy Call
            </button>
            
            <p className="text-sm text-muted-foreground mt-8">
              Free consultation • No commitment required
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
