import React, { useState } from "react";

import arrow from "../../assets/arrow.png";

const NavBar = () => {
  const [isBurger, setIsBurger] = useState(false);
  return (
    <div className="nav-container">
      <div
        className={`burger ${isBurger ? "burger__active" : ""}`}
        onClick={() => setIsBurger(!isBurger)}
      >
        <span className="burger__line" />
      </div>
      {!isBurger ? (
        <ul className="nav-items">
          <button className="about-btn btn">О приложении</button>
          <li>Инструменты</li>
          <li>Как пользоваться</li>
          <li>Преймущества</li>
          <li>Вопросы</li>
          <li>Как пополнить</li>
          <li>Конаткты</li>
          <button className="dowload-btn btn">
            Скачать
            <img src={arrow} alt="arrow" />
          </button>
        </ul>
      ) : (
        <>
          <ul className="nav-items nav-items-active">
            <li>Инструменты</li>
            <li>Как пользоваться</li>
            <li>Преймущества</li>
            <li>Вопросы</li>
            <li>Как пополнить</li>
            <li>Конаткты</li>
          </ul>
          <div className="buttons">
            <button className="about-btn btn">О приложении</button>
            <button className="dowload-btn btn">
              Скачать
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
