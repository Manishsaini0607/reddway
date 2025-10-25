'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5'

export default function HowWorks() {
    const [openIndex, setOpenIndex] = useState(null)

    const steps = [
        {
            id: 1,
            title: 'Create your store',
            description: 'Simple sign-up, answer few questions and your website is ready.'
        },
        {
            id: 2,
            title: 'Add products to sell',
            description: 'Upload your product information easily including descriptions, images, pricing, colours, sizes, quantity and more.'
        },
        {
            id: 3,
            title: 'Go live and start selling',
            description: 'In as little as 10 mins, you can go live with your website and start expanding your brand'
        },
        {
            id: 4,
            title: 'Boost your sales',
            description: 'In as little as 10 mins, you can go live with your website and start expanding your brand'
        }
    ]

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className=" w-full py-10 px-6">
            <div className="max-w-4xl w-full mx-auto">
            
                <h2 className="text-xl md:text-3xl font-bold text-center text-black mb-6 md:mb-12">
                    Here's how it works
                </h2>

           
                <div className=" flex flex-col md:flex-row gap-16 items-center justify-center">
                    {/* Left Side - Steps */}
                    <div className="  w-full md:w-1/2">
                        {steps.map((step, index) => (
                            <div 
                                key={step.id}
                                className="bg-white rounded-2xl   transition-shadow"
                            >
                             
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between p-3 text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="bg-green-600 text-white font-bold  w-8 h-8 rounded flex items-center justify-center shrink-0">
                                            {step.id}
                                        </div>
                                        <h3 className="text-lg md:text-xl font-medium text-black">
                                            {step.title}
                                        </h3>
                                    </div>
                                    
                                    {step.description && (
                                        openIndex === index ? (
                                            <IoChevronUp className=" text-xl shrink-0" />
                                        ) : (
                                            <IoChevronDown className=" text-xl shrink-0" />
                                        )
                                    )}
                                </button>

                              
                                {step.description && openIndex === index && (
                                    <div className="px-5 pb-5 pl-20 pr-5">
                                        <p className="text-base text-gray-700 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Image */}
                    <div className="flex  w-full md:w-1/2 justify-center lg:justify-end">
                        <Image
                            src="/how-work.png"
                            alt="How it works illustration"
                            width={600}
                            height={500}
                            className="w-full max-w-lg h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
