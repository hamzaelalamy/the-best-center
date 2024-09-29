import React from 'react';
import { motion } from 'framer-motion';
import "../css/Service.css"; // Assurez-vous de créer ce fichier CSS

const CallToActionSection = () => {
  // Variants for the text animation (left to right)
  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Variants for the image animation (right to left)
  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section className="cta-section">
      <motion.div
        className="cta-content"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>Optimisez vos projets techniques avec notre Bureau d'Étude</h2>
        <p>
          Notre Bureau d'Étude vous accompagne dans la conception et la réalisation de vos projets 
          techniques en fournissant des solutions d'ingénierie sur mesure. Qu'il s'agisse de la 
          planification, de l'analyse, ou de la gestion de projets complexes, nous avons l'expertise 
          pour vous aider à transformer vos idées en réalité.
        </p>
        <a href="/ServicesAZHub" target="_blank" rel="noopener noreferrer">
        <button className="cta-button">Explorez Nos Services →</button>
        </a>      </motion.div>
      <motion.div
        className="cta-image"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img src="/assets/services/bureauEtude.jpg" alt="Service de Bureau d'Étude" />
      </motion.div>
    </motion.section>
  );
};

export default CallToActionSection;
