import Image from "next/image";
import vector from "../../../public/Images/vector.png";
import whyStudy from "../../../public/Images/whyStudy.png";

const WhyStudy = () => {
  return (
    <section className="bg-white flex items-center justify-between gap-16 flex-wrap md:flex-nowrap mt-[300px] lg:mt-[100px]">
      <div className="relative w-[100%] lg:w-[80%] max-w-[750px] mx-auto overflow-hidden">
        <Image
          src={whyStudy}
          alt="Doctor"
          className="z-10 w-full h-[400px] sm:h-[600px] object-contain "
        />
      </div>
      <div className=" w-full lg:mt-20 flex flex-col gap-5 ">
        <h2 className="text-3xl font-bold text-gray-800 w-[70%] mx-auto">
          Why Study MBBS in{" "}
          <span className="text-[#0da9b0]underline">Uzbekistan?</span>
        </h2>
        <div className="text-lg sm:text-xl flex flex-col gap-2 w-[70%] mx-auto">
         
        </div>
        <div className="w-[70%] mx-auto">
          <button className=" mt-6 bg-[#0da9b0] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#479b9f] w-[200px] mx-auto">
            Read more
          </button>
        </div>
      </div>
    </section>
  );
};
export default WhyStudy;
