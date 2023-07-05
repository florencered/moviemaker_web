import React from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import { useState } from "react";
import RadioButtons from "./RadioButtons";
import PostCard from "./Domainpost";

const DamainMain = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsClicked(!isClicked);
  };
  const [selectedValue, setSelectedValue] = useState("");

  console.log(selectedValue);
  const handleValueChange = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };
  return (
    <div className="flex-col relative h-max text-black px-4 mx-20">
      <div className="text-white  text-y text-xl mx-10 font-bold"> Home</div>

      <div className="flex flex-row justify-center mt-3 mx-3 px-5 gap-2">
        <button className="flex w-max h-7 items-center bg-but text-black px-4 py-0 rounded-md text-xm ">
          All
        </button>
        <button className=" w-max  h-7  items-center bg-but text-black px-4  py-0 rounded-md text-xm xm:text-xs ">
          Near me
        </button>
        <button className="flex w-max  h-7  items-center bg-but text-black px-4 py-0  rounded-md md:text-base">
          Location
        </button>
        <button
          className={`flex w-max   h-7 items-center ${
            isClicked ? "bg-radio" : "bg-but"
          }  text-black px-4 py-0 rounded-md md:text-base`}
          onClick={toggleDropdown}
        >
          Domain
        </button>
        <button className="flex h-7  w-max items-center bg-but text-black px-1 py-2 rounded-md md:text-base">
          <FaRegCircleDot size="1.25rem"></FaRegCircleDot>
        </button>
      </div>

      {isOpen && (
        <div className="z-96">
          <RadioButtons
            selectedValue={selectedValue}
            onValueChange={handleValueChange}
          />
        </div>
      )}

      <PostCard selectedValue={selectedValue} />
    </div>
  );
};

export default DamainMain;
