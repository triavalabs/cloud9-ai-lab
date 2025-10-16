import { TrendingUp, Clock, Users } from "lucide-react";

const Results = () => {
  return (
    <section className="pb-24 px-6 relative overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ background: 'var(--gradient-glow)' }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Automation That <span className="glow-text">Pays for Itself</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Clients see 30–60% more booked appointments and faster follow-ups within 30 days.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card p-8 text-center group hover:border-secondary/40 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-8 h-8 text-secondary" />
            </div>
            <div className="text-4xl md:text-5xl font-heading font-bold mb-2 glow-text">
              30-60%
            </div>
            <p className="text-muted-foreground">More Booked Appointments</p>
          </div>
          
          <div className="glass-card p-8 text-center group hover:border-primary/40 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <div className="text-4xl md:text-5xl font-heading font-bold mb-2 glow-text">
              24/7
            </div>
            <p className="text-muted-foreground">Automated Follow-Ups</p>
          </div>
          
          <div className="glass-card p-8 text-center group hover:border-accent/40 transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-accent" />
            </div>
            <div className="text-4xl md:text-5xl font-heading font-bold mb-2 glow-text">
              30 Days
            </div>
            <p className="text-muted-foreground">To See Results</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
