import React from 'react';
import { motion } from 'framer-motion';
import "../css/Service.css"; // Assurez-vous de créer ce fichier CSS

const ClientSpotlightSection = () => {
  // Variants for different directions
  const leftToRight = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const rightToLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const bottomToTop = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="client-spotlight-section">
      <div className="spotlight-content">
        <h2>Pleins feux sur nos clients en communication</h2>
        <div className="spotlight-grid">
          <motion.div
            className="spotlight-item"
            initial="hidden"
            whileInView="visible"
            variants={leftToRight}
          >
            <h3>Optimisation des campagnes médiatiques</h3>
            <p>
              Un leader dans l'industrie du divertissement a vu son taux de conversion augmenter de 50% après la mise en œuvre de notre stratégie de communication ciblée. Grâce à l'utilisation d'analyses de données avancées, nous avons pu affiner les messages clés et atteindre efficacement le public cible.
            </p>
          </motion.div>
          <motion.div
            className="spotlight-item"
            initial="hidden"
            whileInView="visible"
            variants={bottomToTop}
          >
            <h3>Amélioration de l'engagement interne</h3>
            <p>
              Après l'introduction d'une plateforme de communication interne sur mesure, une grande entreprise technologique a constaté une augmentation de 30% de l'engagement des employés. Cette solution a permis de faciliter le partage d'informations et de renforcer la culture d'entreprise à travers des initiatives collaboratives.
            </p>
          </motion.div>
          <motion.div
            className="spotlight-item"
            initial="hidden"
            whileInView="visible"
            variants={rightToLeft}
          >
            <h3>Gestion de crise efficace</h3>
            <p>
              Lorsqu'une entreprise internationale a été confrontée à une crise de réputation, notre équipe de communication a mis en place une stratégie de réponse rapide qui a permis de contrôler la situation en moins de 24 heures. En utilisant des communications claires et transparentes, nous avons réussi à rétablir la confiance du public.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientSpotlightSection;
