import React from 'react'
import Calendar from './Calendar'
import HomeTaskBox from './HomeTaskBox';


const TaskM_Header = () => {
  return (
    <div className='taskm-header-container'>
      <div className='taskm-title'>
            <h1>
             Tasks
            </h1>
            <span className='taskm-title-underline'></span>
        </div>
        <div className='taskm-calendar-box'>
            <Calendar/>
        </div>
        

    </div>
  )
}

export default TaskM_Header ;
