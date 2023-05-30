import React from 'react'

function ProjectModule(props) {
  return (
    <div className='project-module'>
      <div className='module-icon' href={props.icon}></div>
      <h3 className='module-name'>{props.module}</h3>
    </div>
  )
}

export default ProjectModule
