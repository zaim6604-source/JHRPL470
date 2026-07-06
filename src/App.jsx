import Navbar from "./components/Navbar";
import MarqueeTicker from "./components/MarqueeTicker";
import Hero from "./components/Hero";
import Services from "./components/Services";
import StatsBand from "./components/StatsBand";
import About from "./components/About";
import CountryGuide from "./components/CountryGuide";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import FAQs from "./components/Faqs";
import Footer from "./components/Footer";
import CTABand from "./components/CtaBand";
import QuickApply from "./components/QuickApply";

export default function App() {
  return (
    <div className="font-body antialiased">
      <Navbar />
      <MarqueeTicker />
      <Hero />
      <Services />
      <StatsBand />
      <About />
      <CountryGuide />
      <Process />
      <Testimonials />
      <Gallery />
      <CTABand />
      <Contact />
      <FAQs />
      <Footer />
      <QuickApply />
    </div>
  );
}