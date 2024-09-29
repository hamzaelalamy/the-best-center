import React from 'react';
import { RxLetterSpacing } from 'react-icons/rx';

const JobHero = ({ searchTerm, setSearchTerm }) => {
  const backgroundImageStyle = {
    backgroundImage: `url('https://res.cloudinary.com/df74f5pou/image/upload/v1723562512/communication_jozz94.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
      <div
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
          style={backgroundImageStyle}
      >
        {/* Transparent Purple Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

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
        <div className="text-center z-10 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Vous cherchez un emploi ? <br/>Postulez maintenant        </h1>
          <div className="relative max-w-2xl mx-auto">
            <input
                type="text"
                placeholder="Find your job"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-4 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button className="absolute right-1 top-1 bottom-1 px-4 bg-orange-500 rounded-full flex items-center justify-center">
              <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
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

export default JobHero;
