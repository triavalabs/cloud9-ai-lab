import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, TrendingUp, DollarSign, ChevronDown, Download, Brain, LineChart, ArrowRight } from "lucide-react";
import makeLogo from "@/assets/logos/make.png";
import zapierLogo from "@/assets/logos/zapier.svg";
import openaiLogo from "@/assets/logos/openai.svg";
import twilioLogo from "@/assets/logos/twilio.svg";
import calendlyLogo from "@/assets/logos/calendly.png";
import stripeLogo from "@/assets/logos/stripe.svg";
import gmailLogo from "@/assets/logos/gmail.png";

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
              Your Business,<br />
              <span className="text-primary">Running Itself.</span>
            </h1>
            <p className="text-subhero max-w-3xl mx-auto mb-8">
              The PixelCloud9 Operating System™ turns service businesses into self-operating machines.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <div className="metric-pill"><Clock className="w-4 h-4" />10+ hours saved per week</div>
              <div className="metric-pill"><TrendingUp className="w-4 h-4" />20–40% more bookings</div>
              <div className="metric-pill"><DollarSign className="w-4 h-4" />ROI in 30 days</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing" target="_blank" rel="noopener noreferrer" className="apple-button-primary">
                Get Your Free AI Audit
              </a>
              <button onClick={() => scrollToSection('os')} className="apple-button-secondary">
                See the OS in Action
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Proof Bar */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-sm text-muted-foreground mb-8">Trusted by service businesses. Built on the best tools.</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {[makeLogo, zapierLogo, openaiLogo, twilioLogo, calendlyLogo, stripeLogo, gmailLogo].map((logo, i) => (
              <img key={i} src={logo} alt="Integration" className="h-8 grayscale hover:grayscale-0 transition-all" />
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-semibold mb-12">Most Service Businesses Are<br /><span className="text-primary">Drowning in Admin Work</span></h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {["Missed leads because you didn't reply fast enough", "Manually copying data between systems", "Follow-ups that fall through the cracks", "No visibility into what's actually happening", "Hiring more people to do repetitive tasks", "Losing revenue to poor operations"].map((pain) => (
              <div key={pain} className="flex items-start gap-3 apple-card p-4">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">{pain}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OS Overview */}
      <section id="os" className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">Introducing the <span className="text-primary">PixelCloud9 OS™</span></h2>
            <p className="text-xl text-muted-foreground">Three intelligent layers that turn your business into a self-operating machine.</p>
          </div>
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {[
              { icon: Download, title: "Capture", metric: "100% capture rate", desc: "Every lead, inquiry, opportunity—captured instantly" },
              { icon: Brain, title: "Intelligence", metric: "95% follow-up rate", desc: "Auto-qualification, routing, and follow-ups" },
              { icon: LineChart, title: "Growth", metric: "30% revenue increase", desc: "Predictive analytics and automated upsells" }
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
            <a href="/pixelcloud9-os" className="apple-button-primary">Explore the Full OS <ArrowRight className="w-5 h-5" /></a>
          </div>
        </div>
      </section>

      {/* Results Snapshot */}
      <section className="section-padding">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-16">Real Systems. <span className="text-primary">Real Results.</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "The Accountability Engine", category: "Fitness Coaching", metrics: ["70% time saved", "95% follow-up", "30% engagement"] },
              { title: "Landing Page + CRM", category: "Lead Generation", metrics: ["40% conversion", "24/7 capture", "15min setup"] },
              { title: "Voice AI Receptionist", category: "Gym Operations", metrics: ["60% booking auto", "24/7 available", "5sec response"] }
            ].map((study, i) => (
              <div key={study.title} className="apple-card p-8 fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="category-badge mb-4">{study.category}</span>
                <h3 className="text-xl font-semibold mb-6">{study.title}</h3>
                <div className="space-y-2 mb-6">
                  {study.metrics.map((m) => <div key={m} className="text-sm text-muted-foreground">• {m}</div>)}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/case-studies" className="apple-button-secondary">See All Case Studies</a>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="section-padding bg-muted/30">
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
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="apple-card p-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Ready to Run Your Business <span className="text-primary">on Autopilot?</span></h2>
            <p className="text-xl text-muted-foreground mb-8">Book a free 30-minute AI Systems Audit. No pressure. Just clarity.</p>
            <a href="https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing" target="_blank" rel="noopener noreferrer" className="apple-button-primary">
              <Calendar className="w-5 h-5" />Get Your Free Audit
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
