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
    <div>
      <div style={{ marginBottom: "10px" , marginTop:"10px"}}>
        <div style={{ marginLeft: "-20px" }}>
          <h2>Feedback Emails</h2>
        </div>
        <RadioGroup
          label=""
          options={emailOptions}
          selectedValue={feedbackEmailSetting}
          onChange={handleFeedbackEmailSettingChange}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <div style={{ marginLeft: "-20px" }}>
          <h2>Reminder Emails</h2>
        </div>
        <RadioGroup
          label=""
          options={emailOptions}
          selectedValue={remainderEmailSetting}
          onChange={handleRemainderEmailSettingChange}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <div style={{ marginLeft: "-36px" }}>
          <h2>Product Emails</h2>
        </div>
        <RadioGroup
          label=""
          options={emailOptions}
          selectedValue={productEmailSetting}
          onChange={handleProductEmailSettingChange}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <div style={{ marginLeft: "-54px" }}>
          <h2>News Emails</h2>
        </div>
        <RadioGroup
          label=""
          options={emailOptions}
          selectedValue={newsEmailSetting}
          onChange={handleNewsEmailSettingChange}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <div style={{ marginLeft: "-34px" }}>
          <h2>Support Emails</h2>
        </div>
        <RadioGroup
          label=""
          options={emailOptions}
          selectedValue={supportEmailSetting}
          onChange={handleSupportEmailSettingChange}
        />
      </div>
    </div>
  );
};

export default EmailSettings;
