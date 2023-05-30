import React, { useEffect,useState } from 'react';

import ProjectModule from '../components/ProjectModule';
import HomeTaskBox from '../components/HomeTaskBox';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';

import '../style/App.css';
import '../style/ProjectPage.css';


export default function ProjectPage() {
  
  useEffect (() => {
      fetch("http://127.0.0.1:8000/tasks")
      .then(res=>res.json())
      .then (data=>setTask(data))
      // .then(err=>console.log(err))
    },[])
    const [task,setTask] = useState([])
    const taskInfoList = task.map((task) => <HomeTaskBox key= {task.task_id} task={task}/>);
  return (
    <div className='App'>
      <Title 
            title='Project' 
            user='' 
            subtitle=''>
      </Title>
      <SearchBar></SearchBar>
      <div className='project-modules-container'>
          <ProjectModule icon='#' module='Event Details'/>
          <ProjectModule icon='#' module='Budget'/>
          <ProjectModule icon='#' module='Tasks'/>
          <ProjectModule icon='#' module='Members'/>
          <ProjectModule icon='#' module='Registration Form'/>
          <ProjectModule icon='#' module='Response(s)'/>
      </div>
      <div className='project-tasks'>
          <div className='title-and-all-tasks'>
              <div className='title-underline'>
                  <h2> Today Tasks</h2>
                  <div className='underline'></div>
              </div>
              
              <p><a href='/'>All Tasks</a></p>
          </div>
          <div className='project-tasks-box'>
              <div className='project-tasks-list'>
                  {/* <HomeTaskBox></HomeTaskBox>
                  <HomeTaskBox></HomeTaskBox>
                  <HomeTaskBox></HomeTaskBox>
                  <HomeTaskBox></HomeTaskBox> */}
                  {taskInfoList}
              </div>
          </div>
      </div>
    </div>
  )
}

