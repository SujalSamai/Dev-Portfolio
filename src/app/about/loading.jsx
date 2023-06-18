import React from 'react'
import {TbLoaderQuarter} from "react-icons/tb"

const loading = () => {
  return (
    <div className='flex justify-center items-center'>
      <TbLoaderQuarter className='w-20 h-20 animate-spin'/>
    </div>
  )
}

export default loading