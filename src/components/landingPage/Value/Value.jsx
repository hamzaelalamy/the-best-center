import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Value.css';
import Special from '../../common/Special/Special';
import styled from 'styled-components';

const ValueContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
`;

const Value = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      moveTitles(e.screenX);
    };

    const handleTouchMove = (e) => {
      moveTitles(e.touches[0].screenX);
    };

    const moveTitles = (screenX) => {
      const t = -(window.innerWidth / 2 - screenX);
      gsap.to('.anima-container .home_title span', {
        x: function (index, element) {
          var i = 100 / (window.innerWidth / 2 / t),
            a = (window.innerWidth - element.clientWidth) / 2 * (i / 100);
          return a;
        },
        duration: 1,
        force3D: true,
      });
    };

    const container = containerRef.current;
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('touchmove', handleTouchMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <ValueContainer>
      <div className="anima-container scoped-container" ref={containerRef}>
        <ul className="home_title">
          {['Intégrité', 'Innovation', 'Responsabilité', 'Respect', 'Excellence'].map((text, index) => (
            <li key={index}>
              <div className="left">
                <h2>
                  <span>{text}</span>
                </h2>
              </div>
              <div className="right">
                <h2>
                  <span>{text}</span>
                </h2>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ValueContainer>
  );
};

export default Value;
