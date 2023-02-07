import React from 'react'
import { AiFillPlayCircle, AiOutlineArrowRight, AiFillRightCircle } from "react-icons/ai";
import { MdAccessibilityNew } from "react-icons/md";
import {BiRun} from "react-icons/bi";
import {TbYoga} from "react-icons/tb";

export const Hero = () => {
  return (
    <>
    <div>
    <section className="body-font h-fit bg-fixed bg-cover custom-img">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col justify-between items-center">

    <div className='justify-between items-center w-full md:w-1/2 '>
    <h1 className="title-font sm:text-5xl text-5xl mb-4 mt-16 font-large font-bold text-gray-900">Healthy in side
        <br className="hidden lg:inline-block"/><span className='text-[#8382eb]'> Fresh </span>out side
      </h1>

      <div className='p-2'>

      <p className="mb-8 mt-6 w-96 leading-relaxed text-[#898580]">Exercise is a very impotant need for our body.Health and fitness will be obtained if you can do regualr exercise and run a health routine.</p>
      <div className="flex">
        <button className="inline-flex w-52 text-white bg-[#274372] items-center justify-between border-0 py-2 px-6 focus:outline-none hover:bg-[#274390] rounded text-lg">Get Started <AiFillRightCircle color="white" size={25}/> </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 items-center justify-between  border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"> <AiFillPlayCircle size={25}/> Learn more</button>
      </div>

      <h5 className='mt-8'>Brands:</h5>
        <div className='mt-5'>

        <img className='h-10 w-14  inline-flex' alt="nike" src="https://www.seekpng.com/png/detail/1-19145_nike-logo-gray-swoosh.png"/>  
        <img className='h-10 w-15  pl-5 inline-flex' alt="addidas" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Adidas_Logo_Grey.svg/1024px-Adidas_Logo_Grey.svg.png"/>
        <img className='h-10 w-20  pl-5 inline-flex' alt="addidas" src="https://png.pngitem.com/pimgs/s/195-1955191_puma-puma-logo-hd-png-download.png"/>
        <img className='h-10 w-15  pl-5 inline-flex' alt="addidas" src="data:image/png;base64,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"/>

        </div>

      </div>
   
    </div>

    <div className='flex items-center justify-center h-screen w-1/2'>
    <div className="inline-flex content-center h-[550px] w-[350px]">
      <img className="object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    </div>

    </div>
  
    
  </div>

  
    </section>

    <section className="body-font h-fit bg-fixed bg-cover custom-img">
  <div className="container mx-auto  px-5  items-center">
    <div className="md:w-screen flex flex-col md:flex-row justify-between items-center">
      <div className='w-2/3'>

      <h1 className="title-font sm:text-5xl text-5xl mb-4 font-large text-gray-900">Healthy in side
        <br className="hidden lg:inline-block"/> Fresh out side
      </h1>

      </div>

      <div className='p-2 ml-5'>

      <p className="mb-8 mt-6 w-10/12 leading-relaxed text-[#898580]">Exercise is a very impotant need for our body.Health and fitness will be obtained if you can do regualr exercise and run a health routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Health life makes you more excited to live the day</p>

      </div>
     
      <div>
       
        
      </div>
    </div>

    <div className='flex flex-col md:flex-row justify-between items-center object-cover object-center rounded-xl bg-[#6765f0] mt-10'>

      <div className=' flex p-12'>

        <div className='p-7 bg-[#8785f3] object-cover object-center rounded-xl'>
        <MdAccessibilityNew color="white" size={50} />
        </div>
        
        <div>
        <h1 className='p-2 font-bold text-xl text-white'>
          Get that 11 line in 30 days
        </h1>
        <div className='flex p-2'>
          <p className='text-[#b8b8f7]'>Learn more</p>
          <AiOutlineArrowRight color='#b8b8f7' size={20}/>
        </div>
        </div>
        
      </div>

      <div className=' flex p-12'>

        <div className='p-7 bg-[#8785f3] object-cover object-center rounded-xl'>
        <BiRun color="white" size={50} />
        </div>
        
        <div>
        <h1 className='p-2 font-bold text-xl text-white'>
          14 days sherd challenge
        </h1>
        <div className='flex p-2'>
          <p className='text-[#b8b8f7]'>Learn more</p>
          <AiOutlineArrowRight color='#b8b8f7' size={20}/>
        </div>
        </div>
        
      </div>

      <div className=' flex p-12'>

        <div className='p-7 bg-[#8785f3] object-cover object-center rounded-xl'>
        <TbYoga color="white" size={50} />
        </div>
        
        <div>
        <h1 className='p-2 font-bold text-xl text-white'>
          Get flat belly in 30 days
        </h1>
        <div className='flex p-2'>
          <p className='text-[#b8b8f7]'>Learn more</p>
          <AiOutlineArrowRight color='#b8b8f7' size={20}/>
        </div>
        </div>
        
      </div>

     

    </div>

  </div>
    </section>

    <section className="body-font h-fit bg-fixed bg-cover custom-img">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col-reverse justify-between items-center">

    <div className='flex items-center justify-center h-screen w-1/2'>
    <div className="inline-flex content-center h-[550px] w-[350px]">
      <img className="object-cover object-center rounded" alt="hero" src="https://images.pexels.com/photos/3289711/pexels-photo-3289711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
    </div>

    </div>

    <div className='justify-between items-center w-1/2 '>
    <h1 className="title-font sm:text-5xl text-5xl mb-4 mt-16 font-large text-gray-900">Best full body
        <br className="hidden lg:inline-block"/> workout to lose fat
      </h1>

      <div className='p-2'>

      <p className="mb-8 mt-6 w-10/12 leading-relaxed text-[#898580]">Exercise is a very impotant need for our body.Health and fitness will be obtained if you can do regualr exercise and run a health routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Health life makes you more excited to live the day</p>

      </div>

      <div className="flex">
        <button className="inline-flex w-52 text-white bg-[#274372] items-center justify-between border-0 py-2 px-6 focus:outline-none hover:bg-[#274390] rounded text-lg">Get Started <AiOutlineArrowRight color="white" size={25}/> </button>
      </div>
    </div>
  
    
  </div>
    </section>

    </div>
    </>
  )
}
