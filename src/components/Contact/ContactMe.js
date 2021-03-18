import React from 'react'
import "./index.scss"
import SocialMedia from '../SocialMedia/SocialMedia'

function ContactMe() {
    return (
        <div id = "bio">
            <h2 id="contact-me">Contact</h2>
            <div id= "contact-info">
            <h4 id="contact">By Phone: (623) 363 - 5283</h4>
            <h4 id="contact"> By Email: <a href="mailto:m.alsham627@gmail.com">m.alsham627@gmail.com</a></h4>
            </div>

            <SocialMedia/>
        </div>
    )
}

export default ContactMe
