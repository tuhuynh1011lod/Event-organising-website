import React, { Component } from 'react'
import Project from './Project'


class ProjectList extends Component {

  render() {
    const projects = [
        {
            id: 1,
            organiser: 'VinAi',
            title: 'AI Day 2022',
            date: '2022-08-01',
            location: 'Hanoi, Vietnam',
        },
        {
            id: 2,
            organiser: 'GDG Hanoi',
            title: 'GDG DevFest 2022 NEW Year Happy somthing',
            date: '2022-06-10',
            location: 'Hanoi, Vietnam',
        },
        {
            id: 3,
            organiser: 'Saville',
            title: 'Happy Thursday',
            date: '2022-06-10',
            location: 'Hanoi, Vietnam',
        },
        {
            id: 4,
            organiser: 'Saville',
            title: 'Happy Thursday',
            date: '2022-06-10',
            location: 'Hanoi, Vietnam',

        },
        {
            id: 5,
            organiser: 'Saville',
            title: 'Happy Thursday',
            date: '2022-06-10',
            location: 'Hanoi, Vietnam',

        }



    ];
    const projectList = projects.map( (project) => <Project project= {project}/>);
    return (
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
    )
  }
}

export default ProjectList
