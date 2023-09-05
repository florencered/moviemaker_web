import React, { useState } from "react";
import EmailSettings from "./emailsetting";
import PushSettings from "./pushsetting";
import Help from "./help";
import Security1 from "./security";
import Interactions from "./interaction";
import Connections from "./connections";
import Editfile from "./edit";
import DeleteAccountButton from "./delete";

const More1 = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    console.log(index);
    setActiveItem(index);
  };

  const itemList = [
    "Edit Profile",
    "Connections",
    "Push Notifications",
    "Email Notifications",
    "Security",
    "Interaction",
    "Help",
    "Switch Account",
    "Delete Account",
  ];

  return (
    <div>
      {itemList.map((item, index) => (
        <div
          key={index}
          className={`${
            index === itemList.length - 1 ? "mb-[23px]" : "mb-[20px]"
          } relative cursor-pointer ${
            item === "Switch Account"
              ? "text-blue-500"
              : item === "Delete Account"
              ? "text-red-500"
              : "text-black"
          } rounded-lg hover:bg-white`}
          onClick={() => handleItemClick(index)}
        >
          {item}
          {activeItem === index && (
            <div className="absolute left-52 w-full ">
              {item === "Edit Profile" && (
                <div className="relatice top-[-25px] ml-[-30px]">
                  Edit Profile
                  <Editfile />
                </div>
              )}
              {item === "Connections" && (
                <div class="relative top-[-70px]">
                  <Connections />
                </div>
              )}
              {item === "Push Notifications" && (
                <div className="relative top-[-113px] left-[2px] ">
                  <h1 className="ml-[-8px]">Push Notifications</h1>
                  <PushSettings />
                </div>
              )}
              {item === "Email Notifications" && (
                <div className="relative top-[-158px] w-[220px]">
                  Email Notifications
                  <EmailSettings />
                </div>
              )}
              {item === "Security" && (
                <div className="relative top-[-200px] left-[-40px]">
                  <h1 className="font-bold">Security</h1>
                  <Security1 />
                </div>
              )}
              {item === "Interaction" && (
                <div className="relative top-[-242px]  left-[-40px]">
                  <Interactions />
                </div>
              )}
              {item === "Help" && (
                <div className="relative top-[-287px] left-[-56px]">
                  <h1 className="font-bold">Help</h1>
                  <Help />
                </div>
              )}
              {item === "Switch Account" && (
                <div className="relative top-[-327px] left-[-4px] text-black">
                  <h1 class="font-bold text-[22px] ">Switch Account</h1>
                  <p className="mt-[30px] ml-[27px]">Switch to Account 1</p>
                  <p className="mt-[20px] ml-[27px]">Switch to Account 2</p>
                </div>
              )}
              {item === "Delete Account" && (
                <div className="relative top-[-367px] left-[-4px] text-black">
                  <h1 className="font-bold text-[22px]">Delete Account</h1>
                  <p className="mt-[30px] ml-[39px] w-[240px]">
                    Permanantely Delete account
                  </p>
                  <p className="mt-[20px] ml-[17px] w-[240px]">
                    Delete for some period
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default More1;
