import React from "react";
import Project from "./Project";

const projects = [
  {
    projectname: "Project 1",
    github: "",
    deployed: "",
  },
  {
    projectname: "Project 2",
    github: "",
    deployed: "",
  },
  {
    projectname: "Project 3",
    github: "",
    deployed: "",
  },
  {
    projectname: "Project 4",
    github: "",
    deployed: "",
  },
  {
    projectname: "Project 5",
    github: "",
    deployed: "",
  },
];

function Projects() {
  return (
    <div id="works-ul">
      <h2 id="projects-title">Works</h2>

      {projects.map(({ projectname, github, deployed }) => (
        <Project
          projectname={projectname}
          github={github}
          deployed={deployed}
        />
      ))}
    </div>
  );
}

export default Projects;
