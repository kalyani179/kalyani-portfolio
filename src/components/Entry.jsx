import React from "react";
import Zoom from "react-reveal/Zoom";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";
function Entry(props){
    return(
        <Zoom duration={2000}>
            <div className="skills-image-rating-div">
                <div className="skills-image-div">
                    <Flip duration={1000}>
                        <img className="skills-img" src={props.image} alt="skills" />
                    </Flip>
                </div>
                <Bounce clear duration={5000}>
                <div className="skills-rating-div">
                    <p>{props.rating}</p>
                </div>
                </Bounce>
            </div>
            </Zoom>
        )
}


export default Entry;