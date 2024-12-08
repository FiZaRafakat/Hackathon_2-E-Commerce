import Link from 'next/link';
import React from 'react'
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <div className='bg-[#F0F2F3] rounded-b-[48px] xl:pb-0 pb-10 sm:mx-10 mx-3 lg:mx-20 lg:h-[850px]'>
   <div className='flex sm:flex-row flex-col justify-between items-center md:px-[60px] pt-10 lg:pt-[115px] '>
    <div className="title text-[#272343] lg:max-w-[557px] md:max-w-[400px] md:text-left text-center">
      <p className='lg:text-[14px] uppercase lg:leading-[14px] text-xs  tracking-wide'>Welcome to Chariy</p>
      <h1 className='font-bold lg:text-6xl text-3xl mt-3 lg:mt-7'>Best Furniture Collection For Your Interior.</h1>
      <Link href="/products" className='flex items-center hover:shadow-lg bg-[#029FAE] w-fit mx-auto md:mx-0 gap-5 rounded-lg py-2 lg:py-[14px] px-4 lg:px-6 mt-3 lg:mt-10 text-white text-[16px]'>Shop Now 
        <span><BsArrowRight className='size-5'/></span>
      </Link >
    </div>
    <div className="hero mt-5 sm:mt-0">
        <img src="/hero.png" alt="Chair" />
    </div>
   </div>
    </div>
  )
}

export default Hero