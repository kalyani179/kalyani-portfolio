import React from "react";
import LightSpeed from "react-reveal/LightSpeed"

function ExperiencesEntry(props){
    return <LightSpeed left right>
    <div className="experiences-div">
        {/* <div className="company-logo">
            <img src={props.logo} alt="imag"/>
        </div> */}
        <div className="experiences-details">
            <a className="company-name" href={props.url}>{props.company}</a>
            <p className="compnay-role">{props.role}</p>
        </div>
    </div>
    </LightSpeed>
}

export default ExperiencesEntry;