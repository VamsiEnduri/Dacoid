import React from "react";
import search from "./assets/search.png";
import facebook from "./assets/facebook.png";

const Screen4 = () => {
  return (
    <div className="ml-2 pt-20">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <div className="mt-10">
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
        <span className="text-[#7F7F7F] underline text-[12px]">
          Forgot Your Password?
        </span>
      </div>
      <div className="flex flex-col mt-20">
        <button className="w-[343px] h-[50px] text-white rounded-lg bg-[#819BFF] mt-40">
          Sign in
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
        <span className="underline mt-3 mb-2">
          Don’t have an account yet?
          <span className="text-blue-400">Create an account</span>
        </span>
      </div>
    </div>
  );
};

export default Screen4;
