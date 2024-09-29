import React from 'react';
import { motion } from 'framer-motion';
import "../css/Service.css"; // Assurez-vous de créer ce fichier CSS

const WebDevFeaturesSection = () => {
  // Variants for the feature animation
  const leftFeatureVariants = {
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

  const rightFeatureVariants = {
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

  const centerFeatureVariants = {
    hidden: { opacity: 0, y: 50 },
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
      className="features-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2 
        className="features-title"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Principales fonctionnalités et capacités<br />du développement web
      </motion.h2>
      <div className="features-grid">
        <motion.div 
          className="feature-item"
          variants={leftFeatureVariants}
        >
          <img src="/assets/services/icons/feature1.png" alt="Responsive Design" />
          <h3>Design Réactif</h3>
          <p>Nos sites web sont conçus pour s'adapter à toutes les tailles d'écran, garantissant une expérience utilisateur optimale sur tous les appareils.</p>
        </motion.div>
        <motion.div 
          className="feature-item"
          variants={centerFeatureVariants}
        >
          <img src="/assets/services/icons/feature2.png" alt="SEO Optimization" />
          <h3>Optimisation SEO</h3>
          <p>Nos solutions incluent les meilleures pratiques de référencement pour vous aider à améliorer la visibilité de votre site web sur les moteurs de recherche.</p>
        </motion.div>
        <motion.div 
          className="feature-item"
          variants={rightFeatureVariants}
        >
          <img src="/assets/services/icons/feature3.png" alt="E-commerce Solutions" />
          <h3>Solutions E-commerce</h3>
          <p>Développez votre activité en ligne avec nos plateformes e-commerce personnalisées, sécurisées, et faciles à gérer.</p>
        </motion.div>
        <motion.div 
          className="feature-item"
          variants={leftFeatureVariants}
        >
          <img src="/assets/services/icons/feature5.png" alt="Performance Optimization" />
          <h3>Optimisation des performances</h3>
          <p>Nous nous assurons que vos sites web sont rapides, réactifs, et capables de gérer un trafic élevé sans compromettre l'expérience utilisateur.</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WebDevFeaturesSection;
