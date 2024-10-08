import React from 'react'

const Footer = () => {
  return (
    <section className='mt-[50px] p-6 md:p-12'>
      <div className='bg-[#EBECF0] p-6 md:p-8 rounded-3xl w-full text-center'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl'>
          Download the Medicalis app today and <br className='hidden md:block' /> 
          get the best health services from us.
        </h1>
        <p className='mt-6 md:mt-9 text-base md:text-xl'>
          Get the best features on Google Play Store and App Store
        </p>
        <button className='bg-[#0165FB] text-white px-4 py-2 rounded-full text-sm md:text-md mt-6 md:mt-9'>
          Download App
        </button>
        <div className='w-full h-[1px] bg-black mt-6 md:mt-9'></div>
        <div className='flex flex-col md:flex-row justify-between items-center mt-6 md:mt-9 mb-6 md:mb-9'>
          <h1 className='text-[#0635DC] text-2xl md:text-3xl font-bold uppercase'>Medicalls</h1>
          <div className='mt-4 md:mt-0 text-black'>
            <ul className='flex flex-col md:flex-row justify-between items-center gap-4 md:gap-7'>
              <li className='text-base md:text-lg'>About us</li>
              <li className='text-base md:text-lg'>How it works</li>
              <li className='text-base md:text-lg'>Doctors</li>
              <li className='text-base md:text-lg'>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
