import React from "react";
import "./section1.scss";
import roadsImage from "../../assets/roads.png";
const Section1 = () => {
  return (
    <div className="section1-wrapper">
      <div className="section1-left">
        <div className="section1-content">
          <h1 className="section1-title">Single Platform for land Services</h1>
          <h3 className="section1-body">
            Creating a single digital platform on land connecting all the
            stakeholders around the world providing all land services pertaining
            to the land across the country at one's doorsteps anywhere on the
            globe
          </h3>
          <button className="register-btn">Register with us</button>
        </div>
      </div>
      <div className="section1-right">
        <div className="section1-images-wrapper">
          <img
            src={roadsImage}
            className="section1-image"
            alt="roads"
            loading="lazy"
          />
          <img
            src={
              "https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a2V5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            }
            className="section1-image"
            alt="roads"
            loading="lazy"
          />
        </div>
        <div className="section1-icons-wrapper">
          <i class="fa-solid fa-angle-left"></i>
          <i class="fa-solid fa-angle-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Section1;
