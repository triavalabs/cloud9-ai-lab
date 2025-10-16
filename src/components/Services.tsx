import { Globe, Bot, Workflow, ArrowRight, Check } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Websites & Funnels That Book Clients",
    outcome: "Turn visitors into scheduled calls with a booking-first site.",
    features: [
      "Booking page + reminders",
      "No-show recovery",
      "Built for speed + SEO basics"
    ],
    proof: "Typical +20–40% more bookings"
  },
  {
    icon: Bot,
    title: "AI Assistants That Handle Support",
    outcome: "Instant answers and lead capture.",
    features: [
      "24/7 chat + knowledge base",
      "Lead capture + qualification",
      "Routes complex issues to your team"
    ],
    proof: "40–60% fewer tickets"
  },
  {
    icon: Workflow,
    title: "Systems That Run Your Business",
    outcome: "Follow-ups, reactivations, and reviews—on autopilot.",
    features: [
      "Pipelines + nurture sequences",
      "Reactivation + rebook loops",
      "Review engine with drip logic"
    ],
    proof: "First wins in about 30 days"
  },
];

const Services = () => {
  return (
    <section className="pb-24 px-6" id="services">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            What We Build <span className="glow-text">(So You Don't Have To)</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple pieces that work together to book more clients and cut busywork.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 group hover:border-primary/40 transition-all duration-500 animate-fade-in relative"
              style={{ animationDelay: `${index * 0.2}s`, opacity: 0 }}
            >
              {/* Arrow connector for desktop */}
              {index < services.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 z-20">
                  <ArrowRight className="w-8 h-8 text-primary/40" />
                </div>
              )}
              
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
              </div>
              
              <h3 className="text-xl md:text-2xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                {service.outcome}
              </p>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm font-semibold text-primary">{service.proof}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Flow description */}
        <div className="mt-12 text-center">
          <div className="glass-card p-6 max-w-3xl mx-auto">
            <p className="text-sm md:text-base text-muted-foreground">
              Everything shares the same data—leads move from <span className="font-semibold text-foreground">site → assistant → automations</span> without slipping through the cracks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
