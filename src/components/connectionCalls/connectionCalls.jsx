// need to add the SideBar and SearchBar will make a another PR once that is done.
import React from "react";
import Sections from "./HorizontalSection.jsx";
import Card from "../home/sections/dist/dynamicCards.jsx";
import SideBar from "../home/sidebar/sidebar.js";

function connectionCalls() {
  return (
    <div className="App flex flex-row shrink-1">
      <div class="basis-1/5 bg-[#F7EAA9] rounded-r-3xl my-2">
        <SideBar />
      </div>{" "}
      <div className="items-start pl-10 align-baseline">
        <div className=" pl-10 pt-10 flex flex-col">
          <div className="">
            <h1 className="text-[#C6B34E] font-sans font-bold text-5xl w-full">
              Connection Call{" "}
            </h1>{" "}
          </div>{" "}
          <div className="flex flex-row pt-7 items-start float-left w-full">
            <Sections />
          </div>{" "}
          <div className="pt-3 w-full">
            <input
              placeholder="Search"
              type="text"
              className="bg-[#C6B34E] text-black placeholder-black rounded-2xl w-full py-2 px-5"
            />
          </div>{" "}
          <div className="pt-2 items-start flow-root ">
            <Card />
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default connectionCalls;
