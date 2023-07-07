import React, { useState } from "react";
import Modal from "react-modal";

import { TypeContent } from "./data";

function Post() {
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
    <div className="p-4 rounded-2xl  ml-28">
      <div className="flex flex-col  rounded-2xl max-w-md">
        {TypeContent.map((user) => (
          <div
            key={user.username}
            className="bg-postcol rounded-2xl h-max w-full mb-10 shadow-2xl"
          >
            <div className="flex  flex-row py-1 items-center">
              <div className="w-max px-4 object-cover">
                <img
                  className="rounded-full w-10 h-10 object-cover "
                  src={user.userimg}
                  alt=""
                />
              </div>
              <div className="text-left">
                <span className="text-sm font-semibold antialiased block leading-tight text-left">
                  {" "}
                  {user.username}
                </span>
                <span className="text-gray-600 text-xs block">
                  Asheville, North Carolina
                </span>
              </div>
            </div>
            <div className="postpic">
              <img
                src={user.userimg}
                alt=""
                className="w-full h-full object-contain "
              />
            </div>

            <div className="footer p-2">
              <div className="postfooter flex justify-between items-center">
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

            {/* Post Details */}
            <div className="detailssec mb-3 text-left">
              <div className="font-semibold text-sm mx-4 flex">
                {user.username}
              </div>
              <div className="text-sm mx-4 flex text-left">
                {user.description}
              </div>
            </div>

            {/* Modal */}
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={handleModalClose}
              className="flex justify-center items-center w-1/2 h-1/2 translate-x-1/2 translate-y-1/2 bg-radio delay-300 backdrop-blur-xl rounded-sm"
            ></Modal>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
