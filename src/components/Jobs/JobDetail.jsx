import React from 'react';
import { useParams } from 'react-router-dom';
import { allJobs } from './JobExample'; // Ensure this import is correct

const JobDetail = () => {
  const { id } = useParams();
  const jobId = parseInt(id); // Convert ID from URL to an integer

  // Retrieve the job from the job list
  const job = allJobs.find((job) => job.id === jobId);

  // If the job is not found (e.g., the user manually entered an invalid ID), display a message
  if (!job) {
    return <p>Job not found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
        <p className="text-gray-600 mb-2">{job.department}</p>
        <p className="text-gray-500 mb-4">{job.timestamp} jours</p>
        <p className="text-lg mb-6">{job.description}</p>
        <button className="py-2 px-4 bg-[#662483] text-white roundedtransition-colors duration-300 mb-4">
          Postulez Maintenant
        </button>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed">This is a sample job description to test the JobDetail page layout and functionality. Ensure that all components are responsive and align well with the design specifications.</p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Criterie</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li><strong>Type de Diplome:</strong> {job.department.includes('web') ? "Bachelor's Degree in Computer Science" : "Relevant field"}</li>
            <li><strong>Années d'Expérience:</strong> {job.experience}</li>
          </ul>
        </div>
        <div className="text-center mt-8">
          <button className="py-2 px-4 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors duration-300">
            Postuler Maintenant
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
