import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center lg:items-start my-10'>
        <h4>Sujal Samai - 2024</h4>
        <div className='flex gap-10'>
            <Link href="https://github.com/SujalSamai" className='border-b-2 border-transparent hover:text-teal-300 hover:border-b-2 hover:border-teal-300 transition-colors duration-300 ease-out'>Github</Link>
            <Link href="https://linkedin.com/in/sujal-samai" className='border-b-2 border-transparent hover:text-teal-300 hover:border-b-2 hover:border-teal-300 transition-colors duration-300 ease-out'>LinkedIn</Link>
            <Link href="https://twitter.com/SujalSamai" className='border-b-2 border-transparent hover:text-teal-300 hover:border-b-2 hover:border-teal-300 transition-colors duration-300 ease-out'>Twitter</Link>
        </div>
    </footer>
  )
}

export default Footer