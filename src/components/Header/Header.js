import React from 'react'
import SiteName from "./SiteName"
import NavSection from "./NavSection";
import './index.scss'

function Header() {
    return (
        <div id="header">
            <SiteName/>
            <NavSection/>
        </div>
    )
}

export default Header
