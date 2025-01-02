import React from 'react'
import Card from './Card'

const Univercity = () => {
  return (
    <>
     <div className='w-[80%] mx-auto mt-[100px]'>
  <h1 className='text-4xl font-bold text-center'>
    Explore <span className='text-[#0da9b0] underline'>Medical Universities</span> in Uzbekistan
  </h1>
  <p className='text-center mt-2'>We are affiliated with these medical universities</p>
  <div className='w-full h-full mt-10'>
    <div className='w-full py-7 flex gap-5 overflow-x-auto scrollbar-hide'>
      <div className='w-[270px] flex-shrink-0'>
        <Card />
      </div>
      <div className='w-[270px] flex-shrink-0'>
        <Card />
      </div>
      <div className='w-[270px] flex-shrink-0'>
        <Card />
      </div>
      <div className='w-[270px] flex-shrink-0'>
        <Card />
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Univercity