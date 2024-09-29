import React from 'react';
import { motion } from 'framer-motion';
import "../css/Service.css"; // Assurez-vous de créer ce fichier CSS

const CommunicationToolsSection = () => {
  // Définition des variantes pour l'animation des éléments
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Variante pour l'animation du texte de gauche à droite
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

  return (
    <section className="tools-section">
      <div className="tools-content">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={textVariants}
        >
          Soyez à la pointe de la communication grâce à nos outils innovants
        </motion.h2>
        <div className="tools-grid">
          <motion.div
            className="tool-item"
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={itemVariants}
          >
            <motion.img
              src="/assets/services/tool1.png"
              alt="Outil 1"
              variants={itemVariants}
            />
            <motion.p variants={itemVariants}>Outil de gestion des médias</motion.p>
          </motion.div>
          <motion.div
            className="tool-item"
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={itemVariants}
          >
            <motion.img
              src="/assets/services/tool2.png"
              alt="Outil 2"
              variants={itemVariants}
            />
            <motion.p variants={itemVariants}>Analyse des relations publiques</motion.p>
          </motion.div>
          <motion.div
            className="tool-item"
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={itemVariants}
          >
            <motion.img
              src="/assets/services/tool3.png"
              alt="Outil 3"
              variants={itemVariants}
            />
            <motion.p variants={itemVariants}>Plateforme de communication interne</motion.p>
          </motion.div>
          <motion.div
            className="tool-item"
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={itemVariants}
          >
            <motion.img
              src="/assets/services/tool4.png"
              alt="Outil 4"
              variants={itemVariants}
            />
            <motion.p variants={itemVariants}>Solution de gestion de crise</motion.p>
          </motion.div>
          <motion.div
            className="tool-item"
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            variants={itemVariants}
          >
            <motion.img
              src="/assets/services/tool5.png"
              alt="Outil 5"
              variants={itemVariants}
            />
            <motion.p variants={itemVariants}>Gestion de la réputation en ligne</motion.p>
          </motion.div>
        </div>
        
        <a href="/contact">  <button className="tools-button">Entrer en contact →</button>
        </a>
      </div>
    </section>
  );
};

export default CommunicationToolsSection;
