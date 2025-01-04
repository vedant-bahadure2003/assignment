import React from "react";
import admissionimg from "../../../public/Images/admissionimg.png";
import accomadationimg from "../../../public/Images/accomadationimg.png";
import visaimg from "../../../public/Images/visaimg.png";
import pickupimg from "../../../public/Images/pickupimg.png";
import Image from "next/image";
import documentImg from "../../../public/Images/documentimg.png";
import counselingimg from "../../../public/Images/counselingimg.png";
const Services = () => {
  return (
    <>
      <div className="bg-teal-50 md:mt-[50px]   ">
        <h1 className=" text-2xl md:text-4xl font-bold text-center pt-5">
          Our Valuable <span className="text-[#16A8AF] underline">Services</span>
        </h1>
        <p className="text-center text-gray-600 text-base w-[80%] mx-auto mt-2">
          We are affiliated with these medical universities
        </p>
        
        <div className="flex gap-5 flex-wrap w-[80%] mx-auto items-center justify-center mt-7 mb-5 md:mb-0">
          <div className="bg-white flex flex-col rounded-md gap-1 md:gap-2 items-center justify-center p-8 w-[320px] h-[172px] md:h-fit shadow-2xl">
            <Image src={admissionimg} alt="Admission" className="w-[50px] h-[50px] object-cover" />
            <h1 className="text-xl md:text-2xl font-semibold text-[#005D61]">Admission</h1>
            <p className="text-center text-sm">
              Get the guaranteed admission to top university.
            </p>
          </div>
          <div className="bg-white flex flex-col rounded-md gap-1 md:gap-2 items-center justify-center p-8 w-[320px] h-[172px] md:h-fit shadow-2xl">
            <Image src={visaimg} alt="visaimg" className="w-[50px] h-[50px] object-cover" />
            <h1 className="text-xl md:text-2xl font-semibold text-[#005D61]">Visa Process</h1>
            <p className="text-center text-sm">
              Fill the visa applications Followed by universities Guidelines.{" "}
            </p>
          </div>
          <div className="bg-white flex flex-col rounded-md gap-1 md:gap-2 items-center justify-center p-8 w-[320px] h-[172px] md:h-fit shadow-2xl">
            <Image src={accomadationimg} alt="Accomadation" className="w-[50px] h-[50px] object-cover"/>
            <h1 className="text-xl md:text-2xl font-semibold text-[#005D61]">Accommodation</h1>
            <p className="text-center text-sm">
              Stay in the dormitories with a safe environment.{" "}
            </p>
          </div>
          <div className="bg-white flex flex-col rounded-md gap-1 md:gap-2 items-center justify-center p-8 w-[320px] h-[172px] md:h-fit shadow-2xl">
            <Image src={pickupimg} alt="Pickup"  className="w-[50px] h-[50px] object-cover"/>
            <h1 className="text-xl md:text-2xl font-semibold text-[#005D61]">Airport Pickup</h1>
            <p className="text-center text-sm">
              Get picked up at airport By our representative.{" "}
            </p>
          </div>
          <div className="bg-white flex flex-col rounded-md gap-1 md:gap-2 items-center justify-center p-8 w-[320px] h-[172px] md:h-fit shadow-2xl">
            <Image src={documentImg} alt="Document" className="w-[50px] h-[50px] object-cover" />
            <h1 className="text-xl md:text-2xl font-semibold text-[#005D61]">Documentation</h1>
            <p className="text-center text-sm">
              Verification of legalized <br /> documents.{" "}
            </p>
          </div>
          <div className="bg-white flex flex-col rounded-md gap-1 md:gap-2 items-center justify-center p-8 w-[320px] h-[172px] md:h-fit shadow-2xl">
            <Image src={counselingimg} alt="Conseling" className="w-[50px] h-[50px] object-cover"/>
            <h1 className="text-xl md:text-2xl font-semibold text-[#005D61]">Free Counseling</h1>
            <p className="text-center text-sm">
              Get free counseled by our reputed experts.{" "}
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center ">
          <button className="bg-teal-500 px-4 py-1.5 font-semibold hidden md:block  rounded-md text-white mt-[30px] mb-[60px]">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
