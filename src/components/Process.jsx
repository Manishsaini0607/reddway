import Image from 'next/image'
import React from 'react'

export default function Process() {
  return (
    <div className=' bg-[#F7F7F7] px-8 my-8  py-4   '>
      <div className='max-w-4xl mx-auto flex flex-col items-center gap-4 md:gap-6  text-center  md:font-medium md:text-xl '>
         <h1>We've simplified the process, Introducing AI enabled website builder</h1>
      <Image  src='/process.png' alt='img'  width={700} height={700}  />
      </div>
    </div>
  )
}
