import React from 'react'
import { Route } from "react-router-dom";
import ProjectOne from "./Projects/ProjectOne"
import ProjectTwo from "./Projects/ProjectTwo"
import ProjectThree from "./Projects/ProjectThree"
import ProjectFour from "./Projects/ProjectFour"

function ProjectRoutes() {
    return (
        <>
        <Route exact path= "/works/1" component={ProjectOne} />
        <Route exact path= "/works/2" component={ProjectTwo} />
        <Route exact path= "/works/3" component={ProjectThree} />
        <Route exact path= "/works/4" component={ProjectFour} />
        </>
    )
}

export default ProjectRoutes
