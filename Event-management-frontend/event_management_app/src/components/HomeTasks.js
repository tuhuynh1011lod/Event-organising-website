import React, {useState, useEffect} from 'react'
import HomeTaskBox from './HomeTaskBox'

function HomeTasks(){
    //

    useEffect (() => {
      fetch("http://127.0.0.1:8000/tasks")
      .then(res=>res.json())
      .then (data=>setTasks(data))
      // .then(err=>console.log(err))
    },[])

    const [tasks, setTasks] = useState([]);
    
    const taskInfoList = tasks.map((task) => <HomeTaskBox key= {task.task_id} task={task}/>);

    return (
      <div className='home-tasks'>
        <div className='title-and-all-tasks'>
            <div className='title-underline'>
              <h2>Tasks</h2>
              <div className='underline'></div>
            </div>
            
            <p><a href='/'>All Tasks</a></p>
        </div>
        <div className='tasks-box'>
          <div className='tasks-list'>
            {/* <HomeTaskBox/>
            <HomeTaskBox/> */}
            {taskInfoList}
          </div>
        </div>
      </div>
    )
  
}

export default HomeTasks
