import React from "react";
import { Row, Link } from "react-bootstrap";
import Header from "../../Header/Header";
import ProjectGif from "../../../utils/gifs/employee-tracker.gif";

function ProjectTwo() {
  return (
    <>
      <Header />
      <div id="mid-content">
        <h2 id="projects-title">Office Space</h2>
        <Row id="project-desc">
          <p id="first-p">
            Efficient Customer Relations Management Web Application.
          </p>
          <p id="first-p">
            Technologies used for this project include MongoDB, Express.js,
            React.js, Node.js, Heroku, Axios, Bootstrap, firebase, dotenv,
            moment, react-calendar.{" "}
          </p>
        </Row>

        <Row className="justify-content-center">
          <p id="first-p">DEMO time</p>
          <img id="project-image" src={ProjectGif} alt="ProjectTwo" />
        </Row>

        <Row id="project-desc">
          <a id="demo" href="https://github.com/Malsham3/Office-Space">
            Link to project's GitHub Repository.
          </a>
        </Row>
        
        <Row id="project-desc">
          <a id="demo" href="https://blooming-spire-58997.herokuapp.com/">
            Link to project's deployed site.
          </a>
        </Row>
      </div>
    </>
  );
}

export default ProjectTwo;
