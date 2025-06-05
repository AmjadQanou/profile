import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaCodepen } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="footer"
    >
      <div className="footer-content">
        <div className="footer-logo">
          <span className="gradient-text">COSMIC CREATOR</span>
        </div>
        
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#gallery">Work</a>
          <a href="#contact">Contact</a>
        </div>
        
        <div className="footer-social">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://codepen.io" target="_blank" rel="noopener noreferrer">
            <FaCodepen />
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Cosmic Creator. All rights reserved.</p>
        <p>Designed with ♥ from another dimension</p>
      </div>
    </motion.footer>
  );
};

export default Footer;