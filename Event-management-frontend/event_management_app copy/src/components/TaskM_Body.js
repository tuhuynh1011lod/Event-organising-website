import React, { useEffect,useState } from 'react'
import HomeTaskBox from './HomeTaskBox';

export default function TaskM_Body() {
  useEffect (() => {
      fetch("http://127.0.0.1:8000/tasks")
      .then(res=>res.json())
      .then (data=>setTask(data))
      // .then(err=>console.log(err))
    },[])
    const [task,setTask] = useState([])
    const taskInfoList = task.map((task) => <HomeTaskBox key= {task.task_id} task={task}/>);
  return (
    <div className='taskm-body-container'>
      <div className='taskm-body-buttons'> 
          <button>New Task</button>
          <button>Task Done</button>
      </div>
      <div className='taskm-tasks-box'>
          {/* <HomeTaskBox/>
          <HomeTaskBox/>
          <HomeTaskBox/>
          <HomeTaskBox/>
          <HomeTaskBox/>
          <HomeTaskBox/>
          <HomeTaskBox/>
          <HomeTaskBox/> */}
          {taskInfoList}

      </div>
      
    </div>
  )
}

