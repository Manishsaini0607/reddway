'use client'
import Image from 'next/image'
import { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { IoMdClose } from 'react-icons/io'
import Link from 'next/link'
import { IoMenuOutline } from 'react-icons/io5'

export default function Header() {
    const [menu, setMenu] = useState(false)

    return (
        <>
            <header className=" py-4 shadow-md bg-white sticky top-0 z-50 h-16">
              <div className='max-w-[1700px] mx-auto w-full flex    items-center  justify-between px-4 md:px-10'>
                <IoMenuOutline
                    onClick={() => setMenu(true)}
                    className='md:hidden text-2xl  cursor-pointer hover:opacity-70 transition'
                />
                {/* Logo */}
                <Image  src="https://reddway.io/_static/reddway1.svg" alt="Reddway Logo"  width={150}  height={25}   />   
               

                <nav className="flex items-center space-x-3 md:space-x-6">
                    <Link href="/" className="text-black hover:opacity-75 hover:text-green-500 transition-colors font-medium hidden md:inline">
                        Pricing
                    </Link>
                    <Link href="/" className="text-black hover:opacity-75 hover:text-green-500 transition-colors font-medium">
                        Sign in
                    </Link>
                    <button className="bg-black hidden cursor-pointer text-white px-4 py-2 md:px-4 rounded-xl hover:bg-gray-800 transition-colors md:flex items-center justify-center space-x-1 text-md md:text-base">
                        <span className="font-medium">Create a free store</span>
                        <FaArrowRightLong />
                    </button>
                </nav>
              </div>
            </header>




            {/* Mobile Menu Sidebar */}
            <div
                className={`fixed inset-0   bg-transparent bg-opacity-50 z-50 transition-opacity duration-300 ${menu ? 'block' : 'hidden'}`}
                onClick={() => setMenu(false)}
            />
            <div
                className={`fixed top-0 left-0 h-full w-72  bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${menu ? 'translate-x-0' : '-translate-x-full'}`}
            >

                <div className="flex items-center justify-between p-2 border-b">
                     <Image  src="https://reddway.io/_static/reddway1.svg" alt="Reddway Logo"  width={120}  height={20}   />  

                    <button onClick={() => setMenu(false)}   className="p-2 hover:bg-gray-100 rounded-full transition" >                        
                        <IoMdClose className="text-2xl" />
                    </button>

                </div>

                <nav className="flex flex-col p-6 space-y-5">
                    <Link
                        href="/"
                        className=" font-medium text-gray-800 hover:text-green-600 transition-colors"
                    >
                        About us
                    </Link>

                    <Link
                        href="/"
                        className=" font-medium text-gray-800 hover:text-green-600 transition-colors"
                    >
                        Contact us
                    </Link>

                    <Link
                        href="/"
                        className=" font-medium text-gray-800 hover:text-green-600 transition-colors"
                    >
                        FAQs
                    </Link>

                    <Link
                        href="/"
                        className=" font-medium text-gray-800 hover:text-green-600 transition-colors"
                    >
                        How It Work
                    </Link>

                    <Link
                        href="/"
                        className=" font-medium text-gray-800 hover:text-green-600 transition-colors"
                    >
                        Terms
                    </Link>

                    <Link
                        href="/"
                        className=" font-medium text-gray-800 hover:text-green-600 transition-colors"
                    >
                        Privacy
                    </Link>

                    <Link
                        href="/"
                        className=" font-medium text-gray-800 hover:text-green-600 transition-colors"
                    >
                        Disclaimer
                    </Link>

                    <Link
                        href="/"
                        className=" font-medium text-gray-800 hover:text-green-600 transition-colors"
                    >
                        Pricing
                    </Link>

                    <Link
                        href="/"
                        className=" font-medium text-gray-800 hover:text-green-600 transition-colors"
                    >
                        Blogs
                    </Link>

                    <Link
                        href="/"
                        className=" pb-6 font-medium text-gray-800 hover:text-green-600 transition-colors"
                    >
                        Guide
                    </Link>
                </nav>
            </div>
        </>
    )
}
