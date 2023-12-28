// this section is similar to the one in the homepage but according to the figma design the slider needs to be rendered horizontally hence this is made into seprate component
// only for the Connection_Call page

import React, { useState } from "react";
import { FaRegCircleDot } from "react-icons/fa6";  
import Radius from "../home/sections/dist/SliderComp"
import RadioButton from "../home/sections/domain/RadioButtons";
import Location from "../home/sections/location/Location";

function Sections() {
  const [showRadius, setShowRadius] = useState(false);
  const [showDomain, setShowDomain] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  return (
    <div className="flex flex-wrap md:flex-column">
      <div className="flex flex-wrap justify-center mb-4 overflow-x-auto sm:overflow-visible gap-2 sm:gap-4">
        <button>
            <div class="bg-[#A6A5A2] font-sans font-semibold hover:bg-[#E7DA95] focus:bg-[#E7DA95] active:bg-[#E7DA95] rounded-lg px-3 py-1 items-center text-sm p-1 sm:p-3 whitespace-nowrap">
              All
            </div>
        </button>
        <button>
            <div class="bg-[#A6A5A2] font-sans font-semibold hover:bg-[#E7DA95] focus:bg-[#E7DA95] active:bg-[#E7DA95] rounded-lg px-3 py-1 items-center text-sm p-1 sm:p-3 whitespace-nowrap">
              Near Me
            </div>
        </button>
        <button
          onClick={() => {
            setShowLocation(!showLocation);
            setShowDomain(false);
            setShowRadius(false);
          }}
        >
          <div class="bg-[#A6A5A2] font-sans font-semibold hover:bg-[#E7DA95] focus:bg-[#E7DA95] active:bg-[#E7DA95] rounded-lg px-3 py-1 items-center text-sm p-1 sm:p-3 whitespace-nowrap">
            Location
          </div>
        </button>
        <button
          onClick={() => {
            setShowDomain(!showDomain);
            setShowRadius(false);
            setShowLocation(false);
          }}
        >
          <div class="bg-[#A6A5A2] font-sans font-semibold hover:bg-[#E7DA95] focus:bg-[#E7DA95] active:bg-[#E7DA95] rounded-lg px-3 py-1 items-center text-sm p-1 sm:p-3 whitespace-nowrap">
            Domain{" "}
          </div>{" "}
        </button>
        <button
              onClick={() => {
                setShowRadius(!showRadius);
                setShowDomain(false);
                setShowLocation(false);
              }}
            >
              <div class="bg-[#A6A5A2] font-sans font-semibold hover:bg-[#E7DA95] focus:bg-[#E7DA95] active:bg-[#E7DA95] rounded-lg px-3 py-1 items-center text-sm p-1 sm:p-3 relative">
                <FaRegCircleDot 
                size="1.3rem"
                />
              </div>{" "}
          </button>
      </div>

      {showDomain && (
        <div className="w-full sm:w-3/4 mt-4">
          <RadioButton />  
        </div>
      )}

      {showLocation && (
        <div className="w-full sm:w-3/4 mt-4">
         <Location />
        </div>
      )}

      {showRadius && (
        <div className="mt-4 ml-2 sm:mt-8">
          <Radius />
        </div>
      )}

    </div>
  );
}
export default Sections;