import React from "react";
import "./FooterEndSection.scss";
const FooterEndSection = () => {
  return (
    <div className="footer-end-wrapper">
      <div className="address">
        <div className="app-logo-footer">LandDocs</div>
        <p className="address-text">
          Plot no. 1-24 Vihan Nagar, Alwal Hyderabad - Telangana Sate 500010
        </p>
      </div>
      <div className="footer-link-list">
        <p className="footer-links">Home</p>
        <p className="footer-links">Knowledge Centre</p>
        <p className="footer-links">Our Mission</p>
        <p className="footer-links">FAQs</p>
      </div>
      <div className="footer-link-list">
        <p className="footer-links">Gallery</p>
        <p className="footer-links">Value Satement</p>
        <p className="footer-links">Ask a Legal Expert</p>
      </div>
      <div className="footer-link-list">
        <p className="footer-links">Documents</p>
        <p className="footer-links">FAQs</p>
        <p className="footer-links">Registration</p>
      </div>
    </div>
  );
};

export default FooterEndSection;
