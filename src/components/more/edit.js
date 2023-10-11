import React, { useState } from "react";
import Editdomain from "./editdomain";
const EditFile = () => {
    const [showEditDomain, setShowEditDomain] = useState(false);
    const toggleEditDomain = () => {
      setShowEditDomain(!showEditDomain); // Toggle the visibility state
    };

    return (
      <div className="ml-[70px] box-content w-full bg-[#e0d59a]">
        <div className="block">
          <img
            src="/images/images/explore.png"
            alt="React logo"
            className="w-[60px] h-[60px] absolute top-[50px] rounded-full"
          />
          <p className="mt-[30px] ml-[70px]">
            <strong> samrzkhan </strong>{" "}
          </p>{" "}
          <p className="mt-1 ml-3  w-[300px]"> Change profile photo </p>{" "}
          <img
            src="/images/arrow.png"
            alt="Muted Users Icon"
            className="w-3 h-3 ml-[190px] mt-[-43px] mb-[20px]"
          />
        </div>{" "}
        <div className="">
          <div className="w-[437px] h-[458px] relative top-10 rounded-[20px] border border-yellow-600 flex flex-col">
            <div className="mt-3">
              <h1 className="w-32 text-[#978839]">
                <strong> Name </strong>{" "}
              </h1>{" "}
              <input
                type="text"
                className="  border-b-4 border-0  border-red-500 ml-100 outline-none bg-transparent w-[370px] h-30 mb-1"
              />
              <h2 className="w-[150px] text-[#978839]">
                <strong> Username </strong>{" "}
              </h2>{" "}
              <input
                type="text"
                className="  border-b-4 border-0  border-red-500 ml-100 outline-none bg-transparent w-[370px] h-30 mb-1"
              />
              <h3 className="w-[100px] text-[#978839]">
                <strong> Bio </strong>{" "}
              </h3>{" "}
              <input
                type="text"
                className="  border-b-4 border-0  border-red-500 ml-100 outline-none bg-transparent w-[370px] h-30 mb-1"
              />
              <h3 className="w-[130px] text-[#978839]">
                <strong> Gender </strong>{" "}
              </h3>{" "}
              <input
                type="text"
                className="  border-b-4 border-0  border-red-500 ml-100 outline-none bg-transparent w-[370px] h-30 mb-1"
              />
              <h3
                className="w-[170px] text-[#978839] cursor-pointer"
                onClick={toggleEditDomain} // Add onClick event to toggle visibility
              >
                <strong> Edit Domain </strong>{" "}
              </h3>{" "}
              {showEditDomain && <Editdomain />}{" "}
              <input
                type="text"
                className="  border-b-4 border-0  border-red-500 ml-100 outline-none bg-transparent w-[370px] h-30 mb-1"
              />
              <h3 className="w-[180px] text-[#978839]">
                <strong> Edit Portfolio </strong>{" "}
              </h3>{" "}
              <input
                type="text"
                className="  border-b-4 border-0  border-red-500 ml-100 outline-none bg-transparent w-[370px] h-30 mb-1"
              />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
};

export default EditFile;