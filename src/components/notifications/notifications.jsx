import React, { useState } from "react";
import NotificationItem from "./NotificationItem";
import Sidebar from "../home/sidebar/Sidebar.js";
const Notifications = () => {
  const [toggle, setToggle] = useState(true);

  const handletoggle = () => {
    if (toggle) setToggle(false);
    else setToggle(true);
  };

  let data = [
    {
      type: "New",
      pic: "/images/profile_pic.png",
      name: "rishi_reddy",
      message: "started following you",
      day: "1d ago",
      icon: "/images/mdi_account.png",
      connectioncall: true,
      visited: true,
    },
    {
      type: "New",
      pic: "/images//profile_pic.png",
      name: "rishi_reddy",
      message: "started following you",
      day: "1d ago",
      icon: "/images/mdi_account.png",
      connectioncall: true,
      visited: true,
    },

    {
      type: "ThisWeek",
      pic: "/images//profile_pic.png",
      name: "rishi_reddy",
      message: "started following you",
      day: "1d ago",
      icon: "/images/mdi_account.png",
      connectioncall: false,
      visited: false,
    },

    {
      type: "ThisMonth",
      pic: "/images//profile_pic.png",
      name: "rishi_reddy",
      message: "started following you",
      day: "1d ago",
      icon: "/images/mdi_account.png",
      connectioncall: true,
      visited: true,
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#fffadd] w-full h-full">
        <div class="basis-1/4 bg-[#F7EAA9] rounded-r-3xl my-2">
        <Sidebar/>
      </div>
      <div className="m-3 mt-8 w-full flex flex-col ml-9">
        <h1 className="flex w-56 h-14 flex-col shrink-0 text-[#000] text-4xl font-inter not-italic font-semibold leading-normal">Notifications</h1>
        <div className="flex w-3/12 h-17 items-start gap-4 shrink-0 ml-8">
          <button
            className={`w-48 h-14 shrink-0 text-[#000] text-xl leading-4 not-italic font-medium rounded-xl bg-[#A6A5A2]/[0.59] ${toggle && "bg-[#E0C949]"}`}
            onClick={handletoggle}
          >
            All
          </button>
          <button
            className={`w-48 h-14 shrink-0 text-[#000] text-xl leading-4 not-italic font-medium rounded-xl bg-[#A6A5A2]/[0.59] ${!toggle && "bg-[#E0C949]"}`}
            onClick={handletoggle}
          >
            Connection Calls
          </button>
        </div>
        {toggle && (
          
            <div className="ml-10 w-8/12 ">
              <div className="mt-9 mb-5 flex flex-col gap-5 ">
                <h3 className="text-[#000] text-2xl text-left font-inter not-italic font-normal leading-4">New</h3>
                {data.map((each, index) => {
                  return (
                    <>
                      {each?.type === "New" && (
                        <NotificationItem each={each} key={index} />
                      )}
                    </>
                  );
                })}
              </div>
            

            <div className="mt-9 mb-5 flex flex-col gap-5">
              <h3 className="text-[#000] text-2xl text-left font-inter not-italic font-normal leading-4">This Week</h3>
              {data.map((each, index) => {
                return (
                  <>
                    {each?.type === "ThisWeek" && (
                      <NotificationItem each={each} key={index} />
                    )}
                  </>
                );
              })}
            </div>

            <div className="mt-9 mb-5 flex flex-col gap-5">
              <h3 className="text-[#000] text-2xl text-left font-inter not-italic font-normal leading-4">This Month</h3>
              {data.map((each, index) => {
                return (
                  <>
                    {each?.type === "ThisMonth" && (
                      <NotificationItem each={each} key={index} />
                    )}
                  </>
                );
              })}
            </div>
            </div>
          
        )}
        {!toggle && (
          
            <div className="ml-7 w-8/12">
              <div className="mt-9 mb-5 flex flex-col gap-5">
                <h3 className="text-[#000] text-left text-2xl font-inter not-italic font-normal leading-4">New</h3>
                {data.map((each, index) => {
                  return (
                    <>
                      {each.connectioncall && (
                        <>
                          {each?.type === "New" && (
                            <NotificationItem each={each} key={index} />
                          )}
                        </>
                      )}
                    </>
                  );
                })}
              </div>
              <div className="mt-9 mb-5 flex flex-col gap-5">
                <h3 className="text-[#000] text-left text-2xl font-inter not-italic font-normal leading-4">This Week</h3>
                {data.map((each, index) => {
                  return (
                    <>
                      {each.connectioncall && (
                        <>
                          {each?.type === "ThisWeek" && (
                            <NotificationItem each={each} key={index} />
                          )}
                        </>
                      )}
                    </>
                  );
                })}
              </div>
              <div className="mt-9 mb-5 flex flex-col gap-5">
                <h3 className="text-[#000] text-left text-2xl font-inter not-italic font-normal leading-4">This month</h3>
                {data.map((each, index) => {
                  return (
                    <>
                      {each.connectioncall && (
                        <>
                          {each?.type === "ThisMonth" && (
                            <NotificationItem each={each} key={index} />
                          )}
                        </>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          
        )}
      </div>
    </div>
  );
};

export default Notifications;
