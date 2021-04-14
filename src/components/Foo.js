import React from "react";
import ProjectOne from "./Works//Projects/ProjectOne"
import { BrowserRouter, Route } from "react-router-dom";

function Foo() {
  return (
    <Route exact path= "/works/1" component={ProjectOne} />
  )
}

export default Foo;
