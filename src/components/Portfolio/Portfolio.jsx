import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../../components/common/Navbar/Navbar';
import Footer from '../../components/common/Footer';
import { IoMdArrowForward } from 'react-icons/io';

const ProjectsSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize(); 

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    <div>
      <Navbar />
      <section className="flex justify-center items-center min-h-screen mt-16">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="title-wrapper flex flex-col lg:flex-row justify-between items-center mb-12 mt-12">
            <div className="text-center lg:text-left lg:w-2/3">
              <h2 className="text-4xl font-bold text-[#662483]" id="project-label">Derniers projets</h2>
              <p className="text-black mt-4">
                Découvrez certains de nos derniers projets avec des idées créatives.
              </p>
            </div>

            <a
              href="#"
              className="btn btn-secondary text-[#662483] mt-4 lg:mt-0 border-2 border-[#662483] px-6 py-3 rounded-full"
            >
              Voir tous les projets
            </a>
          </div>

          <ul className="grid gap-16">
            {/* First Project */}
            <li className="flex flex-col lg:flex-row bg-[#f8f5fb] p-10 rounded-lg">
        {isMobile ? (
        <>
      <div className="card-content lg:w-1/2">
        <p className="text-[#a07cc5] font-semibold mt-2">Web Design</p> 
        <h3 className="text-3xl font-semibold mt-2">Lorem Ipsum</h3>
        <p className="text-gray-600 mt-2"> 
          Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.
        </p>
        <Link to="/portfolio/projet1" className="text-[#a07cc5] mt-4 flex items-center text-lg">
          Voir le projet <IoMdArrowForward className="ml-2" />
        </Link>
      </div>
      <figure className="lg:w-1/2 lg:ml-8 mt-2 lg:mt-0">
        <img
          src="/assets/Portfolio/project-1.png"
          loading="lazy"
          alt="Web Design"
          className="w-[400px] h-[400px] object-contain rounded-lg"
        />
      </figure>
    </>
  ) : (
    <>
      <motion.div
        className="card-content lg:w-1/2"
        initial="hidden"
        whileInView="visible"
        variants={revealVariant}
        custom="left"
        viewport={{ once: true }}
      >
        <p className="text-[#a07cc5] font-semibold mt-16">Web Design</p>
        <h3 className="text-3xl font-semibold mt-2">Lorem Ipsum</h3>
        <p className="text-gray-600 mt-4">
          Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.
        </p>
        <Link to="/portfolio/projet1" className="text-[#a07cc5] mt-4 flex items-center text-lg">
          Voir le projet <IoMdArrowForward className="ml-2" />
        </Link>
      </motion.div>
      <motion.figure
        className="lg:w-1/2 lg:ml-8 mt-6 lg:mt-0"
        initial="hidden"
        whileInView="visible"
        variants={revealVariant}
        custom="right"
        viewport={{ once: true }}
      >
        <img
          src="/assets/Portfolio/project-1.png"
          loading="lazy"
          alt="Web Design"
          className="w-[400px] h-[400px] object-contain rounded-lg"
        />
      </motion.figure>
    </>
  )}
</li>

<li className="flex flex-col lg:flex-row bg-[#f1f5fd] p-10 rounded-lg">
  {isMobile ? (
    <>
      <figure className="lg:w-1/2 lg:mr-8 mt-2 lg:mt-0"> 
        <img
          src="/assets/Portfolio/project-2.png"
          loading="lazy"
          alt="Mobile Design"
          className="w-[400px] h-[400px] object-contain rounded-lg"
        />
      </figure>
      <div className="card-content lg:w-1/2">
        <p className="text-[#3f78e0] font-semibold mt-2">Mobile Design</p> 
        <h3 className="text-3xl font-semibold mt-2">Lorem Ipsum</h3>
        <p className="text-gray-600 mt-2"> 
          Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.
        </p>
        <Link to="/portfolio/projet2" className="text-[#3f78e0] mt-2 flex items-center text-lg">
          Voir le projet <IoMdArrowForward className="ml-2" />
        </Link>
      </div>
    </>
  ) : (
   
    <>
      <motion.figure
        className="lg:w-1/2 lg:mr-8 mb-6 lg:mb-0"
        initial="hidden"
        whileInView="visible"
        variants={revealVariant}
        custom="left"
        viewport={{ once: true }}
      >
        <img
          src="/assets/Portfolio/project-2.png"
          loading="lazy"
          alt="Mobile Design"
          className="w-[400px] h-[400px] object-contain rounded-lg"
        />
      </motion.figure>
      <motion.div
        className="card-content lg:w-1/2"
        initial="hidden"
        whileInView="visible"
        variants={revealVariant}
        custom="right"
        viewport={{ once: true }}
      >
        <p className="text-[#3f78e0] font-semibold mt-16">Mobile Design</p>
        <h3 className="text-3xl font-semibold mt-2">Lorem Ipsum</h3>
        <p className="text-gray-600 mt-4">
          Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula porta felis euismod semper. Fusce dapibus tellus cursus.
        </p>
        <Link to="/portfolio/projet2" className="text-[#3f78e0] mt-4 flex items-center text-lg">
          Voir le projet <IoMdArrowForward className="ml-2" />
        </Link>
      </motion.div>
    </>
  )}
