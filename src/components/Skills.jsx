import React from 'react';
import Entry from "./Entry";
import MySkills from "../mySkills";

function CreateEntry(skills){
  return (
    <Entry 
      key = {skills.id}
      image = {skills.image}
      rating = {skills.rating}
    />
  );
}

function Skills(){
  return (
    <div className='my-skills'>
      <dl className="flex-container">{MySkills.map(CreateEntry)}</dl>
    </div>
  )
}

export default Skills;
