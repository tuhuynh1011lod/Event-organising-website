import React from 'react'

import TaskM_Body from '../components/TaskM_Body'
import TaskM_Header from '../components/TaskM_Header'

import '../style/App.css'
import '../style/TaskManager.css'

export default function TaskMPage() {
  return (
    <div className='App'>
      <TaskM_Header/>
      <TaskM_Body/>
    </div>
  )
}
