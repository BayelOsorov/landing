import React from "react";

import iphone from "../../assets/iphone2.png";
import logo from "../../assets/Logologo.svg";

import facebook from "../../assets/social-links/Facebook_whitesocial-link.png";
import instagram from "../../assets/social-links/Social linksocial-link.png";
import tiktok from "../../assets/social-links/Social linksocial-link-1.png";
import telegram from "../../assets/social-links/Telegram_whitesocial-link.png";
import vk from "../../assets/social-links/VK_whitesocial-link.png";
import youtube from "../../assets/social-links/Youtube_whitesocial-link.png";
import ok from "../../assets/social-links/OKsocial-link.png";
import whatsapp from "../../assets/social-links/WhatsApp_whitesocial-link.png";
import Buttons from "../Buttons/Buttons";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="our-app">
        <h2>Скачайте наше приложение</h2>
        <strong>Будьте всегда при деньгах</strong>
        <Buttons />
        <img className="our-app__iphone" src={iphone} alt="iphone" />
      </div>
      <div className="container">
        <div className="footer-body">
          <div className="footer-left">
            <a href="#navbar">
              <img src={logo} alt="" />
            </a>
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
              <a href="tel:+996772553333">
                <li>+996 772 55 33 33</li>
              </a>
              <a href="tel:+996552553333">
                <li>+996 552 55 33 33</li>
              </a>
              <a href="tel:+996502553333">
                <li>+996 502 55 33 33</li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__items">
        <div className="footer__icons">
          <a href="https://www.facebook.com/Cash2u-102189698862906/">
            <img src={facebook} alt="logo" />
          </a>
          <a href="https://wa.me/+996552553333">
            <img src={whatsapp} alt="logo" />
          </a>
          <a href="tg://resolve?domain=@KelechekMKKbot">
            <img src={telegram} alt="logo" />
          </a>

          <a href="https://www.instagram.com/cash2u.kg">
            <img src={instagram} alt="logo" />
          </a>
          <a href="https://www.tiktok.com/@cash2u.kg">
            <img src={tiktok} alt="logo" />
          </a>
          <a href="https://vk.com/cash2u">
            <img src={vk} alt="logo" />
          </a>
          <a href="https://www.youtube.com/channel/UCYd4ljGJODrg1mCLNLl85aA">
            <img src={youtube} alt="logo" />
          </a>
          <a href="https://ok.ru/profile/582735885535">
            <img src={ok} alt="logo" />
          </a>
        </div>
        <p>@ 2022 cash2u. Все права защищены. </p>
      </div>
    </div>
  );
};

export default Footer;
