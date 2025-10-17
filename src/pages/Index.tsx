import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Platforms from "@/components/Platforms";
import Results from "@/components/Results";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import TermsOfService from "@/components/TermsOfService";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Problem className="py-0" />
      <AboutUs />
      <Services />
      <Platforms />
      <Results />
      <Process />
      <CTA />
      <TermsOfService />
      <PrivacyPolicy />
      <Contact />
      <Footer />
    </main>
  );
};
export default Index;