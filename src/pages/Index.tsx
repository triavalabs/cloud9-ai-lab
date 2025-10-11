import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FounderStory from "@/components/FounderStory";
// src/pages/Index.tsx
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import Ecosystem from "@/components/Ecosystem";
import Process from "@/components/Process";
import FounderStory from "@/components/FounderStory";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function IndexPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services /> {/* ← new section */}
        <Features />
        <Ecosystem />
        <Process />
        <FounderStory />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

import Features from "@/components/Features";
import Process from "@/components/Process";
import Ecosystem from "@/components/Ecosystem";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FounderStory />
      <Features />
      <Process />
      <Ecosystem />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
