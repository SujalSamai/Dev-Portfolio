import React from 'react'
import gitshow from "../../../public/gitshow.jpg"
import vogueco from "../../../public/vogueco.jpg"
import ProjectCard from './ProjectCard'
import Link from 'next/link'

const projects = [
  {
    id:1,
    name: "GitShow",
    desc: "A Social-Media platform based on Github, whose main focus is to give you a platform your Github projects in a beautiful way, so that you can focus on the project and we can focus on taking it to the masses.",
    tech:"UI created using React.js & Tailwind CSS. Makes use of Firebase Authentication & Firestore at the backend with extensive use of GitHub API.",
    img:gitshow
  },
  {
    id:2,
    name: "DocBot",
    desc: "An automotic query resolver, which can read your documents and give answers based on them. Supports various document formats like .docx, .pdf, .csv, .xslx etc.",
    tech: "Creates embeddings using OpenAI API & LangChain Framework in Python. Uses FAISS to do similarity search to get accurate results.",
    img:"https://cdn.pixabay.com/photo/2023/02/04/17/28/chat-7767693_1280.jpg"
  },
  {
    id:3,
    name: "VoguEco",
    desc:"VogueEco focusses on the rising issue of increasing Carbon Footprint of the Fashion industry. The goal of this project is to encourage people to Donate their old clothes and Plant a Tree through our initiative.",
    tech: "UI created using React.js & Tailwind CSS. Makes use of Appwrite for Authentication and other backend work.",
    img:vogueco,
  }
]

const Projects = () => {
  return (
    <section className='my-32'>
      <h2 className='text-4xl'>projects.</h2>
      {
        projects.map((project)=>{
          return <ProjectCard key={project.id} num={project.id} name={project.name} desc={project.desc} tech={project.tech} img={project.img}/>
        })
      }
      <Link href="/work" className='my-10 w-fit border-2 flex items-center gap-1 border-gray-400 hover:border-teal-300 p-2 rounded-lg hover:text-teal-300 transition-all duration-200 ease-in text-base'>View All Projects</Link>
    </section>
  )
}

export default Projects