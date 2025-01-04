'use client'
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDroprightCircle, IoIosArrowForward } from "react-icons/io";
import gallaryimg1 from "../../public/Images/galleryimg1.png";
import gallaryimg2 from "../../public/Images/gallaryimg2.png";
import gallaryimg3 from "../../public/Images/gallaryimg3.png";

const Galary = () => {
  const galleryRef = useRef(null);

  const scrollGallery = () => {
    if (galleryRef.current) {
      galleryRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="w-[80%] mx-auto mt-10 md:mt-[71px] relative">
        <h1 className="text-2xl md:text-[40px] font-semibold text-center">
          Recent Photo{" "}
          <span className="text-[#16A8AF] underline"> Gallery</span>
        </h1>
        <p className="text-center text-sm md:text-[16px] mt-2">
          Celebrating Achievements, One Click <br className="md:hidden" /> at a
          Time!
        </p>
        <div className="hidden md:flex items-center justify-end gap-2 ">
          <button className="text-[#16A8AF]">View More</button>
          <Link href="">
            <IoIosArrowDroprightCircle className="text-3xl text-[#1CB5BD]" />
          </Link>
        </div>
        <div className="relative">
          <div
            className="flex items-center justify-start gap-3 mt-5 overflow-x-scroll scrollbar-hide"
            ref={galleryRef}
          >
            <div className="flex gap-3">
              <Image
                src={gallaryimg1}
                alt="gallery image"
                className="md:w-[350px] md:h-[330px] w-[320px] h-[251px] rounded-lg object-cover"
              />
              <Image
                src={gallaryimg2}
                alt="gallery image"
                className="md:w-[350px] md:h-[330px] w-[320px] h-[251px] rounded-lg object-cover"
              />
              <Image
                src={gallaryimg3}
                alt="gallery image"
                className="md:w-[350px] md:h-[330px] w-[320px] h-[251px] rounded-lg object-cover"
              />
            </div>
          </div>
          <button
            className="absolute right-0 top-[50%] transform -translate-y-1/2 bg-[#16A8AF] p-2 rounded-full text-white shadow-lg"
            onClick={scrollGallery}
          >
            <IoIosArrowForward className="text-xl" />
          </button>
        </div>
        <div className="flex justify-center mt-5 md:hidden">
          <button className="w-[132px] h-[40px] bg-[#16A8AF] font-semibold text-white rounded-md">
            View More
          </button>
        </div>
      </div>
    </>
  );
};

export default Galary;
