import React from 'react';
import { motion, useTransform } from 'framer-motion';
import Button from "../common/styledButton/Button";

function HeroSection({ scrollYProgress }) {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

    return (
        <motion.div style={{ scale, rotate }} className="sticky top-0 flex flex-col items-center justify-center h-screen text-white">
            <img
                src='https://res.cloudinary.com/dwtsxzrly/image/upload/v1726611729/girl-writing-posing-school_Custom_sigwwq.jpg'
                alt="Élève qui étudie"
                className='absolute inset-0 object-cover w-full h-full'
            />
            <div className='absolute inset-0 bg-black opacity-50'></div>
            <div className='relative z-10 flex flex-col items-center px-4 text-center sm:px-6 md:px-8 lg:px-20'>
                <h1 className='mb-6 text-4xl font-bold sm:text-5xl lg:text-6xl'>
                    Libérez Votre Potentiel dans Notre École
                </h1>
                <p className='max-w-2xl mb-8 text-xl sm:text-2xl'>
                    Rejoignez notre communauté dynamique. Ensemble, façonnons votre avenir et atteignons vos objectifs.                </p>
                <Button
                    id="signUpButton"
                    text="S'inscrire Maintenant"
                    style='text-lg py-3 px-8 bg-[#e34420] hover:bg-[#e2101b] transition duration-300 rounded-full'
                />
            </div>
        </motion.div>
    );
}

export default HeroSection;