import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className='flex justify-between py-10 border-y border-slate-400/50 tracking-wider'>
      <div className='w-2/12'>
        <span className='text-lg'>0{props.num}.</span>
      </div>
      <div className='w-4/12'>
        <h2 className='text-3xl font-medium'>{props.name}</h2>
      </div>
      <div className='w-6/12 px-12'>
        <p className=' text-slate-300'>{props.desc}</p>
      </div>
    </div>
  )
}

export default ServiceCard