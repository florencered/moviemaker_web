import React from "react";
import { FaRegCircleDot } from "react-icons/fa6";
import All from "./all/all";
import Dist from "./dist/dist";
import Domain from "./domain/domain";
import Location from "./location/Location.jsx";
import NearMe from "./nearMe/nearMe";

// prettier-ignore
function sections() {
  return (
    <>
    <div class = "flex flex-row mt-4 space-x-4">
        {/* <a href=""><div class="flex bg-[#A6A5A2] hover:bg-[#E7DA95] py-2 ml-32 rounded-lg px-4 font-semibold">All</div></a>&nbsp;&nbsp;&nbsp;&nbsp; */}
        {/* <h1 class = "text-4xl font-bold text-[#C1AD42] flex ml-20 mt-4">Home</h1> */}
        <All/>
        <NearMe/>
        <Location/>
        <Domain/>
        <Dist/>
        
        {/* <a href=""><div class="flex bg-[#A6A5A2] hover:bg-[#E7DA95] py-2 rounded-lg px-4 font-semibold">Location</div></a>&nbsp;&nbsp;&nbsp;&nbsp; */}
        {/* <a href=""><div class="flex bg-[#A6A5A2] hover:bg-[#E7DA95] py-2 rounded-lg px-4 font-semibold">Domain</div></a>&nbsp;&nbsp;&nbsp;&nbsp; */}
        {/* <a href=""><div class="flex bg-[#A6A5A2] hover:bg-[#E7DA95] py-2 rounded-lg px-4 font-semibold"><FaRegCircleDot size="1.5rem"></FaRegCircleDot></div></a> */}
    </div>
    </>
  )
}

export default sections;
