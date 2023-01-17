import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects[0].technologies);
  let eachProject = projects.map((projects)=>{
    return (
      <div key={projects.id}>
        <h4>{projects.name}</h4>
        <p>{projects.about}</p>
      </div>)
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{
        eachProject}</div>
    </div>
  );
}

export default ProjectList;
