import React from "react";
import "./Section2.scss";
const Section2 = () => {
  return (
    <div className="section2-wrapper">
      <div className="section2-left">
        <div className="section2-pattern"></div>
        <img
          src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2V5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          alt="keys"
          loading="lazy"
        />
      </div>
      <div className="section2-right">
        <h1 className="section2-title">
          Happy landowners with secure land rights and enhanced land value
        </h1>
      </div>
    </div>
  );
};

export default Section2;
