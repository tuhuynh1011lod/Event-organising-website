import React, { useEffect, useState} from 'react'
import ProjectsBox from './ProjectsBox'
import '../style/ProjectBox.css'


  
function HomeProjects() {
    useEffect(() => {
      fetch("http://127.0.0.1:5000/projects")
      .then(response => response.json())
      .then(data => setProjects(data))
      // .then(projects => setProjects(projects))
      .catch(err => console.log(err))
    },[])



    const [projects, setProjects] = useState([]);

    const projectInfoList = projects.map((project) => <ProjectsBox key= {project.pro_id} project= {project}/>);
    return (
      <div className="home-projects">
        <div className='title-and-all-projects'>
            <div className='title-underline'>
              <h2>Projects</h2>
              <div className='underline'></div>
            </div>
            
            <p><a href='/'>All Projects</a></p>
        </div>
        <div className='projects-box'>
          {projectInfoList}
        </div>
      </div>
    )
}

export default HomeProjects
