import React from 'react'
import rectangle7 from '../assests/Rectangle7.png'
import rectangle8 from '../assests/Rectangle8.png'
import rectangle9 from '../assests/Rectangle9.png'

const ServiceSection = () => {
  return (
    <section className='mt-[100px] p-12'>
        <div className='grid grid-cols-3 gap2'> 
        <div className='col-span-2'>
            <h1 className='text-6xl leading-[70px]'>We will serve you with <br/> healthcare services</h1>
        </div>
        <div>
            <p className='text-[16px] font-normal'>We provide a variety of services that can
make it easier for you to fulfils your need</p>
<button className='bg-[#0165FB] text-white px-2 py-2 rounded-full text-md mt-9'>Download App</button>
        </div>

        </div>
        <div className='grid grid-cols-3 mt-9 gap-9'>
            <div className='w-full h-[464px] bg-[#EBECF0] rounded-3xl p-9 hover:bg-[#0165FB] hover:text-white'>
            <h1 className='text-4xl '>Make <br/>Appointment</h1>
            <p className='mt-9 text-lg font-normal text-slate-500 '> We  make it easy for you to make an
appointment with the doctor of your advice</p>
           <img src={rectangle7} className='mt-9 mx-auto'></img>
            </div>
            <div className='w-full h-[464px] bg-[#EBECF0] rounded-3xl p-9 hover:bg-[#0165FB]'>
            <h1 className='text-4xl'> Virtual<br/>Consultation</h1>
            <p className='mt-9 text-lg font-normal text-slate-500'> You don’t have to bother because we
provide a helpful facility to consult <br/> free </p>
           <img src={rectangle8} className='mt-9 mx-auto'></img>
            </div>
            <div className='w-full h-[464px] bg-[#EBECF0] rounded-3xl p-9 hover:bg-[#0165FB]'>
            <h1 className='text-4xl'>Online<br/>Pharmacy</h1>
            <p className='mt-9 text-lg font-normal text-slate-500'> We can also provide you with prescription medicine after your online consultation</p>
           <img src={rectangle9} className='mt-9 mx-auto'></img>
            </div>

        </div>

    </section>
  )
}

export default ServiceSection