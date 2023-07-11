import React, { useRef, useEffect } from "react";
import Itachi from "../domain/Domain/images/Anime1.jpg";

const Modal = ({ onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-60">
      <div className="absolute inset-0 bg-overlay blur-3xl"></div>
      <div className="relative flex  w-[65%] h-[65%] bg-radio " ref={modalRef}>
        {/* <div className="flex-1 overflow-hidden">
          <img src={Itachi} alt="Image" className=" w-auto object-contain " />
        </div>
        <div className="flex-1 bg-gray-200 ">
          <textarea className="" placeholder="Enter your comment..." />
        </div> */}

        <div className="w-[60%] h-full flex items-center justify-center overflow-hidden">
          <img src={Itachi} alt="Image" className="object-contain" />
        </div>
        <div className="w-[40%] ">
          <textarea
            className="w-full h-full resize-none"
            placeholder="Enter your comment..."
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
