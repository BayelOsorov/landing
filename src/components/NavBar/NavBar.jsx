import React, { useState } from "react";

import arrow from "../../assets/arrow.png";

const NavBar = () => {
  const [isBurger, setIsBurger] = useState(false);
  return (
    <div id="navbar" className="nav-container">
      <div
        className={`burger ${isBurger ? "burger__active" : ""}`}
        onClick={() => setIsBurger(!isBurger)}
      >
        <span className="burger__line" />
      </div>
      {!isBurger ? (
        <ul className="nav-items">
          <a href="#benefits">
            <button className="about-btn btn">О приложении</button>
          </a>
          <li>
            <a href="#about">Инструменты</a>
          </li>
          <li>
            <a href="#how-to-use">Как пользоваться</a>
          </li>
          <li>
            <a href="#benefits">Преимущества</a>
          </li>
          <li>
            <a href="#questions">Вопросы</a>
          </li>
          <li>
            <a href="#refill">Как пополнить</a>
          </li>
          <li>
            <a href="#contacts">Контакты</a>
          </li>
          <a href="#footer">
            <button className="dowload-btn btn">
              Скачать
              <img src={arrow} alt="arrow" />
            </button>
          </a>
        </ul>
      ) : (
        <>
          <ul className="nav-items nav-items-active">
            <li>
              <a href="#about">Инструменты</a>
            </li>
            <li>
              <a href="#how-to-use">Как пользоваться</a>
            </li>
            <li>
              <a href="#benefits">Преимущества</a>
            </li>
            <li>
              <a href="#questions">Вопросы</a>
            </li>
            <li>
              <a href="#refill">Как пополнить</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
          <div className="buttons">
            <a href="#benefits">
              <button className="about-btn btn">О приложении</button>
            </a>
            <a href="#footer">
              <button className="dowload-btn btn">
                Скачать
                <img src={arrow} alt="arrow" />
              </button>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
