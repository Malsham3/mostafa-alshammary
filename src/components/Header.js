import React from 'react'
import Foo from "../components/Foo";
import SiteName from "./SiteName"
import NavSection from "../components/NavSection";
import ContactCard from "../components/ContactCard";
import ProfilePicture from "../components/ProfilePicture";

function Header() {
    return (
        <div id="header">
            {/* <Foo/> */}
            <SiteName/>
            <NavSection/>
            <ContactCard/>
        </div>
    )
}

export default Header
