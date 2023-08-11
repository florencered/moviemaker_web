import React, { useState } from "react";

const SwitchAccountButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleButtonClick = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={handleButtonClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ color: "rgba(54, 159, 255, 1)" , marginBottom:"15px"}}
      >
        Switch Account
      </button>
      {isContentVisible && (
        <div
          style={{
            position: "absolute",
            width: "500px",
            left: "20px",
            top: "-320px",
          }}
        >
          <h2 style={{ fontWeight: "700", fontSize: "25px", fontFamily: "Inter" }}>
            Switch Account
          </h2>
            <p style={{ marginTop: "30px" }}>Switch to Account 1</p>
            <p style={{ marginTop: "10px" }}>Switch to Account 2</p>
        </div>
      )}
    </div>
  );
};

export default SwitchAccountButton;
