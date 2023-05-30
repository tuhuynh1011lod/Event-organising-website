import React, { useState, useEffect } from 'react';

import ProjectBox2 from '../components/ProjectBox2';
import Title from '../components/Title';
import SearchBar from '../components/SearchBar';

import '../style/ProjectList.css';
import '../style/App.css';



export default function ProjectList() {

  useEffect(() => {
    fetch('http://127.0.0.1:5000/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
  },[]);

  const [projects, setProjects] = useState([]);
  console.log(projects);
  const projectList = projects.map( (project) => <ProjectBox2 key={project.pro_id} project= {project}/>);
  return (
    <div className='App'>
      <Title 
          title='Project on Working' 
          user='' 
          subtitle=''>
      </Title>
      <SearchBar></SearchBar>
      <div className='project-list'>
        <div className='projectlist-title-button'>
            <div className='title-underline'>
              <h2>Projects</h2>
              <div className='underline'></div>
            </div>
            <button className='new-project'>New Projects</button>
        </div>
        <div className='project-container'>
            {projectList}
            <div className='blank-box project-box'></div>
        </div>
      </div>
    </div>
  )
}



