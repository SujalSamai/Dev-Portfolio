"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { outfit } from '@/utils/Fonts'
import {RiMenu3Line} from "react-icons/ri"
import {RxCross1} from "react-icons/rx"


const links= [
    {
        id:1,
        title:"About Me",
        url:"/about",
    },
    {
        id:2,
        title:"Work",
        url:"/work",
    },
    {
        id:3,
        title:"Experience",
        url:"/experience",
    },
    {
        id:4,
        title:"Contact",
        url:"/contact",
    },

]

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const handleMenu = () =>{
    setOpen(!open)
  }
  const closeMenu = () => {
    setOpen(false)
  }
  return (
    <>
      <nav className={`flex justify-between items-center ${outfit.className} my-14`}>
        <Link href="/" className='text-3xl lg:text-4xl'>sujal.</Link>
        <div className="hidden lg:flex gap-10">
            {links.map((link)=>{
              return <Link key={link.id} href={link.url} className='border-b-2 border-transparent hover:text-teal-300 hover:border-b-2 hover:border-teal-300 transition-colors duration-300 ease-out'>{link.title}</Link>
            })}
        </div>
        <div className='lg:hidden'>
          {
            open ? <RxCross1 className='h-7 w-7 z-50 relative' onClick={handleMenu}/>: <RiMenu3Line className='h-7 w-7 z-50 relative' onClick={handleMenu}/>
          }
        </div>
      </nav>
      {
        open && (
          <div className="bg-teal-400/80 backdrop-blur-lg py-44 w-11/12 text-center text-xl h-screen absolute z-20 flex flex-col gap-10">
            {links.map((link)=>{
              return <Link key={link.id} href={link.url} onClick={closeMenu}>{link.title}</Link>
            })}
          </div>
        )
      }
    </>
  )
}

export default Navbar