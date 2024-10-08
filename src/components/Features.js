import React from 'react'
import image3 from '../assests/image3.png'
import image4 from '../assests/image4.png'
import image5 from '../assests/image5.png'

const Features = () => {
  return (
    <section className='mt-[100px] p-12'>
      <h1 className='text-center text-6xl'>Features you will get from our app</h1>
      <p className='text-center mt-9'>
        We have several features that will make it easier for you to consult
        with doctors and others
      </p>

      <div className='grid grid-cols-12 gap-5 mt-9'>
        {/* Feature 1 */}
        <div className='col-span-7 w-full h-[275px] bg-[#EBECEF] rounded-2xl p-9 pb-0 flex justify-between gap-9'>
          <div>
            <h1 className='text-4xl'>Finding your preferred specialist doctor</h1>
            <p className='mt-9 text-lg'>
              You can find the specialist you want according to what you need to consult your health
            </p>
          </div>
          <img src={image3} alt="Specialist Doctor" className='' />
        </div>

        {/* Feature 2 (Spanning two rows) */}
        <div className='col-span-5 row-span-2 bg-[#EBECEF] rounded-2xl p-9 pb-0 flex flex-col justify-between items-center text-center'>
          <div>
            <h1 className='text-4xl'>Consult online with 
your doctor</h1>
            <p className='mt-9 text-lg'>
            We make it easy for you to consult with your doctor who has made an online appointment through the video call that we provide 
            </p>
          </div>
          <img src={image4} alt="Consultation" className='mt-5' />
        </div>

        {/* Feature 3 */}
        <div className='col-span-7 w-full h-[275px] bg-[#EBECEF] rounded-2xl p-9 pb-0 flex justify-between gap-9'>
        <img src={image5} alt="Doctor Appointment" className='' />
          <div>
            <h1 className='text-4xl'>Make an appointment with your doctor</h1>
            <p className='mt-9 text-lg'>
              You can make an appointment for an online consultation or meeting with the doctor of your choice.
            </p>
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default Features
