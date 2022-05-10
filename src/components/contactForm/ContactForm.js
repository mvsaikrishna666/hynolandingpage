import React from "react";
import "./ContactForm.scss";
const ContactForm = () => {
  return (
    <form className="contact-from-wrapper">
      <div className="contact-form-inputs">
        <input type="text" className="form-input" placeholder="First Name" />
        <input type="text" className="form-input" placeholder="Last Name" />
        <input type="text" className="form-input" placeholder="Email Address" />
        <input type="text" className="form-input" placeholder="Mobile no." />
      </div>
      <textarea
        className="contact-form-textarea"
        placeholder="Type your message"
      ></textarea>
      <button className="contact-from-submit-btn">Submit</button>
    </form>
  );
};

export default ContactForm;
