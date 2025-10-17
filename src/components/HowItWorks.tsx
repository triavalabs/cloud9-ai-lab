import { Clock, Cog, Rocket } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Clock,
      number: "01",
      title: "Book Your Audit",
      description: "Schedule a free 15-minute audit so we can understand your business systems and goals.",
      cta: true,
    },
    {
      icon: Cog,
      number: "02",
      title: "We Build Your System",
      description: "We create your automated workflows, website, and communication tools to reduce chaos and missed leads.",
      cta: false,
    },
    {
      icon: Rocket,
      number: "03",
      title: "You Grow on Autopilot",
      description: "Once your system is live, you'll save time, close more deals, and focus on what you do best.",
      cta: false,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-[#F3EFFF] dark:bg-[#1a1625]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to automate your business and save hours every week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 text-center hover:scale-105 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon with gradient background */}
                <div className="relative mb-6 inline-block">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#00FFC8] flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#00FFC8] flex items-center justify-center text-white font-bold text-sm">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl md:text-2xl font-heading font-bold mb-4">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                {step.cta && (
                  <a
                    href="https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#00FFC8] text-white font-semibold text-sm hover:shadow-[0_0_30px_hsl(258_80%_57%_/_0.5)] hover:scale-105 transition-all duration-300"
                  >
                    Book Now
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
