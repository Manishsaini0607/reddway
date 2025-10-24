import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebookSquare, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-[#F6F6F6] pt-12  pb-4 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {/* Left side */}
                    <div className="flex flex-col  lg:pl-10 space-y-4">
                        <Link href="/" className="text-gray-800 text-base hover:underline duration-200  hover:text-gray-600 transition">
                            About us
                        </Link>
                        <Link href="/" className="text-gray-800 text-base hover:underline duration-200  hover:text-gray-600 transition">
                            Contact us
                        </Link>
                        <Link href="/" className="text-gray-800 text-base hover:underline duration-200  hover:text-gray-600 transition">
                            FAQs
                        </Link>
                        <Link href="/" className="text-gray-800  hover:underline duration-200  text-base hover:text-gray-600 transition">
                            How It Works
                        </Link>
                    </div>


                    <div className="flex flex-col lg:mr-10 space-y-4">
                        <Link href="/" className="text-gray-800 text-base hover:underline duration-200  hover:text-gray-600 transition">
                            Terms
                        </Link>
                        <Link href="/" className="text-gray-800 text-base hover:underline duration-200  hover:text-gray-600 transition">
                            Blogs
                        </Link>
                        <Link href="/" className="text-gray-800 text-base hover:underline duration-200  hover:text-gray-600 transition">
                            Pricing
                        </Link>
                        <Link href="/" className="text-gray-800 text-base hover:underline duration-200  hover:text-gray-600 transition">
                            Guide
                        </Link>
                    </div>

                    {/* Right side */}
                    <div className="flex flex-col items-center md:items-end space-y-6">
                        {/* Logo */}
                        <Image src="https://reddway.io/_static/reddway1.svg" alt="Reddway Logo" width={150} height={25} />


                        <div className="flex flex-col items-start md:items-end">
                            <p className="text-gray-800 text-base mb-4">Reach out to us</p>
                            <div className="flex space-x-4">
                                <Link
                                    href="/"
                                    target="_blank"
                                    className="text-[#E4405F]  hover:opacity-80 transition"
                                >
                                    <FaInstagram size={32} />
                                </Link>
                                <Link
                                    href="/"
                                    target="_blank"
                                    className="text-[#1877F2] hover:opacity-80  transition"
                                >
                                    <FaFacebookSquare size={32} />
                                </Link>
                                <Link
                                    href="/"
                                    target="_blank"
                                    className="text-[#0A66C2] hover:opacity-80 transition "
                                >
                                    <FaLinkedin size={32} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-300 pt-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">

                        <p className="text-gray-800 self-center mx-auto  text-[10px] md:text-xs md:font-medium mb-4 md:mb-0">
                            Copyright © 2025 Reddway Hyperspace Systems Private Limited
                        </p>


                        <div className="flex  font-medium text-xs space-x-6">
                            <Link href="/privacy" className="text-gray-800  hover:text-gray-600 transition">
                                Privacy
                            </Link>
                            <Link href="/disclaimer" className="text-gray-800  hover:text-gray-600 transition">
                                Disclaimer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