</li>


            {/* Additional projects */}
            <li className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {isMobile ? (
                <>
                  <div className="bg-[#f5faf7] p-10 rounded-lg flex flex-col">
                    <div className="card-content">
                      <p className="text-[#7cb798] font-semibold">Web Design</p>
                      <h3 className="text-3xl font-semibold mt-2">Lorem Ipsum</h3>
                      <p className="text-gray-600 mt-4">
                        Maecenas faucibus mollis interdum sed posuere porta consectetur cursus porta lobortis.
                        Scelerisque id ligula felis.
                      </p>
                      <Link to="/portfolio/projet3" className="text-[#7cb798] mt-4 flex items-center text-lg">
                        Voir le projet <IoMdArrowForward className="ml-2" />
                      </Link>
                    </div>
                    <figure className="mt-6" data-reveal="right">
                      <img
                        src="/assets/Portfolio/project-3.png"
                        loading="lazy"
                        alt="Web Design"
                        className="w-full rounded-lg"
                      />
                    </figure>
                  </div>

                  <div className="bg-[#fcf4f6] p-10 rounded-lg flex flex-col">
                    <div className="card-content">
                      <p className="text-[#d16b86] font-semibold">Mobile Design</p>
                      <h3 className="text-3xl font-semibold mt-2">Lorem Ipsum</h3>
                      <p className="text-gray-600 mt-4">
                        Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula
                        porta felis euismod semper.
                      </p>
                      <Link to="/portfolio/projet4" className="text-[#d16b86] mt-4 flex items-center text-lg">
                        Voir le projet <IoMdArrowForward className="ml-2" />
                      </Link>
                    </div>
                    <figure className="mt-6" data-reveal="right">
                      <img
                        src="/assets/Portfolio/project-4.png"
                        loading="lazy"
                        alt="Mobile Design"
                        className="w-full rounded-lg"
                      />
                    </figure>
                  </div>
                </>
              ) : (
                <>
                  <motion.div
                    className="bg-[#f5faf7] p-10 rounded-lg flex flex-col"
                    initial="hidden"
                    whileInView="visible"
                    variants={revealVariant}
                    custom="left"
                    viewport={{ once: true }}
                  >
                    <div className="card-content">
                      <p className="text-[#7cb798] font-semibold">Web Design</p>
                      <h3 className="text-3xl font-semibold mt-2">Lorem Ipsum</h3>
                      <p className="text-gray-600 mt-4">
                        Maecenas faucibus mollis interdum sed posuere porta consectetur cursus porta lobortis.
                        Scelerisque id ligula felis.
                      </p>
                      <Link to="/portfolio/projet3" className="text-[#7cb798] mt-4 flex items-center text-lg">
                        Voir le projet <IoMdArrowForward className="ml-2" />
                      </Link>
                    </div>
                    <figure className="mt-6" data-reveal="right">
                      <img
                        src="/assets/Portfolio/project-3.png"
                        loading="lazy"
                        alt="Web Design"
                        className="w-full rounded-lg"
                      />
                    </figure>
                  </motion.div>

                  <motion.div
                    className="bg-[#fcf4f6] p-10 rounded-lg flex flex-col"
                    initial="hidden"
                    whileInView="visible"
                    variants={revealVariant}
                    custom="right"
                    viewport={{ once: true }}
                  >
                    <div className="card-content">
                      <p className="text-[#d16b86] font-semibold">Mobile Design</p>
                      <h3 className="text-3xl font-semibold mt-2">Lorem Ipsum</h3>
                      <p className="text-gray-600 mt-4">
                        Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis. Scelerisque id ligula
                        porta felis euismod semper.
                      </p>
                      <Link to="/portfolio/projet4" className="text-[#d16b86] mt-4 flex items-center text-lg">
                        Voir le projet <IoMdArrowForward className="ml-2" />
                      </Link>
                    </div>
                    <figure className="mt-6" data-reveal="right">
                      <img
                        src="/assets/Portfolio/project-4.png"
                        loading="lazy"
                        alt="Mobile Design"
                        className="w-full rounded-lg"
                      />
                    </figure>
                  </motion.div>
                </>
              )}
            </li>
          </ul>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectsSection;
