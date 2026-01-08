import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Phone, Globe, MapPin, Workflow, ChevronDown, Download, Brain, LineChart, ArrowRight, PhoneCall } from "lucide-react";
import makeLogo from "@/assets/logos/make.png";
import zapierLogo from "@/assets/logos/zapier.svg";
import openaiLogo from "@/assets/logos/openai.svg";
import twilioLogo from "@/assets/logos/twilio.svg";
import calendlyLogo from "@/assets/logos/calendly.png";
import stripeLogo from "@/assets/logos/stripe.svg";
import gmailLogo from "@/assets/logos/gmail.png";
import gohighlevelLogo from "@/assets/logos/gohighlevel.png";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="section-padding pt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <div className="fade-in">
            <h1 className="text-hero mb-6">
              We Answer Your Calls, Book Your Jobs, and<br />
              <span className="text-primary">Follow Up Automatically.</span>
            </h1>
            <p className="text-subhero max-w-3xl mx-auto mb-8">
              AI Voice Agents, smart websites, Google Business optimization, and GoHighLevel systems built for local service businesses.
            </p>
            
            {/* Voice AI Demo Callout */}
            <div className="mb-8">
              <a 
                href="tel:+18005551234" 
                className="inline-flex items-center gap-2 px-5 py-3 bg-accent/10 text-accent rounded-full font-medium hover:bg-accent/20 transition-colors"
              >
                <PhoneCall className="w-5 h-5" />
                Hear the AI Answer a Call
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <a href="tel:+18005551234" className="apple-button-primary">
                <Phone className="w-5 h-5" />
                Try the Voice AI Demo
              </a>
              <a href="https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing" target="_blank" rel="noopener noreferrer" className="apple-button-secondary">
                Get a Free Growth Audit
              </a>
            </div>
            <p className="text-sm text-muted-foreground">Live role-play demo. No sales call. No pressure.</p>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Proof Bar */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-sm text-muted-foreground mb-8">Trusted by local service businesses. Powered by industry-leading tools.</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {[gohighlevelLogo, twilioLogo, calendlyLogo, openaiLogo, zapierLogo, makeLogo, stripeLogo, gmailLogo].map((logo, i) => (
              <img key={i} src={logo} alt="Integration" className="h-8 grayscale hover:grayscale-0 transition-all" />
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12">You're Losing Money Every Day<br /><span className="text-primary">Your Phone Goes Unanswered</span></h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Missed calls when you're busy or after hours",
              "Leads not getting followed up",
              "Website traffic that doesn't turn into bookings",
              "Google Maps visibility dropping",
              "Too many tools that don't talk to each other",
              "Spending hours on manual scheduling and reminders"
            ].map((pain) => (
              <div key={pain} className="flex items-start gap-3 apple-card p-4">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">{pain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">Services That Grow <span className="text-primary">Local Service Businesses</span></h2>
            <p className="text-xl text-muted-foreground">Everything you need to capture leads, book jobs, and grow revenue.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: Phone, 
                title: "AI Voice Agent", 
                desc: "Answers calls, books appointments, qualifies leads, and escalates when needed. Never miss another opportunity.",
                cta: "Try the Voice AI Demo",
                href: "tel:+18005551234"
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
                title: "Google Business Profile Optimization", 
                desc: "Rank higher on Google Maps, get more calls, and convert reviews into revenue.",
                cta: "See GBP Growth Plan",
                href: "/services"
              },
              { 
                icon: Workflow, 
                title: "GoHighLevel CRM & Automation", 
                desc: "Your calls, texts, bookings, reviews, and follow-ups all connected in one system.",
                cta: "See How the System Works",
                href: "/services"
              }
            ].map((service, i) => (
              <div key={service.title} className="apple-card p-6 flex flex-col fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 flex-grow">{service.desc}</p>
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
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">The System That Runs Your Business <span className="text-primary">in the Background</span></h2>
            <p className="text-xl text-muted-foreground">How everything connects to work for you automatically.</p>
          </div>
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {[
              { icon: Download, title: "Capture", metric: "Instant capture", desc: "Calls, forms, chat, and Google leads captured instantly." },
              { icon: Brain, title: "Intelligence", metric: "Auto follow-up", desc: "AI qualifies, routes, and follows up automatically." },
              { icon: LineChart, title: "Growth", metric: "Revenue increase", desc: "More bookings, better retention, higher revenue." }
            ].map((layer, i) => (
              <div key={layer.title} className="os-layer flex-1 fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
                <layer.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-2">{layer.title}</h3>
                <div className="metric-pill mb-4">{layer.metric}</div>
                <p className="text-muted-foreground">{layer.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/pixelcloud9-os" className="apple-button-secondary">See How It All Connects <ArrowRight className="w-5 h-5" /></a>
          </div>
        </div>
      </section>

      {/* Voice AI Spotlight */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="apple-card p-12 text-center">
            <PhoneCall className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Hear the AI Answer <span className="text-primary">a Real Call</span></h2>
            <p className="text-lg text-muted-foreground mb-6">
              Try a short role-play demo and experience how the AI handles:
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="metric-pill">Booking appointments</div>
              <div className="metric-pill">Answering FAQs</div>
              <div className="metric-pill">Escalating to you when needed</div>
            </div>
            <a href="tel:+18005551234" className="apple-button-primary">
              <Phone className="w-5 h-5" />
              Call the AI Assistant
            </a>
            <p className="text-sm text-muted-foreground mt-6">No commitment. No spam. Just a quick demo.</p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="apple-card p-12 text-center">
            <h2 className="text-3xl font-semibold mb-6">Designed From Chaos. <span className="text-primary">Built For Clarity.</span></h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              "PixelCloud9 began as my survival system in the middle of overwhelming service work—missed leads, manual follow-ups, and nonstop admin tasks. I built the OS to bring order back into my business. Today, I build it for others."
            </p>
            <p className="text-muted-foreground font-medium">— Robin Converse, Founder</p>
            <a href="/founder" className="apple-button-secondary mt-6 inline-flex">Read the Full Story</a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="apple-card p-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Ready to Stop Missing Calls and <span className="text-primary">Start Booking Automatically?</span></h2>
            <p className="text-xl text-muted-foreground mb-8">Book a free 30-minute growth audit. No pressure. Just clarity.</p>
            <a href="https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing" target="_blank" rel="noopener noreferrer" className="apple-button-primary">
              <Calendar className="w-5 h-5" />Get Your Free Growth Audit
            </a>
            <p className="text-sm text-muted-foreground mt-6">Free consultation • No commitment required • 30-day ROI guarantee</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Index;