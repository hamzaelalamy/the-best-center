import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './style.css'; // Make sure this CSS file exists

const TeamSection = () => {
  const [activeTab, setActiveTab] = useState('Notre équipe');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Ensure that the animation only runs after the component has mounted
    setIsMounted(true);
  }, []);

  // Define variants for the animation (same as ProjectsSection)
  const revealVariant = {
    hidden: (direction) => ({
      opacity: 0,
      x: direction === 'left' ? -200 : direction === 'right' ? 200 : 0,
      y: direction === 'top' ? -200 : direction === 'bottom' ? 200 : 0,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.2,
      },
    },
  };

  const content = {
    "Aperçu": (
      <motion.div
        className="team-content"
        initial="hidden"
        whileInView="visible"
        variants={revealVariant}
        custom="top"
        viewport={{ once: true }}
      >
        <p>
          Aperçu de notre entreprise et de nos activités globales. Nous nous concentrons sur l'innovation, la croissance durable, et un engagement fort envers nos clients à travers le monde.
        </p>
        <h3>
          Découvrez comment nous transformons des idées innovantes en solutions concrètes qui font avancer notre mission.
        </h3>
      </motion.div>
    ),
    "Présence mondiale": (
      <motion.div
        className="team-content"
        initial="hidden"
        whileInView="visible"
        variants={revealVariant}
        custom="top"
        viewport={{ once: true }}
      >
        <p>
          Avec une présence sur tous les continents, AZ HUB est une agence mondiale avec une portée locale. Nos bureaux sont stratégiquement situés pour servir nos clients où qu'ils se trouvent.
        </p>
        <h3>
          Explorez notre réseau mondial et comment nous offrons des solutions locales avec une perspective globale.
        </h3>
      </motion.div>
    ),
    "Notre équipe": (
      <motion.div
        className="team-content"
        initial="hidden"
        whileInView="visible"
        variants={revealVariant}
        custom="top"
        viewport={{ once: true }}
      >
        <p>
          Composée de professionnels dévoués, concentrés et chevronnés, notre équipe de direction tournée vers l'avenir est soutenue par plus de 1 000 experts de nos bureaux mondiaux, garantissant une portée étendue sur tous les continents.
        </p>
        <h3>
          Rencontrez les esprits derrière l'innovation d'AZ HUB – une équipe dédiée qui fait avancer notre vision et nos valeurs.
        </h3>
      </motion.div>
    ),
  };

  return (
    <motion.section
      className="team-section"
      initial="hidden"
      whileInView="visible"
      variants={revealVariant}
      custom="bottom"
      viewport={{ once: true }}
    >
      <nav className="team-nav">
        <ul>
          <li
            className={activeTab === 'Aperçu' ? 'active' : ''}
            onClick={() => setActiveTab('Aperçu')}
          >
            Aperçu
          </li>
          <li
            className={activeTab === 'Présence mondiale' ? 'active' : ''}
            onClick={() => setActiveTab('Présence mondiale')}
          >
            Présence mondiale
          </li>
          <li
            className={activeTab === 'Notre équipe' ? 'active' : ''}
            onClick={() => setActiveTab('Notre équipe')}
          >
            Notre équipe
          </li>
        </ul>
      </nav>
      {content[activeTab]}
    </motion.section>
  );
};

export default TeamSection;
