import React from 'react'
import {TbLoaderQuarter} from "react-icons/tb"

const Loading = () => {
  return (
    <div className='flex w-full h-screen justify-center items-center z-[100]'>
      <TbLoaderQuarter className='w-20 h-20 animate-spin '/>
    </div>
  )
}

export default Loading