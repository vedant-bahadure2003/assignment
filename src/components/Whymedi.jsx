import React from 'react'
import { PiArrowCircleUpRight } from "react-icons/pi";

const Whymedi = () => {
    return (
        <>
            <div className='w-full h-auto mt-[100px] flex items-center justify-center'>
                <div className='w-[90%] mx-auto h-auto flex flex-col lg:flex-row'>
                    <div className='w-full lg:w-[50%] h-auto'>
                        <div className='w-[90%] lg:w-[75%] h-full mx-auto flex flex-col gap-8 justify-center py-8'>
                            <div>
                                <h1 className='text-3xl sm:text-4xl  font-bold'>
                                    Why <span className='text-teal-500'>Uzbekistan Medi?</span>
                                </h1>
                            </div>
                            <div className='text-base sm:text-lg flex flex-col gap-2'>
                                <h1 className='flex gap-2'> <span className="text-teal-500">✔</span>A one-stop solution for students specialized in MBBS overseas education counseling, and admission </h1>
                                <h1 className='flex gap-2'> <span className="text-teal-500">✔</span>Complete support for the necessary documentation.</h1>
                                <h1 className='flex gap-2'> <span className="text-teal-500">✔</span>Guaranteed Admission in top MBBS universities in Uzbekistan
                                    having low fees for Indian students</h1>
                                <h1 className='flex gap-2'> <span className="text-teal-500">✔</span>Free counseling to students and assistance such that it will help
                                    their career grow.</h1>
                            </div>
                            <button className='bg-teal-500 w-[140px] sm:w-[160px] h-[40px] rounded-md text-white text-lg sm:text-xl font-semibold'>
                                Read
                            </button>
                        </div>
                    </div>
                    <div className='w-full lg:w-[40%] h-auto flex items-center justify-center relative py-8'>
                        <img id='curveImg' className='z-10 object-cover w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px]' src="https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <img id='curveBgImg' className='absolute bg-teal-500 object-cover w-[250px] sm:w-[350px] lg:w-[400px] h-[250px] sm:h-[350px] lg:h-[400px]' src="" alt="" />
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Whymedi;