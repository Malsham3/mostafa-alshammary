import React from 'react'
import SocialMedia from './SocialMedia/SocialMedia'

function Bio() {
    return (
        <div id = "bio">
            <h2>ABOUT</h2>
            {/* <p>I love to design, build, and fix broken code. Focused on crafting clean & user-friendly web application.</p> */}
            <p>Full Stack Web Developer based in Phoenix, AZ.</p>
            <p> Music enthusiast, fitness  and health fanatic, traveler and more. Fueld by high energy and passion. A quick learner, who's able to pick up new skills and take on different projects with relative ease</p>
            <p>Loves to design, build clean and user-friendly web applications. Also enjoys finding bugs and fixing broken code.</p>
            <p id="available">Available to work.</p>
            <SocialMedia/>
        </div>
    )
}

export default Bio
