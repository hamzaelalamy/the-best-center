// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import Cookies from 'js-cookie';
// import { allJobs } from '../components/Jobs/JobExample'; // Import the allJobs array
// import Navbar from '../components/common/Navbar/Navbar';
// import Footer from '../components/common/Footer';

// const SavedPage = () => {
//   const [savedJobs, setSavedJobs] = useState([]);

//   useEffect(() => {
//     const savedJobIds = JSON.parse(Cookies.get('savedJobs') || '[]');
//     const jobs = allJobs.filter(job => savedJobIds.includes(job.id));
//     setSavedJobs(jobs);
//   }, []);

//   const handleUnsave = (jobId) => {
//     const savedJobIds = JSON.parse(Cookies.get('savedJobs') || '[]').filter(id => id !== jobId);
//     Cookies.set('savedJobs', JSON.stringify(savedJobIds), { expires: 7 });
//     setSavedJobs(savedJobs.filter(job => job.id !== jobId));
//   };

//   if (savedJobs.length === 0) {
//     return (
//       <>
//         <Navbar />
//         <div className="container mx-auto px-4 py-8">
//           <p className="text-center mb-6">Aucune offre enregistrée.</p>
//           <div className="text-center mb-4">
//             <Link to="/jobs" className="py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300">
//               Trouver des emplois
//             </Link>
//           </div>
//           <div className="text-center">
//             <Link to="/" className="text-blue-600 hover:underline flex items-center justify-center">
//               <span className="mr-2">←</span> Aller à la page d'accueil
//             </Link>
//           </div>
//         </div>
//         <Footer />
//       </>
//     );
//   }

//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto px-4 py-8">
//         <h1 className="text-2xl font-bold mb-6 text-center pt-24">Offres enregistrées</h1>
//         {savedJobs.map(job => (
//           <div 
//             key={job.id} 
//             className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-4 w-full lg:w-1/2 mx-auto transform transition duration-300 hover:scale-105 hover:shadow-lg"
//           >
//             <div className="flex justify-between items-center">
//               <Link to={`/jobs/${job.id}`} className="text-xl font-semibold text-blue-600 hover:underline">
//                 {job.title}
//               </Link>
//               <button
//                 onClick={() => handleUnsave(job.id)}
//                 className="py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
//               >
//                 Supprimer
//               </button>
//             </div>
//             <p className="text-gray-600">{job.location} | {job.department}</p>
//           </div>
//         ))}
//         <div className="text-center mt-20">
//           <Link to="/jobs" className="py-2 px-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-300">
//             Trouver des emplois
//           </Link>
//         </div>
//         <div className="text-center mt-12">
//           <Link to="/" className="text-blue-600 hover:underline flex items-center justify-center">
//             <span className="mr-2">←</span> Aller à la page d'accueil
//           </Link>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default SavedPage;