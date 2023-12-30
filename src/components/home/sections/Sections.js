import React, { useState } from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import Radius from "./dist/SliderComp";
import RadioButton from "./domain/RadioButtons";
import Location from "./location/Location";

function Section({ isClicked, toggleDropdown }) {
  const [showRadius, setShowRadius] = useState(false);
  const [showDomain, setShowDomain] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  return (
    <>
      <div className="flex lg:flex-row md:flex-col sm:flex-col items-center">
        <div className="flex md:flex-col sm:flex-col pb-3 pt-3 ">
          <div class="flex flex-row mt-4 space-x-6 ml-12 mr-12">
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
            <button
              onClick={() => {
                setShowLocation(!showLocation);
                setShowDomain(false);
                setShowRadius(false);
              }}
            >
              <div class="bg-[#A6A5A2] font-sans font-semibold hover:bg-[#E7DA95] focus:bg-[#E7DA95] active:bg-[#E7DA95] rounded-lg px-3 py-1 items-center">
                Location{" "}
              </div>{" "}
            </button>{" "}
            <button
              onClick={() => {
                setShowDomain(!showDomain);
                setShowRadius(false);
                setShowLocation(false);
              }}
            >
              <div class="bg-[#A6A5A2] font-sans font-semibold hover:bg-[#E7DA95] focus:bg-[#E7DA95] active:bg-[#E7DA95] rounded-lg px-3 py-1 items-center">
                Domain{" "}
              </div>{" "}
            </button>{" "}
            <button
              onClick={() => {
                setShowRadius(!showRadius);
                setShowDomain(false);
                setShowLocation(false);
              }}
            >
              <div class="bg-[#A6A5A2] font-sans font-semibold hover:bg-[#E7DA95] focus:bg-[#E7DA95] active:bg-[#E7DA95] rounded-lg px-3 py-1 items-center">
                <FaRegCircleDot size="1.5rem"> </FaRegCircleDot>{" "}
              </div>{" "}
            </button>{" "}
          </div>{" "}
          <div className="inline-block items-center align-middle  pt-16 absolute px-12 ">
            {" "}
            {showDomain && (
              <div className=" z-50 items-center  ">
                <RadioButton />
              </div>
            )}{" "}
          </div>{" "}
          <div className="">
            {" "}
            {showLocation && (
              <div className="pt-4">
                {" "}
                <div className="ml-32">
                  <Location />
                </div>{" "}
              </div>
            )}{" "}
          </div>{" "}
          <div>
            {" "}
            {showRadius && (
              <div className="ml-32 pt-5">
                {" "}
                <Radius />{" "}
              </div>
            )}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Section;
