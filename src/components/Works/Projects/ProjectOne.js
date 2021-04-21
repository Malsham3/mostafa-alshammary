import React from "react";
import { Row, Image } from "react-bootstrap";
import Header from "../../Header/Header";
import ProjectGif from "../../../utils/gifs/employee-tracker.gif";

function ProjectOne() {
  return (
    <>
      <Header />
      <div id="mid-content">
        <h2 id="projects-title">Employee Tracker</h2>
        <Row id="project-desc">
          <p id="first-p">
            View, add, remove employees, roles, departments from the command
            line.
          </p>
          <p id="first-p">
            Technologies used for this project include Node.js, Inquirer, MySQL,
            Util.{" "}
          </p>
        </Row>

        <Row id="image-row" className="justify-content-center">
          <p id="first-p">DEMO time</p>
          <Image id="project-image" src={ProjectGif} alt="ProjectOne"/>
        </Row>

        <Row id="project-desc">
          <a id="demo" href="https://github.com/Malsham3/employee-tracker">
            Link to project's GitHub Repository.
          </a>
        </Row>
      </div>
    </>
  );
}

export default ProjectOne;
