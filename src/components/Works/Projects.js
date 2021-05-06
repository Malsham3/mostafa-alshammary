import React from "react";
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
    projectname: "Employee Directory",
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
      <h2><a id="h2-tags" href="#" class="underlined underlined--offset">Works</a></h2>
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
