import { useEffect, useRef, useState } from "react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`py-24 px-6 transition-opacity duration-1000 ${
        isVisible ? "opacity-100 animate-fade-in" : "opacity-0"
      }`}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              About <span className="glow-text">Pixel Cloud9</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Pixel Cloud9 is an automation and creative systems studio helping
              service-based businesses save time and scale through AI, web design,
              and lead systems. We build digital tools that run your business while
              you focus on what you do best. Our mission is to make growth effortless
              through automation, strategy, and authentic design.
            </p>
          </div>

          {/* Right: Gradient Animation */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 animate-glow-pulse" />
            <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
            <div className="absolute inset-0 glass-card flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-secondary opacity-30 blur-3xl animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
