

const Contactus = () => {
  return (
    <>
    <div className="block w-full lg:h-[290px]">
    

    <div className="static h-fit lg:w-[917px] lg:h-[338px] p-3 bg-[#B7FBFF] border rounded-md border-black flex flex-col justify-center items-center gap-3 mx-auto mt-[50px] lg:mt-[71px] lg:absolute lg:top-[-6%] lg:left-[16%] shadow-xl">
      <h1 className="font-semibold text-[30px] lg:text-[40px] text-center break-words w-[60%]">
      Get Personalized Guidance for Your MBBS Journey
      </h1>
      <form className="flex flex-wrap items-center justify-center gap-4">
        <input type="text" placeholder="Your Name" className="w-[350px] h-[43px] border border-black rounded-md p-2" />
        <input type="email" className="w-[350px] h-[43px] border border-black rounded-md p-2" placeholder="Your Email" />
        <input type="number" className="w-[350px] h-[43px] border border-black rounded-md p-2" placeholder="Your Phone Number" />
        <input type="text" className="w-[350px] h-[43px] border border-black rounded-md p-2" placeholder="Your Message" />
      </form>
      <button className="w-[163px] h-[43px] bg-[#16A8AF] text-white rounded-md">Apply Now</button>
     
    </div>
    </div>
    </>
  
  )
}

export default Contactus