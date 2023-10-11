import React, { useState } from "react";
import SwitchComponent from "./toggle";

const RadioGroup = ({ label, options, selectedValue, onChange }) => (
  <div>
    <label> {label} </label>{" "}
    <div style={{ display: "flex", flexDirection: "column" }}>
      {" "}
      {options.map((option) => (
        <label key={option.value} class="mb-[14px] flex items-center">
          <input
            className="hidden"
            type="radio"
            value={option.value}
            onChange={() => onChange(option.value)}
            checked={selectedValue === option.value}
          />{" "}
          <div className="relative w-[20px] h-[20px] border border-[#978839] rounded-full inline-block mr-[8px ] ml-[29px]">
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full ${
                selectedValue === option.value ? "bg-black" : "bg-transparent"
              }`}
            />{" "}
          </div>{" "}
          <span> {option.label} </span>{" "}
        </label>
      ))}{" "}
    </div>{" "}
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
    <div className="box-content w-full bg-[#e0d59a]">
      <div className="ml-[-57px] mt-[10px] mb-[10px]">
        <h2> Muted Users </h2>{" "}
      </div>{" "}
      <img
        src="/images/arrow.png"
        alt="Muted Users Icon"
        className="w-[10px] h-[10px] ml-[160px] mt-[-28px] mb-[20px]"
      />
      <div className="ml-[-10px]">
        <h2> Push Notifications </h2>{" "}
        <p className="text-18 ml-[-82px]"> Pause all </p>{" "}
        <div className="ml-[650px] mt-[-30px]">
          <SwitchComponent />
        </div>{" "}
      </div>{" "}
      <div className="my-[10px]">
        <div className="ml-2">
          <h2> Account Suggestions </h2>{" "}
        </div>{" "}
        <RadioGroup
          label=""
          options={emailOptions}
          selectedValue={AccountSuggestions}
          onChange={handleAccountSuggestionsChange}
        />{" "}
      </div>{" "}
      <div className="mb-[10px]">
        <div className="ml-[-10]">
          <h2> Message Reply </h2>{" "}
        </div>{" "}
        <RadioGroup
          label=""
          options={emailOptions}
          selectedValue={MessageReply}
          onChange={handleMessageReplyChange}
        />{" "}
      </div>{" "}
      <div className="mb-[10px]">
        <div className="ml-[-66px]">
          <h2> Story Reply </h2>{" "}
        </div>{" "}
        <RadioGroup
          label=""
          options={emailOptions}
          selectedValue={StoryReply}
          onChange={handleStoryReplyChange}
        />{" "}
      </div>{" "}
      <div className="mb-[10px]">
        <div className="ml-[-10]">
          <h2> Tags and Mentions </h2>{" "}
        </div>{" "}
        <RadioGroup
          label=""
          options={emailOptions}
          selectedValue={TagsandMentions}
          onChange={handleTagsandMentionsChange}
        />{" "}
      </div>{" "}
    </div>
  );
};

export default PushSettings;