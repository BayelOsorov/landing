import React from "react";

import iphone from "../../assets/iphoneMain.png";
import Buttons from "../Buttons/Buttons";

const Header = () => {
  return (
    <div className="container header">
      <h1>Всегда при деньгах!</h1>
      <h6>Лучший способ оплаты для удобной оплаты!</h6>
      <img className="iphone" src={iphone} alt="iphone" />
      <span>
        Доступно для <strong>iOS</strong> и <strong>Android</strong>
      </span>
      <Buttons />
    </div>
  );
};

export default Header;
