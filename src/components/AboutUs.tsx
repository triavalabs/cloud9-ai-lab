import { useEffect, useRef, useState } from "react";
import aiAutomationNodes from "@/assets/ai-automation-nodes.png";

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
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed tracking-wide font-light">
              <span className="font-medium text-foreground">Pixel Cloud9</span> is an automation and creative systems studio helping
              service-based businesses <span className="text-foreground font-medium">save time and scale</span> through AI, web design,
              and lead systems. We build <span className="text-foreground font-medium">digital tools that run your business</span> while
              you focus on what you do best. Our mission is to make <span className="glow-text font-semibold">growth effortless</span>{" "}
              through automation, strategy, and authentic design.
            </p>
          </div>

          {/* Right: AI Automation Graphic */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
            <img
              src={aiAutomationNodes}
              alt="AI Automation Network"
              className="absolute inset-0 w-full h-full object-cover rounded-2xl opacity-90"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
