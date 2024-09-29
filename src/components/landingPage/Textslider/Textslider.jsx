import React from "react";
import Marquee from "react-fast-marquee";
import "./Textslider.css"

const TextSliderOne = () => {
  return (
    <>
      <section className="textslider__area">
        <div className="textslider__inner">
          <div className="swiper textslider__active">
            <div className="swiper-wrapper">
              <Marquee>
                <div className="swiper-slide">
                  <div className="textslider__slide">
                    <h2 className="textslider__text">
                      The Best Center<span>*</span>
                    </h2>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="textslider__slide">
                    <h2 className="textslider__text">
                      Education<span>*</span>
                    </h2>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="textslider__slide">
                    <h2 className="textslider__text">
                      Excellence<span>*</span>
                    </h2>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="textslider__slide">
                    <h2 className="textslider__text">
                      Innovation<span>*</span>
                    </h2>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="textslider__slide">
                    <h2 className="textslider__text">
                      Learning<span>*</span>
                    </h2>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="textslider__slide">
                    <h2 className="textslider__text">
                      Knowledge<span>*</span>
                    </h2>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="textslider__slide">
                    <h2 className="textslider__text">
                      Growth<span>*</span>
                    </h2>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="textslider__slide">
                    <h2 className="textslider__text">
                      Success<span>*</span>
                    </h2>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="textslider__slide">
                    <h2 className="textslider__text">
                      Future<span>*</span>
                    </h2>
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TextSliderOne;