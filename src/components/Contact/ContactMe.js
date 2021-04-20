import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";

function ContactMe() {
  return (
    <div id="bio">
      <h2 id="contact-me">Contact</h2>
      <div id="contact-info">
        <p id="contact">By Phone: (623) 363 - 5283</p>
        <p id="contact">
          {" "}
          By Email:{" "}
          <a href="mailto:m.alsham627@gmail.com">m.alsham627@gmail.com</a>
        </p>
      </div>

      <SocialMedia />
    </div>
  );
}

export default ContactMe;
