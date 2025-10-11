import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Process from "@/components/Process";
import Ecosystem from "@/components/Ecosystem";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problem />
      <Services />
      <Results />
      <Process />
      <Ecosystem />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
