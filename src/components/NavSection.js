import React from 'react'
import NavItem from './NavItem'

function NavSection() {
    return (
        <div id ="nav-section">
            <ul id="nav-ul" >
                <NavItem name = "HOME"/>
                <NavItem name = "ABOUT"/>
                <NavItem name = "WORKS"/>
                <NavItem name = "CONTACT"/>
            </ul>
        </div>
    )
}

export default NavSection
