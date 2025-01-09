import React from "react";
import Image from "next/image";
import Profile from "../../../../../public/Images/profile.png";
import greentick from "../../../../../public/Images/greentick.png";
import collegeImg from "../../../../../public/Images/collegeImg.png";
import collegeBgImg from "../../../../../public/Images/collegeBgImg.png";
import Star from "../../../../../public/Images/Star.png";

import { BiRupee } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

const page = () => {
  return (
    <>
      {/* BgImage */}
      <div className="relative  w-full h-[300px]">
        {/* Bg Image */}
        <div className="absolute h-[400px] w-full">
          <Image
            src={collegeImg}
            alt="collegeBgImg"
            className="w-full object-cover block sm:hidden h-[300px]"
          />
          <Image
            src={collegeBgImg}
            alt="collegeBgImg"
            className="w-full h-full object-cover hidden sm:block sm:h-[380px]"
          />
          <div className="h-[300px] sm:h-[380px] w-full  absolute top-0 bg-black opacity-60"></div>
        </div>
        {/* Navbar */}

        <div className="absolute top-20 sm:top-24 text-white left-5 text-sm font-semibold">
          <p>
            Home / MBBS In Uzbekistan /
            <span className="text-[#16A8AF]"> Courses</span>
          </p>
        </div>
        {/* Heading */}
        <div className="text-white absolute top-32 sm:top-44 w-[90%] sm:w-[50%] left-5  flex flex-col gap-1">
          <h1 className="text-4xl sm:text-5xl font-semibold mt-3  w-full">
            Andijan State Medical Institute
          </h1>
          <div className=" w-[80%] h-[30px] bg-gradient-to-r from-[#16A8AF] to-[#09464900] flex items-center justify-start">
            <h2 className=" text-[14px] ml-4">#1 In Uzbekistan</h2>
          </div>
          <div className="text-white  w-[90%] ">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center justify-start">
                <BiRupee className="text-3xl text-[#16A8AF]" />
                <p className="text-[14px]">3,80,000/ year</p>
              </div>
              <div className="flex gap-2  items-center justify-start">
                <MdLocationOn className="text-3xl  text-[#16A8AF]" />
                <p className="text-[14px]">Andijan </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-7   justify-center sm:mt-[100px] ">
        <div className="h-fit w-[90%] flex flex-col  bg-white rounded-md">
          <div className="flex gap-3 w-full h-[50px] items-center justify-start">
            <div className="w-[50px] h-[50px]">
              <Image
                src={Profile}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="font-semibold">
              <h2>XYZ Employee</h2>
            </div>
            <div>
              <Image
                src={greentick}
                alt="greentick"
                className="w-[23px] h-[23px] "
              />
            </div>
          </div>
          <div className="text-justify text-sm py-5">
            <p>
              Studying MBBS in Uzbekistan has been one of the most preferred
              options for Indian students for decades now. Standing at the
              prominent 8th position in the world in terms of the quality of
              medical education, Russia has been home to thousands of Indian
              MBBS students who are working as renowned and well-established
              doctors today. <br />
              As India and Uzbekistan share a cordial and friendly relationship,
              the government of the Russian Federation offers subsidized medical
              education to Indian students. The affordability of MBBS in Russia
              encourages many Indian medical aspirants to pursue their dreams in
              this largest country in the world which is home to more than 25
              top medical universities around the globe.{" "}
            </p>
          </div>
        </div>
      </div>

      {/* IFrame */}
      <div className="h-[250px] sm:h-[400px] md:h-[550px] flex items-center justify-center w-full mt-[20px] sm:mt-0 ">
        <div className=" h-full w-[85%] ">
          {/* <iframe
                        className="w-full h-full object-cover"
                        src="https://www.youtube.com/embed/wF6v4VlWvLM?si=tgAvq8qPU0jrPYlN"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe> */}
          <iframe
            className="w-full h-[200px] sm:h-[350px] md:h-[500px] md:w-[80%] mx-auto mt-[20px] sm:mt-[40px] object-cover rounded-xl shadow-xl"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
      </div>
      <div className="w-[full] ">
        <table className="w-[85%] ml-7  text-sm text-left rtl:text-right border border-[#159EA6] mt-5  ">
          <tbody className="">
            <tr className="odd:bg-[#FFF7EE] even:bg-white border    ">
              <td
                colSpan="2"
                className="px-4 py-4 bg-[#159EA6]   border border-[#159EA6]"
              >
                <h1 className="flex items-start gap-1 font-semibold text-2xl text-white">
                  <Image
                    src={Star}
                    alt="vector"
                    className="w-[26px] h-[25px]"
                  />
                  MBBS in Uzbekistan - Quick Highlights
                </h1>
                <p className="text-white">
                  Studying MBBS in Russia stands as the best option for Indian
                  students seeking.
                </p>
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">
                Intake for MBBS Course
              </td>
              <td className="px-4 py-2 border border-black">September</td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">
                Processing Time for MBBS Admission{" "}
              </td>
              <td className="px-4 py-2 border border-black">25-30 days</td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">Location </td>
              <td className="px-4 py-2 border border-black">
                Andijan, Uzbekistan{" "}
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">
                Basic Eligibility{" "}
              </td>
              <td className="px-4 py-2 border border-black">
                50% in PCB for General{" "}
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">NEET Exam </td>
              <td className="px-4 py-2 border border-black">
                Yes, it is compulsory{" "}
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">
                Annual Tuition Fees (Approx.){" "}
              </td>
              <td className="px-4 py-2 border border-black">3500 USD </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">Latin Language</td>
              <td className="px-4 py-2 border border-black">
                Course Duration{" "}
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">Anatomy</td>
              <td className="px-4 py-2 border border-black">
                Psychology and Pedagogy
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">Medical Biology</td>
              <td className="px-4 py-2 border border-black">
                Histology, Embryology, Cytology{" "}
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white">
              <td className="px-4 py-2 border border-black">
                Russian Language
              </td>
              <td className="px-4 py-2 border border-black">
                Russian Language
              </td>
            </tr>
            <tr className=" border border-[#159EA6]">
              <td
                colSpan="2"
                className="px-4 py-2 bg-[#159EA6] border border-[#0F7479]"
              ></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default page;
