import React from 'react'
import myImg from "../../../public/Me.jpg"
import Image from 'next/image'
import { dmSans } from '@/utils/Fonts'
import {BsArrowUpRight, BsArrowRight} from "react-icons/bs"
import Stack from '@/components/Stack/Stack'


const About = () => {
  return (
    <section>
      <div className='flex justify-between'>
        <div className='w-5/12 tracking-wider'>
          <h1 className={`text-5xl font-semibold ${dmSans.className} py-16`}>Hi I&apos;m Sujal Samai, web developer & content writer. </h1>
          <p className='text-slate-300 text-justify'>I&apos;m a Web Developer who likes to design beautiful websites primarily using Next/React.js and Tailwind CSS.
          Currently, I&apos;m focussing on improving my Frontend logics and also in the process to learn Backend Technologies.<br/><br/>
          I&apos;m constantly trying to challenge myself with new things and hoping to network with amazing developers all around the internet and learn from them.
          </p>
        </div>
        <div className='w-5/12 p-10'>
          <Image src={myImg} width={500} height={600} className='grayscale-50' alt='Sujal Samai'/>
        </div>
      </div>
      <div className='bg-teal-800 p-5 tracking-wider flex flex-col gap-4 my-20'>
        I am currently open for internship & full-time engineering roles, which involves designing content & layouts for the web, frontend engineering as the core. Seeking for a great working culture consisting of senior engineers & aspiring young minds. Interested in working together? Feel free to schedule a meet!
        <a href='https://docs.google.com/document/d/1YTc0XTcblUpHmbMwcIYSuzB5BzCkaCC7TV6jYmIURtg/edit?usp=sharing' className='w-fit flex items-center gap-1 bg-stone-950 py-2 px-5 rounded-lg hover:text-teal-400 transition-colors duration-300'>View Resume <span className='animate-pulse'><BsArrowUpRight/></span></a>
      </div>
      <Stack/>
      <hr/>
      <div className='my-20 flex justify-between items-center text-3xl'>
        <h2 className='w-4/12 flex items-end'>I&apos;m thrilled to answer to your next project.<BsArrowRight className='h-10 w-10'/></h2>
        <div className='w-4/12'>
          <a href="mailto:sujalsamai.work@gmail.com" className='hover:text-teal-400 hover:border-b-2 transition-all duration-200 ease-in'>sujalsamai.work@gmail.com</a>
        </div>
      </div>
    </section>
  )
}

export default About