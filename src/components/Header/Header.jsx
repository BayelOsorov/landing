import React from "react";

import iphone from "../../assets/iphoneMain.png";
import ios from "../../assets/ios.png";
import android from "../../assets/googlePlay.png";

const Header = () => {
  return (
    <div className="container header">
      <h1>Всегда при деньгах!</h1>
      <h6>Лучший способ оплаты для удобной оплаты!</h6>
      <img className="iphone" src={iphone} alt="iphone" />
      <span>
        Доступно для <strong>iOS</strong> и <strong>Android</strong>
      </span>
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
  );
};

export default Header;
