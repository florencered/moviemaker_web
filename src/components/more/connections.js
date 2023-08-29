import React, { useState } from 'react';
import SwitchComponent from './toggle';

function Connections() {
  const [RestrictedAccountsVisible, setRestrictedAccountsVisible] = useState(false);
  const [BlockedAccountsVisible, setBlockedAccountsVisible] = useState(false);
  const [MutedAccountsVisible, setMutedAccountsVisible] = useState(false);
  const [AccountsyoufollowVisible, setAccountsyoufollowVisible] = useState(false);

  const toggleRestrictedAccounts = () => {
    setRestrictedAccountsVisible(!RestrictedAccountsVisible);
    setBlockedAccountsVisible(false);
    setMutedAccountsVisible(false);
    setAccountsyoufollowVisible(false);
  };

  const toggleBlockedAccounts = () => {
    setBlockedAccountsVisible(!BlockedAccountsVisible);
    setRestrictedAccountsVisible(false);
    setMutedAccountsVisible(false);
    setAccountsyoufollowVisible(false);
  };

  const toggleMutedAccounts = () => {
    setMutedAccountsVisible(!MutedAccountsVisible);
    setRestrictedAccountsVisible(false);
    setBlockedAccountsVisible(false);
    setAccountsyoufollowVisible(false);
  };

  const toggleAccountsyoufollow = () => {
    setAccountsyoufollowVisible(!AccountsyoufollowVisible);
    setRestrictedAccountsVisible(false);
    setBlockedAccountsVisible(false);
    setMutedAccountsVisible(false);
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
    <div style={{ marginLeft: "40px", width: "400px", marginTop: "30px", textAlign: "left" }}>
      <div style={{ marginBottom: "20px" }}>
        <button
          style={buttonStyle}
          onClick={toggleRestrictedAccounts}
        >
          <strong>Restricted Accounts</strong>
          <span style={arrowStyle}>
            {
              RestrictedAccountsVisible ? (
                <img src="images/v2.png" />
              ) : (
                <img src="images/v1.png" />
              )
            }
          </span>
        </button>
        {RestrictedAccountsVisible && (
          <div style={{ textAlign: "center", marginTop: "30px", marginBottom: "10px" }}>
          <p style={{ width: "650px" }}>Restrict people from knowing you online/offline status<br />
            Protect yourself from unwanted interaction <br />
            without block or unfollow</p>
          <div style={{ marginLeft: "-200px", marginTop: "25px", marginBottom: "30px" }}>
            <p>Arkaz</p>
            <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
            <p>Arkaz</p>
            <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label></div>
            <p>Arkaz</p>
            <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label></div>
            <p>Arkaz</p>
            <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label></div>
            <p>Arkaz</p>
            <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label></div>
            <p>Arkaz</p>
            <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label></div>
            </div>
        </div>
        )}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <button
          style={buttonStyle}
          onClick={toggleBlockedAccounts}
        >
          <strong>Blocked Accounts</strong>
          <span style={arrowStyle}>
            {
              BlockedAccountsVisible ? (
                <img src="images/v2.png" />
              ) : (
                <img src="images/v1.png" />
              )
            }
          </span>
        </button>
        {BlockedAccountsVisible && (
          <div style={{ textAlign: "center", marginTop: "30px", marginBottom: "10px" }}>
            <p style={{ width: "650px" }}>Restrict people from knowing you online/offline status<br />
              Protect yourself from unwanted interaction <br />
              without block or unfollow</p>
            <div style={{ marginLeft: "-200px", marginTop: "25px", marginBottom: "30px" }}>
              <p>Arkaz</p>
              <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}><label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
              <p>Arkaz</p>
              <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}><label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
              <p>Arkaz</p>
              <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}><label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
              <p>Arkaz</p>
              <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}><label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
              <p>Arkaz</p>
              <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}><label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
              <p>Arkaz</p>
              <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}><label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
            </div>
          </div>
        )}
      </div>

      <div style={{ marginBottom: "20px" }}>
        <button
          style={buttonStyle}
          onClick={toggleMutedAccounts}
        >
          <strong>Muted Accounts</strong>
          <span style={arrowStyle}>
            {
              MutedAccountsVisible ? (
                <img src="images/v2.png" />
              ) : (
                <img src="images/v1.png" />
              )
            }
          </span>
        </button>
        {MutedAccountsVisible && (
          <div style={{ textAlign: "center", marginTop: "30px", marginBottom: "10px" }}>
          <p style={{ width: "650px" }}>Restrict people from knowing you online/offline status<br />
            Protect yourself from unwanted interaction <br />
            without block or unfollow</p>
          <div style={{ marginLeft: "-200px", marginTop: "25px", marginBottom: "30px" }}>
            <p>Arkaz</p>
            <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}><label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
            <p>Arkaz</p>
            <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}><label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
            <p>Arkaz</p>
            <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}><label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
            <p>Arkaz</p>
            <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}><label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
            <p>Arkaz</p>
            <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}><label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
            <p>Arkaz</p>
            <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}><label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        )}
      </div>

      <div>
        <button
          style={buttonStyle}
          onClick={toggleAccountsyoufollow}
        >
          <strong>Accounts you follow</strong>
          <span style={arrowStyle}>
            {
              AccountsyoufollowVisible ? (
                <img src="images/v2.png" />
              ) : (
                <img src="images/v1.png" />
              )
            }
          </span>
        </button>
        {AccountsyoufollowVisible && (
          <div style={{ textAlign: "center", marginTop: "30px", marginBottom: "10px" }}>
          <p style={{ width: "650px" }}>Restrict people from knowing you online/offline status<br />
            Protect yourself from unwanted interaction <br />
            without block or unfollow</p>
          <div style={{ marginLeft: "-200px", marginTop: "25px", marginBottom: "30px" }}>
            <p>Arkaz</p>
            <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}><label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
            <p>Arkaz</p>
            <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}><label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
            <p>Arkaz</p>
            <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}><label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
            <p>Arkaz</p>
            <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}><label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
            <p>Arkaz</p>
            <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}><label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
            <p>Arkaz</p>
            <div style={{ marginLeft: "700px", marginTop: "-25px", marginBottom:"9px" }}><label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        )}
      </div>


    </div>
      );
}

      export default Connections;
