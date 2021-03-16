import React from 'react'
import SiteName from "./SiteName"
import NavSection from "./NavSection";
import ContactCard from "../ContactCard";
import ProfilePicture from "../ProfilePicture";
import './index.scss'

function Header() {
    return (
        <div id="header">
            <SiteName/>
            <NavSection/>
            <ContactCard/>
        </div>
    )
}

export default Header
