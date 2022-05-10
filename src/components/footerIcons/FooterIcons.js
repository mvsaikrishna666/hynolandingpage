import React from "react";

const FooterIcons = ({ icon, text, active }) => {
  return (
    <div className={active ? "footer-icon-active" : "footer-icon"}>
      <i className={icon}></i>
      <p className="footer-icon-text">{text}</p>
    </div>
  );
};

export default FooterIcons;
