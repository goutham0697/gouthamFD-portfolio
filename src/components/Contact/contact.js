import React from "react";
import "./contact.css";

import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

const Contact = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="contactPageTitle">
        Contact Me
      </h2>
      <span className="contactDesc">
        Prefer to reach out directly? Use the contact details below or open an
        email draft.
      </span>

      <div className="contactCard">
        <div className="contactDetails">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:goutham0697@gmail.com">goutham0697@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+12172671475">+1 217-267-1475</a>
          </p>
          <p>
            <strong>Location:</strong> Chicago, IL, USA.
          </p>

          <div className="links">
            <a
              href="https://www.linkedin.com/in/gouthamt697"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src={linkedin} alt="LinkedIn" className="link" />
            </a>

            <a
              href="https://github.com/goutham0697"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img src={github} alt="GitHub" className="link" />
            </a>
          </div>
        </div>

        <div className="contactActions">
          <a
            className="mailtoBtn"
            href="mailto:goutham0697@gmail.com?subject=Work%20Inquiry"
          >
            Send an email
          </a>
          {/*<a
            className="resumeBtn"
            href="/path/to/YourResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>*/}
        </div>
      </div>
    </section>
  );
};

export default Contact;
