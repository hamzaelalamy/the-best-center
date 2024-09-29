import React from 'react';
import { motion } from 'framer-motion';
import "../css/Service.css"; // Ensure this file is created and updated

const SupportFonctionnelSection = () => {
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
    <section className="support-fonctionnel-section">
      <motion.div
        className="support-fonctionnel-content"
        initial="hidden"
        animate="visible"
        variants={textVariants}
      >
        <p className="section-subtitle1">ASSISTANCE OPÉRATIONNELLE ET SOUTIEN CONTINU</p>
        <h2 className="section-title1">Optimisez vos opérations avec notre Support Fonctionnel</h2>
        <p className="section-description1">
          Notre équipe dédiée est là pour vous accompagner dans la résolution des incidents, 
          l'optimisation des processus métiers, et l'amélioration continue de vos systèmes d'information. 
          Avec notre support fonctionnel, vous pouvez vous concentrer sur vos objectifs stratégiques 
          pendant que nous veillons à la performance de vos opérations quotidiennes.
        </p>
      </motion.div>
    </section>
  );
};

export default SupportFonctionnelSection;
