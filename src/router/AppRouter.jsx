import React from 'react';
import { createBrowserRouter, RouterProvider, useLocation, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import LandingPage from '../pages/LandingPage';
import ServicesPage from '../components/services/ServicesPage';
import ServicesAZHub from '../components/services/ServicesAZHub';
import ServiceCommunication from '../components/services/ServiceCommunication/ServiceCommunication';
import ServiceDevWeb from '../components/services/serviceDevWeb/ServiceDevWeb';
import ServiceBureauEtude from '../components/services/serviceBureauEtude/ServiceBureauEtude';
import ServiceCentreComm from '../components/services/serviceCentreComm/serviceCentreComm';
import SupportFonctionnel from '../components/services/supportFonctionnel/supportFonctionnel';
import APropos from '../components/APropos/Apropos';
import ContactUs from '../pages/ContactUs';
import Servicesit from '../components/landingPage/EventActualites/Servicesit';
import SeoAct from '../components/landingPage/EventActualites/SeoAct';
import CommunicationAct from '../components/landingPage/EventActualites/CommunicationAct';
import Portfolio from '../components/Portfolio/Portfolio';
import Projet1 from '../components/Portfolio/Projet1';
import Projet2 from '../components/Portfolio/Projet2';
import Projet3 from '../components/Portfolio/Projet3';
import Projet4 from '../components/Portfolio/Projet4';
import JobBoard from '../pages/JobBoard';
import JobDetailPage from '../pages/JobDetailPage';
import JobFillPage from '../pages/JobFillPage';
import NotFoundPage from '../pages/NotFoundPage'; // Import NotFoundPage

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

const ScrollToTopRoute = () => (
    <>
        <ScrollToTop />
        <Outlet />
    </>
);

const router = createBrowserRouter([
    {
        element: <ScrollToTopRoute />,  // Wrap all routes with ScrollToTop functionality
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
            {
                path: '/services',
                element: <ServicesPage />,
            },
            {
                path: '/jobs',
                element: <JobBoard />,
            },
            {
                path: '/jobs/:id',
                element: <JobDetailPage />,
            },
            {
                path: '/jobs/:id/apply',
                element: <JobFillPage />,
            },
            {
                path: '/ServicesAZHub',
                element: <ServicesAZHub />,
            },
            {
                path: '/services/ServicesAZHub',
                element: <ServicesAZHub />,
            },
            {
                path: '/ServiceCommunication',
                element: <ServiceCommunication />,
            },
            {
                path: '/ServiceDevWeb',
                element: <ServiceDevWeb />,
            },
            {
                path: '/ServiceBureauEtude',
                element: <ServiceBureauEtude />,
            },
            {
                path: '/serviceCentreComm',
                element: <ServiceCentreComm />,
            },
            {
                path: '/services/supportFonctionnel',
                element: <SupportFonctionnel />,
            },
            {
                path: '/contact',
                element: <ContactUs />,
            },
            {
                path: '/About',
                element: <APropos />,
            },
            {
                path: '/Servicesit',
                element: <Servicesit />,
            },
            {
                path: '/SeoAct',
                element: <SeoAct />,
            },
            {
                path: '/CommunicationAct',
                element: <CommunicationAct />,
            },
            {
                path: '/Portfolio',
                element: <Portfolio />,
                children: [
                    {
                        path: 'projet1',
                        element: <Projet1 />,
                    },
                    {
                        path: 'projet2',
                        element: <Projet2 />,
                    },
                    {
                        path: 'projet3',
                        element: <Projet3 />,
                    },
                    {
                        path: 'projet4',
                        element: <Projet4 />,
                    },
                ],
            },
            {
                path: '*', // Catch-all route for 404 Not Found page
                element: <NotFoundPage />,
            },
        ],
    },
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
};

export default AppRouter;
