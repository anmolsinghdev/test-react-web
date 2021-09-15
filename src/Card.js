import React from "react";

const Card = ({ title, infoArea, buttonText, imgUrl }) => (
  <div className="card" style={{ width: "18rem" }}>
    <img src={imgUrl} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{infoArea}</p>
      <a href="/" className="btn btn-success">
        {buttonText}
      </a>
    </div>
  </div>
);

export default Card;
