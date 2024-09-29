import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Special from "../common/Special/Special";
import styled, { keyframes } from "styled-components";
import appo1 from "./Produce/appo1.png"; // Ensure this path is correct
import appo2 from "./Produce/appo2.png"; // Ensure this path is correct

const AboutContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  width: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
`;

const Section = styled.section`
  padding: 4rem 0;
  background-color: white;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  width: 100vw;
`;

const InnerContainer = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 1280px;
  @media (min-width: 1024px) {
    padding-left: 60px;
    padding-right: 60px;
  }
`;

const SpecialContainer = styled.div`
  margin-bottom: 2rem;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  position: relative;
  z-index: 1; /* Ensure text is above floating images */
`;

const ApostropheContainer = styled(TextContainer)`
  padding: 2rem;
`;

const Paragraph = styled.p`
  opacity: ${(props) => props.opacity};
  transition: opacity 0.3s ease-out;
  font-size: 2rem;
  font-weight: bold;
  line-height: 2.375rem;
  letter-spacing: normal;
  color: black;
  @media (min-width: 640px) {
    font-size: 2.25rem;
    line-height: 2.875rem;
  }
  @media (min-width: 768px) {
    font-size: 2rem;
    line-height: 2.75rem;
    letter-spacing: -0.02em;
  }
`;

const SubParagraph = styled.p`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.75rem;
  letter-spacing: -0.01em;
  color: black;
  @media (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.875rem;
    letter-spacing: normal;
  }
`;

const floatFromBottomLeft = keyframes`
  from {
    transform: translateY(100px) translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
`;

const floatFromBottomRight = keyframes`
  from {
    transform: translateY(100px) translateX(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0) translateX(0);
    opacity: 1;
  }
`;

const FloatingImage1 = styled.img`
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: -40px; /* Adjusted position */
  left: 10px;
  z-index: 0; /* Ensure the image is behind the text */
  animation: ${props => props.locked ? '' : floatFromBottomLeft} 3s ease-out forwards;
  animation-delay: ${props => props.locked ? '0s' : '0.5s'}; /* Added delay */
  @media (max-width: 768px) {
    top: -30px;
    left: 5px;
  }
`;

const FloatingImage2 = styled.img`
  width: 4rem;
  height: 4rem;
  position: absolute;
  bottom: 10px; /* Adjusted position */
  right: 0;
  z-index: 1; /* Ensure the image overlaps the text */
  animation: ${props => props.locked ? '' : floatFromBottomRight} 3s ease-out forwards;
  animation-delay: ${props => props.locked ? '0s' : '0.5s'}; /* Added delay */
  @media (max-width: 768px) {
    bottom: 5px;
    right: 5px;
  }
`;

function About() {
  const [titleOpacity, setTitleOpacity] = useState(0);
  const [paragraphOpacity, setParagraphOpacity] = useState(0);
  const [locked, setLocked] = useState(false);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const textContainerRef = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      easing: "ease-out",
      once: false,
      mirror: true,
    });

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const fadeStart = windowHeight * 0.9;
      const fadeEnd = windowHeight * 0.4;

      const calculateOpacity = (element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= fadeStart && rect.bottom >= fadeEnd) {
            const total = fadeStart - fadeEnd;
            const current = fadeStart - rect.top;
            return Math.min(current / total, 1);
          } else if (rect.top > fadeStart) {
            return 0;
          } else if (rect.bottom < fadeEnd) {
            return 1;
          }
        }
        return 0;
      };

      setTitleOpacity(calculateOpacity(titleRef.current));
      setParagraphOpacity(calculateOpacity(paragraphRef.current));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const textPosition = textContainerRef.current.getBoundingClientRect().top;

      if (!locked && scrollY > textPosition) {
        setLocked(true);
      }

      if (imageRef1.current && imageRef2.current) {
        if (!locked) {
          imageRef1.current.style.transform = `translateY(${scrollY * 0.3}px)`;
          imageRef2.current.style.transform = `translateY(${-scrollY * 0.3}px)`;
        } else {
          imageRef1.current.style.transform = 'translateY(0)';
          imageRef2.current.style.transform = 'translateY(0)';
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [locked]);

  return (
    <AboutContainer>
      <Section id="apropos">
        <InnerContainer>
          <SpecialContainer>
            <Special text={`À\u00A0PROPOS`} hoverText={`ABOUT\u00A0US`} />
          </SpecialContainer>
          <FlexContainer>
            <TextContainer>
              <Paragraph ref={paragraphRef} opacity={paragraphOpacity}>
                Bienvenue à The Best Center, où l'excellence éducative et l'innovation pédagogique s'unissent pour transformer vos ambitions en réussites éclatantes. En tant que centre de formation de premier plan, nous nous engageons à vous offrir une éducation sur mesure et une expertise pointue dans tous les domaines d'étude.
              </Paragraph>
            </TextContainer>
            <ApostropheContainer ref={textContainerRef} data-aos="fade-up" data-aos-delay="600">
              <SubParagraph>
                Notre mission est de transformer les défis éducatifs en véritables opportunités de croissance personnelle et professionnelle.
              </SubParagraph>
              <SubParagraph>
                Nous sommes déterminés à vous accompagner à chaque étape de votre parcours académique, en vous guidant et en vous soutenant tout au long de votre chemin vers l'excellence.
              </SubParagraph>
              <SubParagraph>
                Nous sommes les architectes de votre avenir éducatif, combinant méthodes pédagogiques innovantes, technologies de pointe et accompagnement personnalisé pour créer des expériences d'apprentissage qui répondent parfaitement à vos aspirations. Ensemble, nous nous engageons à repousser les frontières de l'éducation moderne.
              </SubParagraph>
              <FloatingImage1
                ref={imageRef1}
                src={appo1}
                alt="Élément flottant 1"
                locked={locked}
              />
              <FloatingImage2
                ref={imageRef2}
                src={appo2}
                alt="Élément flottant 2"
                locked={locked}
              />
            </ApostropheContainer>
          </FlexContainer>
        </InnerContainer>
      </Section>
    </AboutContainer>
  );
}

export default About;
