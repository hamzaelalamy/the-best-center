import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from "../../../components/common/Navbar/Navbar";
import Footer from "../../../components/common/Footer";
import "../css/Service.css";
//import ServicesPage from '../ServicesPage';
//import Team from "../../../components/landingPage/Team/Team";
import CallToActionSection from './CallToActionSection';
import BureauEtudeSection from './BureauEtudeSection'; // Importing the new section
import BureauEtudeWhyUsSection from './BureauEtudeWhyUsSection';
//import InnoverAvecAZHub from '../InnoverAvecAZHub';
//import ServicePageGlobal from '../ServicePageGlobal'; // Assurez-vous que le chemin est correct

const ServiceBureauEtude = () => {
  useEffect(() => {
    // Scroll to the top of the page instantly when this component is mounted
    window.scrollTo(0, 0);
  }, []);

  const subtitles = [
    "Des solutions stratégiques pour vos projets techniques.",
    "Accompagnez votre entreprise avec notre expertise en Bureau d'Étude.",
    "Transformez vos idées en réalités avec nos services d'ingénierie."
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
    <div className="bureau-etude-service">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section1" style={{ backgroundImage: 'url(/assets/services/bureauEtude.jpg)' }}>
        <motion.div
          className="hero-text-container1"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h1 className="hero-title1">Services de Bureau d'Étude </h1>
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
          <h2>À propos de notre Bureau d'Étude</h2>
          <p>
            Notre Bureau d'Étude propose des solutions techniques et d'ingénierie pour accompagner vos projets depuis la conception jusqu'à la réalisation. 
            Nous offrons une expertise dans divers domaines, y compris la mécanique, l'électrique, et le civil, pour garantir la réussite de vos projets.
          </p>
          <p>
            Forts de plusieurs années d'expérience, nos ingénieurs travaillent en étroite collaboration avec vos équipes pour développer des solutions personnalisées 
            qui répondent aux exigences spécifiques de votre entreprise.
          </p>
          <p>
            Que vous ayez besoin de support pour un projet industriel, d'optimisation de processus, ou de conseils techniques, notre Bureau d'Étude est là pour vous aider à chaque étape.
          </p>
        </motion.div>
      </motion.section>
      <CallToActionSection />
      <BureauEtudeSection />
      <BureauEtudeWhyUsSection />
     

      <Footer />
    </div>
  );
};

export default ServiceBureauEtude;
