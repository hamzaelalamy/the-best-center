import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import serviceData from "../../jsonData/services.json";
import "./css/styles.css"; // Import the CSS file specific to this page

const descriptionLines = [
  <span key="description-1" className="underline-gradient">Explorez nos services</span>,
];

const ServicesPage = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  return (
    <div ref={ref} className="p-6 mx-auto font-sans max-w-7xl">

      {/* Titre ajouté avec espace en bas */}
      <motion.div
        className="pl-0 description-container" // Ajout de la classe mb-8 pour un espace en bas
        style={{ marginBottom: '3rem' }} // Ajout d'une marge inférieure de 3rem

        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
      >
        {descriptionLines.map((line, index) => (
          <motion.p key={index} variants={variants}>
            {line}
          </motion.p>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-8 px-10 sm:grid-cols-2 lg:grid-cols-3" // Ajout de la classe px-4 pour un espace à gauche et à droite
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
      >
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            variants={variants}
          />
        ))}
      </motion.div>

    </div>
  );
};

const ServiceCard = ({ service, variants }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`service-card ${isHovered ? 'hovered' : ''}`} // Ajout de la classe 'hovered'
      variants={variants}
      onMouseEnter={() => setIsHovered(true)} // Déclenche l'animation au survol
      onMouseLeave={() => setIsHovered(false)} // Annule l'animation lorsque la souris quitte la carte
    >
      <div className="service-image-container">
        <img src={service.image} alt={service.title} className="service-image" />
        <img src="/assets/services/az-hub-icon.png" alt="AZ Hub Icon" className="az-hub-icon" />
      </div>
      <div className="service-content">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <Link to={service.path} className="service-link">
          En savoir plus →
        </Link>
      </div>
    </motion.div>
  );
};

export default ServicesPage;

