import React from 'react'
import {BsArrowUpRight} from "react-icons/bs"
import StackCard from './StackCard.jsx'
import Link from 'next/link.js'

const Stack = () => {
  return (
    <section className='my-32'>
      <h2 className='text-4xl'>tech stack.</h2>
      <p className='text-gray-300'>Technologies that I use regularly.</p>
      <div className='flex flex-wrap mt-10'>
        <StackCard name="Languages" tech={["Java", "C/C++", "JavaScript", "Python", "SQL"]}/>
        <StackCard name="Frameworks / Libraries" tech={["Next.js","React.js", "Tailwind CSS", "Bootstrap"]}/>
        <StackCard name="Tools" tech={["Git", "VSCode", "Intellij IDEA", "Postman", "Vite", "Figma"]}/>
        <StackCard name="Platforms" tech={["GitHub","Firebase", "Appwrite", "Netlify", "Vercel"]}/>
        <StackCard name="Databases" tech={["MySQL", "Firestore"]}/>
      </div>
      <div className='mt-20 flex flex-col justify-center items-center gap-4'>
        <h3 className='text-2xl'>Wanna know more about me?</h3>
        <Link href="/about" className='w-fit flex items-center gap-1 border-b-2 hover:text-teal-400 transition-colors duration-300'>Click Here <span className='animate-pulse'><BsArrowUpRight/></span></Link>
      </div>
    </section>
  )
}

export default Stack