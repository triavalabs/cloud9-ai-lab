import { Workflow, Zap, Cog, Brain, MessageSquare, Mail, CreditCard, Calendar } from "lucide-react";

const platforms = [
  { name: "GoHighLevel", icon: Workflow, color: "from-green-500 to-emerald-400" },
  { name: "Zapier", icon: Zap, color: "from-orange-500 to-amber-400" },
  { name: "Make", icon: Cog, color: "from-purple-500 to-pink-400" },
  { name: "OpenAI", icon: Brain, color: "from-primary to-secondary" },
  { name: "Twilio", icon: MessageSquare, color: "from-red-500 to-pink-500" },
  { name: "Gmail", icon: Mail, color: "from-blue-500 to-cyan-400" },
  { name: "Stripe", icon: CreditCard, color: "from-indigo-500 to-purple-500" },
  { name: "Calendly", icon: Calendar, color: "from-blue-600 to-blue-400" }
];

const Platforms = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold glow-text">
            Platforms We Build On
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            We integrate directly into the tools you already use — or set up new systems from scratch.
          </p>
          <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto mt-4">
            Whether your business runs on GoHighLevel, Zapier, Make, or AI tools like OpenAI, we connect everything into one simple workflow that actually works. You don't need to rebuild — we optimize what you already have.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {platforms.map((platform, index) => {
            const Icon = platform.icon;
            return (
              <div
                key={platform.name}
                className="glass-card p-6 flex flex-col items-center justify-center gap-4 group relative overflow-hidden transition-transform duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Icon Container */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center relative z-10 shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                {/* Platform Name */}
                <h3 className="text-base md:text-lg font-semibold text-foreground relative z-10">
                  {platform.name}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Tagline */}
        <div className="text-center">
          <p className="text-base md:text-lg font-semibold glow-text">
            If it saves you time or helps you close faster — we can automate it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
