// this section is similar to the one in the homepage but according to the figma design the slider needs to be rendered horizontally hence this is made into seprate component
// only for the Connection_Call page

import React, { useState } from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import Radius from "../home/sections/dist/slider";
import RadioButton from "../home/sections/domain/RadioButtons";

function Section({ isClicked, toggleDropdown }) {
  const [showRadius, setShowRadius] = useState(false);
  const [showDomain, setShowDomain] = useState(false);
  return (
    <>
      <div className="flex md:flex-col sm:flex-col p-2 ">
        <div class="flex flex-row mt-4 space-x-6">
          <button>
            <div class="bg-[#A6A5A2] font-sans font-semibold hover:bg-[#E7DA95] focus:bg-[#E7DA95] active:bg-[#E7DA95] rounded-lg px-3 py-1 items-center">
              All{" "}
            </div>{" "}
          </button>{" "}
          <button>
            <div class="bg-[#A6A5A2] font-sans font-semibold hover:bg-[#E7DA95] focus:bg-[#E7DA95] active:bg-[#E7DA95] rounded-lg px-3 py-1 items-center">
              NearMe{" "}
            </div>{" "}
          </button>{" "}
          <button>
            <div class="bg-[#A6A5A2] font-sans font-semibold hover:bg-[#E7DA95] focus:bg-[#E7DA95] active:bg-[#E7DA95] rounded-lg px-3 py-1 items-center">
              Location{" "}
            </div>{" "}
          </button>{" "}
          <button onClick={() => setShowDomain(!showDomain)}>
            <div class="bg-[#A6A5A2] font-sans font-semibold hover:bg-[#E7DA95] focus:bg-[#E7DA95] active:bg-[#E7DA95] rounded-lg px-3 py-1 items-center">
              Domain{" "}
            </div>{" "}
          </button>{" "}
          <button onClick={() => setShowRadius(!showRadius)}>
            <div class="bg-[#A6A5A2] font-sans font-semibold hover:bg-[#E7DA95] focus:bg-[#E7DA95] active:bg-[#E7DA95] rounded-lg px-3 py-1 items-center">
              <FaRegCircleDot size="1.5rem"> </FaRegCircleDot>{" "}
            </div>{" "}
          </button>{" "}
        </div>{" "}
        <div className="">
          {" "}
          {showDomain && (
            <div className="pt-2 flex flex-col">
              {" "}
              <RadioButton />{" "}
            </div>
          )}{" "}
        </div>{" "}
        <div>
          {" "}
          {showRadius && (
            <div className=" flex flex-row lg:flex-row md:pt-3 sm:pt-3">
              {" "}
              <Radius />{" "}
            </div>
          )}{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Section;
