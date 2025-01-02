'use client'
import React, { useState } from 'react';
import Accordion from './Accordion';
import { faqs } from "../app/data";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div className="w-[80%] mx-auto mt-[71px]">
      <h1 className="text-[40px] font-semibold text-center">
        <span className="text-[#1CB5BD] ">F</span>requently{' '}
        <span className="text-[#1CB5BD] ">A</span>sked{' '}
        <span className="text-[#1CB5BD] ">Q</span>uestions
      </h1>
      <p className="text-center mt-2 ">Celebrating Achievements, One Click at a Time!</p>
      <div className="flex flex-col gap-4 divide-y mt-10 w-[80%] mx-auto">
        {faqs.map((d, i) => (
          <Accordion
            key={i}
            answer={d.answer}
            question={d.question}
            isOpen={openIndex === i}
            onToggle={() => toggleAccordion(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
