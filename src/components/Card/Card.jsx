import React from "react";
import "./card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card__pic">
        {/* <span className="card__new premium">NEW</span> */}
        <img
          src="https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png"
          alt="card pic"
        />
      </div>
      <span className="card__title">Lorem Ispum</span>
      <p className="card__content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti rerum
        nihil soluta placeat molestias voluptatum similique, eaque, autem
        officia quo nam.
      </p>
      <button className="card__btn">Button</button>
    </div>
  );
};

export default Card;
