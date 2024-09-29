import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import "./css/InnoverAvecAZHub.css"; // Assurez-vous de créer ce fichier CSS

const InnoverAvecAZHub = () => {
  // Variants pour l'animation de la section principale (de bas en haut)
  const sectionVariants = {
    hidden: { opacity: 0, y: 100 },  // Position initiale en bas
    visible: {
      opacity: 1,
      y: 0,  // Position finale
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  // Fonction de compteur pour les nombres
  const Counter = ({ from, to }) => {
    const [count, setCount] = useState(from);
    useEffect(() => {
      if (count < to) {
        const increment = Math.ceil(to / 100); // Ajustez l'incrément pour accélérer ou ralentir le compteur
        const timeout = setTimeout(() => setCount(count + increment), 30);
        return () => clearTimeout(timeout);
      }
    }, [count, to]);
    return <h3>{count}+</h3>;
  };

  return (
    <div className="innover-azhub">
      {/* Section principale */}
      <motion.section
        className="cta-section1"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}  // Appliquer les variantes d'animation
      >
        <motion.div className="cta-wrapper1">
          <div className="cta-content10">
            <h2>Innover avec</h2>
            <img src="https://res.cloudinary.com/dwtsxzrly/image/upload/v1726603951/the_best_logoss_u7mdba.png" alt="AZ Hub Logo" className="azhub-icon" /> {/* Assurez-vous que le chemin de l'image est correct */}
            <p>
              Quelle est la particularité de notre école ?<br />
              Nous vous aidons à développer votre potentiel et à construire votre avenir avec assurance grâce à plus de 5 ans d'expertise pédagogique. Bénéficiez de programmes adaptés et d'un accompagnement personnalisé, qui vous guideront vers un avenir académique brillant et épanouissant.
            </p>
            <a href="https://ma.linkedin.com/company/az-hub?trk=public_post_follow-view-profile" target="_blank" rel="noopener noreferrer">
              <button className="cta-button1">Découvrir nos programmes →</button>
            </a>
          </div>
        </motion.div>
      </motion.section>

      {/* Section des nombres */}
      <section className="numbers-section">
        <div className="numbers-container">
          <div className="number-item">
            <Counter from={0} to={1000} />
            <p>Étudiants formés</p>
          </div>
          <div className="number-item">
            <Counter from={0} to={50} />
            <p>Programmes d'études</p>
          </div>
          <div className="number-item">
            <Counter from={0} to={100} />
            <p>Enseignants qualifiés</p>
          </div>
          <div className="number-item">
            <Counter from={0} to={95} />
            <p>Taux de réussite</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InnoverAvecAZHub;