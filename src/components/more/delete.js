import React, { useState } from "react";

const DeleteAccountButton = () => {
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
        style={{ color: "rgba(255, 73, 73, 1)" }}
      >
        Delete Account
      </button>
      {isContentVisible && (
        <div
          style={{
            position: "absolute",
            width: "500px",
            left: "20px",
            top: "-340px",
          }}
        >
          <h2 style={{ fontWeight: "700", fontSize: "25px", fontFamily: "Inter" }}>
            Delete Account
          </h2>
            <p style={{ marginTop: "40px",marginLeft:"70px"}}>Permanantely Delete account</p>
            <p style={{ marginTop: "30px",marginLeft:"20px" }}>Delete for some period</p>
        </div>
      )}
    </div>
  );
};

export default DeleteAccountButton;
