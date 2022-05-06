import React from "react";

import puzzle from "../../assets/puzzle.png";
import hands from "../../assets/hands.png";

const HowToUse = () => {
  return (
    <div id="how-to-use" className="how-to-use container">
      <div className="how-to-use__items">
        <div className="how-to-use__item">
          <h2>
            Как пользоваться <br /> кошельком?
          </h2>
          <span>
            Сделайте один шаг, который позволит пользоваться
            <br /> самым удобным кошельком без каких-либо
            <br /> ограничений
          </span>
        </div>

        <img src={puzzle} alt="puzzle" />
      </div>
      <div className="send-passport">
        <div className="send-passport-item">
          <h2>
            Достаточно отправить <br /> свой паспорт
          </h2>
          <span>
            Давайте знакомится! Нам важно знать вас, чтобы
            <br /> открыть доступ к самому удобному кошельку
          </span>
        </div>

        <img src={hands} alt="hands" />
      </div>
    </div>
  );
};

export default HowToUse;
