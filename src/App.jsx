import Navbar from './components/Navbar';
import MarqueeTicker from './components/MarqueeTicker';
import Hero from './components/Hero';
import StatBand from './components/StatBand';
import About from './components/About';
import Services from './components/Services';
import CountryGuide from './components/CountryGuide';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CtaBand from './components/CtaBand';
import Contact from './components/Contact';
import MapSection from './components/MapSection';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import QuickApply from './components/QuickApply';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <MarqueeTicker />
      <StatBand />
      <About />
      <Services />
      <CountryGuide />
      <Process />
      <Testimonials />
      <CtaBand />
      <Contact />
      <MapSection />
      <Faqs />
      <Footer />
      <QuickApply />
    </div>
  );
}
