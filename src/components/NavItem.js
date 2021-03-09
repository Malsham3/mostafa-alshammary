import React from 'react'

function NavItem({name}) {
    return (
        <li id="nav-item">
            <a id="nav-link" href="#">{name}</a>
        </li>
    )
}

export default NavItem
