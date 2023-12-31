import React from 'react'
import blob from "../../../public/blob.svg"
import Image from 'next/image'

const JourneyTrack = (props) => {
  return (
    <div className='flex justify-end lg:justify-between lg:items-center border-l-2 border-dashed border-teal-400 lg:border-0 py-4 lg:py-0 lg:hover:scale-105 transition-all duration-200 ease-in relative lg:static'>
      <Image src={blob} width={50} height={50} alt='blob' className='absolute w-6 h-6 -left-3 top-[50%] lg:hidden' />
      <div className='flex flex-col gap-4 w-11/12 lg:w-1/2 rounded-lg py-8 px-4 border border-teal-700'>
        <h2 className='text-lg lg:text-2xl'>{props.name}</h2>
        <p className='text-sm text-slate-300'>{props.desc}</p>
        <p className='lg:hidden text-sm'>{props.date}</p>
      </div>
      <div className='border-l-2 hidden lg:block text-sm lg:text-base border-dashed border-teal-400 w-1/2 py-32 lg:py-20 pl-8 relative'>
        <Image src={blob} width={50} height={50} alt='blob' className='absolute -left-3 w-6 h-6' />
        <p>{props.date}</p>
      </div>
    </div>
  )
}

export default JourneyTrack