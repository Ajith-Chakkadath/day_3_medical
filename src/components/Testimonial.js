import React from 'react'
import person1 from '../assests/person1.png'
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

const Testimonial = () => {
  return (
    <section className='mt-[50px] p-6 md:mt-[100px] md:p-12'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>
        {/* Left Content */}
        <div className='md:col-span-4'>
          <p className='uppercase text-lg md:text-2xl text-[#458FFF]'>WHY CHOOSE US</p>
          <h1 className='mt-6 md:mt-9 text-2xl md:text-4xl font-normal'>
            What our patients say about us
          </h1>
          <div className='mt-6 md:mt-9'>
            <p className='leading-[28px] text-sm md:text-base'>
              Customer give us their experience and rating while working with us
            </p>
          </div>
          <button className='bg-[#0165FB] text-white px-4 py-2 rounded-full text-sm md:text-md mt-6 md:mt-9'>View More</button>
        </div>

        {/* Right Content */}
        <div className='md:col-start-7 md:col-end-13'>
          <p className='text-lg md:text-3xl leading-6 md:leading-[40px] tracking-wider'>
            "Very cool! I feel helped by this medicalis, this makes it easy for me to consult online without the hassle of coming to the hospital, I highly recommend this!"
          </p>
          <div className='w-full h-[1px] bg-black mt-6 md:mt-9'></div>
          <div className='mt-6 md:mt-9 flex flex-col md:flex-row justify-between items-start md:items-center'>
            <div className='flex gap-4 items-center'>
              <img src={person1} className='w-12 h-12 md:w-16 md:h-16' alt="Person" />
              <div>
                <h1 className='text-sm md:text-base'>James Jon</h1>
                <div className='flex gap-2'>
                  <IoMdStar className='text-orange-400' />
                  <IoMdStar className='text-orange-400' />
                  <IoMdStar className='text-orange-400' />
                  <IoMdStar className='text-orange-400' />
                  <IoMdStarOutline className='text-orange-400' />
                </div>
              </div>
            </div>
            <div className='flex gap-5 items-center mt-4 md:mt-0'>
              <IoIosArrowDropleft size={32}  />
              <IoIosArrowDroprightCircle size={32}  />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial;
