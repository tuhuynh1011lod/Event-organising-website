import React from 'react';
import { Link } from 'react-router-dom';

import Title from '../components/Title';
import HomeProjects from '../components/HomeProjects';
import SearchBar from '../components/SearchBar';
import HomeTasks from '../components/HomeTasks';

import '../style/Home.css';
import '../style/App.css'

export default function Home() {
  return (
    <div className='App'>
        <Title 
            title='Welcome ' 
            user='' 
            subtitle='Let continue your event managing process'>
        </Title>
        <SearchBar></SearchBar>
        <HomeProjects/>
        <HomeTasks/>
    </div>
  )
}
