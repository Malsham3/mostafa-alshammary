import React from "react";
import Header from "../Header/Header";
import Projects from "./Projects";
import "./index.scss";

function WorksWrapper() {
  return (
    <>
      <Header />
      <div id="mid-content">
        <Projects />
      </div>
    </>
  );
}

export default WorksWrapper;
