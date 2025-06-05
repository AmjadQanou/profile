import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = ({ id,activeSection, setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  if (inView && activeSection !== 'about') {
  setActiveSection('about');
}

  return (
    <section id={id} ref={ref} className="about-section">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="section-header"
      >
        <h2>About Me</h2>
        <div className="section-divider"></div>
      </motion.div>
      
      <div className="about-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="about-text"
        >
          <h3>Who Am I?</h3>
          <p>
  I am a passionate full-stack developer with expertise in C#, ASP.NET, React.js, Node.js, and SQL Server.  
  I specialize in building efficient, scalable web applications that solve real-world problems.  
</p>
<p>
  With a strong background in data analysis, I bring a detail-oriented and analytical approach to every project,  
  ensuring that solutions are not only functional but also optimized for performance and user experience.  
</p>
<p>
  I enjoy combining clean code with modern technologies to create seamless digital experiences that help businesses grow.
</p>

          
          <div className="personal-info">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">Amjad Qanou</span>
            </div>
            <div className="info-item">
              <span className="info-label">Origin:</span>
              <span className="info-value">Gaza, Palestine </span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">amjad.qano3@gmail.com</span>
            </div>
            <div className="info-item">
              <span className="info-label">Languages:</span>
              <span className="info-value">JavaScript, C#, Asp.net,React.js,Node.js</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          className="about-image"
        >
          <div className="image-container">
            <div className="glow-effect"></div>
            <div className="profile-image">
                <img className='' src='/images/2.jpg'></img>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;