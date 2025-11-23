import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      slug: "accountability-engine",
      category: "Fitness Coaching",
      title: "The Accountability Engine",
      summary: "Automating check-ins and follow-ups for high-ticket fitness coaching teams",
      metrics: [
        { label: "Time Saved", value: "70%" },
        { label: "Follow-Up Rate", value: "95%" },
        { label: "Engagement Boost", value: "30%" }
      ]
    },
    {
      slug: "lead-generation-system",
      category: "Lead Generation",
      title: "Landing Page + CRM Automation",
      summary: "Conversion-focused landing page with integrated CRM and smart email automation",
      metrics: [
        { label: "Conversion Increase", value: "40%" },
        { label: "Lead Capture", value: "24/7" },
        { label: "Setup Time", value: "15min" }
      ]
    },
    {
      slug: "voice-ai-booking",
      category: "Gym Operations",
      title: "AI Voice Receptionist",
      summary: "Natural language booking bot that handles gym inquiries and appointments",
      metrics: [
        { label: "Availability", value: "24/7" },
        { label: "Booking Auto", value: "60%" },
        { label: "Response Time", value: "5sec" }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="section-padding pt-32">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 fade-in">
            <h1 className="text-hero mb-6">
              Real Systems.<br />
              <span className="text-primary">Real Results.</span>
            </h1>
            <p className="text-subhero max-w-3xl mx-auto">
              See how we've helped service businesses eliminate chaos and scale operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link
                key={study.slug}
                to={`/case-studies/${study.slug}`}
                className="apple-card p-8 group fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="category-badge mb-4">{study.category}</span>
                
                <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h2>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {study.summary}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-2xl font-semibold text-primary mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  Read Case Study
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseStudies;
