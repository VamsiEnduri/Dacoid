import React from "react";

const Screen5 = () => {
  return (
    <div className="m-4 w-[375px] h-[800px]">
      <h1 className="font-bold text-center text-2xl mt-10">
        What are your goals?
      </h1>
      <div className="flex flex-col gap-y-2  mt-10">
        <div className="flex justify-between items-center bg-gray-100 p-3 m-2 rounded-xl ">
          <h1 className="font-semibold">Weight Loss</h1>
          <input type="checkbox" className=" w-[22px] h-[22px] rounded-2xl" />
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-3 m-2 rounded-xl ">
          <h1 className="font-semibold">Muscle Gain</h1>
          <input type="checkbox" className=" w-[22px] h-[22px] rounded-2xl" />
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-3 m-2 rounded-xl ">
          <h1 className="font-semibold">Flexibility & Mobility</h1>
          <input type="checkbox" className=" w-[22px] h-[22px] rounded-2xl" />
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-3 m-2 rounded-xl ">
          <h1 className="font-semibold">General Fitness</h1>
          <input type="checkbox" className=" w-[22px] h-[22px] rounded-2xl" />
        </div>
        <div className="flex justify-between items-center bg-gray-100 p-3 m-2 rounded-xl ">
          <h1 className="font-semibold">Event -specific training</h1>
          <input type="checkbox" className=" w-[22px] h-[22px] rounded-2xl" />
        </div>
        <div className="flex justify-between items-center bg-[#f1f1f1] p-3 m-2 rounded-xl ">
          <h1 className="font-semibold">Mindfulness and Mental Health</h1>
          <input type="checkbox" className=" w-[22px] h-[22px] rounded-2xl" />
        </div>
      </div>
      <button className="w-[343px] h-[50px] text-white rounded-lg bg-[#819BFF] mt-40 text-xl">
        Confirm
      </button>
    </div>
  );
};

export default Screen5;
