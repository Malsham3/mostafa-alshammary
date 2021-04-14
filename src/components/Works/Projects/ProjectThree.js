import React from "react";
import { Row, Link } from "react-bootstrap";
import Header from "../../Header/Header";
import ProjectGif from "../../../utils/gifs/budget-tracker.gif";

function ProjectThree() {
  return (
    <>
      <Header />
      <div id="mid-content">
        <h2 id="projects-title">Budget Tracker</h2>
        <Row id="project-desc">
          <p id="first-p">Track your expenses online.. or offline!</p>
          <p id="first-p">
            Technologies used for this project include Express.js, service
            workers, lite-server, MongoDB, MongoDB Atlas, Mongoose, Morgan.{" "}
          </p>
        </Row>

        <Row className="justify-content-center">
          <p id="first-p">DEMO time</p>
          <img id="project-image" src={ProjectGif} alt="ProjectThree" />
        </Row>

        <Row id="project-desc">
          <a id="demo" href="https://github.com/Malsham3/budget-tracker">
            Link to project's GitHub Repository.
          </a>
        </Row>
        <Row id="project-desc">
          <a id="demo" href="https://sheltered-plateau-25172.herokuapp.com">
            Link to project's deployed site.
          </a>
        </Row>
      </div>
    </>
  );
}

export default ProjectThree;
