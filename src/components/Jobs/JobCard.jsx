import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ id, icon, title, description, location, department, postedDate }) => {
    return (
        <div className="flex flex-col md:flex-row items-center bg-white border border-gray-200 rounded-lg shadow-sm transition-shadow duration-300 hover:shadow-lg p-4 sm:p-6 lg:p-8 mb-4 w-full max-w-3xl mx-auto">
            {/* Job Icon */}
            <div
                className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0 mb-4 md:mb-0 md:mr-4"
                dangerouslySetInnerHTML={{ __html: icon }}
            />

            {/* Job Content */}
            <div className="flex-grow text-center md:text-left">
                <h3 className="text-md sm:text-lg font-semibold text-gray-800 transition-colors duration-300 hover:text-[#662483] mb-2">
                    {title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">{description}</p>
                <div className="text-xs sm:text-sm text-gray-500 mb-2">
                    <p><strong>Location:</strong> {location}</p>
                    <p><strong>Départment:</strong> {department}</p>
                    <p><strong>Posted:</strong> {postedDate}</p> {/* Displaying the posted date */}
                </div>
            </div>

            {/* Apply Button */}
            <div className="flex-shrink-0 mt-4 md:mt-0">
                <Link to={`/jobs/${id}`}>
                    <button className="py-1 px-3 sm:py-2 sm:px-4 bg-[#662483] hover:bg-purple-900 text-white rounded-lg transition-colors duration-300">
                        Postuler
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default JobCard;
