import React from 'react'

const JourneyTrack = (props) => {
  return (
    <div className='flex justify-between items-center hover:scale-105 transition-all duration-200 ease-in'>
      <div className='flex flex-col gap-4 w-10/12 lg:w-1/2 rounded-lg py-8 px-4 border border-teal-700'>
        <h2 className='text-lg lg:text-2xl'>{props.name}</h2>
        <p className='text-sm text-slate-300'>{props.desc}</p>
      </div>
      <div className='border-l-2 text-sm lg:text-base border-dashed border-teal-400 w-1/2 py-32 lg:py-20 pl-8'>{props.date}</div>
    </div>
  )
}

export default JourneyTrack