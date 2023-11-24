// Modal.js

import React from 'react';

const Modal = ({ closeModal, children }) => {
  return (
    <div className=" fixed bottom-0 left-0 w-full h-full flex items-start justify-start bg-black bg-opacity-50 z-50 ml-0">
      <div className="flex flex-auto justify-end md:justify-normal min-w-fit bg-[#F7EAA9] pl-0 pr-8 rounded-3xl top-0 transform -translate-x-1/2">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-0 right-0 m-4 text-black"
        >
          ✕
        </button>
        
        {/* Content */}
        {children}
      </div>
    </div>
  );
};

export default Modal;
