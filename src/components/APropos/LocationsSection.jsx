import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './style.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const locations = [
  {
    city: 'Salé, Maroc',
    address: 'AV Alazhar résidence Idris Al Azhar n°30',
    contact: '+212 (0) 537 77 77 77',
    email: 'thebestcenter19@gmail.com',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d695.0485149595527!2d-6.806185437821401!3d34.0380591049651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b8fcfbeadeb%3A0x7899fb07d2f60e13!2sThe%20Best%20Center!5e0!3m2!1sen!2sma!4v1727636549398!5m2!1sen!2sma',
  }

];

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
      duration: 1,
    },
  },
};

const LocationsSection = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredLocations = activeTab === 'All' ? locations : locations.filter(location => location.city.includes(activeTab));

  return (
    <section className="locations-section">
      <motion.h2
        className="section-title"
        initial="hidden"
        whileInView="visible"
        variants={revealVariant}
        custom="bottom"
        viewport={{ once: true }}
      >
        Nos Emplacements
      </motion.h2>

      <motion.div
        className="tabs"
        initial="hidden"
        whileInView="visible"
        variants={revealVariant}
        custom="bottom"
        viewport={{ once: true }}
      >
        <span
          className={activeTab === 'All' ? 'active' : ''}
          onClick={() => setActiveTab('All')}
        >
          Emplacement
        </span>
      </motion.div>

      <div className="locations-list">
        {filteredLocations.map((location, index) => (
          <motion.div
            className="location-item"
            key={index}
            initial="hidden"
            whileInView="visible"
            variants={revealVariant}
            custom={index % 2 === 0 ? 'bottom' : 'bottom'}
            viewport={{ once: true }}
          >
            <div className="location-info">
              <h3>{location.city}</h3>
              <div className="location-details">
                <div className="location-address">
                  <p><LocationOnIcon className="location-icon" /> {location.address}</p>
                </div>
                <div className="location-contact">
                  <p><PhoneIcon className="location-icon" /> {location.contact}</p>
                  {location.email && (
                    <p>
                      <EmailIcon className="location-icon" /> <a href={`mailto:${location.email}`}>{location.email}</a>
                    </p>
                  )}
                </div>
              </div>
              <a href={location.map} className="location-directions" target="_blank" rel="noopener noreferrer">
                <LocationOnIcon className="location-icon" /> Obtenir l'itinéraire
              </a>
            </div>
            <div className="location-extra-content">  {/* Nouveau contenu ici */}
              <h4>Horaires d'ouverture</h4>
              <p>Lundi - Vendredi: 09h00 - 22h00</p>
              <p>Samedi - Dimanche: Fermé </p>
            </div>
            <div className="location-map">
              <iframe
                src={location.map}
                allowFullScreen=""
                loading="lazy"
                title={`Map of ${location.city}`}
              ></iframe>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LocationsSection;

