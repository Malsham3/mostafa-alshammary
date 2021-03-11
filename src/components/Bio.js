import React from 'react'
import SocialMedia from './SocialMedia/SocialMedia'

function Bio() {
    return (
        <div id = "bio">
            <h3>ABOUT</h3>
            <p>I love to design, build, and fix broken code. Focused on crafting clean & user-friendly web application.</p>
            <p id="available">Available to work.</p>
            <h3>Social Media</h3>
            {/* INSERT ICONS HERE */}
            <SocialMedia/>
        </div>
    )
}

export default Bio
