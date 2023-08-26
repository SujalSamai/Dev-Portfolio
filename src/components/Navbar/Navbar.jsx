"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { outfit } from '@/utils/Fonts'
import {RiMenu3Line} from "react-icons/ri"
import {RxCross1} from "react-icons/rx"
import plant from "../../../public/favicon.png"
import Image from 'next/image'
import { motion } from 'framer-motion'

const links= [
    {
        id:1,
        title:"about me",
        url:"/about",
    },
    {
        id:2,
        title:"work",
        url:"/work",
    },
    {
        id:3,
        title:"journey",
        url:"/journey",
    },
    {
        id:4,
        title:"contact",
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
    <nav className={`w-full fixed right-0 mx-auto z-[100] backdrop-blur-md`}>
      <div className={`flex justify-between items-center w-10/12 lg:w-9/12 mx-auto py-8 lg:py-10 ${outfit.className}`}>
        <Link href="/" className='text-3xl lg:text-4xl hover:scale-105 transition-all duration-200 ease-in flex gap-2'>sujal.<Image src={plant} width={50} height={50} alt='seedling' className='w-10 h-10 p-1'/></Link>
        <div className="hidden lg:flex gap-10">
            {links.map((link)=>{
              return <Link key={link.id} href={link.url} className='reveal-custom-info border-b-2 border-transparent hover:text-teal-300 hover:border-b-2 hover:border-teal-300 transition-colors duration-300 ease-out'>{link.title}</Link>
            })}
        </div>
        <div className='lg:hidden'>
          {
            open ? <RxCross1 className='h-7 w-7 z-50 relative' onClick={handleMenu}/>: <RiMenu3Line className='h-7 w-7 z-50 relative' onClick={handleMenu}/>
          }
        </div>
      </div>
      {
        open && (
          <motion.div initial={{ width: 0 }}
            animate={{
              width: "100%"
            }}
            exit={{
              width: 0,
              transition: { delay: 0.9, duration: 0.9 }
            }} className="bg-slate-600 fixed top-0 right-0 h-screen pt-80 mx-auto text-center text-xl z-20 flex flex-col gap-2">
              <Link href={"/"} onClick={closeMenu} className='py-1 w-10/12 mx-auto text-3xl'>home</Link>
            {links.map((link)=>{
              return <motion.div initial={{y:-25 ,opacity:0}} animate={{y:0, opacity:100}} transition={{duration:0.5}} key={link.id}><Link href={link.url} onClick={closeMenu} className='py-1 w-10/12 mx-auto text-3xl'>{link.title}</Link></motion.div>
            })}
            <hr className='mt-28 w-8/12 mx-auto'/>
            <h3 className='text-normal mt-4'>Sujal Samai - 2023.</h3>
          </motion.div>
        )
      }
    </nav>
  )
}

export default Navbar