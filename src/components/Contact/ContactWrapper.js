import React from "react";
import Header from "../Header/Header";
import ContactMe from "./ContactMe";

function ContactWrapper() {
  return (
    <>
      <Header />
      <div id="mid-content">
        <ContactMe />
      </div>
    </>
  );
}

export default ContactWrapper;
