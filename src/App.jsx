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
      <Marquee />
      <main>
        <Hero />
        <Stats />
        <Process />
        <About />
        <Services />
        <Countries />
        <Testimonials />
        <CTABand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;