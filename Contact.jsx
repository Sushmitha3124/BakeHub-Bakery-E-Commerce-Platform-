import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* ===== Banner ===== */}
      <div className="contact-banner">
        <h1>CONTACT</h1>
        <p> Contact us and connect with our bakery team</p>
      </div>

      {/* ===== Main Content ===== */}
      <div className="contact-container">
        {/* Left Section */}
        <div className="contact-left">
          <div className="contact-info-row">
            <div className="contact-box">
              <h3>Location</h3>
              <p>
                <strong>BakeHub</strong><br />
                #549/3, top Floor,<br />
                5th A Main, Hoysala Nagar,<br />
                Indiranagar, Bangalore – 560038
              </p>
            </div>

            <div className="contact-box">
              <h3>On-line Order</h3>
              <p>📞 +91 6361637459</p>
              <p>✉ support@bakehub.in</p>
            </div>
          </div>

          <div className="contact-form">
            <h3>Contact Form</h3>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Message"></textarea>

            <div className="form-buttons">
              <button className="send-btn">Send</button>
              <button className="reset-btn">Reset</button>
            </div>
          </div>
        </div>

        {/* Right Section – MAP */}
        <div className="contact-right">
          <iframe
            title="BakeHub Location"
            src="https://www.google.com/maps?q=Hoysala+Nagar+Indiranagar+Bangalore&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
