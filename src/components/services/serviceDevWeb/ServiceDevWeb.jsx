import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from "../../../components/common/Navbar/Navbar";
import Footer from "../../../components/common/Footer";
import "../css/Service.css"; // Assurez-vous de créer ce fichier CSS
//import ServicesPage from '../ServicesPage'; // Assurez-vous que le chemin est correct
//import ServicePageGlobal from '../ServicePageGlobal'; // Assurez-vous que le chemin est correct
//import Team from "../../../components/landingPage/Team/Team";
import CallToActionSection from './CallToActionSection';
import WebDevFeaturesSection from './WebDevFeaturesSection'; // Importez le nouveau composant
import ArchitectureSection from './ArchitectureSection'; // Assurez-vous que ce chemin est correct
import SubscriptionSection from './SubscriptionSection'; // Assurez-vous que ce chemin est correct

//import InnoverAvecAZHub from '../InnoverAvecAZHub';

const ServiceDevWeb = () => {
  useEffect(() => {
    // Scroll to the top of the page instantly when this component is mounted
    window.scrollTo(0, 0);
  }, []);

  const subtitles = [
    "Des solutions stratégiques pour votre développement web.",
    "Boostez votre présence en ligne avec nos services de développement experts.",
    "Créez des applications web robustes et évolutives pour votre entreprise."
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
    <div className="development-service">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section1" style={{ backgroundImage: 'url(/assets/services/devWeb.jpg)' }}>
        <motion.div
          className="hero-text-container1"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h1 className="hero-title1">Services de Développement Web</h1>
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
          <h2>À propos de nos services de développement web</h2>
          <p>
            Nos services de développement web sont conçus pour créer des solutions numériques sur mesure qui répondent aux besoins spécifiques de votre entreprise. 
            Que vous ayez besoin d'un site web vitrine, d'une plateforme e-commerce ou d'une application web complexe, nous avons l'expertise pour réaliser vos projets.
          </p>
          <p>
            Notre équipe de développeurs expérimentés utilise les technologies les plus récentes pour assurer la performance, la sécurité et la scalabilité de vos applications web.
            Nous travaillons en étroite collaboration avec vous pour comprendre vos objectifs commerciaux et créer des solutions qui soutiennent votre croissance.
          </p>
          <p>
            Que vous souhaitiez améliorer votre présence en ligne, automatiser vos processus métier ou lancer un nouveau produit, nos services de développement web sont là pour vous accompagner à chaque étape.
          </p>
        </motion.div>
      </motion.section>
      <CallToActionSection />
      <WebDevFeaturesSection />
      <ArchitectureSection />
      <SubscriptionSection />

     

      <Footer />
    </div>
  );
};

export default ServiceDevWeb;
