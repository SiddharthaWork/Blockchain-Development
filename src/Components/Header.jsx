import React from 'react'

const Header = () => {
    // Data array for cube content
    const cubes = [
        {
            image: "cube.svg",
            title: "Blockchain Consulting & Strategy",
            description: "Our experts provide guidance on blockchain's potential for your business, use cases and developing a strategic roadmap tailored to your objectives."
        },
        {
            image: "cube2.svg",
            title: "Smart Contract Development",
            description: "Our experts provide guidance on blockchain's potential for your business,  use cases and developing a strategic roadmap tailored to your objectives."
        },
        {
            image: "cube2.svg",
            title: "DApp Development",
            description: "Our experts provide guidance on blockchain's potential for your business, identifying use cases and developing a strategic roadmap tailored to your objectives."
        },
        {
            image: "cube2.svg",
            title: "Blockchain Integration",
            description: "Our experts provide guidance on blockchain's potential for your business, identifying use cases and developing a strategic roadmap tailored to your objectives."
        },
        {
            image: "cube.svg",
            title: "NFT Development",
            description: "Our experts provide guidance on blockchain's potential for your business, identifying use cases and developing a strategic roadmap tailored to your objectives."
        },
        {
            image: "cube.svg",
            title: "Blockchain Security",
            description: "Our experts provide guidance on blockchain's potential for your business, identifying use cases and developing a strategic roadmap tailored to your objectives."
        }
    ];

    return (
        <div className='bg-white py-6 md:py-10'>
            {/* Header Text Section */}
            <div className='max-w-6xl mx-auto text-center space-y-4 md:space-y-6 mb-8 md:mb-12'>
                <h1 className='text-black text-3xl md:text-4xl font-nunito font-bold px-4 md:px-0'>
                    Key Blockchain Development Services
                </h1>
                <p className='font-medium font-nunito text-justify text-base md:text-lg px-4 md:px-0'>
                    Empowering businesses with secure, decentralized solutions, our blockchain development services are designed to streamline operations, enhance transparency, and drive innovation across industries. From consulting to custom-built solutions,
                    we enable businesses to leverage blockchain technology to meet their unique needs and objectives.
                </p>
            </div>

            {/* Mobile Layout */}
            <div className='lg:hidden px-4 overflow-hidden'>
                <div className='grid grid-cols-1 gap-6'>
                    {cubes.map((cube, index) => (
                        <div key={index} className='w-full relative '>
                            <img src={cube.image} alt={cube.title} className='w-full h-auto z-30 relative hover:filter hover:grayscale hover:brightness-50 transition duration-200 ease-in-out' />
                            <div className='text-white absolute top-[20%] md:top-[25%] px-4 py-4 space-y-2 z-40'>
                                <h1 className='text-xl md:text-2xl font-nunito font-semibold'>
                                    {cube.title}
                                </h1>
                                <p className='text-sm leading-6 font-nunito text-justify'>
                                    {cube.description}

                                </p>
                            </div>
                            {index !== cubes.length - 1 && (
                                <div className='absolute top-[10rem] left-[8.8rem] z-20'>
                                    <img src="dotline.svg" alt="Dotline" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop Layout */}
            <div className='hidden lg:block relative px-4 lg:px-44'>
                {/* Top Left Cube */}
                <div className='w-[340px] h-[391px] relative group'>
                    <img src="cube.svg" alt="Cube" className='z-30 relative hover:filter hover:grayscale hover:brightness-50 transition duration-200 ease-in-out' />
                    <div className='text-white absolute top-[6rem] px-6 py-4 space-y-2 text-2xl font-nunito font-semibold z-40'>
                        <h1 className='text-2xl font-nunito font-semibold'>
                            {cubes[0].title}
                        </h1>
                        <p className='text-sm leading-6 font-nunito text-justify'>
                            {cubes[0].description}
                        </p>
                    </div>
                    <div className='absolute -bottom-[10rem] left-[10.5rem] z-20'>
                        <img src="dotline.svg" alt="Dotline" />
                    </div>
                </div>

                {/* Center Logo */}
                <div className='absolute top-[30rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'>
                    <img src="logo2.svg" alt="Company Logo" className='w-full max-w-[500px] h-auto' />
                </div>

                {/* Right Side Cubes */}
                <div className='w-[340px] h-[391px] absolute top-0 right-[30rem]'>
                    <img src="cube2.svg" alt="Cube" className='z-30 relative hover:filter hover:grayscale hover:brightness-50 transition duration-200 ease-in-out' />
                    <div className='text-white absolute top-[6rem] px-6 py-4 space-y-2 text-2xl font-nunito font-semibold z-40'>
                        <h1 className='text-2xl font-nunito font-semibold'>
                            {cubes[1].title}
                        </h1>
                        <p className='text-sm leading-6 font-nunito text-justify'>
                            {cubes[1].description}
                        </p>
                    </div>
                    <div className='absolute top-[12.5rem] right-[1rem] rotate-[120deg] z-10'>
                        <img src="dotline2.svg" alt="Dotline" />
                    </div>
                </div>

                {/* Additional Right Cubes */}
                {[2, 3].map((index, i) => (
                    <div key={index} className={`w-[340px] h-[391px] absolute ${i === 0 ? 'top-[14rem]' : 'bottom-[14rem]'} right-[9rem]`}>
                        <img src="cube2.svg" alt="Cube" className='z-20 relative hover:filter hover:grayscale hover:brightness-50 transition duration-200 ease-in-out' />
                        <div className='text-white absolute top-[6rem] px-6 py-4 space-y-2 text-2xl font-nunito font-semibold z-40'>
                            <h1 className='text-2xl font-nunito font-semibold'>
                                {cubes[index].title}
                            </h1>
                            <p className='text-sm leading-6 font-nunito text-justify'>
                                {cubes[index].description}
                            </p>
                        </div>
                        {i === 0 && (
                            <div className='absolute -bottom-[8rem] left-[10.5rem] z-20'>
                                <img src="dotline2.svg" alt="Dotline" />
                            </div>
                        )}
                    </div>
                ))}

                {/* Bottom Cubes */}
                <div className='relative'>
                    {[4, 5].map((index, i) => (
                        <div key={index} className={`w-[340px] h-[391px] ${i === 0 ? 'mt-14' : 'mt-14 -top-[14rem] left-[24rem]'} relative`}>
                            <img src="cube.svg" alt="Cube" className='z-10 relative hover:filter hover:grayscale hover:brightness-50 transition duration-200 ease-in-out' />
                            <div className='text-white absolute top-[6rem] px-6 py-4 space-y-2 text-2xl font-nunito font-semibold z-40'>
                                <h1 className='text-2xl font-nunito font-semibold'>
                                    {cubes[index].title}
                                </h1>
                                <p className='text-sm leading-6 font-nunito text-justify'>
                                    {cubes[index].description}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className='absolute bottom-[29rem] rotate-[120deg] left-[18rem] z-0'>
                        <img src="dotline.svg" alt="Dotline" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header