import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Phone, Globe, MapPin, Workflow, ChevronDown, Download, Brain, LineChart, ArrowRight, PhoneCall, ChevronUp } from "lucide-react";
import makeLogo from "@/assets/logos/make.png";
import zapierLogo from "@/assets/logos/zapier.svg";
import openaiLogo from "@/assets/logos/openai.svg";
import twilioLogo from "@/assets/logos/twilio.svg";
import calendlyLogo from "@/assets/logos/calendly.png";
import stripeLogo from "@/assets/logos/stripe.svg";
import gmailLogo from "@/assets/logos/gmail.png";
import gohighlevelLogo from "@/assets/logos/gohighlevel.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const osLayers = [
    { icon: Download, title: "Capture", metric: "Instant capture", desc: "Calls, forms, chat, and Google leads captured instantly." },
    { icon: Brain, title: "Intelligence", metric: "Auto follow-up", desc: "AI qualifies, routes, and follows up automatically." },
    { icon: LineChart, title: "Growth", metric: "Revenue increase", desc: "More bookings, better retention, higher revenue." }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="section-padding pt-24 md:pt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <div className="fade-in">
            <h1 className="text-hero mb-4 md:mb-6">
              We Answer Your Calls, Book Your Jobs, and<br className="hidden sm:block" />
              <span className="text-primary">Follow Up Automatically.</span>
            </h1>
            <p className="text-subhero max-w-3xl mx-auto mb-6 md:mb-8">
              AI Voice Agents, smart websites, Google Business optimization, and GoHighLevel systems built for local service businesses.
            </p>
            
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center mb-3">
              <a href="tel:+19045959790" className="apple-button-primary w-full sm:w-auto">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                Try Demo AI Voice
              </a>
              <a href="https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing" target="_blank" rel="noopener noreferrer" className="apple-button-secondary w-full sm:w-auto">
                Get a Free Growth Audit
              </a>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground">Live role-play demo. No sales call. No pressure.</p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Proof Bar */}
      <section className="py-10 md:py-16 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-xs md:text-sm text-muted-foreground mb-6 md:mb-8">Trusted by local service businesses. Powered by industry-leading tools.</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 lg:gap-12 opacity-60">
            {[gohighlevelLogo, twilioLogo, calendlyLogo, openaiLogo, zapierLogo, makeLogo, stripeLogo, gmailLogo].map((logo, i) => (
              <img key={i} src={logo} alt="Integration" className="h-6 md:h-8 grayscale hover:grayscale-0 transition-all" />
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12">You're Losing Money Every Day<br /><span className="text-primary">Your Phone Goes Unanswered</span></h2>
          <div className="grid md:grid-cols-2 gap-3 md:gap-6 text-left">
            {[
              "Missed calls when you're busy or after hours",
              "Leads not getting followed up",
              "Website traffic that doesn't turn into bookings",
              "Google Maps visibility dropping",
              "Too many tools that don't talk to each other",
              "Spending hours on manual scheduling and reminders"
            ].map((pain) => (
              <div key={pain} className="flex items-start gap-3 apple-card p-3 md:p-4">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground text-sm md:text-base">{pain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 md:mb-16 fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4">Services That Grow <span className="text-primary">Local Service Businesses</span></h2>
            <p className="text-base md:text-xl text-muted-foreground">Everything you need to capture leads, book jobs, and grow revenue.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { 
                icon: Phone, 
                title: "AI Voice Agent", 
                desc: "Answers calls, books appointments, qualifies leads, and escalates when needed.",
                cta: "Try Demo AI Voice",
                href: "tel:+19045959790"
              },
              { 
                icon: Globe, 
                title: "Smart Website + Chat", 
                desc: "High-converting websites with AI chat, booking, and follow-up built in.",
                cta: "View Website System",
                href: "/services"
              },
              { 
                icon: MapPin, 
                title: "Google Business Profile", 
                desc: "Rank higher on Google Maps, get more calls, and convert reviews into revenue.",
                cta: "See GBP Growth Plan",
                href: "/services"
              },
              { 
                icon: Workflow, 
                title: "GoHighLevel CRM", 
                desc: "Your calls, texts, bookings, reviews, and follow-ups all connected.",
                cta: "See How It Works",
                href: "/services"
              }
            ].map((service, i) => (
              <div key={service.title} className="apple-card p-4 md:p-6 flex flex-col fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <service.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 md:mb-6 flex-grow line-clamp-3 md:line-clamp-none">{service.desc}</p>
                <a href={service.href} className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-1">
                  {service.cta} <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OS Overview */}
      <section id="os" className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 md:mb-16 fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4">The System That Runs Your Business <span className="text-primary">in the Background</span></h2>
            <p className="text-base md:text-xl text-muted-foreground">How everything connects to work for you automatically.</p>
          </div>
          
          {/* Desktop OS Layers */}
          <div className="hidden md:flex items-start justify-between gap-8">
            {osLayers.map((layer, i) => (
              <div key={layer.title} className="os-layer flex-1 fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
                <layer.icon className="w-10 h-10 lg:w-12 lg:h-12 text-primary mb-4" />
                <h3 className="text-xl lg:text-2xl font-semibold mb-2">{layer.title}</h3>
                <div className="metric-pill mb-4">{layer.metric}</div>
                <p className="text-muted-foreground text-sm lg:text-base">{layer.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile OS Accordion */}
          <div className="md:hidden">
            <Accordion type="single" collapsible className="space-y-3">
              {osLayers.map((layer, i) => (
                <AccordionItem key={layer.title} value={layer.title} className="apple-card border-0">
                  <AccordionTrigger className="px-4 py-3 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <layer.icon className="w-8 h-8 text-primary" />
                      <div className="text-left">
                        <h3 className="text-lg font-semibold">{layer.title}</h3>
                        <div className="metric-pill mt-1">{layer.metric}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <p className="text-muted-foreground">{layer.desc}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-8 md:mt-12">
            <a href="/pixelcloud9-os" className="apple-button-secondary">See How It All Connects <ArrowRight className="w-4 h-4 md:w-5 md:h-5" /></a>
          </div>
        </div>
      </section>

      {/* Voice AI Spotlight */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="apple-card p-6 md:p-12 text-center">
            <PhoneCall className="w-12 h-12 md:w-16 md:h-16 text-primary mx-auto mb-4 md:mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-3 md:mb-4">Hear the AI Answer <span className="text-primary">a Real Call</span></h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
              Try a short role-play demo and experience how the AI handles:
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
              <div className="metric-pill">Booking appointments</div>
              <div className="metric-pill">Answering FAQs</div>
              <div className="metric-pill">Escalating to you</div>
            </div>
            <a href="tel:+19045959790" className="apple-button-primary w-full sm:w-auto">
              <Phone className="w-4 h-4 md:w-5 md:h-5" />
              Try Demo AI Voice
            </a>
            <p className="text-xs md:text-sm text-muted-foreground mt-4 md:mt-6">Short demo. No sales call.</p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="apple-card p-6 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6">Designed From Chaos. <span className="text-primary">Built For Clarity.</span></h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
              "PixelCloud9 began as my survival system in the middle of overwhelming service work—missed leads, manual follow-ups, and nonstop admin tasks. I built the OS to bring order back into my business. Today, I build it for others."
            </p>
            <p className="text-muted-foreground font-medium">— Robin Converse, Founder</p>
            <a href="/founder" className="apple-button-secondary mt-4 md:mt-6 inline-flex">Read the Full Story</a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="apple-card p-6 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6">Ready to Stop Missing Calls and <span className="text-primary">Start Booking Automatically?</span></h2>
            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8">Book a free 30-minute growth audit. No pressure. Just clarity.</p>
            <a href="https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing" target="_blank" rel="noopener noreferrer" className="apple-button-primary w-full sm:w-auto">
              <Calendar className="w-4 h-4 md:w-5 md:h-5" />Get Your Free Growth Audit
            </a>
            <p className="text-xs md:text-sm text-muted-foreground mt-4 md:mt-6">Free consultation • No commitment required • 30-day ROI guarantee</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;