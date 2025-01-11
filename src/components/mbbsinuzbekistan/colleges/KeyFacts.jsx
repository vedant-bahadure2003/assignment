import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import { AiOutlineApartment } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

const KeyFacts = () => {
  const facts = [
    {
      icon: <FaChalkboardTeacher size={40} />,
      number: 15,
      text: "No. of Faculties",
    },
    {
      icon: <FaUserGraduate size={40} />,
      number: 2455,
      text: "No. of Students",
    },
    {
      icon: <AiOutlineApartment size={40} />,
      number: 15,
      text: "No. of Department",
    },
    {
      icon: <BsFillPeopleFill size={40} />,
      number: "17:1",
      text: "Students Faculty ratio",
    },
  ];
  return (
    <>
      {" "}
      {/* key facts about Andijan university */}
      <div className="w-full  max-w-4xl mx-auto p-5">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8 text-[#0da9b0]">
          Key Facts About Andijan State University
        </h2>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="flex flex-col items-center  justify-center border rounded-lg p-6 shadow-lg"
            >
              <div className="text-[#0da9b0] mb-4">{fact.icon}</div>
              <h3 className="text-3xl font-bold text-[#0da9b0]">
                {fact.number}
              </h3>
              <p className="text-base text-gray-700 mt-2 text-center">
                {fact.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default KeyFacts;
