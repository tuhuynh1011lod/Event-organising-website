import React from 'react'
import { Link } from 'react-router-dom'
// import '../Home.css'

function Title(props) {
  return (
    <div className='title'>
      <button className='button_pagelink'>
        <Link to={props.pagelink}></Link>
      </button>
      <h1>{props.title} {props.user}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  )
}

export default Title



