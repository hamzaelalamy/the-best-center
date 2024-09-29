import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
    overflow: hidden;

  
  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const StyledH1 = styled.h1`
  position: relative;
  line-height: 1.05;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  height: 170px; // Increased height of the component
`;

const StyledSpan = styled.span`
  font-family: 'Thunder Black', sans-serif;
  font-weight: 500;
  display: flex;
  font-size: 10rem;
  letter-spacing: 1px;
  white-space: nowrap; // Prevent line breaks

  @media (max-width: 1024px) {
    font-size: 8rem;
    letter-spacing: 1.2px;
  }

  @media (max-width: 768px) {
    font-size: 6.3rem;
    letter-spacing: 1.5px;
  }
`;

const Letter = styled.div`
  display: inline-block;
  position: relative;
  color: #662483;
`;

const HiddenLetter = styled.div`
  display: inline-block;
  position: relative;
  color: #f39200;
  transform: translateY(100%);
  opacity: 0;
`;

const HiddenSpan = styled(StyledSpan)`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  white-space: nowrap;
`;

const Special = ({ text = `Actualités`, hoverText = 'Actualités' }) => {
  const titleRef = useRef(null);

  useEffect(() => {
    const letters = titleRef.current.querySelectorAll('.letter');
    const hiddenLetters = titleRef.current.querySelectorAll('.hidden-letter');

    const onMouseEnter = () => {
      const timeline = gsap.timeline();

      letters.forEach((letter, i) => {
        timeline.to(letter, {
          y: '-100%',
          scaleY: 0.1,
          opacity: 0,
          ease: 'power4.inOut',
          duration: 0.6,
        }, 0);
      });

      hiddenLetters.forEach((hiddenLetter, i) => {
        timeline.to(hiddenLetter, {
          y: '0%',
          scaleY: 1,
          opacity: 1,
          ease: 'power4.inOut',
          duration: 0.6,
        }, 0);
      });
    };

    const onMouseLeave = () => {
      const timeline = gsap.timeline();

      letters.forEach((letter, i) => {
        timeline.to(letter, {
          y: '0%',
          scaleY: 1,
          opacity: 1,
          ease: 'power4.inOut',
          duration: 0.6,
        }, 0);
      });

      hiddenLetters.forEach((hiddenLetter, i) => {
        timeline.to(hiddenLetter, {
          y: '100%',
          scaleY: 0.1,
          opacity: 0,
          ease: 'power4.inOut',
          duration: 0.6,
        }, 0);
      });
    };

    titleRef.current.addEventListener('mouseenter', onMouseEnter);
    titleRef.current.addEventListener('mouseleave', onMouseLeave);

    return () => {
      // titleRef.current.removeEventListener('mouseenter', onMouseEnter);
      // titleRef.current.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <Container>
      <StyledH1 className="link-wrap" ref={titleRef}>
        <StyledSpan>
          {text.split('').map((letter, index) => (
            <Letter key={index} className="letter">{letter}</Letter>
          ))}
        </StyledSpan>
        <HiddenSpan>
          {hoverText.split('').map((letter, index) => (
            <HiddenLetter key={index} className="hidden-letter">{letter}</HiddenLetter>
          ))}
        </HiddenSpan>
      </StyledH1>
    </Container>
  );
};

export default Special;
