import React, { useState } from "react";

const RadioGroup = ({ label, options, selectedValue, onChange }) => (
  <div>
    <label>{label}</label>
    <div className="flex flex-col">
      {options.map((option) => (
        <label key={option.value} className="mb-4 flex items-center">
          <input
            className="hidden"
            type="radio"
            value={option.value}
            onChange={() => onChange(option.value)}
            checked={selectedValue === option.value}
          />
          <div className="w-5 h-5 border border-yellow-600 rounded-full inline-block mr-2 relative ml-7">
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2  rounded-full"
              style={{
                backgroundColor:
                  selectedValue === option.value ? "black" : "transparent",
              }}
            />
          </div>
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  </div>
);

function Security1() {
  const [Authentication, setAuthenticationSetting] = useState("off");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [twoFactorVisible, setTwoFactorVisible] = useState(false);
  const [savedLoginVisible, setSavedLoginVisible] = useState(false);
  const [loginActivityVisible, setLoginActivityVisible] = useState(false);
  const [emailsVisible, setEmailsVisible] = useState(false);

  const handleAuthenticationChange = (value) => {
    setAuthenticationSetting(value);
  };

  const emailOptions = [
    { value: "off", label: "Off" },
    { value: "on", label: "On" },
  ];

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
    setTwoFactorVisible(false);
    setSavedLoginVisible(false);
    setLoginActivityVisible(false);
    setEmailsVisible(false);
  };

  const toggleTwoFactor = () => {
    setTwoFactorVisible(!twoFactorVisible);
    setPasswordVisible(false);
    setSavedLoginVisible(false);
    setLoginActivityVisible(false);
    setEmailsVisible(false);
  };

  const toggleSavedLogin = () => {
    setSavedLoginVisible(!savedLoginVisible);
    setPasswordVisible(false);
    setTwoFactorVisible(false);
    setLoginActivityVisible(false);
    setEmailsVisible(false);
  };

  const toggleLoginActivity = () => {
    setLoginActivityVisible(!loginActivityVisible);
    setPasswordVisible(false);
    setTwoFactorVisible(false);
    setSavedLoginVisible(false);
    setEmailsVisible(false);
  };

  const toggleEmails = () => {
    setEmailsVisible(!emailsVisible);
    setPasswordVisible(false);
    setTwoFactorVisible(false);
    setSavedLoginVisible(false);
    setLoginActivityVisible(false);
  };

  return (
    <div className="ml-20 w-[400px] mt-[50px] text-left">
      <div className="mb-5">
        <button className="relative pr-24" onClick={togglePassword}>
          <strong>Password</strong>
          <span className="absolute right-3 ">
            {passwordVisible ? (
              <img src="images/v2.png" />
            ) : (
              <img src="images/v1.png" />
            )}
          </span>
        </button>
        {passwordVisible && (
          <div className="my-7">
            <p className="mb-5">Password</p>
            <input
              type="text"
              className="w-[180px] mb-2 rounded-md border border-gray-300 bg-white block"
            />
            <p className="mb-5">Change Password</p>
            <input
              type="text"
              className="w-[180px] mb-2 rounded-md border border-gray-300 bg-white block"
            />
            <input
              type="text"
              className="w-[180px] mb-2 rounded-md border border-gray-300 bg-white block"
            />
          </div>
        )}
      </div>
      <div className="mb-5">
        <button className="relative pr-24" onClick={toggleTwoFactor}>
          <strong>2 Factor Authentication</strong>
          <span className="absolute right-3 ">
            {twoFactorVisible ? (
              <img src="images/v2.png" />
            ) : (
              <img src="images/v1.png" />
            )}
          </span>
        </button>
        {twoFactorVisible && (
          <div className="my-7">
            <h1 className="4">2 Factor Authentication</h1>
            <RadioGroup
              label=""
              options={emailOptions}
              selectedValue={Authentication}
              onChange={handleAuthenticationChange}
            />
            <p className="mb-5">Add 2FA option1</p>
            <p>Add 2FA option2</p>
          </div>
        )}
      </div>
      <div className="mb-5">
        <button className="relative pr-24" onClick={toggleSavedLogin}>
          <strong>Saved login info</strong>
          <span className="absolute right-3 ">
            {savedLoginVisible ? (
              <img src="images/v2.png" />
            ) : (
              <img src="images/v1.png" />
            )}
          </span>
        </button>
        {savedLoginVisible && (
          <div className="my-7">
            <p className="4">Saved login information on this device</p>
            <p className="w-[500px]">
              No need to enter credentials again to verify account
            </p>
          </div>
        )}
      </div>
      <div className="mb-5">
        <button className="relative pr-24" onClick={toggleLoginActivity}>
          <strong>Login Activity</strong>
          <span className="absolute right-3 ">
            {loginActivityVisible ? (
              <img src="images/v2.png" />
            ) : (
              <img src="images/v1.png" />
            )}
          </span>
        </button>
        {loginActivityVisible && (
          <div className="my-7">
            <p className="4">Where You’re logged in</p>
            <div>
              <img
                src="images/location icon.png"
                alt="Icon"
                className="w-5 h-8  mr-[12px]"
              />
              <p className="mb-1">
                Vellore, Tamilnadu
                <br />
                Active now. Android 10
              </p>
            </div>
            <div>
              <img
                src="images/location icon.png"
                alt="Icon"
                className="w-5 h-8  mr-[12px]"
              />
              <p className="mb-1">
                Vellore, Tamilnadu
                <br />
                Active now. Android 10
              </p>
            </div>
            <img
              src="images/location icon.png"
              alt="Icon"
              className="w-5 h-8  mr-[12px]"
            />
            <p className="mb-1">
              Vellore, Tamilnadu
              <br />
              Active now. Android 10
            </p>
          </div>
        )}
      </div>
      <div>
        <button className="relative pr-24" onClick={toggleEmails}>
          <strong>Emails from Flixdin</strong>
          <span className="absolute right-3 ">
            {emailsVisible ? (
              <img src="images/v2.png" />
            ) : (
              <img src="images/v1.png" />
            )}
          </span>
        </button>
        {emailsVisible && (
          <div className="mt-5 mb-10">
            <p className="w-[600px] mb-7">
              Security and login emails from flixdin will appear here.
            </p>
            <p className="mb-5 ">
              <span>logged in on android 8</span>
              <span className="text-[#5B4E07] ml-5">1d ago</span>
            </p>
            <p className="mb-5 ">
              <span>logged in on windows</span>
              <span className="text-[#5B4E07] ml-5">8d ago</span>
            </p>
            <p className="mb-5 ">
              <span>logged in on android 10</span>
              <span className="text-[#5B4E07] ml-5">10d ago</span>
            </p>
            <p>
              <span>Password changed</span>
              <span className="text-[#5B4E07] ml-5">12d ago</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Security1;
