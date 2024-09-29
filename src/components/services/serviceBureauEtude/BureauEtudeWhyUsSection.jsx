import React from 'react';
import { motion } from 'framer-motion';
import "../css/Service.css"; // Ensure this file is created and updated

const BureauEtudeWhyUsSection = () => {
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
      className="bureau-etude-why-us-section"
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
          <p className="section-subtitlee">DÉCOUVREZ NOS AVANTAGES</p>
          <h2 className="section-titlee ">Pourquoi choisir notre Bureau d'Étude ?</h2>
          <p className="section-description">
            Nous vous accompagnons à chaque étape de votre projet technique en vous apportant 
            notre expertise et notre savoir-faire. Du concept initial à la réalisation finale, 
            nous assurons la qualité et la performance de vos projets.
          </p>
          <div className="features-list">
            <motion.div className="feature-item1" variants={textVariants}>
              <div className="icon">🏆</div>
              <p className="feature-text">Qualité de service</p>
            </motion.div>
            <motion.div className="feature-item1" variants={textVariants}>
              <div className="icon">🔧</div>
              <p className="feature-text">Solutions sur mesure</p>
            </motion.div>
            <motion.div className="feature-item1" variants={textVariants}>
              <div className="icon">🚀</div>
              <p className="feature-text">Support continu</p>
            </motion.div>
            <motion.div className="feature-item1" variants={textVariants}>
              <div className="icon">💡</div>
              <p className="feature-text">Expertise technique</p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          className="image-content"
          variants={textVariants}
        >
          <div className="image-grid">
            <motion.img src="/assets/services/team1.jpg" alt="Expert 1" className="grid-image" variants={textVariants} />
            <motion.img src="/assets/services/team2.jpg" alt="Expert 2" className="grid-image" variants={textVariants} />
            <motion.div className="quote" variants={textVariants}>
              <p>« Un accompagnement parfait pour nos projets les plus complexes. »</p>
              <span>— Un client satisfait</span>
            </motion.div>
            <motion.img src="/assets/services/team3.jpg" alt="Expert 3" className="grid-image" variants={textVariants} />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BureauEtudeWhyUsSection;
