import React, { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BootScreen from '../components/BootScreen';
import Reveal from '../components/Reveal';

const Index = () => {
  const [booted, setBooted] = useState(false);

  return (
    <>
      {!booted && <BootScreen onDone={() => setBooted(true)} />}
      <div
        className={`min-h-screen bg-background text-foreground transition-opacity duration-700 ${
          booted ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Hero />
        <Reveal variant="up">
          <About />
        </Reveal>
        <Reveal variant="up" delay={60}>
          <Skills />
        </Reveal>
        <Reveal variant="up" delay={60}>
          <Projects />
        </Reveal>
        <Reveal variant="up" delay={60}>
          <Experience />
        </Reveal>
        <Reveal variant="scale" delay={60}>
          <Contact />
        </Reveal>
        <Footer />
      </div>
    </>
  );
};

export default Index;
