import React, { useState } from "react";
import EmailSettings from "./emailsetting";
import PushSettings from "./pushsetting";
import Help from "./help";
import Security1 from "./security";
import Interactions from "./interaction";
import Connections from "./connections";

const More1 = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index === activeItem ? null : index);
  };

  const itemList = [
    "Edit Profile",
    "Connections",
    "Push Notifications",
    "Email Notifications",
    "Security",
    "Interaction",
    "Help",
  ];

  return (
    <div>
      {itemList.map((item, index) => (
        <div
          key={index}
          style={{
            marginBottom: index === itemList.length - 1 ? "23px" : "20px",
            position: "relative",
            cursor: "pointer",
          }}
          onClick={() => handleItemClick(index)}
        >
          {item}
          {activeItem === index && (
            <div style={{ position: "absolute", left: "210px", width: "100%" }}>
              {item === "Edit Profile" && (
                <div style={{ position: "relative", top: "-25px" }}>Edit Profile Content
                </div>
              )}
              {item === "Connections" && (
                <div style={{ position: "relative", top: "-70px" }}>
                <Connections /></div>
              )}
              {item === "Push Notifications" && (
                <div style={{ position: "relative", top: "-113px", left: "2px" }}><h1 style={{marginLeft:"-8px"}}>Push Notifications</h1>
                <PushSettings />
                </div>
              )}
              {item === "Email Notifications" && (
                <div style={{ position: "relative", top: "-158px", width: "220px" }}>Email Notifications
                <EmailSettings />
                </div>
              )}
              {item === "Security" && (
                <div style={{ position: "relative", top: "-200px", left: "-40px" }}><h1 style={{fontWeight:"700"}}>Security</h1>
                <Security1 />
                </div>
              )}
              {item === "Interaction" && (
                <div style={{ position: "relative", top: "-242px", left: "-40px" }}>
                <Interactions />
                </div>
              )}
              {item === "Help" && (
                <div style={{ position: "relative", top: "-287px", left: "-56px" }}><h1 style={{fontWeight:"700"}}>Help</h1>
                <Help /></div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default More1;
