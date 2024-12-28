
"use client";
import React from "react";
import Image from "next/image";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

import { useState } from "react";


import { useAutoAnimate } from "@formkit/auto-animate/react";


export default function Accordion(props) {
  const [animationParent] = useAutoAnimate();
  const [isAccordionOpen, setAccordion] = useState(
    props.isAccordionOpen || false
  );
  function toggleAccordion() {
    setAccordion(!isAccordionOpen);
  }
  return (
    <div ref={animationParent} className="flex flex-col gap-4 py-4">
     
      <p
        onClick={toggleAccordion}
        className=" flex justify-between gap-2  sm:text-lg font-semibold cursor-pointer "
      >
        <span>{props.question}</span>
        {isAccordionOpen ? (
         <CiCircleMinus className="text-2xl" />
        ) : (
          <CiCirclePlus className="text-2xl" />
        )}
      </p>
     
      {isAccordionOpen && (
        <p className="text-sm sm:text-base text-gray-400 ">{props.answer}</p>
      )}
    </div>
  );
}