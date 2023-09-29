import React from "react";
import Profile from "./profile";
import { FaArrowLeft } from "react-icons/fa";
import { BiCamera } from "react-icons/bi";

const flicks = () => {
  return (
    <div className="grid h-screen place-items-center">
      <div className="flex rounded-lg bg-[#F1E294] w-[45rem]">
        <div className="">
          <div className="py-4 px-28">
            <span className="flex items-center justify-between relative top-7 z-10 opacity-80 text-white cursor-pointer">
              <span className="flex items-center pl-2">
                <FaArrowLeft className="" />
                <span className="pl-2 text-sm ">Flicks</span>
              </span>
              <BiCamera className="left-3 mr-2" />
            </span>
            <img
              src="/images/flicksimg/flickimages.png"
              className="shadow-2xl relative rounded-lg z-1 bg-[#F1E294]"
              alt="flicks"
            />
            <div className="bg-slate-600"></div>
          </div>
        </div>
        <div>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default flicks;
