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
            title: "Smart Contract Development ",
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
        <div className='bg-white py-4 sm:py-6 md:py-8 lg:py-10'>
            {/* Header Text Section - Updated padding and text sizes */}
            <div className='max-w-6xl mx-auto text-center space-y-3 sm:space-y-4 md:space-y-6 mb-6 sm:mb-8 md:mb-10 lg:mb-12'>
                <h1 className='text-black text-2xl sm:text-3xl md:text-4xl font-nunito font-bold px-3 sm:px-4 md:px-6 lg:px-0'>
                    Key Blockchain Development Services
                </h1>
                <p className='font-medium font-nunito text-justify text-sm sm:text-base md:text-lg px-3 sm:px-4 md:px-6 lg:px-0'>
                    Empowering businesses with secure, decentralized solutions, our blockchain development services are designed to streamline operations, enhance transparency, and drive innovation across industries. From consulting to custom-built solutions,
                    we enable businesses to leverage blockchain technology to meet their unique needs and objectives.
                </p>
            </div>

            {/* Mobile/Tablet Layout - Updated breakpoints and spacing */}
            <div className='ex:hidden px-8 sm:px-4 md:px-6 overflow-hidden'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6'>
                    {cubes.map((cube, index) => (
                        <div key={index} className='w-full relative'>
                            <img src={cube.image} alt={cube.title} className='w-full h-auto z-30 relative hover:filter hover:grayscale hover:brightness-50 transition duration-200 ease-in-out' />
                            <div className='text-white absolute top-[25%] sm:top-[20%] md:top-[25%] px-6 sm:px-4 sm:py-4 space-y-1 sm:space-y-2 z-40'>
                                <h1 className='text-md sm:text-xl md:text-2xl font-nunito font-semibold'>
                                    {cube.title}
                                </h1>
                                <p className='text-xs sm:text-sm leading-5 sm:leading-6 font-nunito text-justify'>
                                    {cube.description}
                                </p>
                            </div>
                            {index !== cubes.length - 1 && (
                                <div className='absolute top-[10rem] left-[50%] transform -translate-x-1/2 z-20 hidden sm:block'>
                                    <img src="dotline.svg" alt="Dotline" className='w-full max-w-[150px] md:max-w-none' />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop Layout - Updated positioning and sizes */}
            <div className='hidden ex:block relative px-4 xl:px-44'>
                {/* Top Left Cube */}
                <div className='w-[280px] xl:w-[340px] h-auto relative group'>
                    <img src="cube.svg" alt="Cube" className='w-full h-auto z-30 relative hover:filter hover:grayscale hover:brightness-50 transition duration-200 ease-in-out' />
                    <div className='text-white absolute top-[20%] px-4 xl:px-6 py-4 space-y-2 z-40'>
                        <h1 className='text-xl xl:text-2xl font-nunito font-semibold'>
                            {cubes[0].title}
                        </h1>
                        <p className='text-xs xl:text-sm leading-5 xl:leading-6 font-nunito text-justify'>
                            {cubes[0].description}
                        </p>
                    </div>
                    <div className='absolute -bottom-[8rem] xl:-bottom-[10rem] left-[8rem] xl:left-[10.5rem] z-20'>
                        <img src="dotline.svg" alt="Dotline" className='w-full' />
                    </div>
                </div>

                {/* Center Logo - Adjusted positioning */}
                <div className='absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-[300px] xl:w-[250px]'>
                    <img src="logo2.svg" alt="Company Logo" className='w-full h-auto' />
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