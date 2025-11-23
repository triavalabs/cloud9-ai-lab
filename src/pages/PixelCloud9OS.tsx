import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Download, Zap, TrendingUp, ArrowRight, Database, Brain, LineChart, Shield, Clock, Users } from "lucide-react";

const PixelCloud9OS = () => {
  const layers = [
    {
      title: "Capture",
      description: "Every lead, every inquiry, every opportunity—captured automatically, instantly, perfectly.",
      modules: [
        { name: "Smart Forms", desc: "Embeddable, multi-step forms" },
        { name: "AI Voice Agent", desc: "Natural language booking" },
        { name: "CRM Sync", desc: "GoHighLevel, HubSpot integration" },
        { name: "Calendar Intelligence", desc: "Calendly automation" },
        { name: "Inbound Routing", desc: "Auto-qualify and assign" }
      ],
      metric: "100% capture rate",
      icon: Download
    },
    {
      title: "Intelligence",
      description: "Smart automation that qualifies, routes, and follows up—so nothing falls through the cracks.",
      modules: [
        { name: "Auto-Qualification", desc: "Smart lead scoring" },
        { name: "Follow-Up Sequences", desc: "Automated nurturing" },
        { name: "Data Mirroring", desc: "Google Sheets, Airtable sync" },
        { name: "Tag Automation", desc: "Dynamic segmentation" },
        { name: "Escalation Triggers", desc: "Smart notifications" }
      ],
      metric: "95% follow-up rate",
      icon: Brain
    },
    {
      title: "Growth",
      description: "Predictive insights and automated upsells that turn operations into revenue.",
      modules: [
        { name: "Performance Dashboards", desc: "Real-time metrics" },
        { name: "Predictive Analytics", desc: "Forecast opportunities" },
        { name: "Upsell Automation", desc: "Smart offer triggers" },
        { name: "Retention Sequences", desc: "Keep customers engaged" },
        { name: "Revenue Intelligence", desc: "Track what matters" }
      ],
      metric: "30% revenue increase",
      icon: TrendingUp
    }
  ];

  const benefits = [
    { icon: Clock, title: "Save 10+ Hours Weekly", desc: "Eliminate repetitive admin work" },
    { icon: Users, title: "Never Miss a Lead", desc: "100% capture rate, 24/7" },
    { icon: Zap, title: "Instant Follow-Ups", desc: "Automated nurturing sequences" },
    { icon: LineChart, title: "20-40% More Bookings", desc: "Smart routing and qualification" },
    { icon: Shield, title: "30-Day ROI Guarantee", desc: "See results or get support" },
    { icon: Database, title: "All Data Synced", desc: "No more manual copy/paste" }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="section-padding pt-32">
        <div className="container mx-auto max-w-7xl text-center">
          <div className="fade-in">
            <h1 className="text-hero mb-6">
              The Operating System That<br />
              <span className="text-primary">Runs Your Business For You</span>
            </h1>
            <p className="text-subhero max-w-3xl mx-auto mb-12">
              Three intelligent layers that capture every lead, automate every follow-up, and turn your operations into revenue.
            </p>
            <a href="https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing" target="_blank" rel="noopener noreferrer" className="apple-button-primary">
              Deploy Your OS in 10 Days
            </a>
          </div>
        </div>
      </section>

      {/* 3-Layer Architecture */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Three Intelligent Layers
            </h2>
            <p className="text-xl text-muted-foreground">
              Built to eliminate chaos and create clarity
            </p>
          </div>

          <div className="space-y-16">
            {layers.map((layer, index) => (
              <div
                key={layer.title}
                className="fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="apple-card p-8 md:p-12">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <layer.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-3xl font-semibold">Layer {index + 1}: {layer.title}</h3>
                        <span className="metric-pill">{layer.metric}</span>
                      </div>
                      <p className="text-lg text-muted-foreground">
                        {layer.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {layer.modules.map((module) => (
                      <div key={module.name} className="bg-muted/50 rounded-2xl p-4 border border-border">
                        <h4 className="font-semibold mb-1">{module.name}</h4>
                        <p className="text-sm text-muted-foreground">{module.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OS Flow Diagram */}
      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              How It All Works Together
            </h2>
            <p className="text-xl text-muted-foreground">
              From lead to revenue, fully automated
            </p>
          </div>

          <div className="apple-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Download className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lead Arrives</h3>
                <p className="text-sm text-muted-foreground">Via form, call, or email</p>
              </div>

              <ArrowRight className="w-8 h-8 text-muted-foreground hidden md:block" />

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">OS Processes</h3>
                <p className="text-sm text-muted-foreground">Qualifies, routes, follows up</p>
              </div>

              <ArrowRight className="w-8 h-8 text-muted-foreground hidden md:block" />

              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Revenue Grows</h3>
                <p className="text-sm text-muted-foreground">Bookings, upsells, retention</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">
              Built For Service Businesses
            </h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to run on autopilot
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="apple-card p-6 fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <benefit.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="apple-card p-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Ready to Deploy Your OS?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              10 days to implementation. 30 days to ROI. Zero risk.
            </p>
            <a href="https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing" target="_blank" rel="noopener noreferrer" className="apple-button-primary">
              Start Your 10-Day Deploy
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default PixelCloud9OS;
