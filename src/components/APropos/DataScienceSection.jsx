import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './style.css';

const DataScienceSection = () => {
  useEffect(() => {
    // Scroll to the top of the page instantly when this component is mounted
    window.scrollTo(0, 0);
  }, []);

  // Define variants for the animation (same as ProjectsSection)
  const revealVariant = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? -200 : direction === 'right' ? 200 : 0,
      y: direction === 'top' ? -200 : direction === 'bottom' ? 200 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.2,
      },
    },
  };

  return (
    <section className="data-science-section">
      <div className="data-science-content">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={revealVariant}
          custom="left"
          viewport={{ once: true }}
        >
          AZ HUB : Quand l'innovation 
        </motion.h2>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={revealVariant}
          custom="left"
          viewport={{ once: true }}
        >
          rencontre l'expertise
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={revealVariant}
          custom="left"
          viewport={{ once: true }}
        >
          Transformez vos opérations, stimulez la croissance et adoptez l'avenir 
        </motion.p>

        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={revealVariant}
          custom="left"
          viewport={{ once: true }}
        >
          numérique avec nous
        </motion.p>


        <motion.a
          href="/ServicesAZHub"
          className="cta-button"
          initial="hidden"
          whileInView="visible"
          variants={revealVariant}
          custom="left"
          viewport={{ once: true }}
        >
          Explorez nos services
        </motion.a>
      </div>
      <motion.div
        className="data-science-stats"
        initial="hidden"
        whileInView="visible"
        variants={revealVariant}
        custom="right"
        viewport={{ once: true }}
      >
        <div className="stat-item">
          <div className="image-container">
            <img src="/assets/About/hero.jpg" alt="Data Science Image 1" />
          </div>
          <div className="image-container">
            {/* Additional content can go here */}
          </div>
          <div className="audio-visualizer">
            {/* Audio visualizer or any other content */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DataScienceSection;
