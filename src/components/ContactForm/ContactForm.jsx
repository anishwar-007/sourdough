import React from "react";
import "./contactForm.css";

const ContactForm = () => {
  return (
    <div className="contactForm">
      <span className="contactForm__heading">Contact us</span>
      {/* <div className="contactForm__form"> */}
      <form>
        <div className="contactForm__name">
          <div style={{ paddingRight: 70, background: "#242464" }}>
            <label htmlFor="firstName" className="contactForm__label">
              First name
            </label>
            <br />
            <input
              type="text"
              name="firstName"
              className="contactForm__input"
              placeholder="Anishwar"
            />
          </div>
          <div style={{ background: "#242464" }}>
            <label htmlFor="secondName" className="contactForm__label">
              Second name
            </label>
            <br />
            <input
              type="text"
              name="secondName"
              className="contactForm__input"
              placeholder="Sharma"
            />
          </div>
        </div>

        <label htmlFor="email" className="contactForm__label">
          Email address
        </label>
        <br />
        <input
          type="email"
          name="email"
          className="contactForm__input contactForm__email"
          placeholder="sharmaanish7779@gmail.com"
        />
        <br />
        <label htmlFor="message" className="contactForm__label">
          Your Message
        </label>
        <br />
        <input
          type="text"
          name="message"
          className="contactForm__input contactForm__message"
        />
        <br />
        <button className="form__btn primary">Submit message</button>
      </form>
      {/* </div> */}
    </div>
  );
};

export default ContactForm;
