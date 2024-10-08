import React from 'react';
import image2 from '../assests/image2.png';

const OurDoctors = () => {
  return (
    <section className='mt-[50px] p-6 md:mt-[100px] md:p-12'>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-5'>
        {/* Left Content */}
        <div className='md:col-span-7'>
          <p className='uppercase text-xl md:text-2xl text-[#458FFF]'>WHY CHOOSE US</p>
          <h1 className='mt-6 md:mt-9 text-3xl md:text-6xl font-regular'>
            Consultation with our professional doctors
          </h1>
          <div className='mt-6 md:mt-9'>
            <p className='leading-[22px] md:leading-[28px] text-sm md:text-base'>
              Not to worry, our professional doctors are experienced in treating and serving the needs of patients. 
              We have doctors from various specialties, so that our patients will be facilitated in curing all diseases.
            </p>
          </div>
          <div className='mt-6 md:mt-9'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <div className=''>
                <h1 className='text-xl md:text-2xl text-[#0165FB] mb-2'>+10 yrs</h1>
                <p className='text-sm md:text-base'>
                  Most of our doctors have 10+ years of experience serving patients.
                </p>
              </div>
              <div>
                <h1 className='text-xl md:text-2xl text-[#0165FB] mb-2'>+230k</h1>
                <p className='text-sm md:text-base'>
                  They have been serving patients both online and offline.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className='md:col-span-5 flex justify-center mt-6 md:mt-0'>
          <img src={image2} alt="Professional Doctors" className='w-full md:w-auto' />
        </div>
      </div>
    </section>
  );
}

export default OurDoctors;
