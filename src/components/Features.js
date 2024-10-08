import React from 'react';
import image3 from '../assests/image3.png';
import image4 from '../assests/image4.png';
import image5 from '../assests/image5.png';

const Features = () => {
  return (
    <section className='mt-[50px] p-6 md:mt-[100px] md:p-12'>
      <h1 className='text-center text-3xl md:text-6xl'>
        Features you will get from our app
      </h1>
      <p className='text-center mt-6 md:mt-9 text-sm md:text-base'>
        We have several features that will make it easier for you to consult with doctors and others
      </p>

      <div className='grid grid-cols-1 md:grid-cols-12 gap-5 mt-6 md:mt-9'>
        {/* Feature 1 */}
        <div className='md:col-span-7 bg-[#EBECEF] rounded-2xl p-6 md:p-9 pb-0 flex flex-col md:flex-row justify-between gap-6 md:gap-9 items-center text-center'>
          <div className='flex-1'>
            <h1 className='text-2xl md:text-4xl'>
              Finding your preferred specialist doctor
            </h1>
            <p className='mt-6 md:mt-9 text-sm md:text-lg'>
              You can find the specialist you want according to what you need to consult your health
            </p>
          </div>
          <img src={image3} alt="Specialist Doctor" className=' w-1/2 md:w-auto mt-4 md:mt-0' />
        </div>

        {/* Feature 2 (Spanning two rows) */}
        <div className='md:col-span-5 md:row-span-2 bg-[#EBECEF] rounded-2xl p-6 md:p-9 pb-0 flex flex-col justify-between items-center text-center'>
          <div>
            <h1 className='text-2xl md:text-4xl'>
              Consult online with your doctor
            </h1>
            <p className='mt-6 md:mt-9 text-sm md:text-lg'>
              We make it easy for you to consult with your doctor who has made an online appointment through the video call that we provide
            </p>
          </div>
          <img src={image4} alt="Consultation" className='mt-4 md:mt-5  w-1/2 md:w-auto' />
        </div>

        {/* Feature 3 */}
        <div className='md:col-span-7 bg-[#EBECEF] rounded-2xl p-6 md:p-9 pb-0 flex flex-col md:flex-row justify-between gap-6 md:gap-9'>
          <img src={image5} alt="Doctor Appointment" className=' w-1/2 md:w-auto mb-4 md:mb-0' />
          <div className='flex-1'>
            <h1 className='text-2xl md:text-4xl'>
              Make an appointment with your doctor
            </h1>
            <p className='mt-6 md:mt-9 text-sm md:text-lg'>
              You can make an appointment for an online consultation or meeting with the doctor of your choice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
