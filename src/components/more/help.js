import React, { useState } from 'react';

function Help() {
  const [helpCenterVisible, setHelpCenterVisible] = useState(false);
  const [privacyVisible, setPrivacyVisible] = useState(false);
  const [additionalSupportVisible, setAdditionalSupportVisible] = useState(false);

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
    position: 'absolute',
    right: '10px', 
  };

  const buttonStyle = {
    position: 'relative',
    paddingRight: '100px',
  };

  return (
    <div style={{ marginLeft: "90px", width: "400px", marginTop: "50px", textAlign: "left" , color:"black"}}>
      <div style={{ marginBottom: "20px" }}>
        <button
          style={buttonStyle}
          onClick={toggleHelpCenter}
        >
          <strong>Help Center</strong>
          <span style={arrowStyle}>
          {
              helpCenterVisible ? (
                <img src="images/v2.png" />
              ) : (
                <img src="images/v1.png" />
              )
            }
          </span>
        </button>
        {helpCenterVisible && (
          <div style={{marginTop:"30px", marginBottom:"30px"}}>
            <p style={{marginBottom:"20px", textDecoration:"underline"}}>Click to see FAQs</p>
            <p style={{textDecoration:"underline"}}>Contact Us for more help</p>
          </div>
        )}
      </div>
      <div style={{ marginBottom: "20px" }}>
        <button
          style={buttonStyle}
          onClick={togglePrivacy}
        >
          <strong>Privacy and Security Help</strong>
          <span style={arrowStyle}>
          {
              privacyVisible ? (
                <img src="images/v2.png" />
              ) : (
                <img src="images/v1.png" />
              )
            }
          </span>
        </button>
        {privacyVisible && (
          <div style={{marginTop:"30px", marginBottom:"30px"}}>
            <p style={{marginBottom:"20px", textDecoration:"underline"}}>Update your privacy settings</p>
            <p style={{textDecoration:"underline"}}>Contact us for help</p>
          </div>
        )}
      </div>
      <div>
        <button
          style={buttonStyle}
          onClick={toggleAdditionalSupport}
        >
          <strong>Support Requests</strong>
          <span style={arrowStyle}>
          {
              additionalSupportVisible ? (
                <img src="images/v2.png" />
              ) : (
                <img src="images/v1.png" />
              )
            }
          </span>
        </button>
        {additionalSupportVisible && (
          <div style={{marginTop:"30px", marginBottom:"30px"}}>
            <p style={{marginBottom:"20px", textDecoration:"underline"}}>Contact for additional support</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Help;
