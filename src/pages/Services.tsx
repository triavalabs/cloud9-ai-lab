import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WaitlistModal from "@/components/WaitlistModal";
import { Calendar, Zap, RefreshCw, Building2, Check, Phone, Globe, MapPin } from "lucide-react";

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
    timeline: "10 days to deploy, 30 days to ROI",
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

const Services = () => {
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 fade-in">
            <h1 className="text-hero mb-6">
              Services That Grow Your Business,<br />
              <span className="text-primary">Not Your Workload</span>
            </h1>
            <p className="text-subhero max-w-3xl mx-auto">
              Voice AI, smart websites, Google Business optimization, and automation systems that work together—without chaos.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Services Grid */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {primaryServices.map((service, index) => (
              <div
                key={service.title}
                className="apple-card p-8 fade-in relative overflow-hidden group hover:border-primary/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-3xl font-semibold mb-2">{service.title}</h2>
                  <p className="text-lg font-medium text-primary">{service.subtext}</p>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-button-primary w-full mt-6"
                >
                  {service.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced & Ongoing Services */}
      <section className="pb-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl pt-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
            Advanced & Ongoing Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {advancedServices.map((service, index) => (
              <div
                key={service.title}
                className={`apple-card p-8 fade-in relative overflow-hidden ${service.comingSoon ? 'border-dashed border-2 border-primary/30' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Coming Soon Badge */}
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
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
            Which Service Is Right For You?
          </h2>
          
          <div className="apple-card p-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Stage</th>
                  <th className="text-left py-4 px-4 font-semibold">Recommended Service</th>
                  <th className="text-left py-4 px-4 font-semibold">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-muted-foreground">Just Starting</td>
                  <td className="py-4 px-4 font-medium">AI Voice Agent or AI Systems Audit</td>
                  <td className="py-4 px-4 text-sm">Understanding your opportunities</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-muted-foreground">Ready to Automate</td>
                  <td className="py-4 px-4 font-medium">Voice AI + Smart Website</td>
                  <td className="py-4 px-4 text-sm">Eliminating manual work now</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 text-muted-foreground">Have Automation</td>
                  <td className="py-4 px-4 font-medium">AI Operator Retainer</td>
                  <td className="py-4 px-4 text-sm">Continuous optimization</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-muted-foreground">Agency/Consultant (Coming Soon)</td>
                  <td className="py-4 px-4 font-medium">OS Licensing</td>
                  <td className="py-4 px-4 text-sm">Reselling automation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="apple-card p-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Not Sure Where to Start?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Book a free 30-minute AI Systems Audit. No pressure. Just clarity.
            </p>
            <a
              href="https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-button-primary"
            >
              <Calendar className="w-5 h-5" />
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
