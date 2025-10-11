const nodes = [
  { name: "PixelCloud9", position: "center", color: "primary" },
  { name: "Always Open AI", position: "top-left", color: "secondary" },
  { name: "Triava Labs", position: "top-right", color: "accent" },
  { name: "WakeUp Alliance", position: "bottom", color: "primary" },
];

const Ecosystem = () => {
  return (
    <section className="pt-24 pb-0 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Everything <span className="glow-text">Connects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            PixelCloud9 is the base layer behind other brands — Always Open AI, Triava Labs, WakeUp Alliance — built once, deployed everywhere.
          </p>
        </div>
        
        <div className="relative h-96 flex items-center justify-center">
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'hsl(258, 80%, 57%)', stopOpacity: 0.6 }} />
                <stop offset="100%" style={{ stopColor: 'hsl(168, 100%, 60%)', stopOpacity: 0.6 }} />
              </linearGradient>
            </defs>
            {/* Lines from center to each node */}
            <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="url(#lineGradient)" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="url(#lineGradient)" strokeWidth="2" />
            <line x1="50%" y1="50%" x2="50%" y2="80%" stroke="url(#lineGradient)" strokeWidth="2" />
          </svg>
          
          {/* Center node */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="glass-card px-8 py-4 border-primary/60 shadow-[var(--shadow-glow)] animate-glow-pulse">
              <span className="text-xl font-heading font-bold glow-text">PixelCloud9</span>
            </div>
          </div>
          
          {/* Top-left node */}
          <div className="absolute top-[5%] left-[5%] md:top-[15%] md:left-[15%] z-20 animate-float">
            <div className="glass-card px-6 py-3 border-secondary/40 hover:border-secondary/80 transition-all hover:scale-110">
              <span className="text-sm font-heading font-semibold text-secondary">Always Open AI</span>
            </div>
          </div>
          
          {/* Top-right node */}
          <div className="absolute top-[15%] right-[15%] z-10 animate-float" style={{ animationDelay: '2s' }}>
            <div className="glass-card px-6 py-3 border-accent/40 hover:border-accent/80 transition-all hover:scale-110">
              <span className="text-sm font-heading font-semibold text-accent">Triava Labs</span>
            </div>
          </div>
          
          {/* Bottom node */}
          <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-10 animate-float" style={{ animationDelay: '4s' }}>
            <div className="glass-card px-6 py-3 border-primary/40 hover:border-primary/80 transition-all hover:scale-110">
              <span className="text-sm font-heading font-semibold text-primary">WakeUp Alliance</span>
            </div>
          </div>
          
          {/* Ambient particles */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/40 blur-sm animate-particle"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
