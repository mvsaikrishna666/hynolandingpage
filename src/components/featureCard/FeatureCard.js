import React from "react";
import "./FeatureCard.scss";
const FeatureCard = ({ icon,title, body }) => {
  return (
    <div className="feature-card-wrapper">
      <i class={icon}></i>
      <div className="feature-card-content">
        <p className="feature-card-title">{title}</p>
        <p className="feature-card-body">{body}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
