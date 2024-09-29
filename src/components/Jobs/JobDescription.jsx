import React from 'react';

const JobDescription = ({ description, responsibilities, qualifications }) => {
  return (
    <div className="bg-white py-6 pl-12 pr-6 md:p-8 rounded-lg shadow-lg mb-8 ">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Description</h2>
      <p className="text-base md:text-[16px] text-gray-700 mb-6">
        {description}
      </p>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Responsibilités</h2>
      <ul className="list-disc list-inside text-base md:text-[16px] text-gray-700 mb-6">
        {responsibilities.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Qualifications</h2>
      <ul className="list-disc list-inside text-base md:text-[16px] text-gray-700">
        {qualifications.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobDescription;
