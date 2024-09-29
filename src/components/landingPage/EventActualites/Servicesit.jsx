import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../common/Navbar/Navbar';
import Footer from '../../common/Footer';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { BiShareAlt } from 'react-icons/bi';
import { FiTag } from 'react-icons/fi';

const Servicesit = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="w-full max-w-3xl">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center text-[#662483] font-semibold mb-4"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5" 
              stroke="currentColor" 
              className="w-5 h-5 me-2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            Retour
          </button>
          <h1 className="text-4xl font-bold text-[#662483] mb-4">Lorem Ipsum is simply dummy text of the printing</h1>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-blue-600 bg-blue-100 rounded-full px-3 py-1">Communiqués de presse</span>
            <span className="text-xs text-[#f29100]">Lundi 5 Août 2024</span>
          </div>
          <div className="mb-8 mt-9">
            <img 
              src="/assets/actualite/Rectangle.png" 
              alt="Office with people working on computers" 
              className="w-full h-auto rounded-md transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="text-lg text-gray-700 mt-9">
            <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start hover:text-purple-900 hover:bg-purple-400 transition duration-300 ease-in-out hover:shadow-lg">
              Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.
            </p>
            <p className="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
            <p className="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
            <p className="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
            <p className="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
            <p className="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
            <p className="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
          </div>
          <div className="mt-8 border-t border-gray-300 pt-4">
            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <BiShareAlt className="text-[#662483]" size={24} />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-black" size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-black" size={24} />
                </a>
              </div>
            </div>
            <div className="flex space-x-2 mt-6">
                <FiTag className="text-[#662483]" size={30} />
                <span className="text-sm text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
              </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Servicesit;
