import Link from 'next/link'
import React from 'react'
import { outfit } from '@/utils/Fonts'


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
  return (
    <nav className={`flex  justify-between items-center ${outfit.className} my-14`}>
        <Link href="/" className=' text-4xl'>sujal.</Link>
        <div className="flex gap-10">
            {links.map((link)=>{
                return <Link key={link.id} href={link.url} className='border-b-2 border-transparent hover:text-teal-300 hover:border-b-2 hover:border-teal-300 transition-colors duration-300 ease-out'>{link.title}</Link>
            })}
        </div>
    </nav>
  )
}

export default Navbar