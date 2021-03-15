import React from 'react'
import NavItem from './NavItem'
import PDF from '../utils/MAResume2021.pdf'

const navItems = [
    {
        name: "HOME",
        link: "/",
    },
    {
        name: "WORKS",
        link: '/works'
    },
    {
        name: "RESUME",
        link: PDF,
        target: "_blank"
    },
    {
        name: "CONTACT",
        link: '/contactme'
    }
]

function NavSection() {
    return (
        <div id ="nav-section">
            <ul id="nav-ul" >
                {navItems.map(({name, link, target}) => (
                    <NavItem name = {name} link = {link} target={target}/>
                ))}
            </ul>
        </div>
    )
}

export default NavSection
