import React from 'react'


const ProjectsBox = ({project}) =>{
  return (
    <div className='project'>
      <div className='project-content'>
        <div className='project-title'> {project.title}</div>
        <div className='project-organiser'>{project.description}</div>
        <div className='project-date'>{project.update_date}</div>
        <div className='project-location'>{project.type}</div>
      </div>
    </div>
  )
};


export default ProjectsBox