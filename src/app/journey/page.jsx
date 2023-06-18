import React from 'react'
import { dmSans } from '@/utils/Fonts'
import JourneyTrack from './JourneyTrack'

const journeys= [
  
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
    <section className='mb-10'>
      <div className='lg:w-7/12 mb-32 mt-20'>
        <h1 className={`text-5xl lg:text-7xl font-semibold ${dmSans.className} py-6`}>My Journey</h1>
        <h6 className='text-3xl lg:text-4xl'>The journey which started 3 years back has been amazing with great learning experience. Here&apos;s a sneak peak.</h6>
      </div>
      <div className=''>
        {
          journeys.map((journey)=>{
            return <JourneyTrack key={journey.id} name={journey.name} desc={journey.desc} date={journey.date}/>
          })
        }
      </div>
    </section>
  )
}

export default Journey