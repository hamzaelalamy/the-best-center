import React from 'react';
import { motion } from 'framer-motion';
import "../css/Service.css"; // Ensure this file is created and updated

const CommercializationWhyUsSection = () => {
  // Animation variants for the text, icons, and images
  const textVariants = {
    hidden: { opacity: 0, y: 100 }, // Start from lower position
    visible: {
      opacity: 1,
      y: 0, // End at normal position
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // Stagger the children animations for a cascading effect
      },
    },
  };

  return (
    <motion.section 
      className="commercialization-why-us-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when in view
      variants={containerVariants}
    >
      <div className="content-container">
        <motion.div
          className="text-content"
          variants={textVariants}
        >
          <p className="section-subtitleee">DÉCOUVREZ NOS AVANTAGES</p>
          <h2 className="section-titleee">Pourquoi choisir notre Centre de Commercialisation ?</h2>
          <p className="section-description">
            Nous vous aidons à maximiser votre potentiel de vente grâce à des stratégies commerciales 
            éprouvées. De l'analyse de marché à la gestion des relations clients, nous fournissons 
            un accompagnement complet pour atteindre vos objectifs de vente.
          </p>
          <div className="features-list">
            <motion.div className="feature-item1" variants={textVariants}>
              <div className="icon">📈</div>
              <p className="feature-text">Croissance des ventes</p>
            </motion.div>
            <motion.div className="feature-item1" variants={textVariants}>
              <div className="icon">🎯</div>
              <p className="feature-text">Stratégies ciblées</p>
            </motion.div>
            <motion.div className="feature-item1" variants={textVariants}>
              <div className="icon">🤝</div>
              <p className="feature-text">Relations clients</p>
            </motion.div>
            <motion.div className="feature-item1" variants={textVariants}>
              <div className="icon">🚀</div>
              <p className="feature-text">Lancement de produits</p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="image-content"
          variants={textVariants}
        >
          <div className="image-grid">
            <motion.img src="/assets/services/marketing1.png" alt="Expert 1" className="grid-image" variants={textVariants} />
            <motion.img src="/assets/services/marketing2.png" alt="Expert 2" className="grid-image" variants={textVariants} />
            <motion.div className="quote" variants={textVariants}>
              <p>« Un soutien essentiel pour notre croissance commerciale. »</p>
              <span>— Un client satisfait</span>
            </motion.div>
            <motion.img src="/assets/services/marketing3.png" alt="Expert 3" className="grid-image" variants={textVariants} />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CommercializationWhyUsSection;
