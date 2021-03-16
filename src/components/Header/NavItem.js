import React from 'react'

function NavItem({name, link, target}) {
    return (
            <a id="nav-item" target = {target} href= {link}>{name}</a>
    )
}

export default NavItem
