import Navbar from './components/Navbar';
import MarqueeTicker from './components/MarqueeTicker';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import QuickApply from './components/QuickApply';

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <MarqueeTicker />
      <main>
        <Hero />
        <Destinations />
        <About />
        <Services />
        <Process />
        <Testimonials />
        <Gallery />
        <CTA />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <QuickApply />
    </div>
  );
}