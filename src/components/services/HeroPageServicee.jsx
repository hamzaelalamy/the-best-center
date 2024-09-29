import { Link } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroPageSchool = ({ searchTerm, setSearchTerm }) => {
  const images = [
    {
      image: '/assets/school/classroom.jpg',
      title: 'Nos enseignants ',
      subtitle: 'inspirent l\'excellence académique',
    },
    {
      image: '/assets/school/laboratory.jpg',
      title: 'Programmes innovants',
      subtitle: 'pour préparer les leaders de demain',
    },
    {
      image: '/assets/school/sports.jpg',
      title: 'Développement complet',
      subtitle: 'académique et artistique',
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Scroll to the top of the page instantly when this component is mounted
    window.scrollTo(0, 0);

    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(intervalId);
  }, [images.length]);

  const revealVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
      },
    },
    exit: { opacity: 0, x: 100, transition: { duration: 1.2 } },
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0"
        key={images[currentImageIndex].image}
        style={{
          backgroundImage: `url(${images[currentImageIndex].image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={revealVariant}
      />

      {/* Transparent Overlay */}
      <div className="absolute inset-0 z-0 bg-black opacity-60"></div>

      {/* Squiggly lines */}
      <svg
        className="absolute left-0 h-full w-16 md:w-24 text-[#662483] opacity-20 z-0"
        viewBox="0 0 100 1000"
      >
        <path
          d="M0,0 Q25,100 0,200 T0,400 T0,600 T0,800 T0,1000"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          className="animate-squiggle"
        />
      </svg>
      <svg
        className="absolute right-0 h-full w-16 md:w-24 text-[#662483] opacity-20 z-0"
        viewBox="0 0 100 1000"
      >
        <path
          d="M100,0 Q75,100 100,200 T100,400 T100,600 T100,800 T100,1000"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          className="animate-squiggle"
        />
      </svg>

      {/* Content */}
      <motion.div
        className="z-10 px-4 text-center"
        key={images[currentImageIndex].title}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={revealVariant}
      >
        <motion.h1
          className="mb-8 text-4xl font-bold text-center text-white md:text-6xl"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={revealVariant}
        >
          {images[currentImageIndex].title} <br />
          {images[currentImageIndex].subtitle}
        </motion.h1>
        <motion.a
          href="/inscription"
          className="cta-button"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={revealVariant}
        >
          Inscrivez-vous
        </motion.a>
      </motion.div>

      {/* Custom CSS */}
      <style jsx>{`
        @keyframes smoothFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-smooth-float {
          animation: smoothFloat 2.5s ease-in-out infinite;
        }

        .animate-smooth-float-delay {
          animation: smoothFloat 2s ease-in-out 1s infinite;
        }

        .animate-squiggle {
          animation: smoothFloat 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroPageSchool;