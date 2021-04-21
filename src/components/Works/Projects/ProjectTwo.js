import React from "react";
import { Row, Image } from "react-bootstrap";
import Header from "../../Header/Header";
import ProjectGif from "../../../utils/gifs/employees-tracker-react.gif";

function ProjectTwo() {
  return (
    <>
      <Header />
      <div id="mid-content">
        <h2 id="projects-title">Employee Directory</h2>
        <Row id="project-desc">
          <p id="first-p">
          Access Employees information with ease.
          </p>
          <p id="first-p">
            Technologies used for this project include MongoDB, Express.js,
            React.js, Node.js, Bootstrap, Netlify, web-vitals.{" "}
          </p>
        </Row>

        <Row id="image-row" className="justify-content-center">
          <p id="first-p">DEMO time</p>
          <Image id="project-image" src={ProjectGif} alt="ProjectTwo"/>
        </Row>

        <Row id="project-desc">
          <a id="demo" href="https://github.com/Malsham3/employees-directory-react">
            Link to project's GitHub Repository.
          </a>
        </Row>
        
        <Row id="project-desc">
          <a id="demo" href="https://trackemployeeswithreact.netlify.app/">
            Link to project's deployed site.
          </a>
        </Row>
      </div>
    </>
  );
}

export default ProjectTwo;
