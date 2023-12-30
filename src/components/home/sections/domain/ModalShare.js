import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import { TypeContent } from "./data";

const ModalShare = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      className="absolute flex items-center  align-middle  w-[30%] max-sm:w-[50%] max-sm:translate-x-1/2 max-md:w-[50%] max-md:translate-x-1/2  max-lg:w-[50%] max-lg:translate-x-1/2    translate-x-[85%] h-[500px] mt-48  justify-center z-50"
      overlayClassName="fixed inset-0 bg-transparent bg-opacity-50"
    >
      <div className="flex h-[100%]  bg-postcol w-[100%] rounded-3xl p-2 text-center">
        <div className="flex flex-col w-[100%]">
          <div className="flex flex-row w-[100%] border-b-2 border-[#C6B34E] ">
            <div className="h-8  text-2xl text-[#C1AD42] w-[90%] font-bold items-center">
              Share
            </div>
            <div className="items-center">
              <button onClick={onClose}>
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
                  class="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-row m-2">
            <div className="pr-6">
              <span className="font-semibold text-xl  ">To: </span>
            </div>

            <input
              type="text"
              placeholder="Search..."
              className="w-[100%] text-xl  text-gray-400 bg-transparent border-0  "
            />
          </div>

          <div className="text-xl text-left m-2 font-semibold">Suggested</div>

          <div className="scroll-section h-max  mx-2  overflow-y-scroll no-scrollbar">
            <div className="flex flex-col items-center w-[100%] py-1 ">
              {TypeContent.map((item) => (
                <div key={item.id} className="flex w-[100%] py-1 items-center">
                  <div className="bg-[#C6B34E] p-0.5 rounded-full h-11 w-12">
                    <a href="#" className="block rounded-full overflow-hidden">
                      <img
                        className="h-10 w-10 object-cover"
                        src={item.userimg}
                        alt="User Profile"
                      />
                    </a>
                  </div>

                  <div className="flex flex-row w-[100%] justify-between">
                    <div className="pl-2">
                      <span className="text-sm font-semibold antialiased block leading-tight text-left">
                        {item.username}
                      </span>
                      <span className="text-gray-600 text-xs block text-left">
                        {item.nickname}
                      </span>
                    </div>
                    <div className="mr-10 ">
                      <input
                        type="checkbox"
                        className=" border-black h-5 w-5 rounded-full cursor-pointer bg-transparent"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

ModalShare.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalShare;
