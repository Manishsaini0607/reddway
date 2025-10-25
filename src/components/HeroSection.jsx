'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

export default function HeroSection() {
    return (
        <main className="flex flex-col md:flex-row items-center min-h-[calc(100vh-64px)] h-full max-w-[1700px] mx-auto w-full px-12 mt-12 md:mt-0 md:py-4 ">
            {/* Left Section  */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}  className=" w-full md:w-1/2 mb-12 lg:px-8  md:pl-6 md:mb-0">
                <div className="mb-1">
                    <span className="text-sm ">Reddway website builder</span>
                </div>

                <h1 className="text-3xl md:text-[42px]  font-bold text-black   mb-1">
                    Build, Manage & Grow Your Website, All in One Place!
                </h1>

                <p className="text-lg md:text-[18px] text-black mb-6">
                    launch your online store in 10 minutes - No Code Required.
                </p>

                <button className="bg-black text-white px-6 py-3 cursor-pointer rounded-xl text-base md:text-lg font-medium hover:bg-gray-800 transition-colors">
                    Get started now
                </button>
            </motion.div>

            {/* Right Section */}
            <motion.div  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}   className=" h-max  w-full md:w-1/2 ">
                <Image src="/hero-section-img.png" alt="Mobile View" width={250} height={500} className=" w-full h-auto object-contain" />
            </motion.div>
        </main>
    )
}
