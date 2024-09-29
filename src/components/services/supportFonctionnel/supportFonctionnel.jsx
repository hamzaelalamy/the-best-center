import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from "../../../components/common/Navbar/Navbar";
import Footer from "../../../components/common/Footer";
import "../css/Service.css"; // Assurez-vous de créer ce fichier CSS
//import ServicesPage from '../ServicesPage'; // Assurez-vous que le chemin est correct
//import ServicePageGlobal from '../ServicePageGlobal'; // Assurez-vous que le chemin est correct
//import Team from "../../../components/landingPage/Team/Team";
//import InnoverAvecAZHub from '../InnoverAvecAZHub';
import CallToActionSection from './CallToActionSection';
import SupportFonctionnelSection from './SupportFonctionnelSection';
import SupportFunctionnelSpotlightSection from './SupportFunctionnelSpotlightSection';

const SupportFonctionnel = () => {
  useEffect(() => {
    // Scroll to the top of the page instantly when this component is mounted
    window.scrollTo(0, 0);
  }, []);

  const subtitles = [
    "Un support fonctionnel adapté à vos besoins.",
    "Optimisez vos processus avec notre expertise en support fonctionnel.",
    "Assurez la continuité de vos opérations grâce à notre assistance dédiée."
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
    <div className="support-fonctionnel-service">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section1" style={{ backgroundImage: 'url(/assets/services/commercial.jpg)' }}>
        <motion.div
          className="hero-text-container1"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h1 className="hero-title1">Support Fonctionnel</h1>
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
          <h2>À propos de notre Support Fonctionnel</h2>
          <p>
            Notre service de support fonctionnel est conçu pour vous accompagner dans l'optimisation et la continuité de vos processus métiers. 
            Nous proposons une assistance dédiée pour résoudre vos problèmes opérationnels et améliorer l'efficacité de vos systèmes d'information.
          </p>
          <p>
            Que ce soit pour la maintenance quotidienne, la résolution d'incidents, ou le support utilisateur, notre équipe est à votre disposition pour garantir la performance et la fiabilité de vos opérations.
          </p>
          <p>
            Avec notre expertise en support fonctionnel, vous pouvez vous concentrer sur vos objectifs stratégiques pendant que nous prenons en charge les aspects opérationnels.
          </p>
        </motion.div>
      </motion.section>
      <CallToActionSection />
      <SupportFonctionnelSection />
      <SupportFunctionnelSpotlightSection />

      <Footer />
    </div>
  );
};

export default SupportFonctionnel;
