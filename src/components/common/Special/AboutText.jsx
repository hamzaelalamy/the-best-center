import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { css } from '@emotion/react';

gsap.registerPlugin(SplitText);

const AboutText = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    const mySplitText = new SplitText("#quote", { type: "words,chars" });
    const chars = mySplitText.chars; // an array of all the divs that wrap each character

    gsap.set("#quote", { perspective: 400 });

    tl.from(chars, {
      duration: 0.8,
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: 180,
      transformOrigin: "0% 50% -50",
      ease: "back",
      stagger: 0.01
    });

    document.getElementById("animate").onclick = function () {
      tl.restart();
    };
  }, []);

  const containerStyle = css`
    margin: 3% 10% 0 10%;
    overflow: hidden;
  `;

  const quoteStyle = css`
    font-size: 44px;
    line-height: 50px;
  `;

  const buttonStyle = css`
    padding: 10px;
    margin: 20px 0;
  `;

  return (
    <div css={containerStyle}>
      <div id="quote" css={quoteStyle}>

        At AZ Hub, we pride ourselves on being a dynamic, multi-purpose company that excels in a wide range of industries and services. From cutting-edge technology solutions to innovative marketing strategies, our diverse portfolio ensures that we can meet the varied needs of our clients. We specialize in delivering exceptional results in everything we do, be it project management, consulting, or creative design. Our dedicated team of experts is committed to driving growth and success, making AZ Hub your go-to partner for all your business needs. With a blend of passion, expertise, and a forward-thinking approach, we are here to help you achieve your goals and navigate the complexities of the modern business landscape.      </div>
    </div>
  );
};

export default AboutText;
