import React from "react";

function projectEntry(props){
    return <div className="flex-container projects-div">
        <div className="project-logo">
            <img src={props.logo} alt="projectImage"/>
        </div>
        <div className="project-name-description">
        <a target="_" className="project-name" href={props.url}>{props.name}</a>
        <p className="project-description">{props.description}</p>
        </div>
    </div>
}

export default projectEntry;