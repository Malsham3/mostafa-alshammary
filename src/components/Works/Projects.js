import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Project from "./Project";

const projects = [
  {
    id: "1",
    projectname: "Project 1",
    github: "",
    deployed: "",
  },
  {
    id: "2",
    projectname: "Project 2",
    github: "",
    deployed: "",
  },
  {
    id: "3",
    projectname: "Project 3",
    github: "",
    deployed: "",
  },
  {
    id: "4",
    projectname: "Project 4",
    github: "",
    deployed: "",
  },
  {
    id: "5",
    projectname: "Project 5",
    github: "",
    deployed: "",
  },
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
