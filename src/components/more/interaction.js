import React, { useState } from "react";

const RadioGroup = ({ label, options, selectedValue, onChange }) => (
  <div>
    <label>{label}</label>
    <div style={{ display: "flex", flexDirection: "column" }}>
      {options.map((option) => (
        <label
          key={option.value}
          style={{
            marginBottom: "14px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <input
            style={{
              display: "none",
            }}
            type="radio"
            value={option.value}
            onChange={() => onChange(option.value)}
            checked={selectedValue === option.value}
          />
          <div
            style={{
              width: "20px",
              height: "20px",
              border: "1px solid rgba(151, 136, 57, 1)",
              borderRadius: "50%",
              display: "inline-block",
              marginRight: "8px",
              position: "relative",
              marginLeft: "29px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "10px",
                height: "10px",
                backgroundColor:
                  selectedValue === option.value ? "black" : "transparent",
                borderRadius: "50%",
              }}
            />
          </div>
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  </div>
);

const Interactions = () => {
  const [storySetting, setStorySetting] = useState(null);
  const [commentSetting, setCommentSetting] = useState(null);
  const [mentionsSetting, setMentionSetting] = useState(null);
  const [showActivityStatus, setShowActivityStatus] = useState(false);

  const handleStorySettingChange = (value) => {
    setStorySetting(value);
    setCommentSetting(null); // Close other prompts
    setMentionSetting(null); // Close other prompts
  };

  const handleCommentSettingChange = (value) => {
    setCommentSetting(value);
    setStorySetting(null); // Close other prompts
    setMentionSetting(null); // Close other prompts
  };

  const handleMentionSettingChange = (value) => {
    setMentionSetting(value);
    setStorySetting(null); // Close other prompts
    setCommentSetting(null); // Close other prompts
  };

  const toggleActivityStatus = () => {
    setShowActivityStatus((prevStatus) => !prevStatus);
  };

  const emailOptions = [
    { value: "Everyone", label: "Everyone" },
    { value: "My Connections", label: "My Connections" },
    {
      value: "My contacts except Blocked",
      label: "My contacts except Blocked",
    },
    { value: "Nobody", label: "Nobody" },
  ];

  return (
    <div style={{ width: "370px", marginLeft: "75px", textAlign: "left" }}>
      <h1 style={{ fontSize: "24px" }}><strong>How others can interact with you</strong></h1>
      <p style={{ marginTop: "10px" }}>Interaction</p>
      <h2 style={{ marginTop: "10px" }}><strong>Messages</strong></h2>
      <p>Manage message settings</p>
      <div
        style={{
          position: "absolute",
          width: "800px",
          top: "126px",
          left: "75px",
          border: "1px solid rgba(151, 136, 57, 1)",
          transform: "rotate(-180deg)",
        }}
      ></div>
      <h2 style={{ marginTop: "15px" }}><strong>Activity Status</strong></h2>
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <input
          type="checkbox"
          checked={showActivityStatus}
          onChange={toggleActivityStatus}
          style={{ marginRight: "10px" , marginTop:"3px"}}
        />
        <p>Show activity status</p>
      </div>
      <p style={{width:"600px"}}>Allow accounts that you follow and anyone you message to see when you<br/> were last active or are currently active on Instagram apps. When this is <br />turned off, you won't be able to see the activity status of other accounts.</p>
      <h2 style={{ marginTop: "15px" }}><strong>Learn more</strong></h2>
      <p  style={{width:"600px"}}>You can continue to use our services if Active Status is off</p>
      <div
        style={{
          position: "absolute",
          width: "800px",
          top: "350px",
          left: "75px",
          border: "1px solid rgba(151, 136, 57, 1)",
          transform: "rotate(-180deg)",
        }}
      ></div>
      <h2 style={{ marginTop: "35px" }}><strong>Story</strong></h2>
      <div style={{ marginBottom: "10px", marginTop: "5px" }}>
        <div
          style={{ marginLeft: "1px", cursor: "pointer" }}
          onClick={() =>
            handleStorySettingChange(
              storySetting === null ? "Everyone" : null
            )
          }
        >
          <p>Edit Story Settings</p>
        </div>
        {storySetting !== null && (
          <RadioGroup
            label={<h2>Who can see your Comments</h2>}
            options={emailOptions}
            selectedValue={storySetting}
            onChange={handleStorySettingChange}
          />
        )}
      </div>
      <div
        style={{
          position: "absolute",
          width: "800px",
          top: "426px",
          left: "75px",
          border: "1px solid rgba(151, 136, 57, 1)",
          transform: "rotate(-180deg)",
        }}
      ></div>

      <h2 style={{ marginTop: "25px" }}><strong>Comments</strong></h2>
      <div style={{ marginBottom: "10px",marginTop: "5px"  }}>
        <div
          style={{ marginLeft: "1px", cursor: "pointer" }}
          onClick={() =>
            handleCommentSettingChange(
              commentSetting === null ? "Everyone" : null
            )
          }
        >
          <p>Edit my comment settings</p>
        </div>
        {commentSetting !== null && (
          <RadioGroup
            label={<h2>Who can see your Comments</h2>}
            options={emailOptions}
            selectedValue={commentSetting}
            onChange={handleCommentSettingChange}
          />
        )}
      </div>
      <div
        style={{
          position: "absolute",
          width: "800px",
          top: "500px",
          left: "75px",
          border: "1px solid rgba(151, 136, 57, 1)",
          transform: "rotate(-180deg)",
        }}
      ></div>

      <h2 style={{ marginTop: "25px" }}><strong>Mentions</strong></h2>
      <div style={{ marginBottom: "10px",marginTop: "5px"  }}>
        <div
          style={{ marginLeft: "1px", cursor: "pointer" }}
          onClick={() =>
            handleMentionSettingChange(
              mentionsSetting === null ? "Everyone" : null
            )
          }
        >
          <p>Edit my mentions settings</p>
        </div>
        {mentionsSetting !== null && (
          <RadioGroup
            label={<h2>Who can mention you in Story</h2>}
            options={emailOptions}
            selectedValue={mentionsSetting}
            onChange={handleMentionSettingChange}
          />
        )}
      </div>
    </div>
  );
};

export default Interactions;
