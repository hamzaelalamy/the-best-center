// src/pages/ServicesPage.jsx

import React from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import serviceData from "../../jsonData/services.json"; 
import "./styles.css"; // Import the CSS file specific to this page
const ServicesPage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto font-sans">
      <h1 className="text-3xl font-semibold mb-8 text-gray-900 text-center">Nos Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceData.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({ service, index }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  if (inView) {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.1 },
    });
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      className="minip" // Use the same class as ProfileCard
    >
      <div className="mg">
        <div className="clr"></div>
        <div className="group">
          
          <span>Services AZ HUB</span>
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
      <Link className="plot" title={`Plot with ${service.title}`} to={service.path}>
        En savoir plus →
      </Link>
    </motion.div>
  );
};

export default ServicesPage;








