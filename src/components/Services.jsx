import React from "react";
import { FaSchool } from "react-icons/fa";
import admissionimg from "../../public/Images/admissionimg.png";
import accomadationimg from "../../public/Images/accomadationimg.png";
import visaimg from "../../public/Images/visaimg.png";
import pickupimg from "../../public/Images/pickupimg.png";
import Image from "next/image";
import documentImg from "../../public/Images/documentimg.png";
import counselingimg from "../../public/Images/counselingimg.png";
const Services = () => {
  return (
    <>
      <div className="bg-teal-50 mt-[50px]  ">
        <h1 className="text-4xl font-bold text-center py-[60px]">
          Our Valuable <span className="text-teal-500 underline">Services</span>
        </h1>
        <div className="flex gap-5 flex-wrap w-[80%] mx-auto items-center justify-center">
          <div className="bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl">
            <Image src={admissionimg} alt="Admission" />
            <h1 className="text-2xl font-semibold text-teal-700">Admissoion</h1>
            <p className="text-center">
              Get the guaranteed admission to top university.
            </p>
          </div>
          <div className="bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl">
            <Image src={visaimg} alt="Admission" />
            <h1 className="text-2xl font-semibold text-teal-700">Admissoion</h1>
            <p className="text-center">
              Fill the visa applications Followed by universities Guidelines.{" "}
            </p>
          </div>
          <div className="bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl">
            <Image src={accomadationimg} alt="Accomadation" />
            <h1 className="text-2xl font-semibold text-teal-700">Admissoion</h1>
            <p className="text-center">
              Stay in the dormitories with a safe environment.{" "}
            </p>
          </div>
          <div className="bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl">
            <Image src={pickupimg} alt="Pickup" />
            <h1 className="text-2xl font-semibold text-teal-700">Admissoion</h1>
            <p className="text-center">
              Get picked up at airport By our representative.{" "}
            </p>
          </div>
          <div className="bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl">
            <Image src={documentImg} alt="Document" />
            <h1 className="text-2xl font-semibold text-teal-700">Admissoion</h1>
            <p className="text-center">
              ﻿Verification of legalized <br /> documents.{" "}
            </p>
          </div>
          <div className="bg-white flex flex-col rounded-md gap-2 items-center justify-center p-8 w-[320px] shadow-2xl">
            <Image src={counselingimg} alt="Conseling" />
            <h1 className="text-2xl font-semibold text-teal-700">Admissoion</h1>
            <p className="text-center">
              Get free counseled by our reputed experts.{" "}
            </p>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <button className="bg-teal-500 px-4 py-1.5 font-semibold   rounded-md text-white mt-[30px] mb-[60px]">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
