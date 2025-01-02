import React from 'react'
import Accordion from './Accordion'
import { faqs} from "../app/data"

const Faq = () => {
  return (
    <>
    <div className='w-[80%] mx-auto mt-[71px]'>
    <h1 className="text-4xl font-bold text-center"><span className="text-teal-500 underline">F</span>requently <span className="text-teal-500 underline">A</span>sked <span className="text-teal-500 underline">Q</span>uestions</h1>
        
        <p className="text-center mt-2">
        Celebrating Achievements, One Click at a Time!

        </p>
    <div className="flex flex-col gap-4 divide-y mt-10">
          {faqs.map((d, i) => (
            <Accordion
              answer={d.answer}
              question={d.question}
              isAccordionOpen={d.isAccordionOpen}
              key={i}
            />
          ))}
        </div>
    </div>
    </>
  )
}

export default Faq