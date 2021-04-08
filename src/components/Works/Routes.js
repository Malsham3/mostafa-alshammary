import React from 'react'
import { Route } from "react-router-dom";
import ProjectOne from "./ProjectOne"
// import ProjectTwo from "./ProjectTwo"
// import ProjectThree from "./ProjectThree"
// import ProjectFour from "./ProjectFour"
// import ProjectFive from "./ProjectFive"

function Routes() {
    return (
        <>
        <Route exact path= "/works/1" component={ProjectOne} />
        {/* <Route exact path= "/works/2" component={ProjectTwo} />
        <Route exact path= "/works/3" component={ProjectThree} />
        <Route exact path= "/works/4" component={ProjectFour} />
        <Route exact path= "/works/5" component={ProjectFive} /> */}
        </>
    )
}

export default Routes
