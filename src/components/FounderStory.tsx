import founderGlow from "@/assets/founder-glow.jpg";

const FounderStory = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
            <img 
              src={founderGlow} 
              alt="Founder Vision" 
              className="relative rounded-2xl w-full h-auto shadow-2xl"
            />
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              From <span className="glow-text">Builder</span> to Automator
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              PixelCloud9 started as one person's obsession with simplifying complexity. 
              I create automations that feel human — systems you actually enjoy using.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every workflow, every funnel, every AI assistant is built with the belief that 
              technology should elevate your business, not complicate it.
            </p>
            
            <div className="pt-4">
              <div className="inline-block px-6 py-2 rounded-full border border-primary/30 bg-primary/5">
                <span className="text-sm font-semibold text-primary">Why I Build</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;
