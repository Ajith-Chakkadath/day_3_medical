import React from 'react';
import rectangle7 from '../assests/Rectangle7.png';
import rectangle8 from '../assests/Rectangle8.png';
import rectangle9 from '../assests/Rectangle9.png';

const ServiceSection = () => {
  return (
    <section className='mt-[50px] p-6 md:mt-[100px] md:p-12'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'> 
        <div className='col-span-1 md:col-span-2'>
          <h1 className='text-4xl md:text-6xl leading-[50px] md:leading-[70px]'>
            We will serve you with <br/> healthcare services
          </h1>
        </div>
        <div className='col-span-1'>
          <p className='text-sm md:text-base font-normal'>
            We provide a variety of services that can make it easier for you to fulfill your needs.
          </p>
          <button className='bg-[#0165FB] text-white px-4 py-2 rounded-full text-md mt-4'>Download App</button>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 mt-9 gap-4 md:gap-9'>
        {/* Service 1 */}
        <div className='w-full h-[275px] md:h-[464px] bg-[#EBECF0] rounded-3xl p-6 md:p-9 hover:bg-[#0165FB] hover:text-white'>
          <h1 className='text-2xl md:text-4xl'>Make <br/> Appointment</h1>
          <p className='mt-5 md:mt-9 text-[10px] md:text-lg  font-normal text-slate-500'> 
            We make it easy for you to make an appointment with the doctor of your choice.
          </p>
          <img src={rectangle7} className='mt-5 mx-auto w-3/4 md:w-full' alt="Appointment" />
        </div>

        {/* Service 2 */}
        <div className='w-full h-[275px] md:h-[464px] bg-[#EBECF0] rounded-3xl p-6 md:p-9 hover:bg-[#0165FB]'>
          <h1 className='text-2xl md:text-4xl'>Virtual<br/> Consultation</h1>
          <p className='mt-5 md:mt-9 text-[10px] md:text-lg font-normal text-slate-500'>
            You don’t have to worry because we provide a helpful facility to consult free of charge.
          </p>
          <img src={rectangle8} className='mt-5 mx-auto w-3/4 md:w-full' alt="Virtual Consultation" />
        </div>

        {/* Service 3 */}
        <div className='w-full h-[275px] md:h-[464px] bg-[#EBECF0] rounded-3xl p-6 md:p-9 hover:bg-[#0165FB]'>
          <h1 className='text-2xl md:text-4xl'>Online<br/> Pharmacy</h1>
          <p className='mt-5 md:mt-9 text-[10px] md:text-lg font-normal text-slate-500'>
            We can also provide you with prescription medicine after your online consultation.
          </p>
          <img src={rectangle9} className='mt-5 mx-auto w-3/4 md:w-full' alt="Online Pharmacy" />
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
