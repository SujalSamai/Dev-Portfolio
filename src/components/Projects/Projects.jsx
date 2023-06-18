import React from 'react'
import ProjectCard from './ProjectCard'


const Projects = (props) => {
  return (
    <section className='mt-20'>
      <h2 className='text-4xl'>projects.</h2>
      {
        props.projects.map((project)=>{
          return <ProjectCard key={project.id} num={project.id} name={project.name} desc={project.desc} tech={project.tech} img={project.img} github={project.github} live={project.live}/>
        })
      }
      
    </section>
  )
}

export default Projects