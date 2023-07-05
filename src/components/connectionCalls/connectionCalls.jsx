// need to add the SideBar and SearchBar will make a another PR once that is done.
import React from "react";
import Section from "../connectionCalls/HorizontalSection";
import Card from "../home/sections/dist/dynamicCard";
import { AiFillPlusCircle } from "react-icons/ai";

function connectionCalls() {
  let iconStyles = { color: "#C6B34E" };
  return (
    <div className="h-fit bg-yellow-100 min-h-screen w-screen">
      <div className="w-screen h-screen bg-yellow-100 flex flex-row object-contain">
        {" "}
        <div className="bg-[#C6B34E] w-1/5 rounded-xl">
          {" "}
          {/* <Nav props1={Flixlogo} />{" "} */}{" "}
        </div>{" "}
        <div className="items-start pl-10 align-baseline">
          <div className=" pl-10 pt-1 flex flex-col">
            <div className="">
              <h1 className="text-yellow-600 font-sans font-bold text-5xl w-full">
                Connection Call{" "}
              </h1>{" "}
            </div>{" "}
            <div className="flex flex-row pt-7 items-start float-left w-full">
              <Section />
            </div>{" "}
            <div className="pt-3 w-full">
              <input
                placeholder="Search"
                type="text"
                className="bg-[#C6B34E] text-black placeholder-black rounded-2xl w-11/12 py-2 px-5"
              />
            </div>{" "}
            <div className="pt-2 items-start object-contain ">
              <Card />
            </div>{" "}
          </div>{" "}
          <div className="">
            <button className="absolute bottom-0 right-0 h-32 w-32">
              {" "}
              <AiFillPlusCircle style={iconStyles} size={70} />{" "}
            </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
export default connectionCalls;
