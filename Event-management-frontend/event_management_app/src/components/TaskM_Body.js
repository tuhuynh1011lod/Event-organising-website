import React, { Component } from 'react'
import HomeTaskBox from './HomeTaskBox';

class TaskM_Body extends Component {
  render() {
    return (
      <div className='taskm-body-container'>
        <div className='taskm-body-buttons'> 
            <button>New Task</button>
            <button>Task Done</button>
        </div>
        <div className='taskm-tasks-box'>
            <HomeTaskBox/>
            <HomeTaskBox/>
            <HomeTaskBox/>
            <HomeTaskBox/>
            <HomeTaskBox/>
            <HomeTaskBox/>
            <HomeTaskBox/>
            <HomeTaskBox/>

        </div>
        
      </div>
    )
  }
}
export default TaskM_Body;
