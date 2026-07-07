import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Process from './components/Process';
import About from './components/About';
import Services from './components/Services';
import Countries from './components/Countries';
import Testimonials from './components/Testimonials';
import CTABand from './components/CTABand';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <Hero />
        {/* 2. Marquee */}
        <Marquee />
        {/* 3. Stat Band */}
        <Stats />
        {/* 4. How It Works */}
        <Process />
        {/* 5. About */}
        <About />
        {/* 6. Services */}
        <Services />
        {/* 7. Countries */}
        <Countries />
        {/* 8. Testimonials + Gallery */}
        <Testimonials />
        {/* 9. CTA Band */}
        <CTABand />
        {/* 10. Contact + Map + FAQs */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;