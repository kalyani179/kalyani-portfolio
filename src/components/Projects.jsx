import React from "react";
import ProjectsEntry from "./ProjectsEntry";
import MyProjects from "../myProjects";
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"

function CreateEntry(projects){
    return <Fade bottom left duration={2000}>
    <div  style={(projects.id)%2===0 ? {float:"right"} : {float:"left"}}>
    <ProjectsEntry 
        key = {projects.id}
        name = {projects.name}
        url = {projects.url}
        logo = {projects.logo}
        description = {projects.description}
    />
    </div>
    </Fade>
}

function Projects(){
    return <div>
    <Zoom>
    <h1 className="project-heading">To View the Projects Click on their Title</h1>
    </Zoom>
        <div>{MyProjects.map(CreateEntry)}</div>
    </div>
}

export default Projects;