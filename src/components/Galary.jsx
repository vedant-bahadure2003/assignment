import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import gallaryimg1 from "../../public/Images/galleryimg1.png";
import gallaryimg2 from "../../public/Images/gallaryimg2.png";
import gallaryimg3 from "../../public/Images/gallaryimg3.png";

const Galary = () => {
  return (
    <>
      <div className="w-[80%] mx-auto mt-[100px]">
        <h1 className="text-[40px] font-semibold text-center">
          Recent Photo{" "}
          <span className="text-[#16A8AF] underline"> Gallery</span>
        </h1>
        <p className="text-center text-[16px] mt-2">
          Celebrating Achievements, One Click at a Time!
        </p>
        <div className="flex items-center justify-end gap-2">
          <button className="text-[#16A8AF]">View More</button>
          <Link href="">
            <IoIosArrowDroprightCircle className="text-3xl text-[#1CB5BD]" />
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 mt-5 ">
          <Image
            src={gallaryimg1}
            alt="gallery image"
            className="w-[350px] h-[330px] rounded-lg object-cover"
          />
          <Image
            src={gallaryimg2}
            alt="gallery image"
            className="w-[350px] h-[330px]  rounded-lg object-cover"
          />
          <Image
            src={gallaryimg3}
            alt="gallery image"
            className="w-[350px] h-[330px] rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Galary;
