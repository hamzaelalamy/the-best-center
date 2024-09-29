import React from 'react';
import { motion } from 'framer-motion';
import './style.css'; // Make sure this CSS file exists

const ContactButton = () => {
  return (
    <motion.div
      className="contact-button-global"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <a href="/contact" className="contact-button">Contactez-nous</a>
    </motion.div>
  );
};

export default ContactButton;
