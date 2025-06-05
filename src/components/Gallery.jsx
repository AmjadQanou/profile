import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const galleryData = [
  {
    id: 1,
    title: 'Food App',
    category: 'React.js',
    image: './images/f1.png',
    giturl:'https://amjadqanou.github.io/foodapp/',
    whatview:'viewLive'


  },
  {
    id: 2,
    title: 'tractors shop',
    category: 'React.js',
    image: './images/t1.png',
    giturl:'https://amjadqanou.github.io/tractors/',
    whatview:'viewLive'

  },
  {
    id: 3,
    title: 'Movies App',
    category: 'Html/Js',
    image: './images/m1.png',
    giturl:'https://github.com/AmjadQanou/Movies',

    whatview:'viewCode'
  },

];

const Gallery = ({ id,activeSection, setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  function hundleView(url)
  {
  window.open(url, '_blank'); 
  }

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);


  if (inView && activeSection !== 'gallery') {
  setActiveSection('gallery');
}

  const filteredProjects = activeFilter === 'all' 
    ? galleryData 
    : galleryData.filter(project => project.category === activeFilter);

  const categories = ['all', ...new Set(galleryData.map(item => item.category))];

  return (
    <section id={id} ref={ref} className="gallery-section">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="section-header"
      >
        <h2>My Work</h2>
        <div className="section-divider"></div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="gallery-filters"
      >
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </motion.div>
      
      <div className="gallery-grid">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
            className="gallery-item"
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.05 }}
          >
            <div className="gallery-image-container">
              <img src={project.image} alt={project.title} />
              <div className="gallery-overlay">
                <h3>{project.title}</h3>
                <p>{project.category}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {selectedProject && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="project-modal"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="close-modal"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <div className="modal-details">
              <h3>{selectedProject.title}</h3>
              <p className="category">{selectedProject.category}</p>
              <p className="description">
                This is a placeholder description for {selectedProject.title}. 
                Replace with actual project details, technologies used, and 
                your role in the project.
              </p>
              <div className="modal-actions">
                <button className="view-live" onClick={()=>hundleView(selectedProject.giturl)} >{selectedProject.whatview=="viewLive"?"view live":"view code"}</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Gallery;