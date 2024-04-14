import React from "react";
import img from "./assets/image2.png";
const Screen2 = () => {
  return (
    <div className="h-[800px] w-[375px] bg-white p-4 ">
      <span className="underline text-[#B0C0FE] text-right">Skip</span>
      <div className="width-[352px] h-[234px] my-20 ml-2">
        <img src={img} alt="" className="size-full" />
      </div>
      <div className="mt-10">
        <h1 className="text-xl font-bold mb-3">Get Burn</h1>
        <p className="text-md font-semibold">
          Let’s keep burning to achieve your goals,
          <br /> it hurts only temporarily, if you give up now you will be in
          pain forever
        </p>
      </div>
    </div>
  );
};

export default Screen2;
