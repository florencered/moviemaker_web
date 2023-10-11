import React from "react";
import Sidebar from "../home/sidebar/Sidebar";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineCamera, AiOutlineHeart } from "react-icons/ai";
import { HiMusicNote } from "react-icons/hi";
import { FaRegComment } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";
const Flicks = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div className="flex min-h-screen bg-[#fffadd] w-full  h-screen">
      <div class="basis-1/4 bg-[#F7EAA9] rounded-r-3xl my-2 md:block hidden">
        <Sidebar />
      </div>
      <div className="m-3 mt-8 w-full flex flex-col sm:ml-9 items-center justify-center">
        <div className="md:w-8/12 lg:w-5/12 sm:w-6/12 w-11/12 lg:h-full md:h-5/6 h-5/6 flex">
          <div className="relative w-10/12 flex flex-col justify-between rounded-3xl shadow-2xl border">
            <div className="absolute h-full w-full z-0">
              <img src="/images/flickssample.png" className="w-full h-full overflow-hidden" />
            </div>
            <div className="h-4 flex justify-between text-2xl font-bold text-white mt-6 mx-6 z-20">
              <div className="flex items-center gap-2">
                <BiArrowBack />
                Flicks
              </div>
              <div >
                <AiOutlineCamera className="text-3xl font-semibold"/>
              </div>
            </div>
            <div className="z-20 pl-5 mb-6 flex flex-col gap-2">
              <div className="flex items-center sm:gap-4 gap-2">
                <img
                  src="/images/profile_pic.png"
                  className="rounded-full w-7 h-7 sm:w-10 sm:h-10"
                />
                <p className="text-white font-semibold sm:text-lg">rohan_p</p>
                <button className="border-2 border-[#111] font-semibold text-[10px] sm:text-sm p-1 px-3 rounded-xl">
                  Follow
                </button>
              </div>
              <div className="text-sm font-semibold text-[#fff]">
                Most followed person in india
              </div>
              <div className="flex gap-2">
                <div className="flex">
                  <img
                    src="/images/profile_pic.png"
                    className="w-4 h-4 rounded-full relative"
                  />
                  <img
                    src="/images/profile_pic.png"
                    className="w-4 h-4 rounded-full relative right-2"
                  />
                </div>
                <p className="text-xs font-semibold text-[#fff]">
                  liked by sameer_h & others ...
                </p>
              </div>
              <div className="flex items-center gap-2">
                <HiMusicNote className=" text-2xl" />
                <div className="bg-[#fff] p-0.5 px-2 rounded-2xl">
                  n_cutts . original
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end mb-12 ml-4 gap-8">
            <Link className="text-center">
              {/* <AiOutlineHeart className={`text-4xl ${liked ?"bg-red-500":""}`}  onClick={()=>setLiked(true)}/> */}
              <svg
              onClick={()=>setLiked(!liked)}
                xmlns="http://www.w3.org/2000/svg"
                width="38"
                height="38"
                viewBox="0 0 24 24"
                fill={liked ? "red" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span>5</span>
            </Link>
            <Link className="text-center">
              <FaRegComment className="text-4xl" />
              <span>0</span>
            </Link>
            <Link>
              <FiSend className="text-4xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flicks;
