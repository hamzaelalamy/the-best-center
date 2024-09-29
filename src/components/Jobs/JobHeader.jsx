import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const JobHeader = ({ title, location, department, jobId }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedJobs = JSON.parse(Cookies.get('savedJobs') || '[]');
    setIsSaved(savedJobs.includes(jobId));
  }, [jobId]);

  const handleSave = () => {
    let savedJobs = JSON.parse(Cookies.get('savedJobs') || '[]');

    if (isSaved) {
      savedJobs = savedJobs.filter(id => id !== jobId);
    } else {
      savedJobs.push(jobId);
    }

    Cookies.set('savedJobs', JSON.stringify(savedJobs), { expires: 7 });
    setIsSaved(!isSaved);
  };

  return (
    <div className="bg-white px-6 pt-6 rounded-lg  mb-6 mx-auto justify-center pb-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center">{title}</h1>
      <p className="text-sm sm:text-base text-gray-600 mb-4 text-center">{location} | {department}</p>
      {/* <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center">
        <button
          onClick={handleSave}
          className={`py-2 px-4 rounded-lg transition-colors duration-300 w-full sm:w-auto ${isSaved ? 'bg-gray-400' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
        >
          {isSaved ? 'Enregistré' : 'Sauvegarder'}
        </button>
        <Link
          to={`/jobs/${jobId}/apply`}
          className="py-2 px-4 bg-[#662483] text-white rounded-lg transition-colors duration-300 w-full sm:w-auto text-center"
        >
          Postuler
        </Link>
      </div> */}
    </div>
  );
};

export default JobHeader;