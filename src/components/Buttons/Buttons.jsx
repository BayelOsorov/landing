import React from "react";

import ios from "../../assets/ios.png";
import android from "../../assets/googlePlay.png";
const Buttons = () => {
  return (
    <div className="buttons">
      <a href="https://apps.apple.com/kg/app/cash2u/id1601611311?utm_source=GA_site">
        <button className="store-btn">
          <img src={ios} alt="ios" />
          IOS
        </button>
      </a>
      <a href="https://play.google.com/store/apps/details?id=kg.cash2u.client&utm_source=gads">
        <button className="store-btn">
          <img src={android} alt="android" />
          Android
        </button>
      </a>
    </div>
  );
};

export default Buttons;
