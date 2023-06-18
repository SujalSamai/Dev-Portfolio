import React from 'react'
import { dmSans } from '@/utils/Fonts'
import Form from './Form'
import Socials from './Socials'

const Contact = () => {
  return (
    <section>
      <div className='lg:w-7/12 mb-32 mt-40'>
        <h1 className={`text-5xl lg:text-7xl font-semibold ${dmSans.className} py-6`}>Get in Touch.</h1>
        <h6 className='text-xl lg:text-3xl'>Thanks for checking out the Portfolio. If you would like to contact me in the future or want to hire me, below is the way.</h6>
      </div>
      <div className='flex flex-col lg:flex-row justify-between gap-28 lg:gap-4 mb-20'>
        <Form/>
        <Socials/>
      </div>
    </section>
  )
}

export default Contact