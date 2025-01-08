import Image from "next/image";
import { PiArrowCircleUpRight } from "react-icons/pi";
import DoctorImg from "../../../public/Images/groupwhystudy.png";
import rightsign from "../../../public/Images/rightsign.png";

const WhyStudy = () => {
  return (
    <section className="bg-white flex items-center justify-between gap-4 md:gap-16 flex-wrap md:flex-nowrap ">
      <div className="w-[100%] lg:w-[80%] max-w-[750px] mx-auto overflow-hidden">
        <Image
          src={DoctorImg}
          alt="Doctor"
          className="z-10 w-full h-[400px] sm:h-[600px] object-contain "
        />
      </div>
      <div className=" md:w-full lg:mt-20 flex flex-col gap-5 w-[90%] mx-auto">
        <h2 className="text-2xl md:text-[40px] font-bold text-gray-800 text-center md:text-left">
          Why Study MBBS in{" "}
          <span className="text-[#0da9b0] underline">Uzbekistan?</span>
        </h2>
        <div className="text-sm md:text-lg flex flex-col md:mt-4 gap-2">
          <div className="flex  gap-2">
            <Image
              src={rightsign}
              alt="vector"
              className="  h-[25px] w-[25px] mt-1"
            />

            <h1 className="flex gap-2">
              Direct Admissions Students will get direct admission to the
              medical university of Uzbekistan{" "}
            </h1>
          </div>
          <div className="  flex gap-2">
            <Image
              src={rightsign}
              alt="vector"
              className="text-xl  h-[25px] w-[25px] mt-1"
            />

            <h1 className="flex gap-2">
              100% Safety Uzbekistan is the safest European country.
            </h1>
          </div>
          <div className="  flex  gap-2">
            <Image
              src={rightsign}
              alt="vector"
              className="text-xl  h-[25px] w-[25px] mt-1"
            />

            <h1 className="flex gap-2">
              Low tuition fee Medical universities in Uzbekistan Offered
              low-cost education to Foreign students.
            </h1>
          </div>
          <div className="  flex  gap-2">
            <Image
              src={rightsign}
              alt="vector"
              className="text-xl  h-[25px] w-[25px] mt-1"
            />

            <h1 className="flex gap-2">
              Worldwide acceptance MBBS degree in Uzbekistan is accepted
              worldwide.
            </h1>
          </div>
          <div className="  flex gap-2">
            <Image
              src={rightsign}
              alt="vector"
              className="text-xl  h-[25px] w-[25px] mt-1"
            />

            <h1 className="flex gap-2">
              Living & Accommodation Cost of living in Uzbekistan is low, around
              62 USD.
            </h1>
          </div>
        </div>
        <div className=" ">
          <button className=" mt-6 ml-24 bg-[#0da9b0] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#479b9f] w-[134px] h-[42px]  ">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};
export default WhyStudy;
