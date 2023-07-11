import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import Itachi from "./Domain/images/Anime1.jpg";
import Actor from "./Domain/images/raj.jpg";
import { useState } from "react";
const ModalComment = ({ isOpen, onClose }) => {
  const [isLiked, setIsLiked] = useState(false);
  const likeButton = () => {
    setIsLiked(!isLiked);
  };

  const data = [
    {
      id: 1,
      username: "samrzkhan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["3d", "likes", "Replay"],
      imageSrc: Itachi,
    },
    {
      id: 2,
      username: "another_user",
      text: "Another example comment.",
      tags: ["2d", "likes", "Replay"],
      imageSrc: Actor,
    },
    {
      id: 3,
      username: "samrzkhan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["3d", "likes", "Replay"],
      imageSrc: Itachi,
    },
    {
      id: 4,
      username: "another_user",
      text: "Another example comment.",
      tags: ["2d", "likes", "Replay"],
      imageSrc: Actor,
    },
    {
      id: 5,
      username: "another_user",
      text: "Another example comment.",
      tags: ["2d", "likes", "Replay"],
      imageSrc: Actor,
    },
    {
      id: 6,
      username: "samrzkhan",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      tags: ["3d", "likes", "Replay"],
      imageSrc: Itachi,
    },
    {
      id: 7,
      username: "another_user",
      text: "Another example comment.",
      tags: ["2d", "likes", "Replay"],
      imageSrc: Actor,
    },
    // Add more objects as needed
  ];

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      className=" fixed inset-0 absolute flex items-center  w-[65%] align-middle -translate-y-14      h-[80%] bg-postcol  translate-x-1/4 mt-32  justify-center z-50"
      overlayClassName="fixed inset-0 bg-transparent bg-opacity-50"
    >
      <div className="flex items-center justify-center  h-[100%] ">
        <img
          src={Itachi}
          alt="Image"
          className="h-full w-full  object-contain"
        />
      </div>
      <div className="bg-postcol w-[50%]  h-[100%] ">
        <div className="flex  flex-row items-center border-3 h-20   border-b-2 border-[#C6B34E] mx-2 ">
          <div class="bg-[#C6B34E] p-0.5 rounded-full  relative top-1">
            <a href="#" class="block bg-white p-0.5 rounded-full transform">
              <img
                className="h-12 w-12  object-cover rounded-full"
                src={Itachi}
                alt="cute kitty"
              />
            </a>
          </div>
          <div className=" flex flex-row py-2 justify-between">
            <div className="px-2 ">
              <span className="text-sm  font-semibold antialiased block leading-tight text-left">
                {" "}
                samrzkhan
              </span>
              <span className="text-gray-600 text-xs   block">
                Asheville, North Carolina
              </span>
            </div>

            <div className="flex">
              <button className="text-center items-center p-1 w-10 h-fit  border-2 border-[#C6B34E] rounded-xl w-28  ">
                Follow
              </button>
            </div>
          </div>
        </div>

        <div className="scroll-section h-96  mx-2  overflow-y-scroll no-scrollbar border-b-2  border-[#C6B34E]">
          <div className=" flex flex-col border-b-2  border-[#C6B34E] h-fit">
            <p className="text-xs py-1">
              {" "}
              <span className="text-sm  font-semibold ">samrzkhan</span> Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
              lacus non mi tristique interdum. Nullam eleifend elit at nibh
              eleifend efficitur. Suspendisse non urna in erat pellentesque
              feugiat. Vestibulum lacinia, mi et faucibus consequat, justo massa
              pretium ex.
            </p>
            <p className="text-xs py-1">
              <span className="text-sm font-semibold">Hashtag</span> Second
              small paragraphLorem ipsum dolor sit amet, consectetur adipiscing
              elit. Praesent sed lacus non mi tristique interdum. Nullam
              eleifend elit at nibh eleifend efficitur. Suspendisse non urna in
              erat pellentesque
            </p>
          </div>

          {data.map((item) => (
            <div
              className="flex flex-row items-center h-16 py-2 mx-2  "
              key={item.id}
            >
              <div className="h-fit">
                <div className="bg-[#C6B34E] p-0.5 rounded-full h-9 w-9">
                  <a href="#" className="block rounded-full overflow-hidden">
                    <img
                      className="h-8 w-8  object-cover"
                      src={item.imageSrc}
                      alt="User Profile"
                    />
                  </a>
                </div>
              </div>

              <div className="px-3">
                <p className="text-xs py-1">
                  <span className="text-sm font-semibold pr-1">
                    {item.username}
                  </span>
                  {item.text}
                </p>

                <div className="flex flex-row gap-10 text-gray-600 text-xs block">
                  {item.tags.map((tag, index) => (
                    <a href="#" key={index}>
                      {tag}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col mx-2 py-2 items-start">
          {/* Like Button */}
          <div className="svgs flex gap-2  ">
            <button className="transparent-button" onClick={likeButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
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
            <button className="transparent-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
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
                width="25"
                height="25"
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

          <div className="flex flex-col w-[100%] text-gray-600 text-sm mt-1 border-b-2 border-[#C6B34E]">
            <span> Liked by riza...</span>
            <span>1 Day ago </span>
          </div>
        </div>

        <div className="flex mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="feather feather-smile mr-2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
            <line x1="9" y1="9" x2="9.01" y2="9"></line>
            <line x1="15" y1="9" x2="15.01" y2="9"></line>
          </svg>

          <input
            className=" bg-transparent stroke-none border-hidden w-[100%]"
            placeholder="Add a comment...."
          />
        </div>
      </div>
      {/* <div class="bg-[#C6B34E] p-0.5 rounded-full ">
            <a href="#" class="block bg-white p-1 rounded-full transform">
              <img class="h-16 rounded-full" src={Itachi} alt="cute kitty" />
            </a>
          </div>
          <div className="text-left"></div> */}
    </Modal>
  );
};

ModalComment.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalComment;
