import { useState, useEffect, useRef } from "react";
import HeroSection from "../components/landingPage/HeroSection";
import Navbar from "../components/common/Navbar/Navbar";
import About from "../components/landingPage/About";
import ServicePage from "../components/services/ServicesPage";
import Footer from "../components/common/Footer";
import Actualites from "../components/landingPage/EventActualites/Actualites";
import Values from '../components/landingPage/Textslider/Textslider';
import { useScroll } from 'framer-motion';
import ScrollAnimation from "../components/landingPage/servicesScroll/ServicesScroll";


function LandingPage() {
    const [loading, setLoading] = useState(true);
    const container = useRef();
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"],
    });


    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);

    //     return () => clearTimeout(timer); // Cleanup the timer on component unmount
    // }, []);

    return (
        <>
            {/* {loading ? (
                <Loading />

            ) : ( */}
            {/* <> */}
            <Navbar />
            <div ref={container} className="relative h-[200vh]">
                <HeroSection scrollYProgress={scrollYProgress} />
                {/* <Produce scrollYProgress={scrollYProgress} /> */}
                <div className="mb-44">
                    <ScrollAnimation />
                </div>
            </div>
            <div className="h-[250vh]" />
            {/* <Produce /> */}
            <ServicePage />
            <About />
            <Values />
            <Actualites />
            {/* <Clients /> */}
            {/* <Value /> */}
            {/* <Team /> */}
            <Footer />
            {/* </> */}
            {/* )} */}
        </>
    );
}

export default LandingPage;
