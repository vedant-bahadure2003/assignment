"use client";
import React from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export default function Accordion({ question, answer, isOpen, onToggle }) {
  const [animationParent] = useAutoAnimate();

  return (
    <div ref={animationParent} className="flex flex-col gap-4 py-4">
      <p
        onClick={onToggle}
        className="flex justify-between gap-2 sm:text-lg font-semibold cursor-pointer"
      >
        <span>{question}</span>
        {isOpen ? (
          <CiCircleMinus className="text-2xl" />
        ) : (
          <CiCirclePlus className="text-2xl" />
        )}
      </p>
      {isOpen && <p className="text-sm sm:text-base text-gray-400">{answer}</p>}
    </div>
  );
}
