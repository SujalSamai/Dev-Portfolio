import Link from 'next/link'
import React from 'react'
import {FiFolder} from "react-icons/fi"
import {RxExternalLink} from "react-icons/rx"

const ArticleCard = (props) => {
  return (
    <div className='w-4/12 bg-teal-500/60 p-5 hover:scale-105 transition-all duration-200 ease-out'>
      <div className='flex justify-between'>
        <FiFolder className='w-12 h-12 text-cyan-400'/>
        <Link href={props.link} ><RxExternalLink className='w-6 h-6 hover:text-cyan-400 hover:scale-110 transition-all duration-200 ease-out cursor-pointer'/></Link>
      </div>
      <div className='my-4 flex flex-col gap-3'>
        <h3 className='text-xl font-semibold'>{props.name}</h3>
        <p className='text-sm tracking-wider'>{props.desc}</p>
      </div>
      <div className='mt-8'>
        <p className='bg-slate-900 px-3 py-1 w-fit'>{props.tech}</p>
      </div>
    </div>
  )
}

export default ArticleCard