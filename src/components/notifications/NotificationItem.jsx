import React, { useState } from "react";
const NotificationItem = ({ each }) => {
  const [visited,SetVisited] = useState(false);

  const handleClick= ()=>{
    SetVisited(true);
    
  }

  return (
    <>
      <div className={`h-20 ml-4 shrink-0 rounded-xl bg-[#ecdd8c] flex items-center justify-between  cursor-pointer px-4 ${visited && 'bg-[#ECE5BE]'}`} onClick={handleClick}>
        <div className="flex items-center gap-1">
        <img src={each?.pic} alt=".." className="w-10 h-10 shrink-0 rounded-3xl bg-no-repeat object-cover" />
        <div className="text-[#000] text-xl leading-4 font-semibold not-italic">{each?.name}</div>
        <div className="flex w-52 flex-col shrink-0 text-[#000] text-xl font-inter not-italic font-normal leading-normal">{each?.message}</div>
        <div className="text-[#5B4F07] mx-2 text-xl font-inter not-italic font-bold leading-normal">{each?.day}</div>
        </div>
        <div className="w-8 h-8 shrink-0 rounded-3xl bg-[#978839] flex items-center justify-center">
          <img src={each?.icon} alt=".." className="w-4 h-4 shrink-0" />
        </div>
      </div>
    </>
  );
};

export default NotificationItem;
