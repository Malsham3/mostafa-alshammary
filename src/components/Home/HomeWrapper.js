import React from "react";
import Header from "../Header/Header";
import Home from "./Home";
import './index.scss'

function HomeWrapper() {
  return (
    <>
      <Header />
      <div id="home-content">
        <Home />
      </div>
    </>
  );
}

export default HomeWrapper;
