import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillsData = [
  { name: 'React.js', level: 95, color: '#61DAFB' },
  { name: 'JavaScript', level: 90, color: '#F7DF1E' },
  { name: 'Asp.net', level: 90, color: '#E34F26' },
  { name: 'Node.js', level: 80, color: '#339933' },
  { name: 'UI/UX Design', level: 75, color: '#FF4081' },
  { name: 'Wep Api', level: 85, color: '#049EF4' },
  { name: 'HTML/CSS', level: 95, color: '#3776AB' },
];

const Skills = ({ id,activeSection, setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });


    if (inView && activeSection !== 'skills') {
  setActiveSection('skills');
}

  return (
    <section id={id} ref={ref} className="skills-section">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="section-header"
      >
        <h2>My Skills</h2>
        <div className="section-divider"></div>
      </motion.div>
      
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
            className="skill-item"
          >
            <div className="skill-info">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="skill-progress"
                style={{ backgroundColor: skill.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* <div className="skills-orb-container">
        {skillsData.map((skill, index) => (
          <motion.div
            key={`orb-${skill.name}`}
            className="skill-orb"
            style={{ 
              backgroundColor: skill.color,
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.3, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: index * 0.1,
              type: 'spring',
              stiffness: 100
            }}
            viewport={{ once: false }}
          />
        ))}
      </div> */}
    </section>
  );
};

export default Skills;