import React from 'react'
import person1 from '../assests/person1.png'
import person2 from '../assests/person2.png'
import person3 from '../assests/person3.png'
import image1 from '../assests/image1.png'

const Herosection = () => {
  return (
    <section className="p-4 mx-auto w-full h-screen relative ">
      <div
        className="h-screen p-8 rounded-3xl bg-[#EBECF0] relative "
       
      >
        <div className='flex justify-between items-center'>
           <h1 className='text-[#0635DC] text-3xl font-bold uppercase'>Medicalls</h1>
           <div className='text-black pl-3 pr-3 pt-2 pb-2 rounded-full '>
                <ul className='flex jutify-between items-center gap-7 '>
                    <li className='text-lg'>About us </li>
                    <li className='text-lg'>How it works</li>
                    <li className='text-lg'>Doctors</li>
                    <li className='text-lg'>Contact us</li>
                </ul>
           </div>
       </div>
       <div className='grid grid-cols-5 gap-4 pt-[72px]'>
               <div className='col-span-3'> 
                   <h1 className='text-[80px] leading-[80px] font-medium text-[#07123A]'>Get the best online consultation at medicals</h1>
               </div>
               <div className='col-span-2 pt-[40px]'>
                   <p className='text-[20px]'>
                   Make an appointment for an online consultation with our doctor through the medicalies app.
                   </p>
                   <div className='flex gap-9 items-center mt-9'>
                   <button className='bg-[#0165FB] text-white px-2 py-2 rounded-full text-md'>Download App</button>
                   <h2 className='text-[#0165FB]'>Learn Now</h2>
                   </div>
               </div>
           </div>

           <div className='absolute bottom-0 left-0 right-0 flex justify-between items-end p-8'>
  <div className='h-[255px] w-[251px] bg-white text-basline'>
    <div className='p-2  '>
      <h1 className='text-9xl'>
        10<span className='text-[#0165FB]'>+</span>
      </h1>
      <p className='text-sm'>We have experience with our doctors in providing health services for our patients</p>
    </div>
  </div>

  <div className='h-[225px] w-[336px] bg-white text-black p-5 relative'>
  <div className='relative'>
    <img src={person1} className='absolute top-0 left-20 z-30' />
    <img src={person2} className='absolute top-0 left-10 z-20'  />
    <img src={person3} className='absolute top-0 left-0 z-10'  />
    <div className='w-20 h-20 bg-[#0165FB] text-end'></div>
  </div>
</div>


  <div className='bg-white h-[395px] w-[460px]'>
    <img src={image1} />
  </div>
</div>


       </div>

       

    </section>
  )
}

export default Herosection






