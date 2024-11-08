import React from "react";
import Exploreimage from "./Exploreimage";
import Nav from "../home/sidebar/Sidebar";
import Sections from "../home/sections/Sections";

const Explora = () => {
  return (
    <div className="flex">
      <div class="bg-[#F7EAA9] rounded-r-2xl mb-2 pb-3 w-1/5 h-fit">
        <Nav props1="/images/logo.png"> </Nav>{" "}
      </div>{" "}
      <div className="flex justify-center ml-3 pl-4">
        <div>
          <div className="place-content-start mt-4 ">
            <h1 className=" shadow-black">
              <img src="/images/Explorelogo.png" alt="Heading" />
            </h1>{" "}
          </div>{" "}
          <div className="">
            {" "}
            <Sections />{" "}
          </div>{" "}
          <div>
            <div className="py-3 pr-4 text-[#5B4E07]">
              <input
                type="text"
                placeholder="Search"
                className="searchbar focus:outline-none placeholder:text-[#5B4E07]"
              />
            </div>{" "}
            <Exploreimage />
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Explora;
