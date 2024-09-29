import React from 'react';
import { motion } from 'framer-motion';
import "../css/Service.css"; // Ensure you create and link this CSS file

const ArchitectureSection = () => {
  // Variants for the animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start 50px below the final position with no opacity
    visible: {
      opacity: 1,
      y: 0, // Move to the final position (y: 0) and become fully opaque
      transition: { duration: 0.8, ease: "easeOut" }, // Ease out for a smooth animation
    },
  };

  return (
    <motion.section 
      className="architecture-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the section is in view
    >
      <div className="architecture-container">
        <h2 className="architecture-title">Ce que nos clients disent</h2>
        <div className="architecture-grid">
          <motion.div 
            className="architecture-card"
            variants={cardVariants}
          >
            <h3 className="architecture-card-title">Optimisation des campagnes médiatiques</h3>
            <p className="architecture-card-text">
              "La mise en œuvre de notre nouvelle architecture frontend avec React a totalement transformé notre expérience utilisateur. Le site est rapide, réactif, et très intuitif."
            </p>
          </motion.div>
          <motion.div 
            className="architecture-card"
            variants={cardVariants}
          >
            <h3 className="architecture-card-title">Amélioration de l'engagement interne</h3>
            <p className="architecture-card-text">
              "Grâce à l'architecture microservices déployée, notre plateforme est maintenant plus scalable et facile à maintenir. Nous avons vu une nette amélioration des performances globales."
            </p>
          </motion.div>
          <motion.div 
            className="architecture-card"
            variants={cardVariants}
          >
            <h3 className="architecture-card-title">Gestion de crise efficace</h3>
            <p className="architecture-card-text">
              "L'intégration de services cloud dans notre backend a permis une croissance rapide et sans faille. Le développement a été rapide et efficace, respectant nos délais serrés."
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ArchitectureSection;

