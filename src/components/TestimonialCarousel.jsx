'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            id: 1,
            text: "Reddway is user-friendly and efficient. Highly recommend!",
            name: "Krishan",
            role: "Founder of space store",
            image: "/cerousel.png"
        },
        {
            id: 2,
            text: "Amazing platform for building online stores quickly!",
            name: "Priya",
            role: "Fashion Store Owner",
            image: "/cerousel.png"
        },
        {
            id: 3,
            text: "Best website builder I've used. Simple and powerful!",
            name: "Raj",
            role: "Electronics Shop",
            image: "/cerousel.png"
        }
    ]

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000) // Change slide every 5 seconds

        return () => clearInterval(interval)
    }, [testimonials.length])

    return (
        <section className="bg-green-600   py-10 md:py-16 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="relative">
                    {/* Carousel Container */}
                    <div className="flex transition-transform px-5  gap-8 duration-400 ease-in-out"
                         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="min-w-full w-full rounded-2xl overflow-hidden bg-white flex flex-col md:flex-row  gap-8"
                            >
                                {/* Left Image */}
                                <div className="w-full lg:w-1/3 flex justify-center">
                                    <div className="relative self-start  w-full md:w-74   h-64 md:h-80  overflow-hidden">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Center Text Content */}
                                <div className="w-full lg:w-1/3 bg-white  p-4 md:p-8 ">
                                    <p className="text-xl md:text-2xl font-semibold text-black mb-6 leading-relaxed">
                                        {testimonial.text}
                                    </p>
                                    <div>
                                        <h3 className="text-lg font-semibold text-black">
                                            {testimonial.name}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-all ${
                                    index === currentIndex 
                                        ? 'bg-white w-8' 
                                        : 'bg-white/50'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
