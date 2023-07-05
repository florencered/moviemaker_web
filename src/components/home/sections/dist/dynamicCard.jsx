import { useState, useEffect } from "react";
import { SlOptionsVertical } from "react-icons/sl";
import { CiMapPin } from "react-icons/ci";

export default function Card() {
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
      <div className="grid grid-cols-2 grid-rows-2 object-contain">
        {items.slice(0, 4).map((item) => (
          <div className=" flex object-contain">
            <div className="flex p-3 flex-row ">
              <div className="rounded-xl 	text-black font-sans p-5 bg-[#FFF3B5] object-contain">
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
                      <button>
                        <svg
                          fill="#262626"
                          height="24"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path>
                        </svg>
                      </button>
                      <button>
                        <svg
                          fill="#262626"
                          height="24"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <button>
                        <svg
                          fill="#262626"
                          height="24"
                          viewBox="0 0 48 48"
                          width="24"
                        >
                          <path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path>
                        </svg>
                      </button>
                    </div>
                    <div class="flex items-center space-x-3">
                      <button class="bg-[#C6B34E] focus:bg-[#FFFADD] rounded-lg p-1 px-3 hover:bg-[#FFFADD]  active:bg-[#FFFADD] font-bold">
                        Apply
                      </button>
                      <svg
                        fill="#262626"
                        height="24"
                        viewBox="0 0 48 48"
                        width="24"
                      >
                        <path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
