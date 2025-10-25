import React from 'react'
import { FaGlobe, FaFileAlt, FaChartBar, FaUniversity, FaPaintBrush, FaTruck, FaCode } from 'react-icons/fa'
import { MdSecurity } from 'react-icons/md'

export default function Services() {
    return (
        <section className="bg-white py-16 px-6">
            <div className="max-w-4xl mx-auto">
              
                <h2 className="text-xl md:text-3xl text-center font-bold text-black mb-12">
                    Unlock more as your business grows.
                </h2>

    
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto">
                    {/* Card 1  */}
                    <div className="bg-pink-200 rounded-xl px-6 py-10 items-center flex flex-col justify-between">
                        <FaGlobe className="text-5xl text-gray-800 mb-4" />
                        <h3 className="text-lg font-medium text-gray-800">
                            Custom domain setup
                        </h3>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-orange-200 rounded-xl text-center  px-6 py-10 items-center flex flex-col justify-between">
                        <FaFileAlt className="text-5xl text-gray-800 mb-4" />
                        <h3 className="text-lg font-medium text-gray-800">
                            Copywriting & image selection
                        </h3>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-blue-200 rounded-xl  text-center px-6 py-10  flex flex-col justify-between items-center md:row-span-2">
                        <div className='flex flex-col  justify-center items-center'> 
                             <FaFileAlt className="text-5xl text-gray-800 mb-4" />
                              <h3 className="text-lg font-medium text-gray-800">
                            Integrated <br /> marketing tools
                            </h3>
                             </div>
                            
                            <div className="flex flex-col gap-3 mt-4">
                                <FaChartBar className="text-5xl text-orange-500 mb-4" />
                                <FaCode className="text-4xl text-blue-600" />
                                <h4 className='text-xl font-medium text-yellow-500'>SEO</h4>
                            </div>
                       
                       
                    </div>

                    {/* Card 4  */}
                    <div className="bg-green-200 rounded-xl  px-6 py-10 items-center flex flex-col justify-between md:col-span-2">
                        <div>
                            <FaUniversity className="text-5xl text-gray-800 mb-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-gray-800 mb-4">
                                Integrated payment gateway
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                <span className="text-green-600 font-bold text-base">PayU</span>
                                <span className="text-blue-600 font-bold text-base">Razorpay</span>
                                <span className="text-purple-600 font-bold text-base">stripe</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 5  */}
                    <div className="bg-purple-200 rounded-xl  text-center px-6 py-10 items-center flex flex-col justify-between">
                        <FaPaintBrush className="text-5xl text-gray-800 mb-4" />
                        <h3 className="text-lg font-medium text-gray-800">
                            Design and theme customisation
                        </h3>
                    </div>

                    {/* Card 6*/}
                    <div className="bg-yellow-100 rounded-xl  px-6 py-10 items-center flex flex-col justify-between md:col-span-2">
                        <FaTruck className="text-5xl text-gray-800 mb-4" />
                        <div>
                            <h3 className="text-lg font-medium text-gray-800 mb-4">
                                Integrated shipment partners
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                <span className="text-red-600 font-bold text-base">DTDC</span>
                                <span className="text-blue-600 font-bold text-base">BLUE DART</span>
                                <span className="text-green-600 font-bold text-base">Delhivery</span>
                                <span className="text-yellow-600 font-bold text-base">DHL</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
