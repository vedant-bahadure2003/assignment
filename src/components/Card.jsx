import Image from 'next/image'
import React from 'react'
import collegeImg from "../../public/Images/cambridge.jpeg"

const Card = () => {
  return (
    <>
    <div className='w-[270px] border-1 shadow-xl rounded-lg overflow-hidden'>
        <div>
            <Image
            src={collegeImg}
            className=''
            />
        </div>
        <div className='p-3'>
            <h1 className='text-teal-700 font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur.</h1>
            <p className='font-semibold '>Fees Structure : rs 5,22,000</p>
            <p className='font-semibold'>Duration : 4 year</p>
            <div className='flex justify-between mt-2'>
                <button className='bg-teal-500 px-4 py-1.5 font-semibold rounded-md text-white'>Apply Now</button>
                <button className='border border-teal-500 px-4 py-1.5 font-semibold text-teal-500 rounded-md'>Read More</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card