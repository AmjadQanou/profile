import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="loading-spinner"
        >
          <div className="spinner-sector spinner-sector-1"></div>
          <div className="spinner-sector spinner-sector-2"></div>
          <div className="spinner-sector spinner-sector-3"></div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="app">
      {/* <ParticleBackground /> */}
      
      {/* Custom cursor */}
      <motion.div
        className="custom-cursor"
        animate={{
          x: cursorPosition.x - 15,
          y: cursorPosition.y - 15,
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
      />
      
      
      <main>
        <AnimatePresence mode="wait">
          <Hero id="home" activeSection={activeSection} setActiveSection={setActiveSection} />
          <About id="about" activeSection={activeSection} setActiveSection={setActiveSection} />
          <Skills id="skills" activeSection={activeSection} setActiveSection={setActiveSection} />
          <Education id="education" activeSection={activeSection} setActiveSection={setActiveSection} />
          <Gallery id="gallery" activeSection={activeSection} setActiveSection={setActiveSection} />
          <Contact id="contact" activeSection={activeSection} setActiveSection={setActiveSection} />
        </AnimatePresence>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;