import Projects from '@/components/Projects/Projects'
import React from 'react'
import Link from 'next/link'
import gitshow from "../../../public/gitshow.jpg"
import chatbot from "../../../public/chatbot.jpg"
import vogueco from "../../../public/vogueco.jpg"
import mario from "../../../public/mario.jpg"
import sorting from "../../../public/sorting.jpg"
import Articles from '@/components/Articles/Articles'
import { dmSans } from '@/utils/Fonts'
import { HiArrowDown } from 'react-icons/hi'
import { BsArrowUpRight } from 'react-icons/bs'

const projects = [
  {
    id:1,
    name: "GitShow",
    desc: "A Social-Media platform based on Github, whose main focus is to give you a platform your Github projects in a beautiful way, so that you can focus on the project and we can focus on taking it to the masses.",
    tech:"UI created using React.js & Tailwind CSS. Makes use of Firebase Authentication & Firestore at the backend with extensive use of GitHub API.",
    img:gitshow,
    github:"https://github.com/MadhaviGupta/GitShow",
    live:"https://gitshowbysmg.vercel.app",
  },
  {
    id:2,
    name: "DocBot",
    desc: "An automotic query resolver, which can read your documents and give answers based on them. Supports various document formats like .docx, .pdf, .csv, .xslx etc.",
    tech: "Creates embeddings using OpenAI API & LangChain Framework in Python. Uses FAISS to do similarity search to get accurate results.",
    img:chatbot,
    github:"https://github.com/SujalSamai/customBot",
    live:"https://docbot-chat.streamlit.app"
  },
  {
    id:3,
    name: "VoguEco",
    desc:"VogueEco focusses on the rising issue of increasing Carbon Footprint of the Fashion industry. The goal of this project is to encourage people to Donate their old clothes and Plant a Tree through our initiative.",
    tech: "UI created using React.js & Tailwind CSS. Makes use of Appwrite for Authentication and other backend work.",
    img:vogueco,
    github:"https://github.com/Nishantjain10/VogueEco",
    live:"https://www.vogueeco.us/",
  },
  {
    id:4,
    name: "Super Mario",
    desc:"This is replica of the original Super Mario game and works in your browser. The game consist of only a single level of the original Super Mario game, and can mimic all kinds of movements.",
    tech:"The Game uses JavaScript at its core with the use of HTML Canvas for rendering the sprites.",
    img:mario,
    github:"https://github.com/SujalSamai/Super-Mario-Game",
    live:"https://sujalsamai.github.io/Super-Mario-Game/",
  },
  {
    id:5,
    name: "Sorting Visualizer",
    desc:"Sorting Visualizer is an interactive and visual way to understand various Sorting Algorithms that are present. We can choose the size of array & the speed at which results are shown.",
    tech:"It uses Javascript, HTML & CSS to do its working.",
    img:sorting,
    github: "https://github.com/SujalSamai/Sorting-Visualizer",
    live:"https://sujalsamai.github.io/Sorting-Visualizer/",
  }
]

const Work = () => {
  return (
    <section>
      <div className='lg:w-7/12 mb-32 mt-20'>
        <h1 className={`text-5xl lg:text-7xl font-semibold ${dmSans.className} py-6`}>Some of my works.</h1>
        <h6 className='text-3xl lg:text-4xl'>Have a look at some of the projects that I&apos;ve worked upon in last few years.</h6>
      </div>
        <div className="mt-20 mb-5 flex justify-end">
          <HiArrowDown className="w-16 h-16 motion-safe:animate-bounce"/>
      </div>
      <Projects projects={projects}/>
      <Articles/>
      <div className='my-28 flex flex-col justify-center items-center text-center lg:text-left gap-4'>
        <h3 className='text-2xl'>Do you like my work?</h3>
        <Link href="/journey" className='w-fit flex items-center gap-1 border-b-2 hover:text-teal-400 transition-colors duration-300'>See my journey <span className='animate-pulse'><BsArrowUpRight/></span></Link>
      </div>
    </section>
  )
}

export default Work