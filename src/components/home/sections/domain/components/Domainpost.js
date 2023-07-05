import React, { useState } from "react";
import Modal from "react-modal";
import Act1 from "../Domain/images/Act1.jpg";
import Act2 from "../Domain/images/Act2.jpg";
import Act3 from "../Domain/images/Act3.jpg";
import Anime2 from "../Domain/images/anime2.jpg";
import Anime1 from "../Domain/images/Anime1.jpg";
import Anime3 from "../Domain/images/anime3.jpg";
import Raj from "../Domain/images/raj.jpg";
import james from "../Domain/images/james.jpg";

function Post({ selectedValue }) {
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

  const typeContent = {
    Actor: [
      {
        username: "John",
        description:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        userimg: Act1,
      },
      {
        username: "Peter",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userimg: Act2,
      },
      {
        username: "Sarah",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userimg: Act3,
      },
    ],
    Animation: [
      {
        username: "Itachi",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userimg: Anime2,
      },
      {
        username: "David",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userimg: Anime1,
      },
      {
        username: "Linda",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userimg: Anime3,
      },
    ],
    "Art Director": [],
    Cinematographer: [],
    Director: [
      {
        username: "Alex",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userimg: Raj,
      },
      {
        username: "Mike",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        userimg: james,
      },
    ],
  };

  const selectedContent = selectedValue
    ? typeContent[selectedValue]
    : Object.values(typeContent).flat();

  if (!selectedContent || selectedContent.length === 0) {
    return (
      <div className="text-black flex items-center justify-center">
        Selected domain isn't available
      </div>
    );
  }

  return (
    <>
      <div className=" mx-10  ">
        <div className="flex flex-col ">
          {selectedContent.map((user) => (
            <div
              key={user.username}
              className="bg-postcol rounded-2xl h-max w-full mt-10 ml-1 shadow-2xl"
            >
              <div className="flex  flex-row">
                <div className="w-max px-4 object-cover">
                  <img
                    className="rounded-full w-10 h-10 object-cover"
                    src={user.userimg}
                    alt=""
                  />
                </div>
                <div className="c2">
                  <div>{user.username}</div>
                  <div>Asheville, North Carolina</div>
                </div>
              </div>
              <div className="postpic">
                <img
                  src={user.userimg}
                  alt=""
                  className="w-full h-full object-contain rounded-md"
                />
              </div>

              <div className="footer p-2">
                <div className="postfooter flex justify-between items-center">
                  {/* Like Button */}
                  <div className="svgs flex gap-2">
                    <button className="transparent-button" onClick={likeButton}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
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
                        width="24"
                        height="24"
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
                        width="24"
                        height="24"
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
                        width="24"
                        height="24"
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
              <div className="detailssec pb-4 px-2">
                <div>
                  <b>{user.username}</b>
                </div>
                <div>{user.description}</div>
              </div>

              {/* Modal */}
              <Modal
                selectedContent={selectedContent}
                isOpen={modalIsOpen}
                onRequestClose={handleModalClose}
                className="flex justify-center items-center w-1/2 h-1/2 translate-x-1/2 translate-y-1/2 bg-radio delay-300 backdrop-blur-xl rounded-sm"
              ></Modal>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Post;
