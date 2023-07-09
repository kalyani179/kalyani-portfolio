import React from 'react';
import ExperiencesEntry from "./ExperiencesEntry";
import MyExperiences from '../myExperiences';

function CreateEntry(experiences){
  return (
    <ExperiencesEntry 
      key = {experiences.id}
      company = {experiences.company}
      role = {experiences.role}
      logo = {experiences.logo}
      url = {experiences.url}
    />
  );
}

function Experiences(){
  return (
    <dl className="flex-container">{MyExperiences.map(CreateEntry)}</dl>
  )
}

export default Experiences;