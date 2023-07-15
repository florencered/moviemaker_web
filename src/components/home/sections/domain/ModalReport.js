import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";

const ModalReport = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Modal"
      className=" fixed inset-0 absolute flex   w-[32%] align-middle mt-28 rounded-3xl  translate-x-[30rem]   h-[80%] bg-postcol   z-50"
      overlayClassName="fixed inset-0 bg-transparent bg-opacity-50"
    >
      <div className="flex flex-col w-[100%] ">
        <div className="flex flex-row border-b-2 border-[#C6B34E] items-center ">
          <div className="h-10 w-[90%]  text-2xl   text-center font-semibold  text-red-600  ">
            Report
          </div>
          <div>
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
        <div className="text-lg  px-2 py-2 border-b-2 border-[#C6B34E]  font-bold w-[100%] ">
          <a href="">Why are you Reporting this post ?</a>
        </div>
        <div className="text-lg  px-2 py-2 border-b-2 border-[#C6B34E]   w-[100%] ">
          <a href="">Its Spam</a>
        </div>
        <div className="text-lg  px-2 py-2 border-b-2 border-[#C6B34E]   w-[100%] ">
          <a href="">Nudity or Sexual Activity </a>
        </div>
        <div className="text-lg  px-2 py-2 border-b-2 border-[#C6B34E]   w-[100%] ">
          <a href="">Hate speech or Symbols</a>
        </div>
        <div className="text-lg  px-2 py-2 border-b-2 border-[#C6B34E]   w-[100%] ">
          <a href="">Violence or dangerous organizations</a>
        </div>
        <div className="text-lg  px-2 py-2 border-b-2 border-[#C6B34E]   w-[100%] ">
          <a href="">Sale of illegal or regulated goods</a>
        </div>
        <div className="text-lg  px-2 py-2 border-b-2 border-[#C6B34E]   w-[100%] ">
          <a href="">Bullying or harassment</a>
        </div>
        <div className="text-lg  px-2 py-2 border-b-2 border-[#C6B34E]   w-[100%] ">
          <a href="">Intellectual property violation</a>
        </div>
        <div className="text-lg  px-2 py-2 border-b-2 border-[#C6B34E]   w-[100%] ">
          <a href="">Sucide or self-Injury</a>
        </div>
        <div className="text-lg  px-2 py-2 border-b-2 border-[#C6B34E]   w-[100%] ">
          <a href="">Eating disorders</a>
        </div>
        <div className="text-lg  px-2 py-2 border-b-2 border-[#C6B34E]   w-[100%] ">
          <a href="">Scam or Fraud</a>
        </div>
        <div className="text-lg  px-2 py-2  w-[100%] ">
          <a href="">False Information</a>
        </div>
      </div>
    </Modal>
  );
};

ModalReport.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalReport;
