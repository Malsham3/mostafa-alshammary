import React from 'react'

function NavItem({name, link}) {
    return (
        <li id="nav-item">
            <a id="nav-link" href= {link}>{name}</a>
        </li>
    )
}

export default NavItem
