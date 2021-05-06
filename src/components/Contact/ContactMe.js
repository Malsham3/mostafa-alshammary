import React from "react";
import SocialMedia from "../SocialMedia/SocialMedia";

function ContactMe() {
  return (
    <div id="bio">
      <h2>
        <a id="h2-tags" href="#" class="underlined underlined--offset">
          Contact
        </a>
      </h2>
      <div id="contact-info">
        <p p id="contact">
          By Phone:{" "}
          <a id="anchor-tags" href="#" class="underlined underlined--thin">
            (623) 363 - 5283
          </a>
        </p>

        <p p id="contact">
          By Email:{" "}
          <a
            id="anchor-tags"
            href="mailto:m.alsham627@gmail.com"
            class="underlined underlined--thin"
          >
            m.alsham627@gmail.com
          </a>
        </p>
      </div>

      <SocialMedia />
    </div>
  );
}

export default ContactMe;
