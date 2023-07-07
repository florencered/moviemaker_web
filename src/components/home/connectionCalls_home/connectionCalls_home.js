import React, { useState } from 'react';
import {SlOptionsVertical} from 'react-icons/sl';
import {CiMapPin} from 'react-icons/ci';
import {BsFillBookmarkFill} from 'react-icons/bs';
import {AiTwotoneHeart} from 'react-icons/ai';
import {FaComment} from 'react-icons/fa';
import {BsFillSendFill} from 'react-icons/bs';
import Modal from "react-modal";

function ConnectionCalls_home() {
  const [isLiked, setIsLiked] = useState(false);
  const [isMarked, setIsMarked] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const likeButton = () => {
    setIsLiked(!isLiked);
  };

  const handlemarkbutton = () => {
    setIsMarked(!isMarked);
  };

  const handleModalOpen = () => {
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <>
<div class="p-4 rounded-2xl ml-28">
  <div class=" bg-[#F7EAA9] border rounded-2xl max-w-md">
    <div class="flex items-center px-4 py-3">
      <img class="h-8 w-8 rounded-full" src="https://picsum.photos/id/1027/150/150"/>
      <div class="ml-3 ">
        <span class="text-sm font-semibold antialiased block leading-tight text-left">Username</span>
        <span class="text-gray-600 text-xs block">Asheville, North Carolina</span>
      </div>
      <a href=""><SlOptionsVertical class="ml-48" size="1.2rem"></SlOptionsVertical></a>
    </div>
    <div class="flex">
    &nbsp;&nbsp;&nbsp;    <div class="flex px-4 py-1 font-semibold">Need</div><a href=""><div class="flex bg-[#F7EAA9] hover:bg-[#E5D684] rounded-lg px-4 py-1 font-semibold">Cinematographer</div></a><div class="flex px-4 py-1 font-semibold">connection</div> &nbsp;&nbsp;&nbsp;
    </div>
    <div class="flex mt-2 ml-4">
    <CiMapPin size="1.5rem"></CiMapPin>&nbsp;<a href=""><div class="flex bg-[#F7EAA9] hover:bg-[#E5D684] rounded-lg px-4 py-1 font-semibold">HighTech City, Hyderabad, Telangana</div></a>
    </div>
    <div class = "flex ml-44 text-sm">
        Number of Applicants: 18
    </div>
    <div class="flex items-center justify-between mx-4 mt-4 mb-2">
      <div class="flex gap-5">
        {/* <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
        <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg>
        <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg> */}
        
        {/* <a onClick = {toggleBtn1}><AiTwotoneHeart size="1.5rem" color={colo1}
            // onMouseOver={({target})=>target.style.color="black"}
            // onMouseOut={({target})=>target.style.color="white"}
        /></a>

        <a onClick = {toggleBtn2}><FaComment size="1.5rem" color={colo2}
            // onMouseOver={({target})=>target.style.color="black"}
            // onMouseOut={({target})=>target.style.color="white"}
        /></a>

        <a onClick = {toggleBtn3}><BsFillSendFill size="1.5rem" color={colo3}
            // onMouseOver={({target})=>target.style.color="black"}
            // onMouseOut={({target})=>target.style.color="white"}
        /></a> */}

        {/* Like Button */}
        <div className="svgs flex gap-4">
                  <button className="transparent-button" onClick={likeButton}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill={isLiked ? "red" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-heart"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  </button>

                  {/* Message Button */}
                  <button
                    className="transparent-button"
                    onClick={handleModalOpen}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-message-circle"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </button>

                  {/* Send Button */}
                  <button className="transparent-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-send"
                    >
                      <line x1="22" y1="2" x2="11" y2="13" />
                      <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                  </button>
                </div>
      
      </div>
      <div class="flex">
      <button class="bg-[#C6B34E] hover:bg-[#C6B34E] text-white font-bold px-4 border border-white-700 pb-1 mr-2 rounded">
  Apply
</button>

        {/* <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg> */}

        {/* <a onClick = {toggleBtn}><BsFillBookmarkFill size="1.5rem" color={colo}
            // onMouseOver={({target})=>target.style.color="black"}
            // onMouseOut={({target})=>target.style.color="white"}
        /></a> */}
        {/* Bookmark Button */}
        <div className="svg">
                  <button
                    className="transparent-button"
                    onClick={handlemarkbutton}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill={isMarked ? "#262626" : "none"}
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-bookmark"
                    >
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                  </button>
                </div>
    
      </div>
    </div>
    </div>
</div>
    </>
  )
}

export default ConnectionCalls_home