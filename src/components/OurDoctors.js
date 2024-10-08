import React from 'react'
import image2 from '../assests/image2.png'

const OurDoctors = () => {
  return (
   <section className='mt-[100px] p-12'>
       <div className='grid grid-cols-12 gap-3'>
           <div className='col-span-7 '>
           <p className='upper text-2xl text-[#458FFF]'>WHY CHOOSE US</p>
        <h1 className='mt-9 text-6xl font-regular'> Consultation with our professional doctors</h1>
        <div className='w-[600px] h-[100px] mt-9 '>
        <p className='leading-[28px]'>
        Not to worry , our professional doctors are experienced 
in treating and serving the needs of patients .We have 
doctors from various specialties ,  so that our patients will
be facilities in curing all diseases
        </p>
        </div>
        <div className='w-[600px] h-[250px] mt-9 '>
            <div className='grid grid-cols-2 gap-7'>
            <div className=''>
                <h1 className='text-2xl text-[#0165FB] mb-2'>+10 yrs</h1>
                <p className='text-sm'>Most of our doctors have 10+ years
of  experience serving patients</p>
            </div>
            <div>
                <h1 className='text-2xl text-[#0165FB] mb-2'>+230k</h1>
                <p className='text-sm'>They have been serving patients 
both online and offline</p>
            </div>
            </div>

        </div>
       
   

           </div>
           <div className='col-span-5'>
            <img src={image2}/>
           </div>

       </div>
   </section>
  )
}

export default OurDoctors