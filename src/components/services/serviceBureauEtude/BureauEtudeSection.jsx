import React from 'react';
import { motion } from 'framer-motion';
import "../css/Service.css"; // Ensure this file is created and updated

const BureauEtudeSection = () => {
  // Animation variants for the text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bureau-etude-section">
      <motion.div
        className="bureau-etude-content"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <p className="section-subtitle1">EXPERTISE TECHNIQUE ET INGÉNIERIE</p>
        <h2 className="section-title1">Accélérez vos projets avec notre Bureau d'Étude</h2>
      </motion.div>
    </section>
  );
};

export default BureauEtudeSection;
