import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/common/Navbar/Navbar';
import Footer from '../components/common/Footer';
import JobTitleSection from '../components/Jobs/JobForm/JobTitleSection';
import ApplicationForm from '../components/Jobs/JobForm/ApplicationForm';
import ThankYouMessage from '../components/Jobs/JobForm/ThankYouMessage';
import LegalDisclaimer from '../components/Jobs/JobForm/LegalDisclaimer';

const JobFillPage = () => {
    const { id } = useParams();
    const jobId = parseInt(id);

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await axios.get(`http://localhost:5555/api/offre/${id}`);
                setJob(response.data);
            } catch (err) {
                setError('Job not found.');
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [id]);

    const handleFormSubmit = () => {
        setFormSubmitted(true);
    };

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
                    <p>{error}</p>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <div className="mt-20">
                    <JobTitleSection title={job.title} department={job.department} />
                </div>

                {formSubmitted ? (
                    <ThankYouMessage />
                ) : (
                    <>
                        <ApplicationForm jobTitle={job.title} onSubmit={handleFormSubmit} />
                        <LegalDisclaimer />
                    </>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default JobFillPage;
