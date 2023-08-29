import React, { useState } from "react";

const Editdomain = () => {
  const boxStyle = {
    width: "437px",
    height: "458px",
    position: "relative",
    top: "39px",
    borderRadius: "20px",
    border: "1px solid #978839",
    display: "flex",
    flexDirection: "column",
  };

  const genders = [
    "Actor",
    "Animation",
    "Art Director",
    "Cinematographer",
    "Director",
    "Editor",
    "Music Director",
    "Screenwriter",
    "Sound Designer",
    "VFX Artist",
    "Writer",
    "Producer",
  ];

  return (
    <div style={{ marginLeft: "70px" }}>
      <div style={boxStyle}>
        <div>
          <p
            style={{
              width: "120px",
              color: "#978839",
              marginLeft: "20px",
              cursor: "pointer",
            }}
          >
            <strong>Edit Domain</strong>
          </p>
          {genders.map((gender) => (
            <div style={{ marginLeft: "20px", marginBottom: "10px" }}>
              <div key={gender}>
                <input
                  type="radio"
                  value={gender}
                  name="gender"
                  id={gender.toLowerCase()}
                />
                <label htmlFor={gender.toLowerCase()}>{gender}</label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Editdomain;
