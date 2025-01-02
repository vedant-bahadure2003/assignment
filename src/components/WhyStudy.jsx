import Image from "next/image";
import { PiArrowCircleUpRight } from "react-icons/pi";
import DoctorImg from "../../public/Images/groupwhystudy.png";
import rightsign from "../../public/Images/rightsign.png";

const WhyStudy = () => {
  return (
    <section className="bg-white flex items-center justify-between gap-16 flex-wrap md:flex-nowrap ">
      <div className="w-[100%] lg:w-[80%] max-w-[750px] mx-auto overflow-hidden">
        <Image
          src={DoctorImg}
          alt="Doctor"
          className="z-10 w-full h-[400px] sm:h-[600px] object-contain "
        />
      </div>
      <div className=" w-full lg:mt-20 flex flex-col gap-5 ">
        <h2 className="text-3xl font-bold text-gray-800 w-[70%] mx-auto">
          Why Study MBBS in{" "}
          <span className="text-[#0da9b0] underline">Uzbekistan?</span>
        </h2>
        <div className="text-lg sm:text-xl flex flex-col gap-2 w-[70%] mx-auto">
          <p className="flex gap-2">
            <span className="mt-[5px] w-[30px] h-[30px] ">
              <Image src={rightsign} alt="rightsign" className="w-full" />
            </span>
            Get the best of quality education in Uzbekistan
          </p>
          <p className="flex gap-2">
            <span className="mt-[5px] ">
              <Image src={rightsign} alt="rightsign" />
            </span>
            Direct Admissions Students will get direct admission to the medical university of Uzbekistan          </p>
          <p className="flex gap-2">
            <span className="mt-[5px] ">
              <Image src={rightsign} alt="rightsign" />
            </span>
            Low tuition fee Medical universities in Uzbekistan Offered low-cost education to Foreign students.
          </p>
          <p className="flex gap-2">
            <span className="mt-[5px] ">
              <Image src={rightsign} alt="rightsign" />
            </span>
            100% Safety Uzbekistan is the safest European country.
          </p>
          <p className="flex gap-2">
            <span className="mt-[5px] ">
              <Image src={rightsign} alt="rightsign" />
            </span>
            Worldwide acceptance MBBS degree in Uzbekistan is accepted worldwide.          </p>
          <p className="flex gap-2">
            <span className="mt-[5px] ">
              <Image src={rightsign} alt="rightsign" />
            </span>
            Living & Accommodation Cost of living in Uzbekistan is low, around 62 USD.          </p>
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
