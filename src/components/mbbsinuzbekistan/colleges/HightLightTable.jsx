import React from "react";
import Image from "next/image";
import Star from "../../../../public/Images/Star.png";
import Planningform from "@/components/mbbsinuzbekistan/Planningform";

const HightLightTable = () => {
  return (
    <>
      {/* HighLightTable */}
      <div className="border border-[#159EA6] w-[90%] sm:w-[330px] lg:w-[400px] xl:w-[500px] mx-auto h-auto rounded-md sm:ml-8">
        <div className="h-auto flex flex-col gap-3 bg-[#159EA6] text-black rounded-t-md p-4">
          <h1 className="flex gap-2 items-start font-medium text-lg sm:text-2xl lg:text-3xl text-white">
            <Image
              src={Star}
              alt="vector"
              className="w-[20px] sm:w-[26px] lg:w-[30px] h-[20px] sm:h-[25px] lg:h-[30px]"
            />
            Andijan State Medical Institute - Quick Highlights 2025
          </h1>
          <p className="text-white text-sm sm:text-base lg:text-lg">
            Below is the table for quick highlights about the Andijan State
            Medical Institute:
          </p>
        </div>
        <table className="w-full text-sm sm:text-base lg:text-lg text-left border border-[#159EA6]">
          <tbody>
            {[
              { key: "Intake for MBBS Course", value: "September" },
              {
                key: "Processing Time for MBBS Admission",
                value: "25-30 days",
              },
              { key: "Location", value: "Andijan, Uzbekistan" },
              { key: "Basic Eligibility", value: "50% in PCB for General" },
              { key: "NEET Exam", value: "Yes, it is compulsory" },
              { key: "Annual Tuition Fees (Approx.)", value: "3500 USD" },
              { key: "Latin Language", value: "Course Duration" },
              { key: "Anatomy", value: "Psychology and Pedagogy" },
              {
                key: "Medical Biology",
                value: "Histology, Embryology, Cytology",
              },
              { key: "Russian Language", value: "Russian Language" },
            ].map((row, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-[#FFF7EE]" : "bg-white"}`}
              >
                <td className="px-4 py-2 border border-black">{row.key}</td>
                <td className="px-4 py-2 border border-black">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="bg-[#0F7479] w-full h-[40px] rounded-b-md"></div>
      </div>
      <div className="mt-5 px-4 sm:px-0 lg:px-8 xl:px-12">
        <Planningform />
      </div>
    </>
  );
};

export default HightLightTable;
