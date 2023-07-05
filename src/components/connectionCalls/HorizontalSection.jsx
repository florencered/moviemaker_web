// this section is similar to the one in the homepage but according to the figma design the slider needs to be rendered horizontally hence this is made into seprate component
// only for the Connection_Call page

import React, { useState } from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import Radius from "../home/sections/dist/slider";

function Section() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex flex-row p-2 items-center ">
        <div class="flex flex-row mt-4 space-x-6">
          <button>
            <div class="bg-[#A6A5A2] font-sans font-semibold focus:bg-[#C6B34E] active:bg-[#C6B34E] rounded-lg px-3 py-1 items-center">
              All{" "}
            </div>{" "}
          </button>{" "}
          <button>
            <div class="bg-[#A6A5A2] font-sans font-semibold focus:bg-[#C6B34E] active:bg-[#C6B34E] rounded-lg px-3 py-1 items-center">
              NearMe{" "}
            </div>{" "}
          </button>{" "}
          <button>
            <div class="bg-[#A6A5A2] font-sans font-semibold focus:bg-[#C6B34E] active:bg-[#C6B34E] rounded-lg px-3 py-1 items-center">
              Location{" "}
            </div>{" "}
          </button>{" "}
          <button>
            <div class="bg-[#A6A5A2] font-sans font-semibold focus:bg-[#C6B34E] active:bg-[#C6B34E] rounded-lg px-3 py-1 items-center">
              Domain{" "}
            </div>{" "}
          </button>{" "}
          <button onClick={() => setShow(!show)}>
            <div class="bg-[#A6A5A2] font-sans font-semibold focus:bg-[#C6B34E] active:bg-[#C6B34E] rounded-lg px-3 py-1 items-center">
              <FaRegCircleDot size="1.5rem"> </FaRegCircleDot>{" "}
            </div>{" "}
          </button>{" "}
        </div>{" "}
        <div>
          {" "}
          {show && (
            <div className=" flex items-center pl-2">
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
