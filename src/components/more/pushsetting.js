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
              marginLeft:"29px"
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

const PushSettings = () => {
  const [AccountSuggestions, setAccountSuggestions] = useState("off");
  const [MessageReply, setMessageReply] = useState("off");
  const [StoryReply, setStoryReply] = useState("off");
  const [TagsandMentions, setTagsandMentions] = useState("off");

  const handleAccountSuggestionsChange = (value) => {
    setAccountSuggestions(value);
  };

  const handleMessageReplyChange = (value) => {
    setMessageReply(value);
  };

  const handleStoryReplyChange = (value) => {
    setStoryReply(value);
  };

  const handleTagsandMentionsChange = (value) => {
    setTagsandMentions(value);
  };


  const emailOptions = [
    { value: "off", label: "Off" },
    { value: "on", label: "On" },
  ];

  return (
    <div>
        <div style={{marginLeft:"-57px", marginTop:"10px", marginBottom:"10px"}}>
            <h2>Muted Users</h2></div>
            <img src="images/arrow.png" alt="Muted Users Icon" style={{ width: "10px", height: "10px", marginLeft:"160px", marginTop:"-28px", marginBottom:"20px" }} />
        <div style={{marginLeft:"-10px"}}>
            <h2>Push Notifications</h2>
            <p style={{fontSize:"18px", marginLeft:"-82px"}}>Pause all</p>
            <img src="images/toggle.png" alt="push Icon" style={{ width: "50px", height: "30px", marginLeft:"700px", marginTop:"-34px", marginBottom:"22px" }} />
        </div>
      <div style={{ marginBottom: "10px" , marginTop:"10px"}}>
        <div style={{ marginLeft: "8px" }}>
          <h2>Account Suggestions</h2>
        </div>
        <RadioGroup
          label=""
          options={emailOptions}
          selectedValue={AccountSuggestions}
          onChange={handleAccountSuggestionsChange}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <div style={{ marginLeft: "-40px" }}>
          <h2>Message Reply</h2>
        </div>
        <RadioGroup
          label=""
          options={emailOptions}
          selectedValue={MessageReply}
          onChange={handleMessageReplyChange}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <div style={{ marginLeft: "-66px" }}>
          <h2>Story Reply</h2>
        </div>
        <RadioGroup
          label=""
          options={emailOptions}
          selectedValue={StoryReply}
          onChange={handleStoryReplyChange}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <div style={{ marginLeft: "-10px" }}>
          <h2>Tags and Mentions</h2>
        </div>
        <RadioGroup
          label=""
          options={emailOptions}
          selectedValue={TagsandMentions}
          onChange={handleTagsandMentionsChange}
        />
      </div>
    </div>
  );
};

export default PushSettings;
