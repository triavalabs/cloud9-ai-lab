import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import { Calendar, Zap, RefreshCw, Building2, Check, Phone, Globe, MapPin, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const primaryServices = [
  {
    icon: Phone,
    title: "AI Voice Agent",
    subtext: "Never Miss Another Call",
    description: "AI answers calls, books appointments, qualifies leads, and escalates when needed—24/7.",
    features: [
      "Missed-call capture",
      "Natural language booking",
      "After-hours answering",
      "Live escalation to your team"
    ],
    cta: "Try the Voice AI Demo",
    link: "tel:+18005551234"
  },
  {
    icon: Globe,
    title: "Smart Website + Chat",
    subtext: "Built to Convert, Not Just Look Good",
    description: "High-converting websites with AI chat, booking, and follow-up built in.",
    features: [
      "AI chat widget",
      "Embedded booking",
      "Lead capture + routing",
      "Mobile-first performance"
    ],
    cta: "View Website System",
    link: "https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing"
  },
  {
    icon: MapPin,
    title: "Google Business Profile Optimization",
    subtext: "Rank Higher. Get More Calls.",
    description: "Optimized Google Maps presence that drives inbound calls without ads.",
    features: [
      "GBP optimization",
      "Review growth systems",
      "Local SEO signals",
      "Call + message tracking"
    ],
    cta: "See GBP Growth Plan",
    link: "https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing"
  },
  {
    icon: RefreshCw,
    title: "GoHighLevel CRM & Automation",
    subtext: "Everything Connected",
    description: "Your calls, texts, bookings, reviews, and follow-ups—fully automated in one system.",
    features: [
      "CRM setup",
      "Automation workflows",
      "Pipeline visibility",
      "SMS + email follow-up"
    ],
    cta: "See How It Works",
    link: "https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing"
  }
];

const advancedServices = [
  {
    icon: Calendar,
    title: "AI Systems Audit",
    subtitle: "Free 30-Minute Strategy Call",
    description: "We map your automation opportunities, identify bottlenecks, and create a clear action plan tailored to your business.",
    features: ["30-minute discovery call", "Custom automation blueprint", "Clear ROI projections", "Zero obligation"],
    investment: "Free",
    timeline: "30 minutes",
    cta: "Book Your Audit",
    link: "https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing"
  },
  {
    icon: Zap,
    title: "PixelCloud9 OS™ Deploy",
    subtitle: "10-Day Implementation",
    description: "Full system deployment connecting voice, web, CRM, and follow-ups into one operating system.",
    features: ["Custom 3-layer OS configuration", "Full system integration", "Team training included", "30-day ROI guarantee"],
    investment: "Custom Quote",
    timeline: "10 days to deploy",
    cta: "Start Your Deploy",
    link: "https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing"
  },
  {
    icon: RefreshCw,
    title: "AI Operator Retainer",
    subtitle: "Ongoing Optimization",
    description: "Continuous system optimization, monthly upgrades, and performance tracking to keep your business running perfectly.",
    features: ["Monthly system upgrades", "Ongoing optimization", "Priority support", "Performance dashboards"],
    investment: "Monthly Retainer",
    timeline: "Month-to-month",
    cta: "Learn More",
    link: "https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing"
  },
  {
    icon: Building2,
    title: "PixelCloud9 OS™ Licensing",
    subtitle: "Coming Soon — Q1 2026",
    description: "White-label the OS for your agency or consultancy. Join the waitlist to be first in line when we launch.",
    features: ["White-label OS system", "Full implementation guide", "Agency training included", "Revenue share model"],
    investment: "Revenue Share",
    timeline: "Launching Q1 2026",
    cta: "Join Waitlist",
    link: "https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing",
    comingSoon: true
  }
];

const comparisonData = [
  { stage: "Just Starting", service: "AI Voice Agent or AI Systems Audit", bestFor: "Understanding your opportunities" },
  { stage: "Ready to Automate", service: "Voice AI + Smart Website", bestFor: "Eliminating manual work now" },
  { stage: "Have Automation", service: "AI Operator Retainer", bestFor: "Continuous optimization" },
  { stage: "Agency/Consultant", service: "OS Licensing (Coming Soon)", bestFor: "Reselling automation" }
];

const Services = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding pt-24 md:pt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12 md:mb-20 fade-in">
            <h1 className="text-hero mb-4 md:mb-6">
              Services That Grow Your Business,<br className="hidden sm:block" />
              <span className="text-primary">Not Your Workload</span>
            </h1>
            <p className="text-subhero max-w-3xl mx-auto">
              Voice AI, smart websites, Google Business optimization, and automation systems that work together—without chaos.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Services Grid */}
      <section className="pb-16 md:pb-24 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8">
            {primaryServices.map((service, index) => (
              <div
                key={service.title}
                className="apple-card p-5 md:p-8 fade-in relative overflow-hidden group hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 md:mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-3 md:mb-4 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-1 md:mb-2">{service.title}</h2>
                  <p className="text-base md:text-lg font-medium text-primary">{service.subtext}</p>
                </div>

                <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>

                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  {service.features.slice(0, 3).map((feature) => (
                    <div key={feature} className="flex items-start gap-2 md:gap-3">
                      <Check className="w-4 h-4 md:w-5 md:h-5 mt-0.5 flex-shrink-0 text-primary" />
                      <span className="text-foreground text-sm md:text-base">{feature}</span>
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="hidden md:flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                      <span className="text-foreground">{service.features[3]}</span>
                    </div>
                  )}
                </div>

                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-button-primary w-full mt-4 md:mt-6"
                >
                  {service.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced & Ongoing Services */}
      <section className="pb-16 md:pb-24 px-4 md:px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl pt-12 md:pt-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 md:mb-12">
            Advanced & Ongoing Services
          </h2>
          
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {advancedServices.map((service, index) => (
              <div
                key={service.title}
                className={`apple-card p-8 fade-in relative overflow-hidden ${service.comingSoon ? 'border-dashed border-2 border-primary/30' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.comingSoon && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    Coming Q1 2026
                  </div>
                )}

                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${service.comingSoon ? 'bg-muted' : 'bg-primary/10'}`}>
                    <service.icon className={`w-7 h-7 ${service.comingSoon ? 'text-muted-foreground' : 'text-primary'}`} />
                  </div>
                  <h2 className="text-3xl font-semibold mb-2">{service.title}</h2>
                  <p className={`text-lg font-medium ${service.comingSoon ? 'text-muted-foreground' : 'text-primary'}`}>
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${service.comingSoon ? 'text-muted-foreground' : 'text-primary'}`} />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Investment</p>
                    <p className="font-semibold text-foreground">{service.investment}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Timeline</p>
                    <p className="font-semibold text-foreground">{service.timeline}</p>
                  </div>
                </div>

                {service.comingSoon ? (
                  <button
                    onClick={() => setWaitlistOpen(true)}
                    className="apple-button-secondary w-full mt-6"
                  >
                    {service.cta}
                  </button>
                ) : (
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-button-primary w-full mt-6"
                  >
                    {service.cta}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Accordion */}
          <div className="md:hidden">
            <Accordion type="single" collapsible className="space-y-3">
              {advancedServices.map((service) => (
                <AccordionItem key={service.title} value={service.title} className={`apple-card border-0 ${service.comingSoon ? 'border-dashed border-2 border-primary/30' : ''}`}>
                  <AccordionTrigger className="px-4 py-4 hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${service.comingSoon ? 'bg-muted' : 'bg-primary/10'}`}>
                        <service.icon className={`w-5 h-5 ${service.comingSoon ? 'text-muted-foreground' : 'text-primary'}`} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.timeline}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4">
                    <p className="text-muted-foreground mb-4 text-sm">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature) => (
                        <div key={feature} className="flex items-start gap-2">
                          <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${service.comingSoon ? 'text-muted-foreground' : 'text-primary'}`} />
                          <span className="text-foreground text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-sm mb-4">
                      <span className="text-muted-foreground">Investment: <span className="font-semibold text-foreground">{service.investment}</span></span>
                    </div>
                    {service.comingSoon ? (
                      <button
                        onClick={() => setWaitlistOpen(true)}
                        className="apple-button-secondary w-full text-sm"
                      >
                        {service.cta}
                      </button>
                    ) : (
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apple-button-primary w-full text-sm"
                      >
                        {service.cta}
                      </a>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Comparison Table/Cards */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8 md:mb-12">
            Which Service Is Right For You?
          </h2>
          
          {/* Desktop Table */}
          <div className="hidden md:block apple-card p-6 md:p-8">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Stage</th>
                  <th className="text-left py-4 px-4 font-semibold">Recommended Service</th>
                  <th className="text-left py-4 px-4 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={row.stage} className={index < comparisonData.length - 1 ? "border-b border-border" : ""}>
                    <td className="py-4 px-4 text-muted-foreground">{row.stage}</td>
                    <td className="py-4 px-4 font-medium">{row.service}</td>
                    <td className="py-4 px-4 text-sm">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {comparisonData.map((row) => (
              <div key={row.stage} className="apple-card p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Stage</p>
                <p className="font-semibold mb-3">{row.stage}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Recommended</p>
                <p className="text-primary font-medium mb-3">{row.service}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Best For</p>
                <p className="text-sm">{row.bestFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="apple-card p-6 md:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 md:mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8">
              Book a free 30-minute AI Systems Audit. No pressure. Just clarity.
            </p>
            <a
              href="https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button-primary w-full sm:w-auto"
            >
              <Calendar className="w-4 h-4 md:w-5 md:h-5" />
              Get Your Free Audit
            </a>
          </div>
        </div>
      </section>

      <Footer />
      
      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </main>
  );
};

export default Services;