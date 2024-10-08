import React, { useState } from 'react';
import person1 from '../assests/person1.png';
import person2 from '../assests/person2.png';
import person3 from '../assests/person3.png';
import image1 from '../assests/image1.png';

const Herosection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="p-4 mx-auto w-full h-screen relative ">
      <div className="h-screen p-8 rounded-3xl bg-[#EBECF0] relative ">
        {/* Navbar */}
        <nav className="flex justify-between items-center">
          <h1 className="text-[#0635DC] text-3xl font-bold uppercase">Medicalls</h1>
          <div className="hidden md:flex text-black pl-3 pr-3 pt-2 pb-2 rounded-full">
            <ul className="flex justify-between items-center gap-7">
              <li className="text-lg">About us</li>
              <li className="text-lg">How it works</li>
              <li className="text-lg">Doctors</li>
              <li className="text-lg">Contact us</li>
            </ul>
          </div>
          {/* Hamburger menu for mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none">
              &#9776; {/* Simple hamburger icon */}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`absolute top-16 left-0 right-0 bg-[#EBECF0] md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col items-center gap-4 p-4">
            <li className="text-lg">About us</li>
            <li className="text-lg">How it works</li>
            <li className="text-lg">Doctors</li>
            <li className="text-lg">Contact us</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-5 grid-col-1 gap-4 pt-[72px] text-center">
          <div className="md:col-span-3">
            <h1 className="md:text-[80px] md:leading-[80px] leading-[36px] font-medium text-[#07123A] text-[30px]">
              Get the best online consultation at Medicalls
            </h1>
          </div>
          <div className="md:col-span-2 md:pt-[40px]">
            <p className="md:text-[20px] text-md ">
              Make an appointment for an online consultation with our doctor through the Medicalls app.
            </p>
            <div className="flex gap-9 items-center mt-9 flex-col md:flex-row">
              <button className="bg-[#0165FB] text-white px-2 py-2 rounded-full md:text-md text-[10px]">Download App</button>
              <h2 className="text-[#0165FB]">Learn Now</h2>
            </div>
          </div>
        </div>

        {/* <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end p-8">
          <div className="h-[255px] w-[251px] bg-white text-baseline">
            <div className="p-2">
              <h1 className="text-9xl">
                10<span className="text-[#0165FB]">+</span>
              </h1>
              <p className="text-sm">We have experience with our doctors in providing health services for our patients</p>
            </div>
          </div>

          <div className="h-[225px] w-[336px] bg-white text-black p-5 relative">
            <div className="relative">
              <img src={person1} className="absolute top-0 left-20 z-30" alt="Person 1" />
              <img src={person2} className="absolute top-0 left-10 z-20" alt="Person 2" />
              <img src={person3} className="absolute top-0 left-0 z-10" alt="Person 3" />
              <div className="w-20 h-20 bg-[#0165FB] text-end"></div>
            </div>
          </div>

          <div className="bg-white h-[395px] w-[460px]">
            <img src={image1} alt="Hero" />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Herosection;
