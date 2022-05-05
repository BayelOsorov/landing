import React from "react";

import iphone from "../../assets/iphone2.png";
import ios from "../../assets/ios.png";
import android from "../../assets/googlePlay.png";
import logo from "../../assets/Logologo.svg";

import facebook from "../../assets/social-links/Facebook_whitesocial-link.png";
import instagram from "../../assets/social-links/Social linksocial-link.png";
import tiktok from "../../assets/social-links/Social linksocial-link-1.png";
import telegram from "../../assets/social-links/Telegram_whitesocial-link.png";
import vk from "../../assets/social-links/VK_whitesocial-link.png";
import youtube from "../../assets/social-links/Youtube_whitesocial-link.png";
import ok from "../../assets/social-links/OKsocial-link.png";
import whatsapp from "../../assets/social-links/WhatsApp_whitesocial-link.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="our-app">
        <h2>Скачайте наше приложение</h2>
        <strong>Будьте всегда при деньгах</strong>
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
        <img className="our-app__iphone" src={iphone} alt="iphone" />
      </div>
      <div className="container">
        <div className="footer-body">
          <div className="footer-left">
            <img src={logo} alt="" />
            <strong>Всегда при деньгах</strong>
          </div>
          <div className="footer-right">
            <ul>
              <li>О приложении</li>
              <li>Продукты</li>
              <li>Условия</li>
              <li>Как получить</li>
            </ul>
            <ul>
              <li>Как оплачивать</li>
              <li>Как погашать</li>
              <li>Партнеры</li>
              <li>Помощь</li>
            </ul>
            <ul>
              Контакты:
              <li>+996 772 55 33 33</li>
              <li>+996 552 55 33 33</li>
              <li>+996 502 55 33 33</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__items">
        <p>@ 2022 cash2u. Все права защищены. </p>
        <div className="footer__icons">
          <img src={instagram} alt="logo" />
          <img src={whatsapp} alt="logo" />
          <img src={telegram} alt="logo" />
          <img src={ok} alt="logo" />
          <img src={youtube} alt="logo" />
          <img src={tiktok} alt="logo" />
          <img src={vk} alt="logo" />
          <img src={facebook} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
