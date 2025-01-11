import React from "react";
import Image from "next/image";
import Profile from "../../../../public/Images/profile.png";
import greentick from "../../../../public/Images/greentick.png";

const Xyz = () => {
  return (
    <>
      {" "}
      {/* Xyz employee */}
      <div className="flex items-center mt-7   justify-center sm:mt-[100px] ">
        <div className="h-fit w-[85%] flex flex-col  bg-white rounded-md">
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
              Founded in 1955, Andijan State Medical Institute is situated in
              Fergana valley. It is a top medical institute renowned for its
              excellence in offering world-class education and training in MBBS
              programs. It has attained a high rank among the country research
              centres and educational institutes that offer MBBS programs while
              maintaining its academic excellence and scientific achievement.{" "}
              <br /> <br />
              The institute offers a 6-year MBBS program with a 12-month
              internship at an affordable tuition fee. The program is taught
              entirely in English, making it a preferred choice for Indian and
              international students. The curriculum closely aligns with the
              MBBS program in India. It is recognised by religious organisations
              such as FAIMER, WHO, NMC (National Medical Commission), and the
              Ministry of Higher and Secondary Specialized Education of
              Uzbekistan.
              <br />
              <br />
              The intakes are conducted twice an academic year for September
              when the students can submit applications from June to July.
              Another limited number of seats are released for January sessions.
              With diagnostic and therapeutic technology facilities in their
              institute clinic, like MRT, MSCT, USI Scanners, and laparoscopic
              facilities, there are 700 seats. The 6-year MBBS program at
              Andijan State Medical Institute costs approximately
              $24,000–$27,000, offering an affordable option for Indian
              students. <br /> <br />
              Andijan State Medical Institute has 56 departments, 533
              professors, and 36 physicians. It has four major faculties:
              Therapeutic, Pediatrics, Dentistry, and Advanced Training and
              Retraining of Physicians. This is one of the best places to study
              for an MBBS. <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Xyz;
