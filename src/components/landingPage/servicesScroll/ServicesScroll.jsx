import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
    const containerRef = useRef(null);
    const componentId = useRef(`scroll-animation-${Math.random().toString(36).substr(2, 9)}`);

    useEffect(() => {
        const next = 1;
        const tt = 2000; // 'total time'
        const allSections = gsap.utils.toArray(`#${componentId.current} .scroll-section`);
        const allSectionsNotFirst = allSections.slice(1);
        gsap.set(allSections[0], { yPercent: -100 });

        const fade = gsap.timeline({ defaults: { duration: 1, stagger: next } })
            .to(allSectionsNotFirst, { yPercent: -100 })
            .to(`#${componentId.current} .scroll-section`, { opacity: 0 }, 0);

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: 'top top',
            end: '+=' + tt,
            pin: true,
            animation: fade,
            scrub: 0.3
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div id={componentId.current} className="relative scroll-animation-container">
            <div ref={containerRef} className="relative scroll-container">
                <section className="text-white bg-black bg-cover scroll-section" style={{ backgroundImage: `url("https://res.cloudinary.com/dwtsxzrly/image/upload/v1726621228/mathematics_xbxzdw.jpg")` }}><h1>Mathématiques</h1></section>
                <section className="text-white bg-black bg-cover scroll-section" style={{ backgroundImage: `url("https://res.cloudinary.com/dwtsxzrly/image/upload/v1726621228/physics_zwsixc.jpg")` }}><h1>Physique</h1></section>
                <section className="text-white bg-white bg-cover scroll-section" style={{ backgroundImage: `url("https://res.cloudinary.com/dwtsxzrly/image/upload/v1726621228/svt_kk4yzb.jpg")` }}><h1>SVT</h1></section>
                <section className="text-white bg-black bg-cover scroll-section" style={{ backgroundImage: `url("https://res.cloudinary.com/dwtsxzrly/image/upload/v1726621228/french_iqz1nj.jpg")` }}><h1>Français</h1></section>
                <section className="text-white bg-white bg-cover scroll-section" style={{ backgroundImage: `url("https://res.cloudinary.com/dwtsxzrly/image/upload/v1726621228/english_iztjqb.jpg")` }}><h1>Anglais</h1></section>
                <section className="text-white bg-black bg-cover scroll-section" style={{ backgroundImage: `url("https://res.cloudinary.com/dwtsxzrly/image/upload/v1726621228/robotics_rjvnzw.jpg")` }}><h1>Robotique</h1></section>
                <section className="text-white bg-white bg-cover scroll-section" style={{ backgroundImage: `url("https://res.cloudinary.com/dwtsxzrly/image/upload/v1726621228/philosophy_bfswev.jpg")` }}><h1>Philosophie</h1></section>
            </div>
            <style jsx>{`
                .scroll-animation-container .scroll-section {
                    position: fixed;
                    top: 100vh;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    color: white;
                }
                .scroll-animation-container .scroll-section h1 {
                    font-size: 5vw;
                    line-height: 100vh;
                    text-align: center;
                    font-family: sans-serif;
                    font-weight: 800;
                    margin: 0;
                    position: relative;
                    z-index: 2;
                }
                .scroll-animation-container .scroll-section::before,
                .scroll-animation-container .scroll-section::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                }
                .scroll-animation-container .scroll-section::before {
                    background-image: inherit;
                    background-size: cover;
                    background-position: center;
                    filter: blur(3px);
                    z-index: 0;
                }
                .scroll-animation-container .scroll-section::after {
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 1;
                }
            `}</style>
        </div>
    );
};

export default ScrollAnimation;