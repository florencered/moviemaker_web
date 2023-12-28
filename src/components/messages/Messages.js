import React, { useState } from "react";
import SideBar from "../home/sidebar/Sidebar";
import { BsFillCameraVideoFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { BiSolidSend } from 'react-icons/bi';
import { BiImages } from 'react-icons/bi';
import { GrEmoji } from 'react-icons/gr';
import { BsMic } from 'react-icons/bs';
import { AiOutlinePaperClip } from 'react-icons/ai';
import Primary from "./primary";
import General from "./general";
import { useRef } from 'react';
import Request from "./request";

function Messages() {
  const fileInputRef = useRef(null);
  const fileImageRef = useRef(null);

  const handleIconClick = () => {
    fileInputRef.current.click();
  };

  const handleImageClick = () => {
    fileImageRef.current.click();
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
    }
  };

  const [activeComponent, setActiveComponent] = useState('Primary');

  // const handleButtonClick = (componentName) => {
  //   setActiveComponent(componentName);
  // };


  return (
    <div
      className="App flex flex-row shrink-1 h-screen w-screen"
      style={{ position: "relative" }}
    >
      <div className="bg-[#F7EAA9] rounded-r-2xl mb-2 pb-3 my-2 w-1/5 h-fit">
        <SideBar />
      </div>
      <div className="box1 mt-4 ml-4 text-left h-screen w-screen">
        <div className="w-[1160px] h-[618px] bg-[#fffadd] bg-opacity-18 rounded-2xl absolute top-[75px] shadow-md">
          <div className="flex pt-3 px-2 w-full ml-4">
            <input
              placeholder="🔎︎  search"
              type="text"
              className="bg-[#E5D684] text-black placeholder-black rounded-2xl w-[320px] h-[40px] py-2 px-5"
            />
            <div className="flex ml-20">
              <div class="absolute bg-gradient-to-br from-rose-600 via-yellow-400 to-transparent p-0.5 rounded-full">
                <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
                  <img class="w-16 h-16 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
                </a>
              </div>
              <div className="ml-20">
                <p className="font-bold text-[21px] tracking-normal text-[#978839]">Killan James</p>
                <p className="font-semibold text-[12px] tracking-normal text-black">Typing...</p>
              </div>
              <div className="flex space-x-3 absolute top-0 right-0 mt-7 mr-7">
                <div class="w-[40.4533px] h-[40.4533px] top-[157px] left-[1257px] rounded-[16.1813px] bg-[#C2A300] cursor-pointer"><BsFillCameraVideoFill className="text-white ml-2 mt-2 text-2xl" /></div>
                <div class="w-[40.4533px] h-[40.4533px] top-[157px] left-[1257px] rounded-[16.1813px] bg-[#C2A300] cursor-pointer"><BsFillTelephoneFill className="text-white ml-2 mt-2 text-xl" /></div>
                <div class="w-[40.4533px] h-[40.4533px] top-[157px] left-[1257px] rounded-[16.1813px] bg-[#C2A300] cursor-pointer"><BsThreeDotsVertical className="text-white ml-2 mt-2 text-2xl" /></div>
              </div>
            </div>
          </div>

          <ul class="flex space-x-2 ml-5 mr-16 mt-4">
            <li class="flex flex-col items-center space-y-1 ">
              <div class="relative bg-gradient-to-br from-rose-600 via-yellow-400 to-transparent p-0.5 rounded-full">
                <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
                  <img class="w-16 h-16 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
                </a>
                <button class="absolute bg-[#C6B34E] text-white text-2xl font-medium w-5 h-5 rounded-full bottom-0 right-1 flex justify-center items-center font-mono hover:bg-[#C6B34E] focus:outline-none">
                  <div class="transform -translate-y-px"></div>
                </button>
              </div>
            </li>

            <li class="flex flex-col items-center space-y-1 ">
              <div class="relative bg-gradient-to-br from-rose-600 via-yellow-400 to-transparent p-0.5 rounded-full">
                <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
                  <img class="w-16 h-16 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
                </a>
                <button class="absolute bg-[#C6B34E] text-white text-2xl font-medium w-5 h-5 rounded-full bottom-0 right-1 flex justify-center items-center font-mono hover:bg-[#C6B34E] focus:outline-none">
                  <div class="transform -translate-y-px"></div>
                </button>
              </div>
            </li>

            <li class="flex flex-col items-center space-y-1 ">
              <div class="relative bg-gradient-to-br from-rose-600 via-yellow-400 to-transparent p-0.5 rounded-full">
                <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
                  <img class="w-16 h-16 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
                </a>
                <button class="absolute bg-[#C6B34E] text-white text-2xl font-medium w-5 h-5 rounded-full bottom-0 right-1 flex justify-center items-center font-mono hover:bg-[#C6B34E] focus:outline-none">
                  <div class="transform -translate-y-px"></div>
                </button>
              </div>
            </li>

            <li class="flex flex-col items-center space-y-1 ">
              <div class="relative bg-gradient-to-br from-rose-600 via-yellow-400 to-transparent p-0.5 rounded-full">
                <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
                  <img class="w-16 h-16 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
                </a>
                <button class="absolute bg-[#C6B34E] text-white text-2xl font-medium w-5 h-5 rounded-full bottom-0 right-1 flex justify-center items-center font-mono hover:bg-[#C6B34E] focus:outline-none">
                  <div class="transform -translate-y-px"></div>
                </button>
              </div>
            </li>
            <div className="absolute w-[700px] h-[500px] top-[100px] left-[420px] bg-opacity-18 rounded-2xl bg-[#FEF5C2]">
              <div className=" flex space-x-3 relative top-[445px] left-[20px]">
                <div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                  <AiOutlinePaperClip className="cursor-pointer absolute top-[11px] left-[25px] text-xl" onClick={handleIconClick} />
                </div>
                <input
                  placeholder="      write a message...."
                  type="text"
                  className="bg-[#FFFFFFDB] text-black placeholder-black border-white w-[600px] h-[40px] rounded-xl py-2 px-5 pr-12"
                />
                <BsMic className="cursor-pointer absolute top-[12px] left-[480px] text-xl" />
                <div>
                  <input
                    type="file"
                    ref={fileImageRef}
                    accept=".jpg, .jpeg, .png"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                  />
                  <BiImages className="cursor-pointer absolute top-[12px] left-[529px] text-xl" onClick={handleImageClick} />
                </div>
                <GrEmoji className="cursor-pointer absolute top-[12px] left-[552px] text-xl" />
                <div class="w-[40.4533px] h-[40.4533px] rounded-[16.1813px] bg-[#C6B34EC2] cursor-pointer"><BiSolidSend className="text-white ml-2 mt-2 text-2xl" /></div>
              </div>
            </div>
          </ul>
          <div className="flex space-x-2 mt-4">
            <div>
              <button
                onClick={() => setActiveComponent('Primary')}
                className={`flex bg-[#A6A5A2] hover:bg-[#EBCC28] py-2 ml-6 rounded-lg px-4 font-semibold ${activeComponent === 'Primary' ? 'bg-[#EBCC28]' : ''
                  }`}>
                Primary
              </button>
            </div>

            <div>
              <button
                onClick={() => setActiveComponent('General')}
                className={`flex bg-[#A6A5A2] hover:bg-[#EBCC28] py-2 ml-3 rounded-lg px-4 font-semibold ${activeComponent === 'General' ? 'bg-[#EBCC28]' : ''
                  }`}
              >
                General
              </button>
            </div>

            <div>
              <button
                onClick={() => setActiveComponent('Request')}
                className={`flex bg-[#A6A5A2] hover:bg-[#EBCC28] py-2 ml-3 rounded-lg px-4 font-semibold ${activeComponent === 'Request' ? 'bg-[#EBCC28]' : ''
                  }`}
              >
                Request
              </button>
            </div>
          </div>
          <div id="components">
            {activeComponent === 'Primary' && <Primary/>}
            {activeComponent === 'General' && <General />}
            {activeComponent === 'Request' && <Request />}
          </div>
        </div>
        <div className="sidebar ml-6 absolute h-auto top-[107px] font-inter text-[18px] font-semibold leading-24 text-center">
        </div>

        <h1 className="leading-44 text-[36px] font-bold tracking-normal text-[#978839]">
          Messages
        </h1>
      </div>
    </div>
  );
}

export default Messages;
