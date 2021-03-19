import React from "react";
import './index.scss'
import SiteName from "../Header/SiteName";
import NavSection from "../Header/NavSection";

function Home() {
  return (
    <div id="main">
      <div id="content">
        <SiteName />
        <NavSection />
      </div>
    </div>
  );
}

export default Home;
