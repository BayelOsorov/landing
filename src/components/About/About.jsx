import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import girl from "../../assets/girl-with-money.png";
import logo from "../../assets/Logologo.svg";

import card from "../../assets/cards/itemcard.png";
import card2 from "../../assets/cards/itemcard2.png";
import card3 from "../../assets/cards/itemcard3.png";
import card4 from "../../assets/cards/itemcard5.png";

import ios from "../../assets/ios.png";
import android from "../../assets/googlePlay.png";
// Import Swiper styles
import "swiper/css";
const About = () => {
  return (
    <div className="about">
      <div className="info">
        <img src={girl} alt="gitl with money" />
        <h1>
          Разные <br /> инструменты для <br /> разных целей
        </h1>
      </div>
      <Swiper
        className="my-swiper"
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
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
            <div className="buttons">
              <button className="store-btn">
                <img src={ios} alt="ios" />
                IOS
              </button>
              <button className="store-btn">
                <img src={android} alt="android" />
                Android
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default About;
