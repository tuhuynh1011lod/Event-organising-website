import React from 'react'

function HomeTaskBox({task}) {
  return (
    <div className='home-task project-task taskm-task'>
      <div className='task-content'>
        <label for='checkbox' className='task-title'><h4>{task.title}</h4></label>
        <div className='task-subtitle'>
                
        <span>{task.create_date}</span>
        <span>AI Day 2022</span>

      </div>
      </div>
      <div className='status-dropdown'>{task.state}</div>
              
    </div>
  )
}
export default HomeTaskBox