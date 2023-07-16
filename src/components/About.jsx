import React from "react";
import AboutEntry from "./AboutEntry";
import MyAbout from "../myAbout";

function Entry(about){
  return(
    <AboutEntry 
        key = {about.id}
        emoji = {about.emoji}
        front = {about.front}
        back1 = {about.back1}
        back2 = {about.back2}
        back3 = {about.back3}

    />
  )
}

function About(){
  return <div className="flex-container about-flex-box">
    {MyAbout.map(Entry)}
  </div>
}

export default About;