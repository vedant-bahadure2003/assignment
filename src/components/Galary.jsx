import React from 'react'
import collegeImg from "../../public/Images/cambridge.jpeg";
import Image from 'next/image';

const Galary = () => {
  return (
    <>
    <div className='w-[80%] mx-auto mt-[100px]'>
    <h1 className="text-4xl font-bold text-center">
          Recent Photo <span className="text-teal-500 underline"> Gallery</span>
        </h1>
        <p className="text-center mt-2">
        Celebrating Achievements, One Click at a Time!
        </p>
        <div className='flex flex-wrap items-center justify-center gap-5 mt-10'>
            <Image
            src={collegeImg}
            alt="Logo"
            className='w-[350px] h-fit rounded-lg'
            />
            <Image
            src={collegeImg}
            alt="Logo"
            className='w-[350px] h-fit rounded-lg'
            />
            <Image
            src={collegeImg}
            alt="Logo"
            className='w-[350px] h-fit rounded-lg'
            />
            
            
           </div>
    </div>
    </>
  )
}

export default Galary