import React from "react";
import Card from "../home/sections/dist/DynamicCards";
import SideBar from "../home/sidebar/Sidebar";
import More1 from "./more1";
import Sidebar from "../home/sidebar/Sidebar";

function Settings() {
  return (
    <div
      className="App flex flex-row shrink-1 h-full w-screen max-h-full"
      style={{ position: "relative" }}
    >
      <div className="bg-[#F7EAA9] rounded-r-2xl mb-2 pb-3 my-2 w-1/5 ">
        <SideBar />
      </div>{" "}
      <div className="flex flex-col">
        <h1 className="leading-44 text-[36px] font-bold tracking-normal text-black ml-5">
          Account Settings{" "}
        </h1>{" "}
        <div className="box1 mt-4 ml-4 text-left h-screen w-screen flex">
          {" "}
          {/* here changes bg-[#e0d59a] */}{" "}
          <div className=" absolute top-[85px]">
            <div className="absolute w-[600px] top-[299px] left-[-75px] transform -rotate-90 border border-[#978839]">
              {" "}
            </div>{" "}
          </div>{" "}
          <div className="box-content w-[1300px] bg-[#e0d59a] rounded-2xl">
            <div className="sidebar ml-6 absolute h-auto top-[107px] font-inter text-[18px] font-semibold leading-24 text-center">
              <More1 />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Settings;

//  <div
//   className="App flex flex-row shrink-1 h-full w-screen max-h-full"
//   style={{ position: "relative" }}
// >
//   <div className="bg-[#F7EAA9] rounded-r-2xl mb-2 pb-3 my-2 w-1/5 ">
//     <SideBar />
//   </div>
//   <div className="box1 mt-4 ml-4 text-left h-screen w-screen flex">

//     {/* here changes bg-[#e0d59a] */}
//     <div className="w-screen h-[600px] bg-red-200 bg-opacity-28 rounded-lg absolute top-[75px]">
//       <div className="absolute w-[600px] top-[299px] left-[-75px] transform -rotate-90 border border-[#978839]">

//       </div>
//     </div>
//     <div className="sidebar ml-6 absolute h-auto top-[107px] font-inter text-[18px] font-semibold leading-24 text-center">
//       <More1 />
//     </div>
//     <h1 className="leading-44 text-[36px] font-semibold tracking-normal text-black">
//       Account Settings
//     </h1>
//   </div>
// </div>