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
    </section>
  )
}

export default Stack