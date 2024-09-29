import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from "../../../components/common/Navbar/Navbar";
import Footer from "../../../components/common/Footer";
import "../css/Service.css";
import ServicesPage from '../ServicesPage';
import CallToActionSection from './CallToActionSection';
import CommunicationToolsSection from './CommunicationToolsSection';
import ClientSpotlightSection from './ClientSpotlightSection';

const CommunicationService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const subtitles = [
    "Des solutions stratégiques pour votre communication d'entreprise.",
    "Améliorez votre visibilité avec nos services de communication experts.",
    "Gérez efficacement vos relations médiatiques et votre image de marque."
  ];

  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prevSubtitle) => (prevSubtitle + 1) % subtitles.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [subtitles.length]);

  // Variants for the subtitle animation
  const subtitleVariants = {
    hidden: { opacity: 0, x: isMobile ? 0 : -100 },
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
    hidden: { opacity: 0, y: isMobile ? 0 : 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: isMobile ? 0 : 0.3,
      },
    },
  };

  return (
    <div className="communication-service">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section1" style={{ backgroundImage: 'url(/assets/services/herocommunication.jpg)' }}>
        <motion.div
          className="hero-text-container1"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <h1 className="hero-title1">Services de Communication d'Entreprise</h1>
          <motion.p
            className="hero-subtitle1"
            key={currentSubtitle}
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
          <h2>À propos de nos services de communication</h2>
          <p>
            Nos services de communication d'entreprise sont conçus pour renforcer la voix et le message de votre marque.
            Nous offrons une gamme complète de services, y compris les relations publiques, la gestion des médias, 
            et les communications internes, adaptés aux besoins uniques de votre entreprise.
          </p>
          <p>
            Nous comprenons l'importance d'une communication claire et efficace dans l'environnement commercial d'aujourd'hui.
            C'est pourquoi notre équipe d'experts travaille en étroite collaboration avec vous pour élaborer des récits percutants 
            qui résonnent avec votre public et s'alignent sur vos objectifs commerciaux. De la rédaction de communiqués de presse 
            à la gestion des relations avec les médias, nous veillons à ce que votre message soit entendu haut et fort.
          </p>
          <p>
            Que vous cherchiez à améliorer l'image publique de votre marque, à mieux engager vos employés, 
            ou à gérer une crise, nos services de communication sont là pour vous soutenir à chaque étape.
          </p>
        </motion.div>
      </motion.section>
      <CallToActionSection />
      <CommunicationToolsSection />
      <ClientSpotlightSection />


         

      <Footer />
    </div>
  );
};

export default CommunicationService;
