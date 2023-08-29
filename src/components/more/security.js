import React, { useState } from 'react';

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
              marginLeft: "29px"
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

  const inputStyle = {
    width: '180px',
    marginBottom:"10px",
    borderRadius: '7px',
    border: '1px solid #ccc',
    backgroundColor: 'white',
    display:"block"
  };

  const timeAgoTextStyle = {
    color: '#5B4E07',
    marginLeft: '20px',
  };

  const arrowStyle = {
    position: 'absolute',
    right: '10px',
  };

  const buttonStyle = {
    position: 'relative',
    paddingRight: '100px',
  };

  return (
    <div style={{ marginLeft: "78px", width: "400px", marginTop: "50px", textAlign: "left" }}>
      <div style={{ marginBottom: "20px" }}>
        <button
          style={buttonStyle}
          onClick={togglePassword}
        >
          <strong>Password</strong>
          <span style={arrowStyle}>
            {
              passwordVisible ? (
                <img src="images/v2.png" />
              ) : (
                <img src="images/v1.png" />
              )
            }
          </span>
        </button>
        {passwordVisible && (
          <div style={{ marginTop: "30px", marginBottom: "30px" }}>
            <p style={{ marginBottom: "20px" }}>Password</p>
            <input type="text" style={inputStyle} />
            <p style={{ marginBottom: "20px" }}>Change Password</p>
            <input type="text" style={inputStyle} />
            <input type="text" style={inputStyle} />
          </div>
        )}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button
          style={buttonStyle}
          onClick={toggleTwoFactor}
        >
          <strong>2 Factor Authentication</strong>
          <span style={arrowStyle}>
            {
              twoFactorVisible ? (
                <img src="images/v2.png" />
              ) : (
                <img src="images/v1.png" />
              )
            }
          </span>
        </button>
        {twoFactorVisible && (
          <div style={{ marginTop: "30px", marginBottom: "30px" }}>
            <h1 style={{ marginBottom: "15px" }}>2 Factor Authentication</h1>
            <RadioGroup
              label=""
              options={emailOptions}
              selectedValue={Authentication}
              onChange={handleAuthenticationChange}
            />
            <p style={{ marginBottom: "20px" }}>Add 2FA option1</p>
            <p>Add 2FA option2</p>
          </div>
        )}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button
          style={buttonStyle}
          onClick={toggleSavedLogin}
        >
          <strong>Saved login info</strong>
          <span style={arrowStyle}>
            {
              savedLoginVisible ? (
                <img src="images/v2.png" />
              ) : (
                <img src="images/v1.png" />
              )
            }
          </span>
        </button>
        {savedLoginVisible && (
          <div style={{ marginTop: "30px", marginBottom: "40px" }}>
            <p style={{ marginBottom: "20px" }}>Saved login information on this device</p>
            <p style={{ width: "500px" }}>No need to enter credentials again to verify account</p>
          </div>
        )}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button
          style={buttonStyle}
          onClick={toggleLoginActivity}
        >
          <strong>Login Activity</strong>
          <span style={arrowStyle}>
            {
              loginActivityVisible ? (
                <img src="images/v2.png" />
              ) : (
                <img src="images/v1.png" />
              )
            }
          </span>
        </button>
        {loginActivityVisible && (
          <div style={{ marginTop: "30px", marginBottom: "40px" }}>
            <p style={{ marginBottom: "10px" }}>Where You’re logged in</p>
            <div>
              <img src="images/location icon.png" alt="Icon" width="20" height="20" style={{ marginRight: '12px' }} />
              <p style={{ marginBottom: "5px" }}>Vellore, Tamilnadu<br />Active now. Android 10</p>
            </div>
            <img src="images/location icon.png" alt="Icon" width="20" height="20" style={{ marginRight: '10px' }} />
            <p style={{ marginBottom: "5px" }}>Vellore, Tamilnadu<br />Active now. Android 10</p>
            <img src="images/location icon.png" alt="Icon" width="20" height="20" style={{ marginRight: '10px' }} />
            <p>Vellore, Tamilnadu<br />Active now. Android 10</p>
          </div>
        )}
      </div>
      <div>
        <button
          style={buttonStyle}
          onClick={toggleEmails}
        >
          <strong>Emails from Flixdin</strong>
          <span style={arrowStyle}>
            {
              emailsVisible ? (
                <img src="images/v2.png" />
              ) : (
                <img src="images/v1.png" />
              )
            }
          </span>
        </button>
        {emailsVisible && (
          <div style={{ marginTop: "20px", marginBottom: "40px" }}>
            <p style={{ width: "600px", marginBottom: "15px" }}>Security and login emails from flixdin will appear here.</p>
            <p style={{ marginBottom: "20px" }}>
              <span>
                logged in on android 8
              </span>
              <span style={timeAgoTextStyle}>1d ago</span>
            </p>
            <p style={{ marginBottom: "20px" }}>
              <span>
                logged in on windows
              </span>
              <span style={timeAgoTextStyle}>8d ago</span>
            </p>
            <p style={{ marginBottom: "20px" }}>
              <span>
                logged in on android 10
              </span>
              <span style={timeAgoTextStyle}>10d ago</span>
            </p>
            <p>
              <span>
                Password changed
              </span>
              <span style={timeAgoTextStyle}>12d ago</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Security1;
