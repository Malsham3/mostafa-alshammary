import React from "react";

function Project({ id, projectname, github, deployed, showProject }) {


  return (
    <li id="project-item">
      {/* <p p id="wrapper-p"><a id="anchor-tags" href={"works/"+ id} class="underlined underlined--thin">{projectname}</a></p> */}

      <a id="anchor-tags" href={"works/"+ id} class="underlined underlined--thin">{projectname}</a>

      {/* <a class="project-name" id={id} href={"works/"+ id}>
        {projectname}
      </a> */}
    </li>
  );
}

export default Project;
