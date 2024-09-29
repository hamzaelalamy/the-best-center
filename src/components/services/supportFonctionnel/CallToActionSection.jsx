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
        <h2>Améliorez la performance de vos opérations</h2>
        <p>
          Assurez la continuité et l'efficacité de vos opérations avec notre service de support fonctionnel.
          Nous vous offrons une assistance dédiée pour résoudre les incidents, optimiser les processus métiers, 
          et garantir la performance de vos systèmes d'information.
        </p>
        <a href="/ServicesAZHub" target="_blank" rel="noopener noreferrer">
        <button className="cta-button">Découvrez Nos Solutions →</button>
        </a>
      </motion.div>
      <motion.div
        className="cta-image"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img src="/assets/services/supportFonctionnel.jpg" alt="Service de Support Fonctionnel" />
      </motion.div>
    </motion.section>
  );
};

export default CallToActionSection;
