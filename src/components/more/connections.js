import React, { useState } from "react";
import SwitchComponent from "./toggle";

function Connections() {
  const [RestrictedAccountsVisible, setRestrictedAccountsVisible] =
    useState(false);
  const [BlockedAccountsVisible, setBlockedAccountsVisible] = useState(false);
  const [MutedAccountsVisible, setMutedAccountsVisible] = useState(false);
  const [AccountsyoufollowVisible, setAccountsyoufollowVisible] =
    useState(false);

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

  return (
    <div className="ml-32  w-400 mt-30 text-left">
      <div className="mb-10">
        <button className="relative pr-16" onClick={toggleRestrictedAccounts}>
          <strong>Restricted Accounts</strong>
          <span className="absolute right-2">
            {RestrictedAccountsVisible ? (
              <img src="images/v2.png" />
            ) : (
              <img src="images/v1.png" />
            )}
          </span>
        </button>
        {RestrictedAccountsVisible && (
          <div className="text-center mt-30 mb-10">
            <p className="w-[650px] mt-10">
              Restrict people from knowing you online/offline status
              <br />
              Protect yourself from unwanted interaction <br />
              without block or unfollow
            </p>
            <div className="ml-[-200px] mt-25 mb-10">
              <p>Arkaz</p>
              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>
              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>
              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>
              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>
              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>
              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mb-10">
        <button className="relative pr-16" onClick={toggleBlockedAccounts}>
          <strong>Blocked Accounts</strong>
          <span className="absolute right-2">
            {BlockedAccountsVisible ? (
              <img src="images/v2.png" />
            ) : (
              <img src="images/v1.png" />
            )}
          </span>
        </button>
        {BlockedAccountsVisible && (
          <div className="text-center mt-30 mb-10">
            <p className="w-[650px] mt-10">
              Restrict people from knowing you online/offline status
              <br />
              Protect yourself from unwanted interaction <br />
              without block or unfollow
            </p>
            <div className="ml-[-200px] mt-25 mb-10">
              <p>Arkaz</p>
              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>
              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>
              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>
              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>
              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>
              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mb-10">
        <button className="relative pr-16" onClick={toggleMutedAccounts}>
          <strong>Muted Accounts</strong>
          <span className="absolute right-2">
            {MutedAccountsVisible ? (
              <img src="images/v2.png" />
            ) : (
              <img src="images/v1.png" />
            )}
          </span>
        </button>
        {MutedAccountsVisible && (
          <div className="text-center mt-30 mb-10">
            <p className="w-96 mt-10">
              Restrict people from knowing you online/offline status
              <br />
              Protect yourself from unwanted interaction <br />
              without block or unfollow
            </p>
            <div className="ml-[-200px] mt-25 mb-30">
              <p>Arkaz</p>
              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>

              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>

              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>

              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>

              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>

              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        <button className="relative pr-16" onClick={toggleAccountsyoufollow}>
          <strong>Accounts you follow</strong>
          <span className="absolute right-2">
            {AccountsyoufollowVisible ? (
              <img src="images/v2.png" />
            ) : (
              <img src="images/v1.png" />
            )}
          </span>
        </button>
        {AccountsyoufollowVisible && (
          <div className="text-center mt-30 mb-10">
            <p className="w-96 mt-10">
              Restrict people from knowing you online/offline status
              <br />
              Protect yourself from unwanted interaction <br />
              without block or unfollow
            </p>
            <div className="ml-[-200px] mt-25 mb-30">
              <p>Arkaz</p>
              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>

              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>

              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>

              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>

              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
              <p>Arkaz</p>

              <div className="ml-[700px] mt-[-25px] mb-3">
                <SwitchComponent />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Connections;
