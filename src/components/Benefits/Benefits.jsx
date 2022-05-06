import React from "react";

import coin from "../../assets/benefits/coin.png";
import calendar from "../../assets/benefits/calendar.png";
import book from "../../assets/benefits/book.png";
import clock from "../../assets/benefits/clock.png";
import heart from "../../assets/benefits/heart.png";
import phone from "../../assets/benefits/phone.png";

const benefits = [
  {
    title: "Пополнение с 0%",
    text: "Для удобства использования мобильного кошелька, мы сделали 0% на пополнение",
    color: "#5955FF",
    image: coin,
    id: 0,
  },
  {
    title: "Контроль",
    text: "Контролировать свои расходы невероятно просто",
    color: "#C891FF",
    image: book,
    id: 1,
  },
  {
    title: "Шаблоны",
    text: "Все ежемесячные траты можно доверить шаблонам, которые автоматически оплятят за услуги",
    color: "#80D2CE",
    image: calendar,
    id: 2,
  },
  {
    title: "Быстро",
    text: "Мы ценим ваше время и поэтому, наше удобное приложение работает быстро. Очень быстро",
    color: "#61C671",
    image: clock,
    id: 3,
  },
  {
    title: "Комфорт",
    text: "Пополняйте без комиссий и оплачивайте всё с комфортом",
    color: "#7EC2FF",
    image: phone,
    id: 4,
  },
  {
    title: "Только вы и мы! 🤝🤝🤝",
    text: "И никого не надо нам",
    color: "#FF93C7",
    image: heart,
    id: 5,
  },
];
const Benefits = () => {
  return (
    <div data-aos="fade-right" id="benefits" className="benefits container">
      <h2>Преимущества</h2>
      <div className="cards">
        {benefits?.map((item) => (
          <div
            key={item.id}
            style={{ backgroundColor: item.color }}
            className="card"
          >
            <img src={item.image} alt="card" />
            <strong>{item.title}</strong>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Benefits;
