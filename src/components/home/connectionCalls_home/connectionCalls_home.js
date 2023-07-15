import React, { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { CiMapPin } from "react-icons/ci";
// import {BsFillBookmarkFill} from 'react-icons/bs';
// import {AiTwotoneHeart} from 'react-icons/ai';
// import {FaComment} from 'react-icons/fa';
// import {BsFillSendFill} from 'react-icons/bs';
// import Modal from "react-modal";

function ConnectionCallsHome() {
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
            <img
              class="h-8 w-8 rounded-full"
              src="https://picsum.photos/id/1027/150/150"
            />
            <div class="ml-3 ">
              <span class="text-sm font-semibold antialiased block leading-tight text-left">
                Username
              </span>
              <span class="text-gray-600 text-xs block">
                Asheville, North Carolina
              </span>
            </div>
            <a href="">
              <SlOptionsVertical
                class="ml-48"
                size="1.2rem"
              ></SlOptionsVertical>
            </a>
          </div>
          <div class="flex">
            &nbsp;&nbsp;&nbsp;{" "}
            <div class="flex px-4 py-1 font-semibold">Need</div>
            <a href="">
              <div class="flex bg-[#F7EAA9] hover:bg-[#E5D684] rounded-lg px-4 py-1 font-semibold">
                Cinematographer
              </div>
            </a>
            <div class="flex px-4 py-1 font-semibold">connection</div>{" "}
            &nbsp;&nbsp;&nbsp;
          </div>
          <div class="flex mt-2 ml-4">
            <CiMapPin size="1.5rem"></CiMapPin>&nbsp;
            <a href="">
              <div class="flex bg-[#F7EAA9] hover:bg-[#E5D684] rounded-lg px-4 py-1 font-semibold">
                HighTech City, Hyderabad, Telangana
              </div>
            </a>
          </div>
          <div class="flex ml-44 text-sm">Number of Applicants: 18</div>
          <div class="flex items-center justify-between mx-4 mt-4 mb-2">
            <div class="flex gap-5">
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
  );
}

export default ConnectionCallsHome;
