import Image from "next/image";
import React from "react";
import collegeImg from "../../public/Images/cambridge.jpeg";
import doctor from "../../public/Images/doctor.png";
import Link from "next/link";
import x from "../../public/Images/1.png"
import facebook from "../../public/Images/2.png";
import insta from "../../public/Images/3.png";
import linkdin from "../../public/Images/4.png";
const Herosection = () => {
  return (
    <>
      <div>
        <div className="relative w-full h-[60vh] sm:h-[65vh] md:h-[70vh] lg:h-[80vh]">
          <Image
            src={collegeImg}
            alt="img"
            className="w-full h-full object-cover"
          />
          <div className="absolute h-full top-0 left-0 right-0 bottom-0  bg-black/60"></div>

          <div className="absolute top-[10%] sm:left-[25%] md:left-[30%] left-[10%] lg:left-[17%]  flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-7xl text-white font-bold text-center my-4">
              Study <span className="text-teal-400">MBBS</span> At
              <span className="text-teal-400"> Uzbekistan's</span> <br /> Leading
              Univercities
            </h1>
            <button className="bg-teal-500 mt-4 lg:mt-7 lg:px-5 lg:py-2 px-3 py-1.5 font-semibold rounded-md text-white">
              Apply Now
            </button>
          </div>
          <div className="absolute left-[5%] bottom-[5%] lg:w-[60%]  sm:bottom-[10%] lg:bottom-[5%]">
            <h1 className="text-white font-semibold mb-3 ">
              Study in NMC & WHO recognized medical colleges
            </h1>
            <ul className=" text-xs sm:text-sm md:text-base space-y-1 md:space-y-2 xl:space-y-3">
              {[
                "Get the best of quality education in Uzbekistan",
                "Direct Admissions: Students will get direct admission to the medical university of Uzbekistan",
                "Low tuition fee: Medical universities in Uzbekistan offer low-cost education to foreign students.",
                "100% Safety: Uzbekistan is the safest European country.",
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="text-teal-500">✔</span>
                  <p className="text-white">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="absolute left-[-4%] top-[40%]  -rotate-90">
            <button className="bg-teal-500 mt-4 lg:mt-7 lg:px-5 lg:py-2 px-3 py-1.5 font-semibold rounded-br-md rounded-bl-md text-white transform "> Apply Now</button>
          </div>
          <div className="absolute right-0 top-[40%] z-20 bg-white p-[10px] flex flex-col gap-3 rounded-tl-md rounded-bl-md items-center">
            <Link href="/">
            <Image
            src={x}
            alt="x"
            />
            </Link>
            <Link href="/">
            <Image
            src={facebook}
            alt="x"
            />
            </Link>
            <Link href="/">
            <Image
            src={insta}
            alt="x"
            />
            </Link>
            <Link href="/">
            <Image
            src={linkdin}
            alt="x"
            />
            </Link>
          </div>

        </div>
          <div className="lg:h-[15vh] h-fit bg-[#fffbef] relative md:flex md:flex-row-reverse md:items-center md:justify-between">

            <Image
            src={doctor}
            alt="img"
            className="xl:h-[70vh] h-[250px] object-contain md:h-[300px] lg:h-[400px]  lg:w-fit  lg:absolute lg:bottom-[100%] xl:bottom-0 lg:right-0 " 
            />
            <div className=" w-[90%] mx-auto h-full flex flex-wrap items-center lg:justify-start justify-center gap-4 ">
                <div className="  lg:border-r-2 border-black px-5 flex flex-col items-center justify-center gap-2">
                    <h1 className="text-3xl lg:text-4xl text-black font-extrabold">12+</h1>
                    <p className="font-semibold text-sm lg:text-base">Years of Experience</p>
                </div>
                <div className=" lg:border-r-2 border-black px-5 flex flex-col items-center justify-center gap-2">
                    <h1 className="text-3xl lg:text-4xl text-black font-extrabold">1000+</h1>
                    <p className="font-semibold text-sm lg:text-base">Satisfied students
                    counselled</p>
                </div>
                <div className=" lg:border-r-2 border-black px-5 flex flex-col items-center justify-center gap-2">
                    <h1 className="text-3xl lg:text-4xl text-black font-extrabold">10+</h1>
                    <p className="font-semibold text-sm lg:text-base">Universities
                    affiliated with us!</p>
                </div>
                <div className=" px-5 flex flex-col items-center justify-center gap-2">
                    <h1 className="text-3xl lg:text-4xl text-black font-extrabold">100+</h1>
                    <p className="font-semibold text-sm lg:text-base">Vice Assitance</p>
                </div>
            </div>

          </div>
      </div>
    </>
  );
};

export default Herosection;
