import React from "react";
import { FaRegCircleDot } from "react-icons/fa6";

function Sections({ isClicked, toggleDropdown }) {
  return (
    <>
      <div className="flex flex-row mt-4 mb-8 space-x-4">
        <button className="flex bg-[#A6A5A2] hover:bg-[#E7DA95] py-2 ml-32 rounded-lg px-4 font-semibold">
          All
        </button>
        <button className="flex bg-[#A6A5A2] hover:bg-[#E7DA95] py-2 rounded-lg px-4 font-semibold">
          NearMe
        </button>
        <button className="flex bg-[#A6A5A2] hover:bg-[#E7DA95] py-2 rounded-lg px-4 font-semibold">
          Location
        </button>
        <button
          className={`flex w-max items-center ${
            isClicked ? "bg-radio" : "bg-[#A6A5A2]"
          } text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#E7DA95]`}
          onClick={toggleDropdown}
        >
          Domain
        </button>
        <button className="flex bg-[#A6A5A2] hover:bg-[#E7DA95] py-2 rounded-lg px-4 font-semibold">
          <FaRegCircleDot size="1.5rem"></FaRegCircleDot>
        </button>
      </div>
    </>
  );
}

export default Sections;
