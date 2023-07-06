import React from "react";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { VscSignOut } from "react-icons/vsc";

function sidebar(props) {
  return (
    <div>
      <div>
        {/* <div class ="flex-auto p-0 h-0"><img src={props.props1} className="App-logo h-12 w-12" alt="logo"/></div> */}
        <div className="flex justify-center mx-5 py-1.5 mb-5 mt-3 h-11 bg-[#2E2E2E] rounded-3xl text-xl font-bold items-center align-middle text-[#E0C949]">
          <img src={props.src} className="w-7 h-7 pr-1" alt="logo" />
          flixdin
        </div>
      <div className="md:ml-6">
        <a href="/home">
          <div class="flex flex-row rounded-lg lg:text-base text-sm mr-10 mt-10 p-2 hover:cursor-pointer hover:bg-white font-semibold">
            <FaHome size="1.5rem" class="ml-5"></FaHome>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home
          </div>
        </a>
        <a href="/explore">
          <div class="flex flex-row rounded-lg lg:text-base text-sm mr-10 mt-1 p-2 hover:cursor-pointer hover:bg-white font-semibold">
            <FaSearch size="1.5rem" class="ml-5"></FaSearch>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Explore
          </div>
        </a>
        <a href="/">
          <div class="flex flex-row rounded-lg lg:text-base text-sm mr-5 mt-1 p-2 hover:cursor-pointer hover:bg-white font-semibold">
            <FaClapperboard size="1.5rem" class="ml-5"></FaClapperboard>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Connection Calls
          </div>
        </a>
        <a href="/">
          <div class="flex flex-row rounded-lg lg:text-base text-sm mr-10 mt-1 p-2 hover:cursor-pointer hover:bg-white font-semibold">
            <FaSquareYoutube size="1.5rem" class="ml-5"></FaSquareYoutube>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flicks
          </div>
        </a>
        <a href="/">
          <div class="flex flex-row rounded-lg lg:text-base text-sm mr-10 mt-1 p-2 hover:cursor-pointer hover:bg-white font-semibold">
            <FaMessage size="1.5rem" class="ml-5"></FaMessage>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Messages
          </div>
        </a>
        <a href="/">
          <div class="flex flex-row rounded-lg lg:text-base text-sm mr-10 mt-1 p-2 hover:cursor-pointer hover:bg-white font-semibold">
            <FaBell size="1.5rem" class="ml-5"></FaBell>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notifications
          </div>
        </a>
        <a href="/">
          <div class="flex flex-row rounded-lg lg:text-base text-sm mr-10 mt-1 p-2 hover:cursor-pointer hover:bg-white font-semibold">
            <FaSquarePlus size="1.5rem" class="ml-5"></FaSquarePlus>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create
          </div>
        </a>
        <a href="/">
          <div class="flex flex-row rounded-lg lg:text-base text-sm mr-10 mt-1 p-2 hover:cursor-pointer hover:bg-white font-semibold">
            <BsPersonCircle size="1.5rem" class="ml-5"></BsPersonCircle>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Profile
          </div>
        </a>

        <a href="/">
          <div class="flex flex-row rounded-lg lg:text-base text-sm mr-10 mt-10 p-2 hover:cursor-pointer hover:bg-white font-semibold">
            <BsFillInfoCircleFill
              size="1.5rem"
              class="ml-5"
            ></BsFillInfoCircleFill>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Us
          </div>
        </a>
        <a href="/">
          <div class="flex flex-row rounded-lg lg:text-base text-sm mr-10 mt-1 p-2 hover:cursor-pointer hover:bg-white font-semibold">
            <FaList size="1.5rem" class="ml-5"></FaList>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;More
          </div>
        </a>
        <a href="/">
          <div class="flex flex-row rounded-lg lg:text-base text-sm mr-10 mt-1 mb-3 p-2 hover:cursor-pointer hover:bg-white font-semibold">
            <VscSignOut size="1.5rem" class="ml-5"></VscSignOut>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Log out
          </div>
        </a>
      </div>
      </div>
    </div>
  );
}

export default sidebar;
