import React from 'react';
import { motion } from 'framer-motion';
import './style.css';

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

// Exemple d'une variante responsive
const revealVariantResponsive = (isMobile) => ({
  hidden: (direction) => ({
    opacity: 0,
    x: !isMobile ? (direction === 'left' ? -200 : direction === 'right' ? 200 : 0) : 0,
    y: !isMobile ? (direction === 'top' ? -200 : direction === 'bottom' ? 200 : 0) : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 1.2,
    },
  },
});

const ResponsibilitySection = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <section className="responsibility-section">
      <div className="responsibility-content">
        <motion.div
          className="responsibility-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={revealVariantResponsive(isMobile)}
          custom="left"
        >
          <h2>Profil de l&apos;école</h2>
          <p>
            À <span className="highlight">l&apos;École Innovante</span>, l&apos;apprentissage et l&apos;épanouissement sont au cœur de notre mission : transformer le potentiel de chaque élève en réussite éclatante. En tant qu'établissement éducatif dynamique, nous ne nous contentons pas de suivre les méthodes traditionnelles, nous innovons constamment. Chaque élève est unique, et notre approche pédagogique est façonnée sur mesure pour répondre aux besoins spécifiques de chacun, avec une expertise aiguisée dans tous les domaines de l'éducation moderne.
          </p>
        </motion.div>
        <motion.div
          className="responsibility-image"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={revealVariantResponsive(isMobile)}
          custom="right"
        >
          <img src="/assets/About/School.jpg" alt="École Innovante" />
        </motion.div>
      </div>
      <div className="certification-content">
        <motion.div
          className="certification-image"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={revealVariantResponsive(isMobile)}
          custom="left"
        >
          <img src="/assets/About/objectif.jpg" alt="Objectifs éducatifs" />
        </motion.div>
        <motion.div
          className="certification-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={revealVariantResponsive(isMobile)}
          custom="right"
        >
          <h2>Notre objectif</h2>
          <p>
            Transformer chaque défi en une opportunité d&apos;apprentissage et de croissance personnelle. À vos côtés, nous traçons la <span className="highlight">voie de la réussite académique et personnelle</span>, guidant et soutenant chaque élève à chaque étape de son parcours éducatif. En véritables architectes de l&apos;éducation du futur, nous fusionnons pédagogie innovante, technologies éducatives et développement personnel pour concevoir des expériences d&apos;apprentissage qui dépassent les attentes. Ensemble, nous redéfinissons les limites de l&apos;éducation pour préparer nos élèves aux défis du monde de demain.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ResponsibilitySection;