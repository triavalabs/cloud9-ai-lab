import { Search, FileText, Wrench, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discovery Call",
    description: "We learn your workflow and bottlenecks.",
  },
  {
    icon: FileText,
    title: "Blueprint",
    description: "A simple plan tailored to your business.",
  },
  {
    icon: Wrench,
    title: "System Build",
    description: "We connect and automate everything.",
  },
  {
    icon: Rocket,
    title: "Training",
    description: "You'll always have a real person to reach out to — we don't leave you talking to a bot.",
  },
];

const Process = () => {
  return (
    <section className="pb-24 px-6 relative">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ background: 'var(--gradient-glow)' }}
      />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            The Build <span className="glow-text">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From first conversation to full deployment — a proven path to automation success.
          </p>
        </div>
        
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative flex items-start gap-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s`, opacity: 0 }}
              >
                {/* Step number & icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[var(--shadow-glow)] animate-glow-pulse">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="glass-card flex-1 p-6 md:p-8 group hover:border-primary/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-semibold text-secondary">Step {index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
