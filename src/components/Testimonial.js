import React from 'react'
import person1 from '../assests/person1.png'
import { IoMdStar } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

const Testimonial = () => {
  return (
    <section className='mt-[100px] p-12'>
      <div className='grid grid-cols-12 gap-5'>
        {/* Left Content */}
        <div className='col-span-4  '>
          <p className='uppercase text-2xl text-[#458FFF]'>WHY CHOOSE US</p>
          <h1 className='mt-9 text-4xl font-normal'>
          What our patients
says about us
          </h1>
          <div className=' mt-9'>
            <p className='leading-[28px]'>
            Customer give us their experience and rating while working with us
            </p>
          </div>
          <button className='bg-[#0165FB] text-white px-2 py-2 rounded-full text-md mt-9'>View More</button>
        </div>

        {/* Right Empty Space */}
        <div className='col-start-7 col-end-13  '>
          {/* You can add images, testimonials, or other content here */}

          <p className='text-3xl leading-[40px] tracking-wider'>
          "Very cool! I feel helped by this medicalis, this makes it easy for me to consult online without the hassle of coming to the hospital, I highly recommend this!"
          </p>
          <div className='w-full h-[1px] bg-black mt-9'></div>
            <div className='mt-9 flex justify-between items-center'>
                <div className='flex  gap-4 items-center '>
                    <img src={person1}></img>
                    <div>
                        <h1>Jmaes jon</h1>
                        <div className='flex gap-2'>
                        <IoMdStar className='text-orange-400' />
                        <IoMdStar  className='text-orange-400' />
                        <IoMdStar  className='text-orange-400' />
                        <IoMdStar  className='text-orange-400'/>
                        <IoMdStarOutline  className='text-orange-400' />
                        </div>
                    </div>
                </div>
                <div className='flex gap-5 items-center'>
                <IoIosArrowDropleft size={44} />
                <IoIosArrowDroprightCircle size={44} />
                </div>
            </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonial
