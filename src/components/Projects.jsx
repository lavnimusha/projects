import React,{useEffect, useState} from 'react'
import data from './Pro.json'
import './Projects.css'


function Projects() {
    
    const arr = Object.entries(data)
    
   
  return (
      <div className='projects'>
          <h1>Projects</h1>
          <div className='projects_cnt'>
        
       { arr.map((ele) =>
            <div className='pro_card'>
                <img src={ele[1].img} alt="project screen shot" />
                <a href={ele[1].url}>{ele[1].name}</a>
                </div>
        )}
    </div>
      </div>
    
    
  )
}

export default Projects