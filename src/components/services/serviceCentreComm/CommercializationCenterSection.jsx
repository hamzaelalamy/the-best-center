import React from 'react';
import { motion } from 'framer-motion';
import "../css/Service.css"; // Ensure this file is created and updated

const CommercializationCenterSection = () => {
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
    <section className="commercialization-center-section">
      <motion.div
        className="commercialization-center-content"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <p className="section-subtitle1">SOLUTIONS DE COMMERCIALISATION EFFICACES</p>
        <h2 className="section-title1">Boostez vos ventes avec notre Centre de Commercialisation</h2>
      </motion.div>
    </section>
  );
};

export default CommercializationCenterSection;
