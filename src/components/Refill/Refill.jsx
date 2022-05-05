import React from "react";

import girl from "../../assets/girl-think.png";

import beeline from "../../assets/payments/beeline.png";
import quickpay from "../../assets/payments/quickpay.png";
import megacom from "../../assets/payments/megacom.png";
import pay24 from "../../assets/payments/pay24.png";
import oshka from "../../assets/payments/oshka.png";

const payments = [
  {
    id: 0,
    title: "Pay24",
    image: pay24,
  },
  {
    id: 1,
    title: "Beeline",
    image: beeline,
  },
  {
    id: 2,
    title: "Quickpay",
    image: quickpay,
  },
  {
    id: 3,
    title: "MegaCom",
    image: megacom,
  },
  {
    id: 4,
    title: "O!",
    image: oshka,
  },
];
const Refill = () => {
  return (
    <div className="container refill">
      <h2>
        Где я могу пополнить <br /> кошелёк?
      </h2>
      <strong>Платежные терминалы</strong>
      <img className="refill__image" src={girl} alt="girl think" />
      <div className="cards">
        {payments?.map((item) => (
          <div className="card">
            <img src={item.image} alt="payments" />
            <p>Терминал</p>
            <strong>{item.title}</strong>
            <span>Комиссия: 0%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Refill;
