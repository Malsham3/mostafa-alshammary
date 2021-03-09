import React from 'react'
import NavItem from './NavItem'

const navItems = [
    {
        name: "HOME",
        link: "/"
    },
    {
        name: "ABOUT",
        link: "/about"
    },
    {
        name: "WORKS",
        link: '/works'
    },
    {
        name: "CONTACT",
        link: '/'
    }
]

function NavSection() {
    return (
        <div id ="nav-section">
            <ul id="nav-ul" >
                {navItems.map(({name, link}) => (
                    <NavItem name = {name} link = {link}/>
                ))}
            </ul>
        </div>
    )
}

export default NavSection
