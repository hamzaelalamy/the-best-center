import React from 'react';
import { Link } from 'react-router-dom';
const SocialMediaButtons = () => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      {/* X (Twitter) Button */}
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
          alt="X"
          className="w-8 h-8"
        />
      </a>

      {/* Instagram Button */}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
          alt="Instagram"
          className="w-8 h-8"
        />
      </a>

      {/* LinkedIn Button */}
      <a href="https://www.linkedin.com/company/az-hub/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
          alt="LinkedIn"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
};

const ThankYouMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] p-4">
      <h1 className="text-3xl font-bold text-[#662483] mb-4">Merci pour votre soumission !</h1>
      <p className="text-lg text-gray-700 mb-6">Votre formulaire a été soumis avec succès.</p>
      <p className="text-md text-gray-600 mb-6">Vous pouvez nous suivre sur nos réseaux sociaux :</p>
      
      <SocialMediaButtons />

      <div className="mt-8 gap-10 flex">
        <Link to="/">
        <button
         
          className="py-2 px-4 bg-[#662483] text-white rounded-lg transition-colors duration-300 hover:bg-[#4a1e60]"
        >
          Retour à l'accueil
        </button>
        </Link>
        <Link to="/jobs">
        <button
         
          className="py-2 px-4 bg-orange-500 text-white rounded-lg transition-colors duration-300 hover:bg-[#4a1e60]"
        >
          Postuler
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouMessage;
