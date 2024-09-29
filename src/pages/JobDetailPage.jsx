import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer';
import JobHeader from '../components/Jobs/JobHeader';
import JobDescription from '../components/Jobs/JobDescription';
import JobSidebar from '../components/Jobs/JobSideBar';
import TalentCommunity from '../components/Jobs/TalentCommunity';
import JobSection from '../components/Jobs/JobSection';

const JobDetailPage = () => {
  const { id } = useParams();
  const jobId = parseInt(id);

  const [job, setJob] = useState(null);
  const [similarJobs, setSimilarJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch job details from the backend
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5555/api/offre/${id}`);
        setJob(response.data);

        // Fetch similar jobs based on the department of the fetched job
        const similarJobsResponse = await axios.get('http://localhost:5555/api/offre');
        const filteredSimilarJobs = similarJobsResponse.data.filter(
          (j) => j.department === response.data.department && j.id !== jobId
        ).slice(0, 3); // Limit to 3 similar jobs
        setSimilarJobs(filteredSimilarJobs);
      } catch (err) {
        setError('Error fetching job details.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [jobId]);

  if (loading) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !job) {
    return (
      <div>
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <p>{error || 'Job not found.'}</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <JobSection
        title={job.title}
        department={job.department}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-grow lg:w-2/3">
            <JobHeader
              title={job.title}
              location={job.location}
              department={job.department}
            />
            <JobDescription
              description={job.description}
              responsibilities={job.responsibilities || []}
              qualifications={job.qualifications || []}
            />

            {/* Apply Now Button */}
            <div className="mt-6 justify-center text-center">
              <Link
                to={`/jobs/${id}/apply`}
                className="py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-800 transition-colors duration-300 w-full sm:w-auto"
              >
                Postuler              </Link>
            </div>
          </div>
          <div className="lg:w-1/3 lg:ml-8 mt-8 lg:mt-0">
            <JobSidebar similarJobs={similarJobs} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobDetailPage;