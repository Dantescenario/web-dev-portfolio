import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Services from './components/Services';
import Projects from './components/Projects';
import Process from './components/Process';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import TechStack from './components/TechStack';
import About from './components/About';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <Projects />
      <Process />
      <WhyWorkWithMe />
      <TechStack />
      <About />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
