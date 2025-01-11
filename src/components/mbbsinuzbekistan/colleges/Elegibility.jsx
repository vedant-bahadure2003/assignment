import React from "react";
import Image from "next/image";
import rightsign from "../../../../public/Images/rightsign.png";

const Elegibility = () => {
  return (
    <>
      {/*  Eligibility Criteria */}
      <div className=" w-full lg:mt-20 flex flex-col bg-[#FFF9EA]  py-6 ">
        <h2 className="text-xl font-bold  w-[85%] mx-auto text-[#0da9b0]">
          Eligibility Criteria to Study MBBS at Andijan State Medical Institute
        </h2>
        <br />
        <p className="text-justify w-[85%] font-medium py-3  mx-auto text-sm ">
          The eligibility criteria for MBBS in Russia for Indian students show
          the relaxation in comparison with MBBS in India:
        </p>

        <div className="text-lg sm:text-[18px] py-3 flex flex-col gap-2 w-[85%] mx-auto">
          <div className="text-sm sm:text-[18px]  flex flex-col gap-2">
            <div className="  flex gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                The student must receive a grade of 70% or higher in Physics,
                Chemistry, and Biology from an accredited educational board.
              </p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                On December 31 of the admissions year, the applicant must have
                reached the age of 17.
              </p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                Indian Students must pass the NEET exam in order to enroll in
                international medical schools.
              </p>
            </div>
            <div className="  flex gap-2 ">
              <Image
                src={rightsign}
                alt="vector"
                className="h-[18px] w-[18px] mt-1"
              />

              <p className="flex gap-2 text-justify">
                After the score is announced, the NEET score is valid for three
                years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Elegibility;
