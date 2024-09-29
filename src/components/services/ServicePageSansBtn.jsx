import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import serviceData from "../../jsonData/services.json";
import "./styles.css"; // Import the CSS file specific to this page
import { FaArrowRight } from 'react-icons/fa';

const descriptionLines = [
  <span className="underline-gradient">Explorez nos offres</span>,
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
    <div ref={ref} className="p-6 max-w-7xl mx-auto font-sans">
      <motion.div
        className="description-container"
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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
      >
        {serviceData.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
            variants={variants}
          />
        ))}
      </motion.div>
    </div>
  );
};

const ServiceCard = ({ service, variants }) => {
  return (
    <motion.div className="minip" variants={variants}>
      <div className="mg">
        <div className="clr">
          <p className="description">{service.description}</p>
        </div>
        <div className="group">
          <Link to="/" className="az-hub-link">
            <img
              src="/assets/services/az-hub-icon.png"
              alt="AZ HUB Icon"
              className="az-hub-icon"
            />
          </Link>
        </div>
      </div>
      <div
        className="av"
        style={{
          backgroundImage: `url(${service.image})`,
        }}
      ></div>
      <div className="info">
        <div className="name">{service.title}</div>
        <div className="deets">{service.description}</div>
      </div>
      <Link
        className="plot"
        title={`Plot with ${service.title}`}
        to={service.path}
      >
        En savoir plus  <FaArrowRight className="ml-2" />
      </Link>
    </motion.div>
  );
};

export default ServicesPage;
