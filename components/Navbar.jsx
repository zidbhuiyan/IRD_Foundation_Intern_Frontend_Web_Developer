import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function Navbar() {
    
  return (
    <div className='fixed top-0 left-0 w-full z-10 ease-in bg-[#fefeff]'>
        <div className='max-w-[1240px] m-auto flex justify-between items-center p-4'>
            <Link href='/'>
                <h1 className='font-bold'>Gym <span/> baran </h1>
            </Link>
            <ul className='hidden sm:flex'>
                <li className='p-4'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4'>
                    <Link href='/'>Program</Link>
                </li>
                <li className='p-4'>
                    <Link href='/'>Blog</Link>
                </li>
                <li className='p-4'>
                    <Link href='/'>About us</Link>
                </li>
                <li className='p-4'>
                    <button href='/'>Login</button>
                </li>
            </ul>

            <div className='block sm:hidden z-10'>
            <AiOutlineMenu size={20}/>
        </div>

        <div className='sm:hidden absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center w-full h-screen bg-white ease-in'>
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