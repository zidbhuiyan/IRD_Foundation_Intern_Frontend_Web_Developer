"use client"
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Navbar() {

    const [nav, setNav] = useState(false)
    
  return (
    <div className='fixed top-0 left-0 w-full z-10 ease-in bg-[#fefeff]'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
            <Link href='/'>
                <div className='text-2xl flex p-4'>
                    <h1 className='p-1 bg-[#6765f0] object-cover object-center rounded text-white'>
                    Gym 
                    </h1>
                    <h1 className='p-1 text-[#6765f0]'>
                    baran
                    </h1>
                </div>
            </Link>
            <ul className='hidden sm:flex'>
                <li className='p-4 text-xl'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4 text-xl'>
                    <Link href='/'>Program</Link>
                </li>
                <li className='p-4 text-xl'>
                    <Link href='/'>Blog</Link>
                </li>
                <li className='p-4  text-xl'>
                    <Link href='/'>About us</Link>
                </li>
                <li className='p-4 w-24 text-xl bg-[#274374] text-center object-cover object-center rounded-xl text-white'>
                    <button href='/'>Login</button>
                </li>
            </ul>

            <div className='block sm:hidden z-10'>
            {nav? <AiOutlineClose onClick={()=> setNav(false) } size={30}/> : <AiOutlineMenu onClick={()=> setNav(true) }  size={30}/>}
        </div>

        <div className={nav? 'sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-white ease-in': 'hidden'}>
        <ul>
                <li className='p-4 text-3xl'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4 text-3xl'>
                    <Link href='/'>Program</Link>
                </li>
                <li className='p-4 text-3xl'>
                    <Link href='/'>Blog</Link>
                </li>
                <li className='p-4 text-3xl'>
                    <Link href='/'>About us</Link>
                </li>
                <li className='p-4 text-3xl'>
                    <button href='/'>Login</button>
                </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Navbar