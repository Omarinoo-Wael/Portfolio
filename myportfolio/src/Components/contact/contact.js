import "./contact.css";
import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import { Row, Col } from "react-bootstrap";

function Contact() {
  const [result, setResult] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.REACT_APP_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("Message sent successfully!");
      setShowAlert(true);
      event.target.reset();
    } else {
      setResult("Something went wrong. Please try again.");
      setShowAlert(true);
    }
  };
  return (
    <section className="contact" id="contact">
      <h1>Get In Touch</h1>
      {showAlert && (
        <Alert variant="dark" onClose={() => setShowAlert(false)} dismissible>
          {result}
        </Alert>
      )}
      <form className="contact-form" onSubmit={onSubmit}>
        <div className="name-fields">
          <input
            type="text"
            name="first-name"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="last-name"
            placeholder="Last Name"
            required
          />
        </div>
        <div className="contact-fields">
          <input type="email" name="email" placeholder="Your Email" required />
          <input type="tel" name="phone" placeholder="Phone No." required />
        </div>
        <div className="contact-fields">
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <div className="custom-checkbox-container">
          <label className="checkbox-wrapper">
            <input type="checkbox" name="news" id="news-checkbox" value="Yes" />
            <span className="checkbox-tile"></span>
          </label>
          <label htmlFor="news-checkbox" className="news-label">
            Subscribe to newsletter for updates.
          </label>
        </div>
        <button className="send-btn" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
