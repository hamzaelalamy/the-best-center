import React from 'react';
import { motion } from 'framer-motion';
import "../css/Service.css"; // Ensure this file is created and updated

const CommercializationTestimonialsSection = () => {
  // Animation variants for the elements
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
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
        staggerChildren: 0.3, // Stagger animations for a cascading effect
      },
    },
  };

  return (
    <motion.section 
      className="commercialization-testimonials-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger the animation when in view
      variants={containerVariants}
    >
      <motion.div
        className="testimonials-container1"
        variants={textVariants}
      >
        <h2 className="testimonials-title1">Ce que nos clients disent</h2>
        <motion.div className="testimonials" variants={containerVariants}>
          <motion.div className="testimonial" variants={textVariants}>
            <p>« Grâce à AZ Hub, nos ventes ont augmenté de 30% en seulement six mois. Leur expertise en commercialisation est incomparable. »</p>
            <span className="testimonial-author">Jean Dupont</span>
          </motion.div>
          <motion.div className="testimonial" variants={textVariants}>
            <p>« Le Centre de Commercialisation d'AZ Hub nous a aidés à pénétrer de nouveaux marchés avec une stratégie de vente efficace. »</p>
            <span className="testimonial-author">Marie Curie</span>
          </motion.div>
          <motion.div className="testimonial" variants={textVariants}>
            <p>« Un service de qualité qui nous a permis de renforcer nos relations clients et d'améliorer notre taux de fidélisation. »</p>
            <span className="testimonial-author">Ahmed Benjelloun</span>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
  className="cta-container1"
  variants={textVariants}
>
  <div className="cta-contentt">
    <h3>Optimisez vos ventes avec AZ Hub</h3>
    <p>
      Rejoignez des centaines d'entreprises qui ont fait confiance à notre
      Centre de Commercialisation pour booster leur croissance.
    </p>
  </div>
  <a href="/contact">
    <button className="cta-button">Contactez-nous</button>
  </a>
</motion.div>

    </motion.section>
  );
};

export default CommercializationTestimonialsSection;
