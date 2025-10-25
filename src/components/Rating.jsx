import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

export default function Rating() {
    const ratings = [
        {
            id: 1,
            name: 'Krishan',
            image: '/rating-pro.png',
            star: '/rating-star.png'
        },
        {
            id: 2,
            name: 'Ajay',
            image: '/rating-pro.png',
            star: '/rating-star.png'
        },
        {
            id: 3,
            name: 'Kritika',
            image: '/rating-pro.png',
            star: '/rating-star.png'
        }
    ]

    return (
        <section className="bg-white  px-6 max-w-3xl mx-auto">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ratings.map((rating) => (
                        <div 
                            key={rating.id}
                            className="flex flex-col items-center"
                        >
                            {/* Profile Image */}
                           <div className='flex gap-1 items-center'>
                             <div className="">
                                <Image
                                    src={rating.image}
                                    alt={rating.name}
                                    width={20}
                                    height={20}
                                    className="rounded-full object-cover"
                                />
                            </div>

                            {/* Name */}
                            <h3 className="text-sm ">
                                {rating.name}
                            </h3>
                           </div>

                            {/* Star Rating */}
                            <div className="flex gap-1">
                              <Image src={rating.star} alt="Star" width={80} height={10} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
