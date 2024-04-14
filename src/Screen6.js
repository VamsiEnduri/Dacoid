import React from "react";
import home from "./assets/home.png";
import statistic from "./assets/statistic.png";
import scope from "./assets/scope.png";
import camera from "./assets/camera.png";
import user from "./assets/user.png";
import left from "./assets/left.png";
import right from "./assets/chevron.png";
import add from "./assets/add.png";
const Screen6 = () => {
  return (
    <div className="bg-[#fcfcfc] m-4 relative w-[375px] h-[800px]">
      <div className="text-center">
        <div className="flex justify-start items-center mt-5">
          <img src={left} alt="" className="size-[20px]" />
          <h1 className="text-2xl font-bold ml-20">Work Schedule</h1>
        </div>
        <div className="flex justify-center items-center my-3 font-semibold">
          <img src={left} alt="" className="size-[20px]" />
          <span>Feb 2024</span>
          <img src={right} alt="" className="size-[20px]" />
        </div>
        <div className="flex gap-2 justify-evenly items-center">
          <div className="flex flex-col bg-[#fff] pt-2 pb-5 px-3 justify-center items-center rounded-xl">
            <span>Sun</span>
            <span className="text-2xl">5</span>
          </div>
          <div className="flex flex-col bg-gradient-to-r from-blue-100 to-blue-400 pt-2 pb-5 px-3 justify-center items-center rounded-xl">
            <span className="text-white">Mon</span>
            <span className="text-2xl text-white">6</span>
          </div>
          <div className="flex flex-col bg-[#fff] pt-2 pb-5 px-3 justify-center items-center rounded-xl">
            <span>Tue</span>
            <span className="text-2xl">7</span>
          </div>
          <div className="flex flex-col bg-[#fff] pt-2 pb-5 px-3 justify-center items-center rounded-xl">
            <span>Wed</span>
            <span className="text-2xl">8</span>
          </div>
          <div className="flex flex-col bg-[#fff] pt-2 pb-5 px-3 justify-center items-center rounded-xl">
            <span>Thu</span>
            <span className="text-2xl">9</span>
          </div>
        </div>
      </div>
      <div className="relative bg-[#fcfcfc] top-5">
        <div className="absolute w-full">
          <div className="">
            <span>06:00 AM</span>
            <div className="w-full h-[1px] bg-gray-600 mt-3"></div>
          </div>
          <div>
            <span>07:00 AM</span>
            <div className="w-full h-[1px] bg-gray-600 mt-3"></div>
          </div>
          <div>
            <span>08:00 AM</span>
            <div className="w-full h-[1px] bg-gray-600 mt-3"></div>
          </div>
          <div>
            <div>
              <span>09:00 AM</span>
              <span className="bg-gradient-to-r from-purple-300 to-pink-300 ml-10 -mb-5">
                Upperbody Workout, 9am
              </span>
            </div>
            <div className="w-full h-[1px] bg-gray-600 mt-3"></div>
          </div>
          <div>
            <span>10:00 AM</span>
            <div className="w-full h-[1px] bg-gray-600 mt-3"></div>
          </div>
          <div>
            <span>11:00 AM</span>
            <div className="w-full h-[1px] bg-gray-600 mt-3"></div>
          </div>
          <div>
            <span>12:00 AM</span>
            <div className="w-full h-[1px] bg-gray-600 mt-3"></div>
          </div>
          <div>
            <span>01:00 AM</span>
            <div className="w-full h-[1px] bg-gray-600 mt-3"></div>
          </div>
          <div>
            <div className="flex justify-start">
              <span>02:00 AM</span>
              <span className="ml-10 font-semibold bg-gray-300  rounded-lg mt-2">
                Lowerbody Workout, 3pms
              </span>
            </div>
            <div className="w-full h-[1px] bg-gray-600 mt-3"></div>
          </div>
          <div>
            <span>03:00 AM</span>
            <div className="w-full h-[1px] bg-gray-600 mt-3"></div>
          </div>
          <div>
            <span>04:00 AM</span>
            <div className="w-full h-[1px] bg-gray-600 mt-3"></div>
          </div>
          <div>
            <span>05:00 AM</span>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly gap-5 w-full mb-1 items-center bottom-0 fixed bg-white">
        <img src={home} alt="" className="size-[40px]" />
        <img src={statistic} alt="" className="size-[40px]" />
        <img
          src={scope}
          alt=""
          className="size-[70px] mb-20 bg-gradient-to-r from-blue-100 via-blue-400 to-blue-900 p-5 rounded-full text-white"
        />
        <img src={camera} alt="" className="size-[40px]" />
        <img src={user} alt="" className="size-[40px]" />
      </div>
      <div className="absolute -bottom-[440px] right-5 bg-gradient-to-r from-purple-300 to-pink-300 p-5 rounded-full">
        <img src={add} alt="" className="size-[30px] text-white" />
      </div>
    </div>
  );
};

export default Screen6;
