import React from "react";
import { Link } from "react-router-dom";

const TAndC = () => {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-10/12 h-full flex justify-between items-center">
        <img src="/images/images/reel.png" alt=".." className="h-screen w-24" />
        <div></div>
        <img src="/images/flixdin.png" alt=".." className="" />
        <div
          className="w-96 shrink-0 rounded-3xl border-2 border-[#978839] bg-[#fff] flex flex-col items-center justify-between py-3"
          style={{ height: "680px" }}
        >
          <div className="flex flex-col items-center gap-4">
            <img src="/images/T&C.png" className="mt-5" />
            <div className="flex flex-col items-center gap-3">
              <h1 className=" text-xl font-semibold">Agree to flixdin terms and policies</h1>
              <div className="flex flex-col items-center gap-2 text-sm px-6">
                <p>
                  People who use our service may have already entered your
                  number.
                </p>
                <p>
                  By clicking on I agree, you agree to create an account and to
                  Instagram.
                </p>
                <p>
                  Learn More The Privacy Policy describes the ways we can use
                  the information we collect when you create an account. For
                  example, we use this information to provide, personalize and
                  improve our products, including ads.
                </p>
              </div>
              <Link
              to={'/welcome'}
                className="bg-[#C6B34E] flex items-center justify-center w-24 h-9 shrink-0 rounded-3xl"
              >
                I agree
              </Link>
            </div>
          </div>
          <div className="text-[#00000099] text-xs font-light mt-3">
            Already have an account?{" "}
            <Link to={"/login"} className="text-[#C6B34E]">
              Login!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TAndC;
