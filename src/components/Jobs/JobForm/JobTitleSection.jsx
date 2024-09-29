import React from 'react';

const JobTitleSection = ({ title, department }) => {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
      <p className="text-gray-600">{department}</p>
    </div>
  );
};

export default JobTitleSection;
    