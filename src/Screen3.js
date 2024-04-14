import React from "react";
import search from "./assets/search.png";
import facebook from "./assets/facebook.png";
const Screen3 = () => {
  return (
    <div className="flex flex-col justify-start m-5">
      <h1 className=" text-2xl font-bold mt-1">Create an account</h1>
      <div className="flex flex-col justify-center items-center gap-y-4">
        <div className="mt-10">
          <div className="">
            <input
              type="text"
              placeholder="First Name"
              className="p-4 rounded-lg bg-[#F1F1F1] h-[50px] w-[343px] my-3 text-[#B8B8B8]"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Last Name"
              className="p-4 rounded-lg bg-[#F1F1F1] h-[50px] w-[343px] my-3"
            />
          </div>
          <div className="">
            <input
              type="email"
              placeholder="Email"
              className="p-4 rounded-lg bg-[#F1F1F1] h-[50px] w-[343px] my-3 text-[#B8B8B8]"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="p-4 rounded-lg bg-[#F1F1F1] h-[50px] w-[343px] my-3"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 -mb-3">
          <input type="checkbox" className=" w-[22px] h-[22px] rounded-2xl" />
          <span className="text-sm">
            By proceeding,I agree to all
            <span className="text-blue-400 underline">T&C</span>
            and
            <span className="text-blue-400 underline">Privacy Policy</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col  justify-center items-center -mb-4">
        <button className="w-[343px] h-[50px] text-white rounded-lg bg-[#819BFF] mt-40 text-xl">
          Create an account
        </button>
        <div className="flex justify-center items-center gap-2 mt-7">
          <span className="w-[157px] h-[1px] bg-[#BDBDBD] border-0.5"></span>
          Or
          <span className="w-[157px] h-[1px] bg-[#BDBDBD] border-0.5"></span>
        </div>
        <div className="flex justify-center items-center gap-3 mt-5">
          <img
            src={search}
            alt=""
            className="w-[50px] border-2 border-gray-400 rounded-lg p-3"
          />
          <img
            src={facebook}
            alt=""
            className="w-[50px] border-2 border-gray-400 rounded-lg p-3"
          />
        </div>
        <span className="mt-3 mb-2">
          Already have an account?
          <span className="text-blue-400 underline">Login</span>
        </span>
      </div>
    </div>
  );
};

export default Screen3;
