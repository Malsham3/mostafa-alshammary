import React from 'react'
import './index.scss'

function Bio() {
    return (
        <div id = "bio">
            <h2><a id="h2-tags" href="#" class="underlined underlined--offset">About</a></h2>
            {/* <p>Full Stack Web Developer based in Phoenix, AZ.</p>
            <p> Car enthusiast, fitness and health fanatic, traveler and more. Fueld by high energy and passion. A quick learner, who's able to pick up new skills and take on different projects with relative ease</p>
            <p>Strives to design and build immersive and user-centric web applications. Also enjoys finding bugs and fixing broken code.</p>
            <p>These days my time is spent working on my personal projects </p> */}

            <p p id="wrapper-p"><a id="anchor-tags" href="#" class="underlined underlined--thin">I’m Mostafa, a self-motivated Full Stack Web Developer. I recently graduated from University of Arizona Coding Bootcamp with a certificate in Full Stack Web Development. During that intensive bootcamp I was successfully able to develop various technical skills in Web Development. Now I am working part-time on my own projects and seeking an opportunity to expand my career in this line of work full-time.</a></p>

            <p p id="wrapper-p"><a id="anchor-tags" href="#" class="underlined underlined--thin">I'm a car enthusiast, fitness and health fanatic, traveler and more. Fueld by high energy and passion. A quick learner, who's able to pick up new skills and take on different projects with relative ease. I strive to design and build immersive and user-centric web applications through well crafted code. I also enjoy finding bugs and fixing broken code.</a></p>

            <p id="available">Available to work.</p>
        </div>
    )
}

export default Bio