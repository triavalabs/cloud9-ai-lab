import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Linkedin, Calendar } from "lucide-react";

const Founder = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section-padding pt-32">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Photo */}
            <div className="fade-in">
              <div className="apple-card p-2 overflow-hidden">
                <div className="aspect-[3/4] bg-muted rounded-2xl flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-5xl font-semibold text-primary">RC</span>
                    </div>
                    <p className="text-muted-foreground">Professional photo coming soon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="fade-in-delay-1">
              <h1 className="text-5xl md:text-6xl font-semibold mb-6">
                Designed From Chaos.<br />
                <span className="text-primary">Built For Clarity.</span>
              </h1>

              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8">
                <p>
                  PixelCloud9 began as my survival system in the middle of overwhelming service work—missed leads, manual follow-ups, and nonstop admin tasks.
                </p>
                
                <p>
                  I built the OS to bring order back into my business. What started as a personal solution became a methodology—a three-layer architecture that captures every opportunity, automates every follow-up, and turns operations into revenue.
                </p>

                <p>
                  Today, I build it for others. Service businesses drowning in chaos. Coaches overwhelmed by manual work. Teams losing revenue to poor operations.
                </p>

                <p>
                  The PixelCloud9 OS™ isn't about adding more tools. It's about creating a self-operating infrastructure—one that works while you sleep, scales without hiring, and delivers ROI in 30 days.
                </p>
              </div>

              {/* Mission Statement */}
              <div className="apple-card p-8 mb-8 bg-muted/30">
                <h2 className="text-2xl font-semibold mb-4">Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  "To build the operating system for service businesses who refuse to stay small—eliminating chaos, automating growth, and proving that intelligent systems beat manual work every time."
                </p>
              </div>

              {/* Connect */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="mailto:robin@pixelcloud9.com"
                    className="apple-button-secondary"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                  <a
                    href="https://www.linkedin.com/in/robin-converse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-button-secondary"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a
                    href="https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="apple-button-primary"
                  >
                    <Calendar className="w-5 h-5" />
                    Book a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Founder;
