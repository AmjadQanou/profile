import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowDown, FaCode, FaServer } from 'react-icons/fa';
import { useEffect } from 'react';

const Hero = ({ id, setActiveSection,activeSection }) => {
  const [ref, inView] = useInView({ threshold: 0.5 });

  if (inView && activeSection !== 'home') {
  setActiveSection('home');
}

useEffect(() => {
  if (inView) {
    setActiveSection('home');
  }
}, [inView, setActiveSection]);

  return (
    <section id={id} ref={ref} className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="hero-content"
      >
        <h1 className="hero-title">
          <span className="gradient-text">Innovative Front-to-Back-End Developer</span>
          <br />
          <span className="hero-subtitle">
            Full Stack Architect of the Digital Universe
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="tech-stack"
        >
          <div className="tech-pill">
            <FaCode /> Frontend
          </div>
          <div className="tech-pill">
            <FaServer /> Backend
          </div>
          <div className="tech-pill">🚀 DevOps</div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="hero-description"
        >
          Building scalable applications that orbit beyond conventional limits.
          <br />
          Specializing in React, Node.js, and cloud-native constellations.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="hero-buttons"
        >
          <a href="#projects" className="cta-button">
            View My Galaxy (Projects)
          </a>
          <a href="#contact" className="cta-button secondary">
            Beam Me a Message
          </a>
        </motion.div>
      </motion.div>



      {/* Cosmic UI Elements */}
      <div className="hero-decoration">
        <div className="circle circle-1" data-tech="React"></div>
        <div className="circle circle-2" data-tech="Node.js"></div>
        <div className="circle circle-3" data-tech="AWS"></div>
      </div>
    </section>
  );
};

export default Hero;