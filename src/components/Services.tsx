import { Globe, Bot, Workflow } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Websites That Book Clients",
    description: "Stop losing leads who never schedule. We build high-converting sites that automatically follow up and confirm bookings.",
  },
  {
    icon: Bot,
    title: "AI Assistants That Handle Support",
    description: "Your 24/7 digital team — answering FAQs, capturing leads, and nurturing prospects.",
  },
  {
    icon: Workflow,
    title: "Systems That Run Your Business",
    description: "Automations that follow up, remind, and rebook without manual effort.",
  },
];

const Services = () => {
  return (
    <section className="py-24 px-6" id="services">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            What We <span className="glow-text">Build</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Outcome-driven solutions that save you time and grow your business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="glass-card p-8 group hover:border-primary/40 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s`, opacity: 0 }}
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
              </div>
              
              <h3 className="text-2xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
