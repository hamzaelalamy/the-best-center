import { Link } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import './style.css';

const Heropage = ({ searchTerm, setSearchTerm }) => {
  const backgroundImageStyle = {
    backgroundImage: `url('/assets/School/hero.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  useEffect(() => {
    // Scroll to the top of the page instantly when this component is mounted
    window.scrollTo(0, 0);
  }, []);

  // Define variants for the animation
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
        duration: 1.2,
      },
    },
  };

  return (
    <div
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={backgroundImageStyle}
    >
      {/* Transparent Blue Overlay */}
      <div className="absolute inset-0 z-0 bg-blue-900 opacity-60"></div>

      {/* Squiggly lines */}
      <svg
        className="absolute left-0 z-0 w-16 h-full text-blue-300 md:w-24 opacity-20"
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
        className="absolute right-0 z-0 w-16 h-full text-blue-300 md:w-24 opacity-20"
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
      <div className="z-10 px-4 text-center">
        <h1 className="mb-8 text-4xl font-bold text-white md:text-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={revealVariant}
            custom="bottom"
            viewport={{ once: true }}
          >
            École Innovante : Façonnons <br />ensemble votre avenir
          </motion.div>
        </h1>
        <motion.a
          href="/NosProgrammes"
          className="cta-button"
          initial="hidden"
          whileInView="visible"
          variants={revealVariant}
          custom="bottom"
          viewport={{ once: true }}
        >
          Découvrez nos programmes
        </motion.a>
      </div>

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

export default Heropage;