import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const TalentCommunity = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-center mt-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">Contactez-nous pour toute demande</h2>
      <div className="text-sm sm:text-base text-gray-700 mb-6">
        <p className="flex items-center justify-center mb-2">
          <FaEnvelope className="mr-2" />
          <a href="mailto:jobs@az-hub.net" className="text-blue-600 hover:underline">
            jobs@az-hub.net
          </a>
        </p>
        <p className="flex items-center justify-center mb-2">
          <FaPhone className="mr-2" />
          <a href="tel:+33123456789" className="text-blue-600 hover:underline">
            +33 1 23 45 67 89
          </a>
        </p>
        <p className="flex items-center justify-center">
          <FaMapMarkerAlt className="mr-2" />
          <a
            href="https://maps.app.goo.gl/asyWbT3iM9a8fpYTA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            13 Av. Annaba 4eme étage Rabat
          </a>
        </p>
      </div>
      <Link to='/contact'>
      <button className="py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300">
        Nous Contacter
      </button>
      </Link>

    </div>
  );
};

export default TalentCommunity;
