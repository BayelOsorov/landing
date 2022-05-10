import React from "react";

const questions = [
  {
    title: "могу получить все преймущества без верификации?",
    answer: "нет",
    id: 0,
  },
  {
    title: "могу отправлять деньги на карту РФ? а это быстро?",
    answer: "да",
    id: 1,
  },
  {
    title: "могу ли я отправить деньги на любой кошелёк?",
    answer: "да",
    id: 2,
  },
  {
    title: "верификация кошелька занимает 5 минут?",
    answer: "да",
    id: 3,
  },
  {
    title: "могу отправить деньги на Visa, Master Card?",
    answer: "да",
    id: 4,
  },
  {
    title: "у вас самое удобное приложение?",
    answer: "да",
    id: 5,
  },
];
const Questions = () => {
  return (
    <>
      <h2 id="questions" className="question-title">
        Часто задаваемые вопросы
      </h2>
      <div data-aos="fade-down" className="container questions">
        {questions?.map((item) => (
          <div key={item.id} className="question">
            <h3>{item.title}</h3>
            <strong className={`${item.id === 0 ? "special-question" : ""}`}>
              {item.answer}
            </strong>
          </div>
        ))}
      </div>
    </>
  );
};

export default Questions;
