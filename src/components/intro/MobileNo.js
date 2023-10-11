import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const MobileNo = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [mobilewindow, setMobilewindow] = useState(true);

  const handleOptClick = () => {
    setMobilewindow(false);
  };
  const handleVerification = (e)=>{
    e.preventDefault();
    navigate("/register/adddomain")
  }
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-10/12 h-full flex justify-between items-center">
        <img src="/images/images/reel.png" alt=".." className="h-screen lg:block hidden w-24" />
        <img src="/images/flixdin.png" alt=".." className="md:block hidden" />
        <div
          className="sm:w-96 w-80 rounded-3xl border-2 border-[#978839] bg-[#fff] flex flex-col items-center justify-between py-5"
          style={{ height: "680px" }}
        >
          {mobilewindow && (
            <>
              <div className="flex flex-col items-center gap-8 mt-14">
                <img src="/images/call.png" />
                <h1 className="text-xl font-semibold">
                  Add your mobile number:
                </h1>
                <input
                  type="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-64 h-11 border-2 border-[#978839] rounded-xl py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#978839]"
                />
                <Link
                  className="bg-[#C6B34E] flex items-center justify-center w-40 h-11 shrink-0 rounded-3xl"
                  onClick={handleOptClick}
                >
                  Confirm
                </Link>
                <Link
                  className="text-[#978839] text-base"
                  to={"/register/addbirth"}
                >
                  Go back
                </Link>
              </div>
              <div className="text-[#00000099] text-xs font-light">
                Already have an account?{" "}
                <Link to={"/login"} className="text-[#C6B34E]">
                  Login!
                </Link>
              </div>
            </>
          )}
          {!mobilewindow && (
            <>
              <div className="flex flex-col items-center gap-8 mt-14">
                <img src="/images/otp.png" />
                
                <div className="flex flex-col items-center">
                  <h1 className="text-xl font-semibold text-center w-full">
                    Let’s get your phone number verified.
                  </h1>
                  <p>
                    Enter the six digit code we sent to:{" "}
                    {phoneNumber?.toString().slice(0, 6)}****
                  </p>
                </div>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="######"
                  className="w-64 h-11 border-2 border-[#978839] rounded-xl py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#978839]"
                />
                <Link
                  className="bg-[#C6B34E] flex items-center justify-center w-40 h-11 shrink-0 rounded-3xl"
                  onClick={handleVerification}

                >
                  Confirm
                </Link>
                <div className="w-80 flex gap-2 justify-center font-semibold">
                  <Link
                    className="text-[#978839]"
                    onClick={() => setMobilewindow(true)}
                  >
                    Change number
                  </Link>
                  <div className=" text-[#978839]">|</div>
                  <Link className="text-[#978839]">Request new code</Link>
                </div>
              </div>
              <div className="text-[#00000099] text-xs font-light">
                Already have an account?{" "}
                <Link to={"/login"} className="text-[#C6B34E]">
                  Login!
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNo;
