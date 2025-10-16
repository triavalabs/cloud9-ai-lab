import gohighlevelLogo from "@/assets/logos/gohighlevel.png";
import zapierLogo from "@/assets/logos/zapier.svg";
import makeLogo from "@/assets/logos/make.png";
import openaiLogo from "@/assets/logos/openai.svg";
import twilioLogo from "@/assets/logos/twilio.svg";
import gmailLogo from "@/assets/logos/gmail.png";
import stripeLogo from "@/assets/logos/stripe.svg";
import calendlyLogo from "@/assets/logos/calendly.png";

const platforms = [{
  name: "GoHighLevel",
  logo: gohighlevelLogo,
  color: "from-green-500 to-emerald-400"
}, {
  name: "Zapier",
  logo: zapierLogo,
  color: "from-orange-500 to-amber-400"
}, {
  name: "Make",
  logo: makeLogo,
  color: "from-purple-500 to-pink-400"
}, {
  name: "OpenAI",
  logo: openaiLogo,
  color: "from-primary to-secondary"
}, {
  name: "Twilio",
  logo: twilioLogo,
  color: "from-red-500 to-pink-500"
}, {
  name: "Gmail",
  logo: gmailLogo,
  color: "from-blue-500 to-cyan-400"
}, {
  name: "Stripe",
  logo: stripeLogo,
  color: "from-indigo-500 to-purple-500"
}, {
  name: "Calendly",
  logo: calendlyLogo,
  color: "from-blue-600 to-blue-400"
}];

const Platforms = () => {
  return (
    <section className="pb-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            We Play Nice With <span className="glow-text">Your Stack</span>
          </h2>
        </div>

        <div className="relative overflow-hidden mb-12">
          <div className="flex gap-8 md:gap-12 animate-scroll-mobile md:animate-scroll hover:pause [&>*]:shrink-0">
            {/* First set of logos */}
            {platforms.map((platform) => (
              <div 
                key={platform.name} 
                className="group relative transition-transform duration-300 hover:scale-110"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`} />
                
                {/* Logo Container */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center relative z-10 p-3">
                  <img 
                    src={platform.logo} 
                    alt={`${platform.name} logo`} 
                    className={`w-full h-full object-contain ${platform.name === 'OpenAI' ? 'dark:brightness-0 dark:invert' : ''}`} 
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {platforms.map((platform) => (
              <div 
                key={`${platform.name}-duplicate`} 
                className="group relative transition-transform duration-300 hover:scale-110"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`} />
                
                {/* Logo Container */}
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center relative z-10 p-3">
                  <img 
                    src={platform.logo} 
                    alt={`${platform.name} logo`} 
                    className={`w-full h-full object-contain ${platform.name === 'OpenAI' ? 'dark:brightness-0 dark:invert' : ''}`} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            If it saves you time or helps you close faster—we automate it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Platforms;
