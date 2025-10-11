// src/components/Ecosystem.tsx
import React from "react";

const GradientWord: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="bg-gradient-to-br from-[#8B5CF6] to-[#00FFC8] bg-clip-text text-transparent">{children}</span>
);

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="relative py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-white/60">PixelCloud9</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold">
            What We <GradientWord>Build</GradientWord> (So You Don’t Have To)
          </h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            Three simple pieces that work together to book more clients and cut busywork.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Websites That Book Clients */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-white/20 transition">
            <div
              className="h-10 w-10 rounded-xl mx-auto
                            bg-gradient-to-br from-[#8B5CF6] to-[#00FFC8] opacity-90"
            />
            <h3 className="mt-4 text-lg font-semibold text-center">Websites That Book Clients</h3>
            <p className="mt-2 text-sm text-white/70">Turn visitors into scheduled calls with a booking-first site.</p>
            <ul className="mt-4 space-y-1 text-sm text-white/70">
              <li>• Booking page + reminders</li>
              <li>• No-show recovery</li>
              <li>• Built for speed + SEO basics</li>
            </ul>
            <div className="mt-4 text-xs text-white/60">
              Typical <span className="font-medium">+20–40%</span> more bookings
            </div>
          </div>

          {/* AI Assistants That Handle Support */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-white/20 transition">
            <div
              className="h-10 w-10 rounded-xl mx-auto
                            bg-gradient-to-br from-[#8B5CF6] to-[#00FFC8] opacity-90"
            />
            <h3 className="mt-4 text-lg font-semibold text-center">AI Assistants That Handle Support</h3>
            <p className="mt-2 text-sm text-white/70">Instant answers, lead capture, and human handoff when needed.</p>
            <ul className="mt-4 space-y-1 text-sm text-white/70">
              <li>• 24/7 chat + knowledge base</li>
              <li>• Lead capture + qualification</li>
              <li>• Routes complex issues to your team</li>
            </ul>
            <div className="mt-4 text-xs text-white/60">
              <span className="font-medium">40–60%</span> fewer tickets
            </div>
          </div>

          {/* Systems That Run Your Business */}
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-white/20 transition">
            <div
              className="h-10 w-10 rounded-xl mx-auto
                            bg-gradient-to-br from-[#8B5CF6] to-[#00FFC8] opacity-90"
            />
            <h3 className="mt-4 text-lg font-semibold text-center">Systems That Run Your Business</h3>
            <p className="mt-2 text-sm text-white/70">Follow-ups, reactivations, and reviews—on autopilot.</p>
            <ul className="mt-4 space-y-1 text-sm text-white/70">
              <li>• Pipelines + nurture sequences</li>
              <li>• Reactivation + rebook loops</li>
              <li>• Review engine with drip logic</li>
            </ul>
            <div className="mt-4 text-xs text-white/60">
              First wins in about <span className="font-medium">30 days</span>
            </div>
          </div>
        </div>

        {/* Connector sentence */}
        <div className="mt-10 text-center text-white/70">
          Everything shares the same data—leads move from{" "}
          <span className="font-medium">site → assistant → automations</span> without slipping through the cracks.
        </div>

        {/* Optional CTA row */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/book"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2
                       bg-gradient-to-br from-[#8B5CF6] to-[#00FFC8] text-black font-medium"
          >
            Start with an Audit
          </a>
          <a
            href="#process"
            className="inline-flex items-center justify-center rounded-xl px-4 py-2
                       border border-white/15 hover:border-white/25 transition"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
