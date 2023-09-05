import React, { useState } from "react";

function Help() {
  const [helpCenterVisible, setHelpCenterVisible] = useState(false);
  const [privacyVisible, setPrivacyVisible] = useState(false);
  const [additionalSupportVisible, setAdditionalSupportVisible] =
    useState(false);

  const toggleHelpCenter = () => {
    setHelpCenterVisible(!helpCenterVisible);
    setPrivacyVisible(false);
    setAdditionalSupportVisible(false);
  };

  const togglePrivacy = () => {
    setPrivacyVisible(!privacyVisible);
    setHelpCenterVisible(false);
    setAdditionalSupportVisible(false);
  };

  const toggleAdditionalSupport = () => {
    setAdditionalSupportVisible(!additionalSupportVisible);
    setHelpCenterVisible(false);
    setPrivacyVisible(false);
  };

  const arrowStyle = {
    position: "absolute",
    right: "10px",
  };

  const buttonStyle = {
    position: "relative",
    paddingRight: "100px",
  };

  return (
    <div className="ml-20 w-[400px] mt-10 text-left text-black">
      <div className="mb-5">
        <button className="relative pr-24" onClick={toggleHelpCenter}>
          <strong>Help Center</strong>
          <span className="absolute right-4">
            {helpCenterVisible ? (
              <img src="images/v2.png" />
            ) : (
              <img src="images/v1.png" />
            )}
          </span>
        </button>
        {helpCenterVisible && (
          <div className="mt-8 mb-8">
            <p className="mb-5 underline">Click to see FAQs</p>
            <p style={{ textDecoration: "underline" }}>
              Contact Us for more help
            </p>
          </div>
        )}
      </div>
      <div className="mb-5  ">
        <button style={buttonStyle} onClick={togglePrivacy}>
          <strong>Privacy and Security Help</strong>
          <span style={arrowStyle}>
            {privacyVisible ? (
              <img src="images/v2.png" />
            ) : (
              <img src="images/v1.png" />
            )}
          </span>
        </button>
        {privacyVisible && (
          <div className="mt-8 mb-8">
            <p className="mb-5 underline">Update your privacy settings</p>
            <p style={{ textDecoration: "underline" }}>Contact us for help</p>
          </div>
        )}
      </div>
      <div>
        <button style={buttonStyle} onClick={toggleAdditionalSupport}>
          <strong>Support Requests</strong>
          <span style={arrowStyle}>
            {additionalSupportVisible ? (
              <img src="images/v2.png" />
            ) : (
              <img src="images/v1.png" />
            )}
          </span>
        </button>
        {additionalSupportVisible && (
          <div className="mt-8 mb-8">
            <p className="mb-5 underline">Contact for additional support</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Help;
