import React from "react";

function Project({ id, projectname, github, deployed, showProject }) {


  return (
    <li id="project-item">
      <a class="project-name" id={id} href={"works/"+ id}>
        {projectname}
      </a>
    </li>
  );
}

export default Project;
