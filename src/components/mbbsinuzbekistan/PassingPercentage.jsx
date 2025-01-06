import React from "react";
import rightsign from "../../../public/Images/rightsign.png";
import Image from "next/image";
const PassingPercentage = () => {
  return (
    <>
      <div className="w-[90%] mx-auto">
        <h2 className="font-semibold text-[20px]  text-[#16A8AF]">
          FMGE Passing Percentage After Completing MBBS From Uzbekistan{" "}
        </h2>
        <p className="text-sm font-semibold">
          It is really safe for Indian students to live and study MBBS in
          Uzbekistan, have a look at the below given points:{" "}
        </p>
        <table className="w-full text-sm text-left rtl:text-right border border-black ">
          <tbody className="">
            <tr className="odd:bg-[#FFF7EE] even:bg-white border  ">
              <td className="px-4 py-2 border border-black font-medium text-[#005D61] text-center">
                University Name
              </td>
              <td className="px-4 py-2 border border-black text-[#005D61] text-center">
                Passing Percentage
              </td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">University 1</td>
              <td className="px-4 py-2 border border-black">45%</td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">University 1</td>
              <td className="px-4 py-2 border border-black">45%</td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">University 1</td>
              <td className="px-4 py-2 border border-black">45%</td>
            </tr>
            <tr className="odd:bg-[#FFF7EE] even:bg-white ">
              <td className="px-4 py-2 border border-black">University 1</td>
              <td className="px-4 py-2 border border-black">45%</td>
            </tr>
          </tbody>
        </table>
        {/* Scholarships In Uzbekistan For Indian Students */}
        <div className=" w-full lg:mt-20 flex flex-col gap-5 mt-[40px]  p-1">
          <div className="flex flex-col text-sm justify-center items-start gap-2">
            <h2 className="text-xl font-bold text-[#0da9b0]">
              Scholarships In Uzbekistan For Indian Students
            </h2>
            <p>
              It is really safe for Indian students to live and study MBBS in
              Uzbekistan, have a look at the below given points:{" "}
            </p>
            <p>
              In India, the students are provided with the facilities of
              education loans to help them to study aboard. The loan process and
              amount of loan is dependent on many factors.
            </p>
          </div>
        </div>
        {/*Education Loan Assistance For Studying MBBS In Uzbekistan. */}
      </div>
        <div className=" w-full lg:mt-20 flex flex-col gap-5 mt-[40px] bg-[#FFF9EA] py-2 ">
          <div className="flex flex-col justify-center items-start w-[90%] mx-auto gap-2">
            <h2 className="text-xl font-bold text-[#0da9b0]">
              Education Loan Assistance For Studying MBBS In Uzbekistan.
            </h2>
            <p className="text-sm"> Students can get education loan for studying MBBS abroad:</p>
          </div>
          <div className="text-sm sm:text-[18px] flex flex-col gap-2 w-[90%] mx-auto">
            <div className="text-sm sm:text-[18px] flex flex-col gap-2">
              <div className="  flex  gap-2">
                <Image
                  src={rightsign}
                  alt="vector"
                  className=" h-[18px] w-[18px] mt-1"
                />

                <p className="flex gap-2 text-justify">
                  In India, the students are provided with the facilities of
                  education loans to help them to study abroad. The loan process
                  and amount of loan is dependent on many factors.{" "}
                </p>
              </div>
              <div className="  flex  gap-2">
                <Image
                  src={rightsign}
                  alt="vector"
                  className=" h-[18px] w-[18px] mt-1"
                />

                <p className="flex gap-2 text-justify">
                  The NEET score of the student, university fee, university’s
                  invitation letter, these are some of the main documents that
                  are required.
                </p>
              </div>
              <div className="  flex  gap-2">
                <Image
                  src={rightsign}
                  alt="vector"
                  className="h-[18px] w-[18px] mt-1"
                />

                <p className="flex gap-2 text-justify">
                  The education loan also depends on the student’s parent’s
                  income, wealth, and property.
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default PassingPercentage;
