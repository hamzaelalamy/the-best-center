import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from "../../../components/common/Navbar/Navbar";
import Footer from "../../../components/common/Footer";
import "../css/Service.css";
//import ServicesPage from '../ServicesPage';
//import Team from "../../../components/landingPage/Team/Team";
import CommercializationWhyUsSection from './CommercializationWhyUsSection'; // Assurez-vous que ce chemin est correct
import CommercializationCenterSection from './CommercializationCenterSection'; // Assurez-vous que ce chemin est correct
import CommercializationTestimonialsSection from './CommercializationTestimonialsSection'; // Assurez-vous que ce chemin est correct
//import InnoverAvecAZHub from '../InnoverAvecAZHub';
//import ServicePageGlobal from '../ServicePageGlobal'; // Assurez-vous que le chemin est correct

const ServiceCommercializationCenter = () => {
  useEffect(() => {
    // Scroll to the top of the page instantly when this component is mounted
    window.scrollTo(0, 0);
  }, []);

  const subtitles = [
    "Des stratégies efficaces pour augmenter vos ventes.",
    "Boostez votre entreprise avec notre expertise en commercialisation.",
    "Atteignez vos objectifs commerciaux avec nos solutions sur mesure."
  ];

  const [currentSubtitle, setCurrentSubtitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prevSubtitle) => (prevSubtitle + 1) % subtitles.length);
    }, 4000); // Change subtitle every 4 seconds

    return () => clearInterval(interval);
  }, [subtitles.length]);

  // Variants for the subtitle animation
  const subtitleVariants = {
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

  // Variants for the container animation
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="commercialization-center-service">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section1" style={{ backgroundImage: 'url(/assets/services/commercializationCenter.jpg)' }}>
        <motion.div
          className="hero-text-container1"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h1 className="hero-title1">Centre de Commercialisation</h1>
          <motion.p
            className="hero-subtitle1"
            key={currentSubtitle} // Key change to trigger the animation
            initial="hidden"
            animate="visible"
            variants={subtitleVariants}
          >
            {subtitles[currentSubtitle]}
          </motion.p>
        </motion.div>
      </section>
      
      {/* Descriptive Section */}
      <motion.section
        className="description-section1"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div className="description-content1" variants={containerVariants}>
          <h2>À propos de notre Centre de Commercialisation</h2>
          <p>
            Notre Centre de Commercialisation vous accompagne dans le développement de stratégies 
            commerciales performantes pour atteindre vos objectifs de vente. Nous proposons une 
            gamme complète de services, y compris l'analyse de marché, le développement de canaux 
            de vente, et la gestion des relations clients.
          </p>
          <p>
            Forts de plusieurs années d'expérience, nos experts travaillent en étroite collaboration 
            avec vos équipes pour concevoir des solutions adaptées à vos besoins spécifiques. Que 
            vous cherchiez à lancer un nouveau produit ou à optimiser vos processus de vente, 
            nous avons les outils et l'expertise pour vous aider à réussir.
          </p>
          <p>
            Notre approche centrée sur le client vous permet de rester compétitif dans un marché 
            en constante évolution. Nous vous aidons à transformer vos idées en succès commerciaux 
            mesurables.
          </p>
        </motion.div>
      </motion.section>
      <CommercializationWhyUsSection />
      <CommercializationCenterSection />
      <CommercializationTestimonialsSection/>

    
      <Footer />
    </div>
  );
};

export default ServiceCommercializationCenter;
