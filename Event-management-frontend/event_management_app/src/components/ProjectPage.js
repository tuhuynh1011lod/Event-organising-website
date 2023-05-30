import React, { Component } from 'react'
import ProjectModule from './ProjectModule'

import HomeTaskBox from './HomeTaskBox'

export class ProjectPage extends Component {
  render() {
    return (
      <>
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
                    <HomeTaskBox></HomeTaskBox>
                    <HomeTaskBox></HomeTaskBox>
                    <HomeTaskBox></HomeTaskBox>
                    <HomeTaskBox></HomeTaskBox>
                
                </div>
            </div>
        </div>
      </>
    )
  }
}

export default ProjectPage
