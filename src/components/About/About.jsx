import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import girl from "../../assets/girl-with-money.png";

import card from "../../assets/cards/itemcard.png";
import card2 from "../../assets/cards/itemcard2.png";
import card3 from "../../assets/cards/itemcard3.png";
import card4 from "../../assets/cards/itemcard5.png";

import "swiper/css";
import Buttons from "../Buttons/Buttons";
const About = () => {
  return (
    <div data-aos="fade-up" id="about" className="about">
      <div className="info">
        <img src={girl} alt="gitl with money" />
        <h1>
          Разные <br /> инструменты для <br /> разных целей
        </h1>
      </div>
      <div className="my-swiper">
        <Swiper spaceBetween={50} slidesPerView={1}>
          <SwiperSlide>
            <div className="about-item">
              <img className="about-image" src={card} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about-item">
              <img className="about-image" src={card2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about-item">
              <img className="about-image" src={card3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="about-item-last">
              <img className="about-image-last" src={card4} alt="" />
              <Buttons />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default About;
