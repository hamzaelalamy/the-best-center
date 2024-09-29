import React, { useState } from 'react';
import { Outlet } from 'react-router-dom'; // Import Outlet for nested routing
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar/Navbar';
import JobHero from '../components/Jobs/JobHero';
import JobExample from '../components/Jobs/JobExample';

function JobBoard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOffer, setSelectedOffer] = useState('');

  return (
    <>
      <Navbar />
      <JobHero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <JobExample searchTerm={searchTerm} setSearchTerm={setSearchTerm} onSelectOffer={setSelectedOffer} />
      <Outlet /> {/* Renders the JobDetail component when a job is selected */}

      <Footer />
    </>
  );
}

export default JobBoard;
