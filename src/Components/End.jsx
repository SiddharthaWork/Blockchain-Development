import React from 'react'

const End = () => {
  return (
    <div className='w-full h-auto md:h-[26rem] bg-black/85 py-8 relative'>
      <div className='absolute inset-0 w-full h-full  '>
        <img src="bg.svg" alt="" className='w-full h-full object-cover' />

      </div>
        <div className='max-w-6xl mx-auto space-y-12'>
            <h1 className='text-white text-center text-2xl md:text-4xl font-nunito font-bold'>
            Discover the Future with
            <br />
            WebStudio Nepal Blockchain Solutions
            </h1> 

            <p className='  text-white px-3 text-md md:text-lg font-nunito text-justify'>
            Blockchain technology is transforming industries by providing a secure, transparent, and efficient way to conduct business. Partner with WebStudio Nepal to unlock the power of decentralized systems, streamline operations, and foster trust. Whether you’re looking to build a custom blockchain, develop DApps, or launch a token, we’re here to help you succeed in the digital frontier. Contact us today to begin your blockchain journey.
            </p>


            <div className='flex justify-center '>
              <button className='bg-sky-400 text-white px-6 py-3 rounded-md'>
                Hire Us To Build Your App
              </button>
            </div>
        </div>


    </div>
  )
}

export default End