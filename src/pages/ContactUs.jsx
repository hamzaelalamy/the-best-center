// src/pages/ContactUs.jsx
import React from 'react';
import Footer from '../components/common/Footer';
import Navbar from '../components/common//Navbar/Navbar';
import ContactForm from '../components/Contact/Contact';
import useScrollToTop from '../hooks/useScrollToTop'; // Import the hook

function ContactUs() {
  useScrollToTop(); // Use the hook to scroll to the top on mount

  return (
    <>
      <Navbar/>
      <ContactForm/>
      <Footer/>
    </>
  );
}

export default ContactUs;