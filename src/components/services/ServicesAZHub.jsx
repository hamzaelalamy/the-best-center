import React, { useState, useEffect } from 'react';
import Navbar from "../../components/common/Navbar/Navbar";
import Footer from "../../components/common/Footer";
import { motion } from 'framer-motion'; // Importer framer-motion pour l'animation
import ServicesPage from './ServicesPage'; // Assurez-vous que le chemin est correct
import "./css/servicesAzHub.css"; // Import the CSS file specific to this page
import InnoverAvecAZHub from './InnoverAvecAZHub'; // Assurez-vous que le chemin est correct
import Team from "../../components/landingPage/Team/Team";
import ServicePageGlobal from './ServicePageGlobal'; // Assurez-vous que le chemin est correct
import HeroPageServicee from './HeroPageServicee'; // Assurez-vous que le chemin est correct

const backgrounds = [
  {
    image: '/assets/services/serviceimage.jpg',
    title: 'Services',
    subtitle: 'Notre équipe propose des solutions innovantes'
  },
  {
    image: '/assets/services/serviceimage2.jpg',
    title: 'Services',
    subtitle: 'Services de conseil d\'experts pour guider votre stratégie '
  },
  {
    image: '/assets/services/serviceimage3.jpg',
    title: 'Services',
    subtitle: 'Support complet et maintenance pour votre infrastructure technologique.'
  }
];

const ServicesAZHub = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Scroll to the top of the page instantly when this component is mounted
    window.scrollTo(0, 0);
  }, []);

  const { image, title, subtitle } = backgrounds[currentBackground];

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: i * 0.5, // Delay between lines
        ease: "easeInOut"
      }
    })
  };

  const descriptionLines = [
    "AZ Hub allie une expertise approfondie à une passion pour l'innovation",
    "afin d'aider les entreprises à prospérer dans le marché dynamique d'aujourd'hui.",
    "Notre équipe, riche d'une vaste expérience à travers divers secteurs et fonctions,",
    "offre à nos clients des services sur mesure qui stimulent la croissance et maximisent la valeur."
  ];

  return (
    <div className="services-azhub">
      <Navbar />
     
      <HeroPageServicee/>

      <ServicesPage />
      <ServicePageGlobal />

      <InnoverAvecAZHub />

      <Team /> 

      <Footer />
    </div>
  );
};

export default ServicesAZHub;
