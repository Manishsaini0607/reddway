import Image from 'next/image'
import React from 'react'

export default function Templates() {
  return (
    <div className=' max-w-7xl mx-auto w-full mt-4 h-full'>
         <h2 className='text-xl md:text-2xl font-bold text-center'>Get amazing templates for your business</h2>
         <div className='mt-8'>
            <Image src="/templates.png" alt="Mobile View" width={250} height={500} className="  w-full h-auto object-contain" />
         </div>
    </div>
  )
}
