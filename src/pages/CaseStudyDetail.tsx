import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";

const CaseStudyDetail = () => {
  const { slug } = useParams();

  const caseStudies: Record<string, any> = {
    "accountability-engine": {
      category: "Fitness Coaching",
      title: "The Accountability Engine",
      subtitle: "Automating Check-Ins for High-Performance Coaching Teams",
      challenge: [
        "High-ticket fitness coaches manually updating spreadsheets and tagging clients",
        "Missed check-ins going unnoticed for days",
        "No clear pipeline visibility for head coach",
        "17+ hours per week wasted on admin tasks"
      ],
      solution: "PixelCloud9 engineered a custom Kahunas ↔ GoHighLevel bridge—a lightweight automation system built on Google Apps Script, Zapier, and LeadConnector webhooks. The bridge connects Kahunas exports and real-time triggers directly to GoHighLevel, automatically tagging, syncing, and escalating client status.",
      layers: ["Capture", "Intelligence"],
      results: [
        { label: "Admin Time", before: "17 hrs/week", after: "<5 hrs/week", improvement: "70% saved" },
        { label: "Missed Check-Ins", before: "~40%", after: ">95%", improvement: "+55% gain" },
        { label: "Completion Rate", before: "60%", after: "78%", improvement: "+30%" },
        { label: "Accountability", before: "Inconsistent", after: "Automated", improvement: "+90%" }
      ],
      quote: "We went from chaos to clarity. Every client's check-in status is tracked automatically—no more chasing data. PixelCloud9 built the system that finally holds everyone accountable.",
      client: "Steven Durance, Fitness Coach & Founder",
      timeline: [
        { phase: "Discovery", duration: "2 days", desc: "Mapped Kahunas workflows and GHL setup" },
        { phase: "Blueprint", duration: "2 days", desc: "Designed bridge architecture" },
        { phase: "Build", duration: "4 days", desc: "Built Apps Script + Zapier automation" },
        { phase: "Training", duration: "1 day", desc: "Coached team on new system" },
        { phase: "Results", duration: "30 days", desc: "70% time savings achieved" }
      ],
      impact: "This bridge didn't just fix a workflow—it created a replicable automation model for any online coach using GoHighLevel. By connecting tools coaches already use, PixelCloud9 eliminated tech friction and proved what intelligent automation can do for performance-based businesses.",
      techStack: ["Google Sheets", "Apps Script", "GoHighLevel", "Zapier", "Custom Webhooks"]
    }
  };

  const study = caseStudies[slug || ""];

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <article className="section-padding pt-32">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 fade-in">
            <span className="category-badge mb-4">{study.category}</span>
            <h1 className="text-5xl md:text-6xl font-semibold mb-4">{study.title}</h1>
            <p className="text-2xl text-muted-foreground">{study.subtitle}</p>
          </div>

          {/* Challenge */}
          <section className="mb-16 fade-in-delay-1">
            <h2 className="text-3xl font-semibold mb-6">🧩 The Challenge</h2>
            <div className="apple-card p-8">
              <ul className="space-y-3">
                {study.challenge.map((point: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-lg text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Solution */}
          <section className="mb-16 fade-in-delay-2">
            <h2 className="text-3xl font-semibold mb-6">🚀 The Solution</h2>
            <div className="apple-card p-8">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {study.solution}
              </p>
              <div className="flex flex-wrap gap-2">
                {study.layers.map((layer: string) => (
                  <span key={layer} className="metric-pill">Layer: {layer}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="mb-16 fade-in-delay-3">
            <h2 className="text-3xl font-semibold mb-6">📈 The Results</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {study.results.map((result: any) => (
                <div key={result.label} className="apple-card p-6">
                  <h3 className="text-sm text-muted-foreground mb-2">{result.label}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-semibold text-primary">{result.after}</span>
                    <span className="text-sm text-muted-foreground line-through">{result.before}</span>
                  </div>
                  <p className="text-sm font-medium">{result.improvement}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Quote */}
          <section className="mb-16">
            <div className="apple-card p-8 bg-muted/30">
              <blockquote className="text-xl italic text-foreground mb-4">
                "{study.quote}"
              </blockquote>
              <cite className="text-muted-foreground not-italic">— {study.client}</cite>
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">⏱ Timeline</h2>
            <div className="space-y-4">
              {study.timeline.map((phase: any, index: number) => (
                <div key={phase.phase} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">{index + 1}</span>
                  </div>
                  <div className="flex-1 apple-card p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{phase.phase}</h3>
                      <span className="text-sm text-muted-foreground">{phase.duration}</span>
                    </div>
                    <p className="text-muted-foreground">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Impact */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">🧠 The Impact</h2>
            <div className="apple-card p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {study.impact}
              </p>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6">💎 Tech Stack</h2>
            <div className="flex flex-wrap gap-3">
              {study.techStack.map((tech: string) => (
                <span key={tech} className="metric-pill">{tech}</span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section>
            <div className="apple-card p-12 text-center">
              <h2 className="text-3xl font-semibold mb-4">Ready for Similar Results?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Book a free 30-minute strategy call to map out your automation opportunities.
              </p>
              <a
                href="https://brand.pixelcloud9.com/widget/bookings/bookwithpixelcloud9marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-button-primary"
              >
                <Calendar className="w-5 h-5" />
                Book Your Free Audit
              </a>
            </div>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
};

export default CaseStudyDetail;
