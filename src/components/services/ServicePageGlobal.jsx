import React from 'react';
import { motion } from 'framer-motion';
import "./css/Service.css"; // Keeping the original CSS file

const ServicePageGlobal = () => {
  // Animation variants for each line of text
  const lineVariants = {
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
    <motion.section
      className="global-service-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the section is in view
    >
      <div className="global-service-content">
        <motion.p
          className="section-subtitle1"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          ÉDUCATION ET INNOVATION
        </motion.p>
        <motion.h2
          className="section-title1"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }} // Add slight delay between lines
        >
          Cultivez Votre Potentiel Avec Notre École
        </motion.h2>
        <motion.p
          className="section-description1"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }} // Further delay for the third line
        >
          À notre école, nous sommes déterminés à accompagner chaque élève dans son parcours éducatif
          en offrant un enseignement de qualité adapté aux défis du 21ème siècle.
        </motion.p>
        <motion.p
          className="section-description1"
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.6 }} // Further delay for the last line
        >
          Forts d'une équipe pédagogique dévouée et d'une approche innovante, nous combinons excellence académique,
          développement personnel et préparation au monde de demain pour assurer la réussite de chaque étudiant.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default ServicePageGlobal;