import './App.css';
// import './ProjectList.css'
// import './ProjectPage.css'
// import  './TaskManager.css'
// import './FormResponse.css'

import Title from './components/Title';
import HomeProjects from './components/HomeProjects';
import SearchBar from './components/SearchBar';
import HomeTasks from './components/HomeTasks';
import ProjectList from './components/ProjectList';
import ProjectPage from './components/ProjectPage';
import TaskM_Header from './components/TaskM_Header';
import TaskM_Body from './components/TaskM_Body';
import FormResponse from './components/FormResponse';


function App() {

  
  return (
    <div className="App">
      
      
      {/* <TaskM_Header/>
      <TaskM_Body/> */}
      
      <Title 
        title='Project on Working' 
        user='' 
        subtitle=''>
      </Title>
      <SearchBar></SearchBar>
      {/* <FormResponse/> */}


      {/* <ProjectPage/> */}

      {/* <ProjectList/> */}
      
      <HomeProjects/>
      <HomeTasks/>


    </div>
  );
}

export default App;
