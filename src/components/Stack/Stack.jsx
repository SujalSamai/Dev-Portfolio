import React from 'react'
import {BsArrowUpRight} from "react-icons/bs"
import StackCard from './StackCard.jsx'
import Link from 'next/link.js'

const Stack = () => {
  return (
    <section className='my-32'>
      <h2 className='text-4xl'>tech stack.</h2>
      <p className='text-gray-300'>Technologies that I use regularly.</p>
      <div className='flex flex-col lg:flex-row flex-wrap mt-10'>
        <StackCard name="Languages" tech={["Java", "JavaScript", "Python", "SQL"]}/>
        <StackCard name="Frameworks / Libraries" tech={["SpringBoot","Next.js","React.js", "Tailwind CSS", "Bootstrap"]}/>
        <StackCard name="Tools" tech={["Git", "VSCode", "Intellij IDEA", "Postman", "Vite", "Linux Terminal"]}/>
        <StackCard name="Platforms" tech={["GitHub","Firebase", "Appwrite", "Netlify", "Vercel", "Ubuntu"]}/>
        <StackCard name="Databases" tech={["MySQL", "Firestore"]}/>
      </div>
    </section>
  )
}

export default Stack