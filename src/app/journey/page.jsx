import React from 'react'
import { dmSans } from '@/utils/Fonts'
import JourneyTrack from './JourneyTrack'
import {BsArrowUpRight} from "react-icons/bs"
import Link from 'next/link'
import Image from 'next/image'
import journey from "../../../public/journey.jpg"
import { FaCode, FaGoogle, FaTrophy, FaGithub } from 'react-icons/fa'
import { SiCodechef } from 'react-icons/si'
import { HiUserGroup } from 'react-icons/hi'

const journeys= [
  {
    id:12,
    name:"Software Engineer Intern at Digivalet",
    desc:"Working as a Software Engineer Intern at Digivalet where my core responsibility lies in creating scalable and bug free, production ready Backend Service and Drivers for Digivalet Controllers.",
    date:"January, 2024 - Present"
  },
  {
    id:11,
    name:"Student Community Member of Generation Nothing, Nothing Tech. Ltd.",
    desc:"Selected as a Member of Generation Nothing, the first ever student program organized by the much hyped tech enthusiast company, Nothing Technologies Ltd.",
    date:"July, 2023 - November, 2023"
  },
  {
    id:10,
    name:"Full Stack Intern at Auring Technologies",
    desc:"Joined Auring Technologies, a startup based on Gurugram as a Full Stack Intern where I worked with codebases in React, Azure, LLMs, embeddings & vectorstores.",
    date:"May, 2023 - June, 2023"
  },
  {
    id:9,
    name:"Won Design-a-Thon",
    desc:"Participated in Design-a-Thon conducted by MLH, and came up with VogueEco, a sustainable fashion product which won the first prize.",
    date:"December, 2022 - January, 2023",
  },
  {
    id:8,
    name:"Devfest 2022, Indore",
    desc:"Went to Devfest conducted by Google Developer Groups, & learnt about various growing technologies from amazing speakers.",
    date:"4 December, 2022"
  },
  {
    id:7,
    name:"Polygon & AWS events, Jaipur",
    desc:"Went to Jaipur with the Hekors Community, & attended Polygon as well as AWS events. The experience was amazing. Had amazing food :)",
    date: "November, 2022",
  },
  {
    id:6,
    name:"HacktoberFest & Datacode event",
    desc:"Participated in HactoberFest & completed the challenge. Also visited DataCode Hacktoberfest event to do some networking.",
    date:"October, 2022"
  },
  {
    id:5,
    name:"Hekors Community & First Speaker Session",
    desc:"Joined Hekors Community, a community which promotes open source & believes in learning through networking. Took my first speaker session based on Open Source Contribution.",
    date:"September, 2022 - Present"
  }, 
  {
    id:4,
    name: "Head of Operations & Instructor, CSCult",
    desc:"Nominated as Head of Operations at CSCult to manage the finances of the organization & other recruitments. Also, instructed 5+ students to create their first project.",
    date:"November, 2021 - May, 2022",
  },
  {
    id:3,
    name:"Executing Committee Member, CMC",
    desc:"Joined Codechef Medicaps Chapter & planned various Competitive Programming contests in the university alsong with setting the questions.",
    date:"September, 2021 - July, 2022"
  },
  {
    id:2,
    name:"Open Source Contributor at WeMakeDevs",
    desc:"Contributed in the WeMakeDevs community, started by Kunal Kushwaha in its initial days.",
    date:"August,2021 - February, 2022"
  },
  {
    id:1,
    name:"Joined CSCult as Server Manager",
    desc:"Started my networking journey as a Server manager for a College Club named CSCult",
    date:"August, 2021 - November, 2021",
  },
  
]

const Journey = () => {
  return (
    <section className='mt-36 lg:mt-28'>
      <div className='flex flex-col lg:flex-row justify-between mb-72'>
        <div className='lg:w-6/12 mt-20 tracking-wider flex flex-col gap-28 lg:my-24 justify-evenly'>
          <div>
            <h1 className={`reveal-custom text-5xl font-semibold ${dmSans.className} py-6`}>My Journey</h1>
            <h6 className='reveal-custom text-xl'>The journey which started 3 years back has been amazing with great learning experience. Here&apos;s a sneak peak.</h6>
          </div>
          <span className='lg:flex gap-12 hidden'>
            <FaTrophy className='w-10 h-10 hover:scale-150 hover:mx-5 transition-all duration-500 ease-out'/>
            <HiUserGroup className='w-10 h-10 hover:scale-150 hover:mx-5 transition-all duration-500 ease-out'/>
            <FaGithub className='w-10 h-10 hover:scale-150 hover:mx-5 transition-all duration-500 ease-out'/>
            <FaCode className='w-10 h-10 hover:scale-150 hover:mx-5 transition-all duration-500 ease-out'/>
            <FaGoogle className='w-10 h-10 hover:scale-150 hover:mx-5 transition-all duration-500 ease-out'/>
            <SiCodechef className='w-10 h-10 hover:scale-150 hover:mx-5 transition-all duration-500 ease-out'/>
          </span>
        </div>
            <Image src={journey} width={500} height={600} className='-z-10 hidden lg:block absolute top-0 right-0 opacity-5 blur-sm lg:blur-0 lg:w-7/12 grayscale-50' alt='Sujal Samai'/>
        
      </div>
      <div className=''>
        {
          journeys.map((journey)=>{
            return <JourneyTrack key={journey.id} name={journey.name} desc={journey.desc} date={journey.date}/>
          })
        }
      </div>
      <div className='my-28 flex flex-col justify-center items-center text-center lg:text-left gap-4'>
        <h3 className='text-2xl'>Thanks for checking out.</h3>
        <Link href="/contact" className='w-fit flex items-center gap-1 border-b-2 hover:text-teal-400 transition-colors duration-300'>Get in Touch <span className='animate-pulse'><BsArrowUpRight/></span></Link>
      </div>
    </section>
  )
}

export default Journey