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
    console.log(index)
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
          style={{
            marginBottom: index === itemList.length - 1 ? "23px" : "20px",
            position: "relative",
            cursor: "pointer",
            color: item === "Switch Account" ? "#369FFF" : item === "Delete Account" ? "#FF4949" : "black",
          }}
          class="rounded-lg hover:bg-white "
          onClick={() => handleItemClick(index)}
        >
          {item}
          {activeItem === index && (
            <div style={{ position: "absolute", left: "210px", width: "100%"}}>
              {item === "Edit Profile" && (
                <div style={{ position: "relative", top: "-25px", marginLeft: "-30px" }}>Edit Profile
                  <Editfile />
                </div>
              )}
              {item === "Connections" && (
                <div style={{ position: "relative", top: "-70px" }}>
                  <Connections /></div>
              )}
              {item === "Push Notifications" && (
                <div style={{ position: "relative", top: "-113px", left: "2px" }}><h1 style={{ marginLeft: "-8px" }}>Push Notifications</h1>
                  <PushSettings />
                </div>
              )}
              {item === "Email Notifications" && (
                <div style={{ position: "relative", top: "-158px", width: "220px" }}>Email Notifications
                  <EmailSettings />
                </div>
              )}
              {item === "Security" && (
                <div style={{ position: "relative", top: "-200px", left: "-40px" }}><h1 style={{ fontWeight: "700" }}>Security</h1>
                  <Security1 />
                </div>
              )}
              {item === "Interaction" && (
                <div style={{ position: "relative", top: "-242px", left: "-40px" }}>
                  <Interactions />
                </div>
              )}
              {item === "Help" && (
                <div style={{ position: "relative", top: "-287px", left: "-56px" }}><h1 style={{ fontWeight: "700" }}>Help</h1>
                  <Help /></div>
              )}
              {item === "Switch Account" && (
                <div style={{ position: "relative", top: "-327px", left: "-4px", color: "black" }}>
                  <h1 style={{ fontWeight: "700", fontSize:"22px"}}>Switch Account</h1>
                  <p style={{ marginTop: "30px", marginLeft:"27px" }}>Switch to Account 1</p>
                  <p style={{ marginTop: "20px", marginLeft:"27px"  }}>Switch to Account 2</p>
                </div>
              )}
              {item === "Delete Account" && (
                <div style={{ position: "relative", top: "-367px", left: "-4px", color: "black" }}>
                <h1 style={{ fontWeight: "700", fontSize:"22px"}}>Delete Account</h1>
                <p style={{ marginTop: "30px", marginLeft:"39px",width:"240px" }}>Permanantely Delete account</p>
                <p style={{ marginTop: "20px", marginLeft:"17px",width:"240px"  }}>Delete for some period</p>
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
