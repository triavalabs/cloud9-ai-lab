import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FounderStory from "@/components/FounderStory";
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
