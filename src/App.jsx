import { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Marquee from './components/Marquee';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Services from './components/Services';
import Countries from './components/Countries';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import CTABand from './components/CTABand';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import QuickApply from './components/QuickApply';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal, .reveal-l, .reveal-r').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Marquee />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Countries />
        <Process />
        <Testimonials />
        <Gallery />
        <CTABand />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <QuickApply />
    </>
  );
}

export default App;
