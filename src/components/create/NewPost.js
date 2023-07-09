import React from "react";

const NewPost = ({ handleClick1 }) => {
  return (
    <div className="fixed inset-0 bg-[#D3C672]/[0.53] z-50 grid place-items-center px-3.5 py-1 border-none">
      <div className="flex flex-col gap-5 h-5/6 w-6/12  rounded-xl bg-[#fffadd] shadow-2xl ">
        <div className="flex m-1 justify-between h-10 items-center">
          <div className="flex m-auto w-64 mt-1 shrink-0 text-[#978839] text-center text-3xl font-inter justify-center items-center font-normal leading-normal">
            New post
          </div>
          <img
            src="/images/Vector.png"
            alt=".."
            onClick={handleClick1}
            className="cursor-pointer mr-5 mt-4"
          />
        </div>
        <div className="w-full h-0.5 bg-[#978839]"></div>
        <div className="w-full h-full px-8 flex flex-col ">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                src="/images/Ellipse_92.png"
                alt="..."
                className="w-12 h-12 shrink-0 rounded-full"
              />
              <input
                className="flex flex-col flex-shrink-0 ml-5 placeholder:font-light placeholder:text-[#000] text-xl font-inter not-italic font-medium leading-normal w-full appearance-none focus:outline-none bg-transparent"
                placeholder="Write a caption..."
              ></input>
            </div>
            <img
              src="/images/Rectangle5969.png"
              alt="..."
              className="w-12 h-12 shrink-0"
            />
          </div>
          <div className="w-full h-px bg-[#978839] my-4"></div>
          <input
            type="text"
            placeholder="Tag people"
            className="flex flex-col flex-shrink-0 ml-5 text-xl font-inter not-italic font-medium leading-normal w-full appearance-none focus:outline-none bg-transparent placeholder:text-[#5B4E07] placeholder:font-light"
          />
          <div className="w-full h-px bg-[#978839] my-4"></div>
          <input
            type="text"
            placeholder="Add music"
            className="flex flex-col flex-shrink-0 ml-5  text-xl font-inter not-italic font-medium leading-normal w-full appearance-none focus:outline-none bg-transparent placeholder:text-[#5B4E07] placeholder:font-light"
          />
          <div className="w-full h-px bg-[#978839] my-4"></div>
          <div className="w-full flex">
            <div className="w-2/3 h-9 shrink-0 bg-[#C6B34E] rounded-md"></div>
            <div className="w-1/3 h-9 ml-2 shrink-0 bg-gradient-to-r from-[#C6B34E] to-transparent rounded-md"></div>
          </div>
          <div className="flex justify-between mt-4">
            <div
              type="text"
              className="flex flex-col flex-shrink-0 ml-5  text-xl font-inter not-italic font-normal leading-normal text-[#5B4E07]"
            >
              Post to other instagram accounts
            </div>
            <input
              class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(230, 203, 28, 0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0, 0, 0, 0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>

          <div className="w-full h-px bg-[#978839] my-4"></div>
          <input
            type="text"
            placeholder="someone_ig"
            className="flex flex-col flex-shrink-0 ml-5 text-xl font-inter not-italic font-medium leading-normal w-full appearance-none focus:outline-none bg-transparent placeholder:text-[#5B4E07] placeholder:font-light"
          />
          <div className="w-full h-px bg-[#978839] my-4"></div>
          <div className="text-[#978839] text-left text-base font-inter not-italic font-light leading-normal m-2">
            Also post to
          </div>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center justify-center">
              <img
                src="/images/Ellipse_92.png"
                alt=".."
                className="rounded-full w-12 h-12 shrink-0"
              />
              <div className="ml-4">
                <h3 className="text-[#5B4E07] text-xl font-inter not-italic font-light leading-normal">
                  Facebook
                </h3>
                <div className="text-[#737373] text-xs font-inter not-italic font-light leading-normal">
                  Lorem Ipsum
                </div>
              </div>
            </div>

            <input
              class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
          </div>

          <a
            href=""
            className="text-[#5B4E07] text-left text-xl font-inter not-italic font-light leading-normal"
          >
            Advanced settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
