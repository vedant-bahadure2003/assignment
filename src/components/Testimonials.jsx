'use client'
import Image from "next/image";
import React, { useRef } from "react";
import Face from "../../public/Images/face.jpg";
import stars from "../../public/Images/groupstar.png";
import textimg from "../../public/Images/Dream. Study. Achieve..png";
import { IoIosArrowForward } from "react-icons/io";

const Testimonials = () => {
  const scrollContainerRef = useRef(null);

  const scrollTestimonials = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="w-[80%] mx-auto mt-[50px] relative">
        <h1 className="text-2xl md:text-4xl font-semibold md:font-bold text-center">
          Our Happy <span className="text-teal-500 underline">Students</span>
        </h1>
        <p className="text-center mt-2">
          Hear What Our Students Have to Say
        </p>

        <div className="overflow-x-auto mt-10 scrollbar-hide" ref={scrollContainerRef}>
          <div className="flex gap-6 items-center w-max">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="bg-[#E9F7F8] w-[272px] h-[241px] md:w-[365px] md:h-[324px] relative rounded-tr-full rounded-br-full rounded-bl-full flex flex-col items-start justify-center p-5"
              >
                <p className="text-gray-600 text-[14px] md:text-[18px] w-[80%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minus, nisi iste. Itaque,...
                </p>
                <div className="flex flex-wrap gap-1 ml-3 mt-8 md:my-8">
                  <Image src={stars} alt="stars" />
                </div>
                <p className="font-semibold text-xl ml-4 md:ml-14">John Doe</p>
                <p className="text-gray-600 font-semibold ml-4 md:ml-14">MBBS</p>
                <Image
                  src={Face}
                  alt="face"
                  className="md:w-[164.98px] md:h-[146.9px] w-[100px] h-[90px] object-cover absolute bottom-0 right-0 rounded-tl-full rounded-bl-full rounded-tr-full"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Button */}
        <button
          className="absolute right-0 top-[50%] transform -translate-y-1/2 bg-teal-500 p-3 rounded-full text-white shadow-lg"
          onClick={scrollTestimonials}
        >
          <IoIosArrowForward className="text-xl" />
        </button>

        <Image
          src={textimg}
          alt="textimg"
          className="w-[100%] mt-16"
        />
      </div>
    </>
  );
};

export default Testimonials;
