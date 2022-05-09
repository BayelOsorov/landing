import React from "react";
import { useNavigate } from "react-router-dom";

import "./notFound.scss";
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <section className="notFound">
      <div className="container">
        <div className="notFound__block">
          <h2 className="notFound__title">404</h2>
          <p className="notFound__subtitle">Страница не найдена</p>
          <button className="notFound__btn" onClick={() => navigate("/")}>
            Вернуться на главную
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
