import React from 'react'

function ProjectBox2({project}) {
  return (
        <div className='project-box'>
            <h1 className='project-title2'>
                {project.title }</h1>
            <h2 className='project-deadline'>
                Deadline: {project.date}
            </h2>
            <div className='location-organiser-span'>
                <span className='project-location'>
                    {project.location}
                </span>
                <span className='project-organiser'>
                    {project.organiser}
                </span>
            </div>
        </div>
  )
}

export default ProjectBox2
