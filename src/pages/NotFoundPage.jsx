import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/common/Navbar/Navbar'; // Adjust path as necessary
import Footer from '../components/common/Footer';        // Adjust path as necessary

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          <img
            src="https://res.cloudinary.com/drqovuycp/image/upload/v1724770949/47d64faf-a58b-4394-878a-7299810407d6_p97uxz.jpg"
            alt="404 Not Found"
            className="mx-auto w-full max-w-md px-4"
            style={{ maxWidth: '90vw' }} // Ensures the image is responsive
          />
          <p className="mt-6 mb-4 text-lg text-gray-700">Oups! La page que vous recherchez n'existe pas.</p>
          <button
            onClick={() => navigate('/')}
            className="py-2 px-4 bg-[#442683] hover:bg-purple-950 text-white font-bold rounded-lg"
          >
            Retourner à l'accueil
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
