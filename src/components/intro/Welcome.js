import React from "react";

const Welcome = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-10/12 h-full flex justify-between">
        <img src="/images/images/reel.png" alt=".." className="h-screen md:block hidden w-24" />
        <div className="flex flex-col justify-center">
          <h1 className="text-[#978839] sm:text-7xl text-5xl font-semibold text-center">
            Welcome <br />
            to
          </h1>
          <img src="/images/tick.png" className="mx-auto w-36 my-8" alt="" />
          <h1 className="sm:text-9xl text-8xl text-center  text-[#C6B34E] font-semibold">
            flixdin
          </h1>
        </div>
        <img src="/images/images/reel.png" alt=".." className="h-screen md:block hidden w-24" />
      </div>
    </div>
  );
};

export default Welcome;
