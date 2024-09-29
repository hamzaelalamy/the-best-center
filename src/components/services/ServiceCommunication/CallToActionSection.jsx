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
        <h2>Maximisez l'impact de votre communication d'entreprise</h2>
        <p>
          Renforcez la voix et le message de votre marque avec nos solutions de communication 
          sur mesure. Que ce soit pour améliorer votre image publique, engager vos employés, 
          ou gérer des relations médiatiques, nous avons les outils et l'expertise pour vous aider 
          à atteindre vos objectifs stratégiques.
        </p>
        <a href="/ServicesAZHub" target="_blank" rel="noopener noreferrer">
        <button className="cta-button">Découvrir Nos Services →</button>
        </a>
      </motion.div>
      <motion.div
        className="cta-image"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <img src="/assets/services/communicationAz.jpg" alt="Service de Communication d'Entreprise" />
      </motion.div>
    </motion.section>
  );
};

export default CallToActionSection;

