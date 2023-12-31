import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {BsArrowUpRight} from "react-icons/bs"

const ProjectCard = (props) => {
  return (
    <div className='flex flex-col lg:flex-row justify-between my-5 border-b-2 py-14 lg:py-20'>
      <div className='lg:w-4/12 flex flex-col justify-between'>
        <div>
          <h3 className='uppercase text-xl font-medium tracking-wider'>
            0{props.num} / {props.name}
          </h3>
          <h6 className='text-justify mt-5'>{props.desc}</h6>
          <p className='text-gray-400 text-sm my-4'>{props.tech}</p>
        </div>
        <div className="lg:flex gap-5 hidden">
          <Link href={props.live} target='_blank' className='w-fit flex items-center gap-1 border-b-2 hover:text-teal-400 transition-colors duration-300'>Live Demo <span className='animate-pulse'><BsArrowUpRight/></span></Link>
          <Link href={props.github} target='_blank' className='w-fit flex items-center gap-1 border-b-2 hover:text-teal-400 transition-colors duration-300'>GitHub Link <span className='animate-pulse'><BsArrowUpRight/></span></Link>
        </div>
      </div>
      <div className='lg:w-1/2 lg:h-[400px]'>
        <Image src={props.img} width={500} height={500} className="w-full h-full grayscale-50 hover:grayscale-0 hover:scale-105 transition-all duration-300 ease-out" alt='project-img'/>
      </div>
      <div className="mt-6 flex gap-5 lg:hidden">
          <Link href={props.live} target='_blank' className='w-fit flex items-center gap-1 border-b-2 hover:text-teal-400 transition-colors duration-300'>Live Demo <span className='animate-pulse'><BsArrowUpRight/></span></Link>
          <Link href={props.github} target='_blank' className='w-fit flex items-center gap-1 border-b-2 hover:text-teal-400 transition-colors duration-300'>GitHub Link <span className='animate-pulse'><BsArrowUpRight/></span></Link>
        </div>
    </div>
  )
}

export default ProjectCard