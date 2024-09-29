import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const TalentCommunity = () => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg text-center mt-8">
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

const JobSidebar = ({ similarJobs, currentDepartment }) => {
  // Filter similar jobs by the same department
  const filteredJobs = similarJobs.filter(job => job.department === currentDepartment);

  const handleShareClick = (platform) => {
    let shareUrl = window.location.href; // Assuming you're sharing the current page URL
    let shareLink = '';

    switch (platform) {
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'instagram':
        shareLink = `https://www.instagram.com/?url=${encodeURIComponent(shareUrl)}`; // Instagram doesn't allow direct sharing via URL like this
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        break;
    }

    window.open(shareLink, '_blank');
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm max-w-md mx-auto flex flex-col items-center">
      <div className="mb-6 text-center">
        <h3 className="text-lg font-semibold mb-2">Partager cet offre</h3>
        <div className="flex space-x-2 justify-center">
          <button onClick={() => handleShareClick('twitter')}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg"
              alt="X"
              className="w-6 h-6"
            />
          </button>
          <button onClick={() => handleShareClick('instagram')}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png"
              alt="Instagram"
              className="w-6 h-6"
            />
          </button>
          <button onClick={() => handleShareClick('linkedin')}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/480px-LinkedIn_logo_initials.png"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </button>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-2">Offres similaires</h3>
        <ul className="text-gray-700 text-sm sm:text-base">
          {filteredJobs.map((job, index) => (
            <li key={index} className="mb-2">
              <Link to={`/jobs/${job.id}`} className="text-blue-600 hover:underline">
                {job.title} - {job.department}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Integrate the TalentCommunity component here */}
      <TalentCommunity />
    </div>
  );
};

export default JobSidebar;
