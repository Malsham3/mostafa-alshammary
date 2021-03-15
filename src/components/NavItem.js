import React from 'react'

function NavItem({name, link, target}) {
    return (
        <li id="nav-item">
            <a id="nav-link" target = {target} href= {link}>{name}</a>
        </li>
    )
}

export default NavItem
