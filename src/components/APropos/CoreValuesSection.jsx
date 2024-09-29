import React from 'react';
import { motion } from 'framer-motion';
import './style.css'; // Ensure this file contains the appropriate styles

const CoreValuesSection = () => {
  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100, // Lower stiffness for a slower bounce
        damping: 25, // Higher damping for less bounciness
        duration: 1.5, // Longer duration for a slower transition
      }
    }
  };

  return (
    <motion.section
      className="core-values-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // Trigger animation when 30% of the section is in view
    >
      <motion.h2 className="section-title1" variants={cardVariants}>
        Nos valeurs fondamentales
      </motion.h2>
      <motion.p className="section-subtitle1" variants={cardVariants}>
        Nous défendons des principes qui guident nos actions et façonnent notre avenir, favorisant l’excellence dans tout ce que nous faisons.
      </motion.p>
      <div className="values-grid">
        {/* First Row */}
        <motion.div className="value-item" variants={cardVariants}>
          <img src="/assets/About/icon1.png" alt="Innovation centrée sur le client" className="value-icon" />
          <h3>Innovation centrée sur le client</h3>
          <p>
            Nous accordons la priorité aux défis uniques de nos clients, en élaborant des solutions stratégiques qui stimulent la croissance et la conformité.
          </p>
        </motion.div>

        <motion.div className="value-item" variants={cardVariants}>
          <img src="/assets/About/icon2.png" alt="Dévouement à la qualité" className="value-icon" />
          <h3>Dévouement à la qualité</h3>
          <p>
            Qu'il s'agisse de développement de logiciels, de consultation ou de support client, nous veillons à ce que la qualité ne soit jamais compromise.
          </p>
        </motion.div>

        <motion.div className="value-item" variants={cardVariants}>
          <img src="/assets/About/icon3.png" alt="Portée mondiale, impact local" className="value-icon" />
          <h3>Portée mondiale, impact local</h3>
          <p>
            À mesure que nous nous développons à l'échelle mondiale, nous veillons à ce que nos solutions aient un impact significatif au niveau local.
          </p>
        </motion.div>

        {/* Second Row */}
        <motion.div className="value-item" variants={cardVariants}>
          <img src="/assets/About/icon4.png" alt="Donner du pouvoir à nos collaborateurs" className="value-icon" />
          <h3>Donner du pouvoir à nos collaborateurs</h3>
          <p>
            Notre force réside dans notre équipe. Nous investissons dans leur croissance, leurs compétences et leur bien-être.
          </p>
        </motion.div>

        <motion.div className="value-item" variants={cardVariants}>
          <img src="/assets/About/icon1.png" alt="L’avenir en avant" className="value-icon" />
          <h3>L’avenir en avant</h3>
          <p>
            Toujours tournés vers l'avenir, nous nous efforçons d'être à la pointe des avancées technologiques.
          </p>
        </motion.div>

        <motion.div className="value-item" variants={cardVariants}>
          <img src="/assets/About/icon6.png" alt="Transformation numérique de bout en bout" className="value-icon" />
          <h3>Transformation numérique de bout en bout</h3>
          <p>
            Du développement de la stratégie au conseil de bout en bout et au-delà, nous vous accompagnons à chaque étape.
          </p>
        </motion.div>
      </div>
      <motion.div className="values-footer" variants={cardVariants}>
        <p>
          En favorisant le progrès grâce à l'innovation et à la qualité, nous sommes votre partenaire pour façonner un paysage numérique tourné vers l'avenir.
        </p>
        <a href="/team" className="cta-button">Rencontrez notre équipe</a>
      </motion.div>
    </motion.section>
  );
};

export default CoreValuesSection;
