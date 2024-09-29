import React from 'react';
import { motion } from 'framer-motion';
import "../css/Service.css"; // Assurez-vous de créer ce fichier CSS

const SupportFunctionnelSpotlightSection = () => {
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
    <section className="support-functionnel-spotlight-section">
      <div className="spotlight-content">
        <h2>Pleins feux sur nos réussites en support fonctionnel</h2>
        <div className="spotlight-grid">
          <motion.div
            className="spotlight-item"
            initial="hidden"
            whileInView="visible"
            variants={leftToRight}
          >
            <h3>Réduction des temps d'arrêt des systèmes critiques</h3>
            <p>
              Une grande entreprise de services financiers a bénéficié d'une réduction de 40% des temps d'arrêt de ses systèmes critiques grâce à notre support fonctionnel réactif. En assurant une surveillance proactive et une résolution rapide des incidents, nous avons permis à l'entreprise de maintenir une disponibilité continue de ses services.
            </p>
          </motion.div>
          <motion.div
            className="spotlight-item"
            initial="hidden"
            whileInView="visible"
            variants={bottomToTop}
          >
            <h3>Optimisation des processus métiers</h3>
            <p>
              Après une analyse approfondie de leurs processus métiers, une entreprise de logistique a vu une amélioration de 25% de l'efficacité opérationnelle grâce à nos recommandations et au déploiement de nouvelles pratiques optimisées. Notre équipe de support fonctionnel a travaillé en étroite collaboration avec les parties prenantes pour garantir une transition en douceur.
            </p>
          </motion.div>
          <motion.div
            className="spotlight-item"
            initial="hidden"
            whileInView="visible"
            variants={rightToLeft}
          >
            <h3>Support utilisateur 24/7</h3>
            <p>
              Un client dans le secteur des télécommunications a vu une augmentation de la satisfaction client de 35% après la mise en place de notre service de support utilisateur 24/7. Grâce à une assistance continue et à des solutions rapides, nous avons amélioré l'expérience utilisateur et réduit les délais de réponse aux demandes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SupportFunctionnelSpotlightSection;
