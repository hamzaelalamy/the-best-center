import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const images = [
  '/assets/About/Hub.jpg',
  '/assets/About/Hub2.jpg',
  '/assets/About/Hub3.jpg', // Add more image paths as needed
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const topShown = rect.top >= 0 && rect.top < window.innerHeight;
        if (topShown) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially in case the section is already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(imageInterval);
  }, []);

  const imageVariants = {
    hidden: { opacity: 0, x: -100, y: 100 }, // Start from bottom-left
    visible: { opacity: 1, x: 0, y: 0 },   // Move to original position
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100, y: 100 }, // Start from bottom-right
    visible: { opacity: 1, x: 0, y: 0 },   // Move to original position
  };

  return (
    <motion.section
      ref={sectionRef}
      className=""
      initial="hidden"
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="about-image"
        initial="hidden"
        transition={{ duration: 1 }}
      >
        <img src={images[currentImageIndex]} alt="AZ HUB Building" />
      </motion.div>
      <motion.div
        className="about-content2"
        initial="hidden"
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2>Profil de l'entreprise</h2>
        <p>
          Chez AZ HUB, la créativité et l’innovation sont le cœur battant de notre mission : transformer vos idées en succès retentissants. En tant qu'agence de communication dynamique, nous ne nous contentons pas de suivre les tendances, nous les créons. Chaque projet est une aventure unique, façonnée sur mesure pour répondre à vos besoins spécifiques, avec une expertise aiguisée dans tous les aspects de la communication.
        </p>
        <p>
          Notre objectif ? Transformer chaque défi en une opportunité de croissance. À vos côtés, nous traçons la voie du succès, vous guidant et vous soutenant à chaque étape de votre parcours. En véritables architectes de votre futur numérique, nous fusionnons créativité, innovation et technologie pour concevoir des expériences qui dépassent les attentes de vos clients. Ensemble, nous redéfinissons les limites de la communication digitale.
        </p>
        
      </motion.div>
    </motion.section>
  );
};

export default AboutSection;
