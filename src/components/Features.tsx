import { Brain, Workflow, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Smart Funnels",
    description: "Funnels + mini-sites that convert visitors into customers with precision and style.",
  },
  {
    icon: MessageSquare,
    title: "Automations",
    description: "Workflows that follow up, remind, and nurture automatically — no manual work required.",
  },
  {
    icon: Brain,
    title: "AI Assistants",
    description: "Chatbots and voice bots that manage your leads 24/7, so you never miss an opportunity.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            What I <span className="glow-text">Build</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Intelligent systems designed to scale your business while maintaining that human touch.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-8 group hover:border-primary/40 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s`, opacity: 0 }}
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
              </div>
              
              <h3 className="text-2xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
