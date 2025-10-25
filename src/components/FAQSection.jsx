'use client'
import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { IoAdd, IoRemove } from 'react-icons/io5'

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            id: 1,
            question: 'What is Reddway?',
            answer: 'Reddway is a platform for e-commerce sellers to create rich e-commerce experiences for their customers. Our products are No-Code website builder and Instant Product Link, where users can start beautiful E-commerce websites and create sharable product link'
        },
        {
            id: 2,
            question: 'What are the goals for this project?',
            answer: 'Our goal is to empower businesses of all sizes to establish their online presence quickly and efficiently. We aim to provide user-friendly tools that require no coding knowledge, enabling entrepreneurs to focus on growing their business rather than technical complexities.'
        },
        {
            id: 3,
            question: 'How does it work?',
            answer: 'Simply sign up for a free account, choose your preferred template, customize your store with our drag-and-drop editor, add your products, and publish your website. You can integrate payment gateways, set up shipping partners, and start selling within minutes.'
        },
        {
            id: 4,
            question: 'Who can create a store?',
            answer: 'Anyone can create a store on Reddway! Whether you are a small business owner, entrepreneur, freelancer, or anyone looking to sell products online, our platform is designed to be accessible and easy to use for everyone, regardless of technical expertise.'
        },
        {
            id: 5,
            question: 'What are the pricing models?',
            answer: 'We offer flexible pricing plans to suit different business needs. Start with our free plan to explore basic features, or upgrade to premium plans for advanced functionality, custom domains, and priority support. Visit our pricing page for detailed information on each plan.'
        },
        {
            id: 6,
            question: 'How will we receive our payments?',
            answer: 'Payments are directly deposited into your bank account through our integrated payment gateways including PayU, Razorpay, and Stripe. You have full control over your transactions, and settlements typically occur within 2-3 business days depending on your payment provider.'
        },
        {
            id: 7,
            question: 'How can we ship/deliver our products?',
            answer: 'We have integrated partnerships with leading shipping providers including DTDC, Blue Dart, Delhivery, and DHL. You can choose your preferred shipping partner, set shipping rates, track orders in real-time, and provide customers with delivery updates automatically.'
        },
        {
            id: 8,
            question: 'How to interact with the buyers?',
            answer: 'Interact with your customers through built-in messaging systems, email notifications, order updates, and customer support tools. You can manage inquiries, respond to reviews, send promotional messages, and build lasting relationships with your customer base through our platform.'
        },
        {
            id: 9,
            question: 'How to share my store and products?',
            answer: 'Share your store easily using our Instant Product Link feature. Generate shareable links for individual products or your entire store, and distribute them across social media, WhatsApp, email, or any digital platform. We also provide SEO tools to improve your online visibility.'
        },
        {
            id: 10,
            question: 'Free trial',
            answer: 'Yes! We offer a free trial period where you can explore all features of our platform without any commitment. Test our website builder, create your store, add products, and experience the full functionality before deciding on a paid plan. No credit card required to start.'
        }
    ]

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="bg-white w-full py-16 px-6">
            <div className="max-w-5xl w-full mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-black mb-4">
                        Going digital has never been easier - <span className="text-green-600 italic">we promise!</span>
                    </h2>
                    <p className="text-base md:text-lg text-gray-700 mb-6">
                        Reddway has everything you need to run an online business in India. Get started with a free website.
                    </p>
                    <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors inline-flex items-center gap-2">
                        Get Started
                        <FaArrowRight />
                    </button>
                </div>

                {/* FAQ Accordion */}
                <div className="space-y-4 w-full mt-12">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.id}
                            className="border w-full border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                            
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between p-5 text-left"
                            >
                                <div className="flex items-center gap-3">
                                    {openIndex === index ? (
                                        <IoRemove className="text-2xl text-black shrink-0" />
                                    ) : (
                                        <IoAdd className="text-2xl text-black shrink-0" />
                                    )}
                                    <h3 className="text-base md:text-lg font-medium text-black">
                                        {faq.id}. {faq.question}
                                    </h3>
                                </div>
                            </button>

                            
                            {openIndex === index && (
                                <div className="px-5 pb-5 pl-14">
                                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
