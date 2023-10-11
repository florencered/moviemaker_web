import React, { useState } from "react";

const RadioGroup = ({ label, options, selectedValue, onChange }) => (
  <div>
    <label> {label} </label>{" "}
    <div className="flex flex-col ">
      {" "}
      {options.map((option) => (
        <label key={option.value} className="mb-[14px] flex items-center">
          <input
            className="hidden"
            type="radio"
            value={option.value}
            onChange={() => onChange(option.value)}
            checked={selectedValue === option.value}
          />{" "}
          <div className="w-[20px] h-[20px] border-2 border-[#978839] rounded-full inline-block mr-[8px] relative ml-[20px]">
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[10px] h-[10px] rounded-full"
              style={{
                backgroundColor:
                  selectedValue === option.value ? "black" : "transparent",
              }}
            ></div>{" "}
          </div>{" "}
          <span> {option.label} </span>{" "}
        </label>
      ))}{" "}
    </div>{" "}
  </div>
);

const EmailSettings = () => {
  const [feedbackEmailSetting, setFeedbackEmailSetting] = useState("off");
  const [remainderEmailSetting, setRemainderEmailSetting] = useState("off");
  const [productEmailSetting, setProductEmailSetting] = useState("off");
  const [newsEmailSetting, setNewsEmailSetting] = useState("off");
  const [supportEmailSetting, setSupportEmailSetting] = useState("off");

  const handleFeedbackEmailSettingChange = (value) => {
    setFeedbackEmailSetting(value);
  };

  const handleRemainderEmailSettingChange = (value) => {
    setRemainderEmailSetting(value);
  };

  const handleProductEmailSettingChange = (value) => {
    setProductEmailSetting(value);
  };

  const handleNewsEmailSettingChange = (value) => {
    setNewsEmailSetting(value);
  };

  const handleSupportEmailSettingChange = (value) => {
    setSupportEmailSetting(value);
  };

  const emailOptions = [
    { value: "off", label: "Off" },
    { value: "on", label: "On" },
  ];

  return (
    <div className="box-content w-full bg-[#e0d59a]">
      <div className="my-[10px]">
        <div className="ml-[-20px]">
          <h2> Feedback Emails </h2>{" "}
        </div>{" "}
        <RadioGroup
          label=""
          options={emailOptions}
          selectedValue={feedbackEmailSetting}
          onChange={handleFeedbackEmailSettingChange}
        />{" "}
      </div>{" "}
      <div className="mb-[10px]">
        <div className="ml-[-20px]">
          <h2> Reminder Emails </h2>{" "}
        </div>{" "}
        <RadioGroup
          label=""
          options={emailOptions}
          selectedValue={remainderEmailSetting}
          onChange={handleRemainderEmailSettingChange}
        />{" "}
      </div>{" "}
      <div className="mb-[10px]">
        <div className="ml-[-20px]">
          <h2> Product Emails </h2>{" "}
        </div>{" "}
        <RadioGroup
          label=""
          options={emailOptions}
          selectedValue={productEmailSetting}
          onChange={handleProductEmailSettingChange}
        />{" "}
      </div>{" "}
      <div className="mb-[10px]">
        <div className="ml-[-20px]">
          <h2> News Emails </h2>{" "}
        </div>{" "}
        <RadioGroup
          label=""
          options={emailOptions}
          selectedValue={newsEmailSetting}
          onChange={handleNewsEmailSettingChange}
        />{" "}
      </div>{" "}
      <div className="mb-[10px]">
        <div className="ml-[-34px]">
          <h2> Support Emails </h2>{" "}
        </div>{" "}
        <RadioGroup
          label=""
          options={emailOptions}
          selectedValue={supportEmailSetting}
          onChange={handleSupportEmailSettingChange}
        />{" "}
      </div>{" "}
    </div>
  );
};

export default EmailSettings;