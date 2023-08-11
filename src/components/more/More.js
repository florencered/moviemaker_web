import React from "react";
import Card from "../home/sections/dist/DynamicCards";
import SideBar from "../home/sidebar/Sidebar";
import More1 from "./more1";
import SwitchAccountButton from "./switch";
import DeleteAccountButton from "./delete";

function More() {
  return (
    <div className="App flex flex-row shrink-1 h-screen w-screen" style={{ position: "relative" }}>
      <div className="bg-[#F7EAA9] rounded-r-2xl mb-2 pb-3 my-2 w-1/5 h-fit">
        <SideBar />
      </div>
      <div className="box1 mt-4 ml-4 text-left h-screen w-screen">
        <div
          style={{
            width: "100%", // Cover the whole width
            height: "100%", // Cover the whole height
            backgroundColor: "rgba(200, 180, 78, 0.28)",
            borderRadius: "10px",
            position: "absolute",
            top: "75px",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "600px",
              top: "301px",
              left: "-75px",
              border: "1px solid rgba(151, 136, 57, 1)",
              transform: "rotate(-90deg)",
            }}
          ></div>
        </div>
        <div
          className="sidebar ml-1"
          style={{
            position: "absolute",
            width: "221px",
            height: "auto",
            top: "107px",
            fontFamily: "Inter",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "24px",
            textAlign: "center",
          }}
        >
          <More1 />
          <SwitchAccountButton />
          <DeleteAccountButton />
        </div>

        <h1
          className="font-inter font-bold text-2xl text-[#C6B34E] leading-44"
          style={{
            fontSize: "36px",
            fontWeight: 600,
            letterSpacing: "0em",
            color: "black",
          }}
        >
          Account Settings
        </h1>
      </div>
    </div>
  );
}

export default More;
