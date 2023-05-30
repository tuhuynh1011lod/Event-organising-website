import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import Home from './routes_or_pages/Home';
import ProjectList from './routes_or_pages/ProjectList';
import ProjectPage from './routes_or_pages/ProjectPage';
import TaskMPage from './routes_or_pages/TaskMPage';
import FormResponse from "./routes_or_pages/FormResponse";


// import './ProjectList.css'
// import './ProjectPage.css'
// import  './TaskManager.css'
// import './FormResponse.css'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<ProjectList/>}/>
        <Route path="/project" element={<ProjectPage/>}/>
        <Route path="/taskmanager" element={<TaskMPage/>}/>
        <Route path="/formResponse" element={<FormResponse/>}/>
      </Routes>
    </BrowserRouter>
      
    
    // <div className="App">
      
      
    //   {/* <TaskM_Header/>
    //   <TaskM_Body/> */}
      
    //   <Title 
    //     title='Project on Working' 
    //     user='' 
    //     subtitle=''>
    //   </Title>
    //   <SearchBar></SearchBar>
    //   {/* <FormResponse/> */}


    //   {/* <ProjectPage/> */}

    //   {/* <ProjectList/> */}
      
    //   <HomeProjects/>
    //   <HomeTasks/>


    // </div>
  );
}

export default App;
