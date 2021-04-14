import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Project from "./Project";

const projects = [
  {
    id: "1",
    projectname: "Employee Tracker",
    github: "",
    deployed: "",
  },
  {
    id: "2",
    projectname: "Office Space",
    github: "",
    deployed: "",
  },
  {
    id: "3",
    projectname: "Budget Tracker",
    github: "",
    deployed: "",
  },
  {
    id: "4",
    projectname: "Workout Tracker",
    github: "",
    deployed: "",
  }
];

function Projects() {
  return (
    <div id="works-ul">
      <h2 id="projects-title">Works</h2>

      {projects.map(({ id, projectname, github, deployed }) => (
        <Project
          id={id}
          projectname={projectname}
          github={github}
          deployed={deployed}
        />
      ))}
    </div>
  );
}

export default Projects;
