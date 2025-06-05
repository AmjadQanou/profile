import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    id: 1,
    degree: 'Diploma in Advanced Programming',
    institution: 'GTC University',
    year: '2022 - 2024',
        description: 'Learned to code in different programming languages including JavaScript, C#, and Asp.net.'

  },
  {
    id: 2,
    degree: 'Diploma in Data analysis',
    institution: 'Data Camp Academy',
    year: ' 2025',
    description:"Completed an intensive diploma focused on data analysis techniques, including data cleaning, visualization, statistical methods."

  },

];

const Education = ({ id,activeSection, setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });


if (inView && activeSection !== 'education') {
  setActiveSection('education');
}
  return (
    <section id={id} ref={ref} className="education-section">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="section-header"
      >
        <h2>My Education</h2>
        <div className="section-divider"></div>
      </motion.div>
      
      <div className="timeline">
        {educationData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false }}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>
            <div className="timeline-content">
              <h3>{item.degree}</h3>
              <h4>{item.institution}</h4>
              <span className="timeline-year">{item.year}</span>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
        
        <div className="timeline-line"></div>
      </div>
    </section>
  );
};

export default Education;