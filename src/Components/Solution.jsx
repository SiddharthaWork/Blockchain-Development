"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const content = [
    {
        title: "Enhanced Security & Data Integrity",
        description: "Empowering businesses with secure, decentralized solutions, our blockchain development services are designed to streamline operations, enhance transparency, and drive innovation across industries. From consulting to custom-built solutions, we enable businesses to leverage blockchain technology to meet their unique needs and objectives.",
        image: "b1.svg"
    },
    {
        title: "Enhanced Security & Data Integrity",
        description: "Empowering businesses with secure, decentralized solutions, our blockchain development services are designed to streamline operations, enhance transparency, and drive innovation across industries. From consulting to custom-built solutions, we enable businesses to leverage blockchain technology to meet their unique needs and objectives.",
        image: "b1.svg"
    },
    {
        title: "Enhanced Security & Data Integrity",
        description: "Empowering businesses with secure, decentralized solutions, our blockchain development services are designed to streamline operations, enhance transparency, and drive innovation across industries. From consulting to custom-built solutions, we enable businesses to leverage blockchain technology to meet their unique needs and objectives.",
        image: "b1.svg"
    },
    {
        title: "Enhanced Security & Data Integrity",
        description: "Empowering businesses with secure, decentralized solutions, our blockchain development services are designed to streamline operations, enhance transparency, and drive innovation across industries. From consulting to custom-built solutions, we enable businesses to leverage blockchain technology to meet their unique needs and objectives.",
        image: "b1.svg"
    }
]

const Solution = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [bitcoinPosition, setBitcoinPosition] = useState(0)
    const [shouldSpin, setShouldSpin] = useState(false)
    const [rotationCount, setRotationCount] = useState(0)

    // Adjust movement based on screen size
    const getMovementDistance = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) { // mobile
                return 100
            } else if (window.innerWidth < 768) { // tablet
                return 180
            } else { // desktop
                return 275
            }
        }
        return 260 // default
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex === content.length - 1) {
                    setBitcoinPosition(0)
                    setShouldSpin(true)
                    setRotationCount(prev => prev + getMovementDistance())
                    return 0
                }
                setBitcoinPosition(prev => prev + getMovementDistance())
                setShouldSpin(true)
                setRotationCount(prev => prev + getMovementDistance())
                return prevIndex + 1
            })
        }, 3000)

        return () => clearInterval(timer)
    }, [])

    return (
        <div className='bg-black/85 py-6 md:py-10'>
            <div className='max-w-6xl mx-auto space-y-8 md:space-y-12'>
                <h1 className='text-white text-center text-xl sm:text-2xl md:text-4xl font-nunito font-bold px-4 md:px-0'>
                    Key Features of Our Blockchain Solutions
                </h1>
                <p className='text-white text-justify px-4 md:px-0 text-sm sm:text-md md:text-lg font-nunito'>
                    Empowering businesses with secure, decentralized solutions, our blockchain development services are designed to streamline operations, enhance transparency, and drive innovation across industries. From consulting to custom-built solutions, we enable businesses to leverage blockchain technology to meet their unique needs and objectives.
                </p>

                <div className='px-4 md:px-0 relative'>
                    <div className='w-full h-14 sm:h-16 md:h-20 bg-white rounded-full flex justify-start px-2 sm:px-3 md:px-4 pt-2 pb-1 overflow-hidden'>
                        <motion.div
                            animate={{
                                x: `${bitcoinPosition}%`,
                                rotate: rotationCount
                            }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                rotate: {
                                    duration: 1,
                                    ease: "linear"
                                }
                            }}
                            onAnimationComplete={() => setShouldSpin(false)}
                            className='w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 relative'
                        >
                            <img 
                                src="bit.png" 
                                alt="" 
                                className='w-full h-full object-contain'
                                style={{ 
                                    maxWidth: '100%',
                                    height: 'auto'
                                }} 
                            />
                        </motion.div>
                    </div>
                </div>

                <div className='px-4 md:px-0 relative overflow-hidden'>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className='w-full'
                        >
                            <div className='w-full min-h-[16rem] sm:min-h-[14rem] md:h-[12rem] bg-white rounded-3xl flex flex-col md:flex-row justify-start px-4 sm:px-6 py-6 sm:py-8 space-y-4 md:space-y-0 md:space-x-5'>
                                <div className='flex justify-center md:justify-start mt-0 md:-mt-20 '>
                                    <img 
                                        src={content[currentIndex].image} 
                                        alt="" 
                                        className='w-16 h-16 sm:w-20 sm:h-20 md:w-full md:h-full object-contain'
                                    />
                                </div>
                                <div className='flex flex-col justify-start items-start space-y-2 text-center md:text-left'>
                                    <h1 className='text-lg sm:text-xl md:text-2xl font-nunito font-bold w-full md:w-auto text-sky-700'>
                                        {content[currentIndex].title}
                                    </h1>
                                    <p className='text-black text-lg sm:text-md md:text-md font-nunito leading-5 sm:leading-6 md:leading-8'>
                                        {content[currentIndex].description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                <div className='flex justify-center px-4 md:px-0'>
                    <button className='w-full sm:w-auto px-4 sm:px-6 py-2 rounded-sm border border-sky-400 text-sky-400 font-nunito font-bold text-sm sm:text-base hover:bg-sky-400 hover:text-white transition-colors duration-300'>
                        Hire Us To Build Your App
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Solution