import React from 'react'
import myImg from "../../../public/Me.jpg"
import Image from 'next/image'
import { dmSans } from '@/utils/Fonts'
import {BsArrowUpRight, BsArrowRight} from "react-icons/bs"
import Stack from '@/components/Stack/Stack'
import Link from 'next/link'


const About = () => {
  return (
    <section className='mt-28'>
      <div className='flex flex-col lg:flex-row justify-between'>
        <div className='lg:w-5/12 tracking-wider'>
          <h1 className={`reveal-custom text-5xl font-semibold ${dmSans.className} py-16`}>Hi I&apos;m Sujal Samai, web & backend developer. </h1>
          <p className='reveal-custom-info text-slate-300 text-justify'>I&apos;m a passionate Software Engineer skilled in Java, Spring Boot, JavaScript, and modern web development frameworks like React.js and Next.js. I have professional experience optimizing microservices, building real-time communication systems, and developing scalable full-stack applications. <br/><br/>
          I enjoy solving complex problems, building intuitive user experiences, and continuously expanding my skill set. I’m driven by a love for technology, a commitment to innovation, and a belief in balancing career growth with a positive, collaborative work environment.
          </p>
        </div>
        <div className='lg:w-5/12 lg:p-10 mt-8 lg:mt-0'>
          <Image src={myImg} width={500} height={600} className='grayscale-50 hover:scale-105 hover:grayscale-0 transition-all duration-300 ease-in' alt='Sujal Samai'/>
        </div>
      </div>
      <div className='bg-teal-800 p-5 tracking-wider flex flex-col gap-4 my-20'>
        I am open to discuss for internship & full-time engineering roles, which involves designing content & layouts for the web, frontend engineering as the core. Or if available, eager to work on Backend with SpringBoot at the core. Seeking for a great working culture consisting of senior engineers & aspiring young minds. Interested in working together? Feel free to schedule a meet!
        <Link href={"/resume"} className='w-fit flex items-center gap-1 bg-stone-950 py-2 px-5 rounded-lg hover:text-teal-400 transition-colors duration-300'>View Resume <span className='animate-pulse'><BsArrowUpRight/></span></Link>
      </div>
      <Stack/>
      <hr/>
      <div className='my-20 flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between lg:items-center text-2xl lg:text-3xl'>
        <h2 className='lg:w-4/12 flex items-end'>I&apos;m thrilled to answer to your next project.<BsArrowRight className='h-10 w-10 hidden lg:block'/></h2>
        <div className='lg:w-4/12'>
          <a href="mailto:sujalsamai.work@gmail.com" className='text-xl lg:text-3xl hover:text-teal-400 hover:border-b-2 transition-all duration-200 ease-in'>sujalsamai.work@gmail.com</a>
          <Link href="/work" className='w-fit text-base mt-3 lg:mt-1 flex items-center gap-1 border-b-2 hover:text-teal-400 transition-colors duration-300'>Check my work <span className='animate-pulse'><BsArrowUpRight/></span></Link>
        </div>
      </div>
    </section>
  )
}

export default About