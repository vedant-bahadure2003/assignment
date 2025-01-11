import React from "react";

const FeesStructure = () => {
  return (
    <>
      {/* fees structure */}
      <div className=" w-full lg:mt-20 flex flex-col  py-6 ">
        <h2 className="text-xl font-bold  w-[85%] mx-auto text-[#0da9b0]">
          Andijan State Medical Institute Fees 2024{" "}
        </h2>
        <br />
        <p className="text-justify w-[85%] font-medium py-3  mx-auto text-sm ">
          At the Andijan State Medical Institute, 6 years of MBBS education will
          cost you a total of Rs.20 - 22 lacs approx. On average, this amount
          covers the student living expenses, tuition, hostel fees, food and
          meal costs, and other costs. also in comparison with Indian Medical
          college Andijan State Medical Institute is good option for Indian
          applicants.
        </p>

        <div className="w-[85%] mx-auto">
          <button className=" mt-3 bg-[#0da9b0] text-white py-1 px-2 text-sm  rounded-md shadow-lg hover:bg-[#479b9f] w-full text-justify">
            <span className="text-black">Read More :</span>
            Andijan State Medical Institute Fee Structure{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default FeesStructure;
