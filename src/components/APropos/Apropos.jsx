import { useState, useEffect, useRef } from "react";
import DataScienceSection from "./DataScienceSection";
import TeamSection from "./TeamSection";
import Navbar from "../../components/common/Navbar/Navbar";
import Footer from "../../components/common/Footer";
import About from "../../components/landingPage/About";
import CoreValuesSection from './CoreValuesSection';
import InnoverAvecAZHub from "../../components/services/InnoverAvecAZHub";
import ServicePageGlobal from '../../components/services/ServicePageGlobal'; // Assurez-vous que le chemin est correct
import LocationsSection from './LocationsSection';
import Heropage from './Heropage';

import WorldPresenceSection from './WorldPresenceSection';

import ResponsibilitySection from './ResponsibilitySection';

function Apropos() {


    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);

    //     return () => clearTimeout(timer); // Cleanup the timer on component unmount
    // }, []);

    return (
        <>

            <Navbar />
            <Heropage />
            {/* <Value /> */}
            {/* <Team /> */}
            <About />
            <ResponsibilitySection />

            {/* <TeamSection /> */}

            <ServicePageGlobal />

            {/* <InnoverAvecAZHub /> */}
            <LocationsSection />

            <Footer />
            {/* </> */}
            {/* )} */}
        </>
    );
}

export default Apropos;
