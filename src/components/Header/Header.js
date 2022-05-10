import React from "react";
import "./Header.scss";
const Header = () => {
  const headerArr = [
    "Home",
    "Knowledge Center",
    "FAQs",
    "Gallery",
    "Ask a expert",
    "Login",
  ];
  return (
    <div className="header">
      <p className="app-logo">LandDocs</p>
      <div className="header-menu">
        {headerArr.map((item, index) => {
          return (
            <p>
              {item}
              {item.includes("Knowledge") && (
                <span className="down-arrow">
                  <i className="fa-solid fa-angle-down"></i>
                </span>
              )}
            </p>
          );
        })}
      </div>
      <button className="create-account-btn">Create Account</button>
    </div>
  );
};

export default Header;
