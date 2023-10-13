'use client'
import Image from "next/image"
import resumeImg from "../../../public/resume.jpg"
import Link from "next/link"
import { BsArrowUpRight } from "react-icons/bs"

const Resume = () => {
  return (
    <>
      <meta
        title={'Resume | Sujal Samai'}
        description={
          'Checkout resume of Sujal Samai. On Google Drive or Download as a PDF'
        }
      />
      <div className="my-40 bg-teal-800 pb-12 md:py-20">
        <div className="flex flex-col lg:flex-row w-full lg:w-10/12 mx-auto">
          <Image src={resumeImg} width={600} height={600} className="shadow-lg p-1 md:px-4"/>
          <aside className="flex flex-col content-center justify-center gap-3 md:gap-5 mt-10 lg:mt-0 w-[60%] lg:w-auto mx-auto">
            <button className="flex items-center justify-center gap-1 bg-stone-950 py-2 px-5 rounded-lg hover:text-teal-400 transition-colors duration-300" onClick={()=> window.open('https://docs.google.com/document/d/1BO9Kog7_RBK9es3TXP6lgrhnQ03dJeE131KPui6_vZA/edit?usp=sharing')}>Resume on Drive <span className='animate-pulse'><BsArrowUpRight/></span></button>
            <Link href="/resume.pdf" className="flex items-center justify-center gap-1 bg-stone-950 py-2 px-5 rounded-lg hover:text-teal-400 transition-colors duration-300">Resume as PDF <span className='animate-pulse'><BsArrowUpRight/></span></Link>
            <Link href="https://indigo-ring-f16.notion.site/Sujal-Samai-b6d2c9e8d513441b9c0cc863d69d3705?pvs=4" className="flex items-center justify-center gap-1 bg-stone-950 py-2 px-5 rounded-lg hover:text-teal-400 transition-colors duration-300">Notion Resume <span className='animate-pulse'><BsArrowUpRight/></span></Link>
          </aside>
        </div>
      </div>
    </>
  )
}

export default Resume