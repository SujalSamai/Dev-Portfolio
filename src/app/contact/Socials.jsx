import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

const socials = [
  {
    id:1,
    name:"GitHub",
    url:"@sujalsamai",
    link:"https://github.com/SujalSamai",
  },
  {
    id:2,
    name:"LinkedIn",
    url:"linkedin.com/in/sujal-samai",
    link:"https://linkedin.com/in/sujal-samai",
  },
  {
    id:3,
    name:"Twitter",
    url:"@SujalSamai",
    link:"https://twitter.com/SujalSamai",
  },
  {
    id:4,
    name:"Instagram",
    url:"@sujalsamai",
    link:"https://www.instagram.com/sujalsamai/",
  },
  {
    id:5,
    name:"HashNode",
    url:"hashnode.com/@sujalsamai",
    link:"https://sujalsamai.hashnode.dev/",
  },
  {
    id:6,
    name:"Resume",
    url:"sujalsamai.co/resume",
    link:"https://indigo-ring-f16.notion.site/Sujal-Samai-b6d2c9e8d513441b9c0cc863d69d3705?pvs=4"
  }
]

const Socials = () => {
  return (
    <div className='lg:w-6/12 lg:p-10 lg:border-l border-dashed border-teal-600'>
      <h3 className='text-4xl mb-10'>socials.</h3>
      {
        socials.map((social)=>{
          return(
            <div key={social.id} className='flex lg:w-5/6 justify-between my-2'>
              <h4>{social.name}</h4>
              <a href={social.link} className='flex items-center gap-1 text-sm text-slate-300 hover:border-b hover:text-teal-400 transition-all duration-200 ease-out'>{social.url}<span><BsArrowUpRight/></span></a>
            </div>
          )
        })
      }
    </div>
  )
}

export default Socials