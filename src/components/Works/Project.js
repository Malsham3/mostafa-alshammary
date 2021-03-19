import React from "react";

function Project({ projectname, github, deployed }) {
  return (
    <li id="project-item">
      <a id="project-name" target= "_blank" href={github}>
        {projectname}
      </a>
    </li>
  );
}

export default Project;
