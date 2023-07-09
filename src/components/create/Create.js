import React, { useState } from "react";
import CreatePost from "./CreatePost";
import NewConnection from "./NewConnection";
const Create = ({ handleCreate }) => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const handleCreateClick = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  const handleConnectionClick = (e) => {
    e.preventDefault();
    setModal1(!modal1);
  };

  return (
    <div className="fixed inset-0 bg-[#D3C672]/[0.53] z-50 grid place-items-center px-3.5 py-1 border-none">
      <div className="flex flex-col gap-5 h-4/6 w-4/12  rounded-xl bg-[#fffadd] shadow-2xl ">
        <div className="flex m-1 justify-between h-10 items-center">
          <div className="flex m-auto w-64 mt-1 shrink-0 text-[#978839] text-center text-3xl font-inter justify-center items-center font-normal leading-normal">
            {" "}
            Create{" "}
          </div>{" "}
          <img
            src="/images/lucide_x.png"
            alt=".."
            onClick={handleCreate}
            className="cursor-pointer mr-5"
          />
        </div>{" "}
        <div className="w-full h-0.5 bg-[#978839]"> </div>{" "}
        <div className="w-full h-full flex flex-col items-center gap-8 justify-center px-7">
          <button
            className="w-full h-12 shrink-0 rounded-2xl bg-[#ECDD8C] text-[#000] font-normal text-3xl"
            onClick={handleCreateClick}
          >
            {" "}
            Add New post{" "}
          </button>{" "}
          <button
            className="w-full h-12 shrink-0 rounded-2xl bg-[#ECDD8C] text-[#000] font-normal text-3xl"
            onClick={handleConnectionClick}
          >
            {" "}
            New Connection Call{" "}
          </button>{" "}
        </div>{" "}
        {modal && <CreatePost handleCreateClick={handleCreateClick} />}{" "}
        {modal1 && (
          <NewConnection handleConnectionClick={handleConnectionClick} />
        )}{" "}
      </div>{" "}
    </div>
  );
};

export default Create;
