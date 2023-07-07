// import React, { useState } from "react";
// import { FaRegCircleDot } from "react-icons/fa6";
// import Location from "./location/Location.jsx";

// function Sections({ isClicked, toggleDropdown }) {
//     const [loc, setLoc] = useState(false);
//     const [showRadius, setShowRadius] = useState(false);
//     const [showDomain, setShowDomain] = useState(false);

//     return (
//       <>
//         <div className="flex flex-row mt-4 mb-8 space-x-4">
//           <button className="flex bg-[#A6A5A2] hover:bg-[#E7DA95] py-2 ml-32 rounded-lg px-4 font-semibold">
//             All{" "}
//           </button>{" "}
//           <button className="flex bg-[#A6A5A2] hover:bg-[#E7DA95] py-2 rounded-lg px-4 font-semibold">
//             NearMe{" "}
//           </button>{" "}
//           <button
//             onClick={() => {
//               setLoc(!loc);
//               setShowDomain(false);
//               setShowRadius(false);
//             }}
//             className={
//               `flex  hover:bg-[#E7DA95] py-2 rounded-lg px-4 font-semibold ` +
//               (loc ? "bg-[#E7DA95]" : "bg-[#A6A5A2]")
//             }
//           >
//             Location{" "}
//           </button>{" "}
//           <button
//             className={`flex w-max items-center ${
//               isClicked ? "bg-radio" : "bg-[#A6A5A2]"
//             } text-black px-4 py-2 rounded-lg font-semibold hover:bg-[#E7DA95]`}
//             onClick={toggleDropdown}
//           >
//             Domain{" "}
//           </button>{" "}
//           <button className="flex bg-[#A6A5A2] hover:bg-[#E7DA95] py-2 rounded-lg px-4 font-semibold">
//             <FaRegCircleDot size="1.5rem"> </FaRegCircleDot>{" "}
//           </button>{" "}
//         </div>{" "}
//         <div className="ml-20"> {loc && <Location />} </div>{" "}
//       </>
//     );
// }

// export default Sections;

// this section is similar to the one in the homepage but according to the figma design the slider needs to be rendered horizontally hence this is made into seprate component
// only for the Connection_Call page

import React, { useState } from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import Radius from "../sections/dist/slider";
import RadioButton from "../sections/domain/RadioButtons";
import Location from "./location/Location";

function Section({ isClicked, toggleDropdown }) {
  const [showRadius, setShowRadius] = useState(false);
  const [showDomain, setShowDomain] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  return (
    <>
      <div className="flex lg:flex-row md:flex-col sm:flex-col items-center">
        <div className="flex md:flex-col sm:flex-col pb-3 pt-3 ">
          <div class="flex flex-row mt-4 space-x-6 ml-32">
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
          <div className="">
            {" "}
            {showDomain && (
              <div className="pt-2 flex flex-row ">
                {" "}
                <div className="absolute z-50 xs:w-1/4 md:w-3/4 ml-32">
                  <RadioButton />
                </div>{" "}
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
