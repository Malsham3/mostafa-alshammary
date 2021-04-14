import React from "react";
import { Row, Link } from "react-bootstrap";
import Header from "../../Header/Header";
import ProjectGif from "../../../utils/gifs/Workout-tracker.gif";

function ProjectFour() {
  return (
    <>
      <Header />
      <div id="mid-content">
        <h2 id="projects-title">Workout Tracker</h2>
        <Row id="project-desc">
          <p id="first-p">
          Create a workout plan, add exercises (cardio or resistance) and track your progress.
          </p>
          <p id="first-p">
            Technologies used for this project include Node.js, Express.js, MongoDB, Mongoose,
            Morgan.{" "}
          </p>
        </Row>

        <Row className="justify-content-center">
          <p id="first-p">DEMO time</p>
          <img id="project-image" src={ProjectGif} alt="ProjectFour" />
        </Row>

        <Row id="project-desc">
          <a id="demo" href="https://github.com/Malsham3/workout-tracker">
            Link to project's GitHub Repository.
          </a>
        </Row>
        <Row id="project-desc">
          <a id="demo" href="https://floating-lake-00259.herokuapp.com">
            Link to project's deployed site.
          </a>
        </Row>
      </div>
    </>
  );
}

export default ProjectFour;
