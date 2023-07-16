import React from "react";
import Zoom from "react-reveal/Zoom"
import Fade from "react-reveal/Fade"
import Bounce from "react-reveal/Bounce"
import Rotate from "react-reveal/Rotate"

function Heading(){
    return (
<div className="heading-image-div">
    <div className="img-box">
        <Fade>
            <img className="kalyani-img" src="./kalyani-portfolio/kalyani.png" alt="kalyani-pic" />
        </Fade>
        <Bounce>
                <img className="pattern-img" src="./kalyani-portfolio/images/water-blue.png" alt="pattern"/>
        </Bounce>
        </div>
        <div className="heading-div">
        <Zoom>
            <h1 className="heading">I'am Kalyani Dantuluri</h1>
        </Zoom>
        <Fade clear duration={4000}>
            <p className="tagline">Here is where you can know more about me<img className="wink" src={"./kalyani-portfolio/images/wink.gif"} alt="wink"/> </p>
        </Fade>
        </div>
        <Fade right duration={3000}>
            <div className="social-media-div">
                <Rotate duration={3000}>
                    <a target="_" href="https://www.linkedin.com/in/kalyani-dantuluri-5a253023b/"><img className="social-media" src="./kalyani-portfolio/images/social-media/linkedin.png" alt="linkedin" /></a> 
                </Rotate>
                <Rotate duration={3000}>
                    <a target="_" href="https://github.com/kalyani179"><img className="social-media" src={"./kalyani-portfolio/images/social-media/github.png"} alt="github" /></a>
                </Rotate>
                <Rotate duration={3000}>
                    <a target="_" href="mailto:dantulurikalyani999@gmail.com"><img className="social-media" src="./kalyani-portfolio/images/social-media/email.png" alt="email" /></a> 
                </Rotate>
            </div>
        </Fade>
        
    </div>
    )
}

export default Heading;