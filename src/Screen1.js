import React from "react";
import img from "./assets/image.png";
const Screen1 = () => {
  return (
    <div className="bg-white p-4 w-[375px] h-[800px]">
      <span className="underline text-[#B0C0FE] text-right">Skip</span>
      <div className="size-[282px] my-20 ml-2">
        <img src={img} alt="" className="size-full" />
      </div>
      <div className="mt-10">
        <h1 className="text-xl font-bold mb-3">Track Your Goal</h1>
        <p className="text-md font-semibold">
          Don’t worry if you have trouble
          <br /> determining your goals, We can help you determine your goals
          and track your goals
        </p>
      </div>
    </div>
  );
};

export default Screen1;
