import { Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="pb-12 md:pb-24 px-6 relative">
      {/* Background gradient glow */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="glass-card p-12 md:p-16 text-center relative overflow-hidden mb-12">
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 animate-pulse" />
          
          <div className="relative z-10">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Let's Map Out Your <span className="glow-text">Automation Opportunities</span>
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Free 30-min strategy call. No pressure — just clear next steps to save 10+ hours a week.
            </p>
            
            <p className="text-sm text-muted-foreground">
              Free consultation • No commitment required
            </p>
          </div>
        </div>

        {/* Calendar Section */}
        <section className="calendar-section">
          <iframe
            src="https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing"
            style={{ width: '100%', maxWidth: '900px', height: '900px', border: 'none', borderRadius: '16px' }}
            loading="lazy"
            title="Schedule an Appointment"
          />
        </section>
      </div>
    </section>
  );
};

export default CTA;
