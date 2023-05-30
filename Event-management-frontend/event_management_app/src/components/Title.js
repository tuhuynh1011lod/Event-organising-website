import React from 'react'
import '../Home.css'

function Title(props) {
  return (
    <div className='title'>
        <h1>{props.title} {props.user}</h1>
        <h2>{props.subtitle}</h2>
    </div>
  )
}

export default Title



