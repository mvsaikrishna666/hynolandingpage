import React from "react";
import "./Footer.scss";
import FooterIcons from "../footerIcons/FooterIcons";
import ContactForm from "../contactForm/ContactForm";
import FooterEndSection from "../footerEndSection/FooterEndSection";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <h1 className="footer-title">Get in touch!</h1>
      <p className="footer-caption">
        Contact us for a quote, help us you join the team.
      </p>
      <div className="footer-icons-wrapper">
        <FooterIcons
          icon="fa-solid fa-location-dot"
          text="1-24 Vihan Nagar, Alwal"
        />
        <FooterIcons icon="fa-solid fa-phone" text="+91 45689 89012" />
        <FooterIcons
          active
          icon="fa-solid fa-paper-plane"
          text="info@landocs.com"
        />
      </div>
      <ContactForm />
      <FooterEndSection />
      <p className="copyright-text">© 2022 Land Docs, India - Hyno Technologies</p>
    </div>
  );
};

export default Footer;
