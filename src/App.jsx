import Navbar from './components/Navbar';
import MarqueeTicker from './components/MarqueeTicker';
import Hero from './components/Hero';
import CountryGuide from './components/CountryGuide';
import AboutStats from './components/AboutStats';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CtaBand from './components/CtaBand';
import Contact from './components/Contact';
import Faqs from './components/Faqs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <MarqueeTicker />
      <Hero />
      <CountryGuide />
      <AboutStats />
      <Services />
      <Process />
      <Testimonials />
      <Gallery />
      <CtaBand />
      <Contact />
      <Faqs />
      <Footer />

      {/* QuickApply floating widget */}
      <a
        href="https://wa.me/923059900345"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl shadow-xl hover:scale-110 transition-all duration-200"
        style={{ background: 'var(--color-cta)' }}
        aria-label="Quick Apply via WhatsApp"
      >
        <i className="fab fa-whatsapp" />
      </a>
    </div>
  );
}