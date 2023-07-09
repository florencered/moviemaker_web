import { useState, useEffect } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { CiMapPin } from "react-icons/ci";
import { AiFillPlusCircle } from "react-icons/ai";

export default function Card() {
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

  let iconStyles = { color: "#C6B34E" };
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") //just add your endpoint that you are fetching from here
      .then((res) => res.json())
      .then((resJson) => {
        const result = JSON.stringify(resJson);
        const data = JSON.parse(result);
        setItems(data);
      });
  }, []);

  return (
    <>
      <div className="grid lg:grid-cols-2 grid-rows-2 gap-x-16 gap-y-3 sm:grid-cols-1 md:grid-cols-1 shrink-1  pt-3">
        {items.slice(0, 6).map((item) => (
          <div className=" flex shrink-1">
            <div className="rounded-xl w-[550px] h-auto	text-black font-sans p-5 bg-[#FFF3B5] ">
              <div className="flex flex-row justify-between items-center">
                <div className="p-1 flex flex-row space-x-3 items-center">
                  <div className="avatar">
                    <img
                      className="w-16 rounded-full"
                      src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg"
                      alt="hello"
                    />
                  </div>
                  <div>
                    <h1 className="font-bold">{item.name}</h1>
                    <sub className="font-semibold pt-0">Director</sub>
                  </div>
                </div>
                <div>
                  <button>
                    <SlOptionsVertical size="1.2rem" />
                  </button>
                </div>
              </div>
              <div className="space-y-3 space-x-3 pt-3">
                <div className="flex flex-row justify-center space-x-10 font-bold font-sans">
                  <button className="focus:bg-[#FFFADD] rounded-lg p-1 px-3 hover:bg-[#FFFADD]  active:bg-[#FFFADD]">
                    Need
                  </button>
                  <button className="focus:bg-[#FFFADD] rounded-lg p-1 px-3 hover:bg-[#FFFADD]  active:bg-[#FFFADD]">
                    Cinematography
                  </button>
                  <button className="focus:bg-[#FFFADD] rounded-lg p-1 px-3 hover:bg-[#FFFADD]  active:bg-[#FFFADD]">
                    Connection
                  </button>
                </div>
                <div className="flex flex-row  space-x-3 pt-2 px-1 items-center pb-5">
                  <CiMapPin size="1.5rem" />
                  <input
                    type="text"
                    className="rounded-2xl w-full px-4 py-1.25 font-sans bg-[#FFFADD] focus:outline-[#C6B34E] p-1"
                  />
                </div>
              </div>
              <div class="flex ml-60 text-sm font-semibold">
                number of applicants: 18
              </div>
              <div className="pt-5">
                <div class="flex items-center justify-between mx-4 mt-3 mb-2">
                  <div class="flex gap-5">
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
                  <div class="flex items-center space-x-3">
                    <button class="bg-[#C6B34E] focus:bg-[#FFFADD] rounded-lg p-1 px-3 hover:bg-[#FFFADD]  active:bg-[#FFFADD] font-bold">
                      Apply
                    </button>
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
        ))}
      </div>
      <div className="">
        <button className="relative bottom-16 lg:left-[1130px] h-32 w-32 md:left-[515px] sm:left-[415px]">
          {" "}
          <AiFillPlusCircle style={iconStyles} size={70} />{" "}
        </button>{" "}
      </div>
    </>
  );
}
