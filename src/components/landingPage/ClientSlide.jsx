import React, { useEffect, useState } from "react";
import { Camera } from "lucide-react";
import styled, { keyframes } from "styled-components";

import aze from "../../assets/VERSION1.png";
import erkan from "../../assets/VERSION3.png";
import gnc from "../../assets/VERSION1.png";
import group from "../../assets/VERSION4.png";
import mic from "../../assets/VERSION1.png";
import yek from "../../assets/VERSION3.png";
import rma from "../../assets/VERSION1.png";
import ey from "../../assets/VERSION4.png";
import cese from "../../assets/VERSION1.png";
import renault from "../../assets/VERSION3.png";

const items = [cese, ey, renault, mic, group, gnc, erkan, yek, rma, aze];

const ClientSection = () => {
  const [duplicatedItems, setDuplicatedItems] = useState([]);

  useEffect(() => {
    setDuplicatedItems([...items, ...items]);
  }, []);

  return (
    <Wrapper>
      <Text className="text-black">Clients</Text>
      <MarqueeContainer>
        <Marquee>
          {duplicatedItems.map((src, index) => (
            <Image key={index} src={src} alt="" />
          ))}
        </Marquee>
      </MarqueeContainer>
    </Wrapper>
  );
};

export default ClientSection;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  margin-top: -4rem;
  padding-top: 4rem;
`;

const Text = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  font-weight: bold;
  margin-bottom: 5rem;
  animation: animatedBackground 6s ease infinite;
  background-size: 600% 600%;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const marqueeAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;

  &:before,
  &:after {
    position: absolute;
    top: 0;
    width: 250px;
    height: 100%;
    content: "";
    z-index: 2;
  }

  &:before {
    left: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 0), white);
  }

  &:after {
    right: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 0), white);
  }
`;

const Marquee = styled.div`
  display: inline-flex;
  animation: ${marqueeAnimation} 10s linear infinite;
`;

const Image = styled.img`
  object-fit: contain;
  width: 150px;
  height: 80px;
  margin: 0 30px;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 120px;
    height: 60px;
    margin: 0 20px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 50px;
    margin: 0 15px;
  }
`;