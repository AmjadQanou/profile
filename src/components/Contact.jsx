import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

const Contact = ({ id, activeSection, setActiveSection }) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xh9c1vn',      
        'template_x7rzben',    
        form.current,
        'vpKEoPRnw6qeGOSOK'      
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.error(error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  if (inView && activeSection !== 'contact') {
    setActiveSection('contact');
  }

  return (
    <section id={id} ref={ref} className="contact-section">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="section-header"
      >
        <h2>Contact Me</h2>
        <div className="section-divider"></div>
      </motion.div>

      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false }}
          className="contact-info"
        >
          <h3>Get In Touch</h3>
          <p>
            Have a project in mind or want to discuss potential opportunities?
            Feel free to reach out through any of the channels below.
          </p>

          <div className="info-items">
            <div className="info-item">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <div className="info-content">
                <h4>Email</h4>
                <p>amjad.qano3@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaPhone />
              </div>
              <div className="info-content">
                <h4>Phone</h4>
                <p>+970 594 835475</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="info-content">
                <h4>Location</h4>
                <p>Gaza-Palestine</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://www.linkedin.com/in/amjad-qano3-021b81369" className="social-icon">
              Li
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: false }}
          className="contact-form"
        >
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <input type="text" name="user_name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="user_email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
