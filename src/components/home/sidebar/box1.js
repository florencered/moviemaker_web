import React from "react";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdReportGmailerrorred } from "react-icons/md";

function box() {
  return (
    <div className="bg-[#F7EAA9] border border-black bg-opacity-30 rounded-lg p-2">
      <a href="/more/Settings">
        <div className="flex flex-row rounded-lg mt-2 p-2 font-semibold">
          <FiSettings size="1.4rem" className="ml-5">
            {" "}
          </FiSettings>{" "}
          <p className="ml-2">Settings</p>
        </div>{" "}
      </a>{" "}
      <a href="/more/YourActivity">
        <div className="flex flex-row rounded-lg mt-1 p-2 hover:bg-white font-semibold">
          <BiTime size="1.4rem" className="ml-5">
            {" "}
          </BiTime>{" "}
          <p className="ml-2">Your Activity</p>
        </div>{" "}
      </a>{" "}
      <a href="/more/Saved">
        <div className="flex flex-row rounded-lg ml-1 mt-2 p-1 hover:bg-white font-semibold">
          <BsBookmark size="1.3rem" className="ml-5 mt-1">
            {" "}
          </BsBookmark>{" "}
          <p className="ml-2">Saved</p>
        </div>{" "}
      </a>{" "}
      <a href="/more/Switch">
        <div className="flex flex-row rounded-lg mt-1 p-2 hover:bg-white font-semibold">
          <MdOutlineDarkMode size="1.4rem" className="ml-5">
            {" "}
          </MdOutlineDarkMode>{" "}
          <p className="ml-2">Switch appearance</p>
        </div>{" "}
      </a>{" "}
      <a href="/more/Report">
        <div className="flex flex-row rounded-lg mt-1 p-2 hover:bg-white font-semibold">
          <MdReportGmailerrorred size="1.4rem" className="ml-5">
            {" "}
          </MdReportGmailerrorred>{" "}
          <p className="ml-2">Report a problem</p>
        </div>{" "}
      </a>{" "}
      <a href="/more/Switchaccount">
        <div className="flex flex-row rounded-lg mt-1 p-2 hover:bg-white font-semibold">
          Switch Accounts
        </div>
      </a>
    </div>
  );
}

export default box;
