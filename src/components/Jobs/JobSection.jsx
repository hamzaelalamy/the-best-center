import React from 'react';

// Image mapping based on job department
const departmentImages = {
  'Développement Web et Mobile': 'https://res.cloudinary.com/df74f5pou/image/upload/v1723562512/dev_filb9w.jpg',
  "Bureau d'étude": 'https://res.cloudinary.com/df74f5pou/image/upload/v1723562543/support_hz3qst.jpg',
  'Communication': 'https://res.cloudinary.com/df74f5pou/image/upload/v1723562512/communication_jozz94.jpg',
  'Support fonctionnel': 'https://res.cloudinary.com/df74f5pou/image/upload/v1723562530/etude_i7xvef.jpg',
  'Centre Commercial': 'https://res.cloudinary.com/df74f5pou/image/upload/v1723562512/center_eeayay.jpg',
};

const JobSection = ({ title, department }) => {
  // Determine the background image based on the job's department
  const backgroundImage = departmentImages[department] || 'https://res.cloudinary.com/drqovuycp/image/upload/v1724756190/291fbcfd-1594-4e57-a01a-9bd127e88330_gt0d9g.jpg';  // Fallback to a specified default image if no match

  return (
      <div
          className="relative h-[65vh] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* Job Title */}
        <h1 className="relative z-10 text-4xl sm:text-8xl text-white font-bold text-center px-4">
          {title}
        </h1>
      </div>
  );
};

export default JobSection;
