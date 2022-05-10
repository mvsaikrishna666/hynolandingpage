import React from "react";
import "./Section3Card.scss";
import Blue from "../../assets/blueSplash.svg";
const Section3Card = ({ title, list, reverse }) => {
  return (
    <div className="section3-card-wrapper">
      {reverse && (
        <div className="section3card-image">
          <img className="splash-image" src={Blue} alt="img" loading="lazy" />
        </div>
      )}
      <div className="section3-card-content">
        <h2 className="section3-card-title">{title}</h2>
        <ul>
          {list?.map((item, index) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
      {!reverse && (
        <div className="section3card-image">
          <img className="splash-image" src={Blue} alt="img" loading="lazy" />
        </div>
      )}
    </div>
  );
};

export default Section3Card;
