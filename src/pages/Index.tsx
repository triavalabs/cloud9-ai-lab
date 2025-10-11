import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Platforms from "@/components/Platforms";
import Results from "@/components/Results";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Services />
      <Platforms />
      <Results />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
