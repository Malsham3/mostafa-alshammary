import React from 'react'
import "./index.scss"

function SocialMedia() {
    return (
        <div id="socialmedia">
            <h2 id="socialmedia-title">Social Media</h2>

            {/* GitHub */}
            <a id= "smicons" href="https://github.com/Malsham3" rel="noreferrer" title="GitHub" target="_blank"><i class="fa fa-github icon-3d"></i></a>

            {/* LinkedIn */}
            <a id="smicons" href="https://www.linkedin.com/in/mostafa-alshammary" rel="noreferrer" title="LinkedIn" target="_blank"><i class="fa fa-linkedin icon-3d"></i></a>
        </div>
    )
}

export default SocialMedia
