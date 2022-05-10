import React from "react";

import "./issue.scss";
const Issue = () => {
  return (
    <section className="issue" id="issue">
      <div className="container">
        <h1>Как оформить рассрочку?</h1>
        <div className="issue__row">
          <div className="issue__card">
            <div className="issue__card-img">
              <h3 className="issue__card-num">1</h3>
            </div>
            <div>
              <h3 className="issue__card-title">Скачайте</h3>
              <p className="issue__card-text">
                Установите мобильное приложение Cash2u с GooglePlay и App Store.
              </p>
            </div>
          </div>
          <div className="issue__card">
            <div className="issue__card-img">
              <h3 className="issue__card-num">2</h3>
            </div>
            <div>
              <h3 className="issue__card-title">Заполните</h3>
              <p className="issue__card-text">
                Пройдите идентификацию, заполнив анкету для получения рассрочки.
              </p>
            </div>
          </div>
          <div className="issue__card">
            <div className="issue__card-img">
              <h3 className="issue__card-num">3</h3>
            </div>
            <div>
              <h3 className="issue__card-title">Получите</h3>
              <p className="issue__card-text">
                Дождитесь ответа и получите деньги.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Issue;
