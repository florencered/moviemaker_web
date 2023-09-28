import React, { useState } from "react";
import { Link } from "react-router-dom";

const Birthday = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => currentYear - index);

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-10/12 h-full flex justify-between items-center">
        <img src="/images/images/reel.png" alt=".." className="h-screen lg:block hidden w-24" />
        <img src="/images/flixdin.png" alt=".." className="md:block hidden" />
        <div
          className="sm:w-96 w-80 shrink-0 rounded-3xl border-2 border-[#978839] bg-[#fff] flex flex-col items-center justify-between py-5"
          style={{ height: "680px" }}
        >
          <img src="/images/cake.png" className="mt-9"/>
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-xl font-semibold">Add your date of birth</h1>
            <p className="font-light">This won't be a part of a your public profile.</p>
          </div>
          <div className="flex gap-3">
            <select
              id="day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="w-14 h-7 text-xs p-0 px-2 border-2 border-[#978839] rounded-md"
            >
              <option value="" className="w-14 h-7 text-sm">
                Day
              </option>
              {days.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
            <select
              id="month"
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="w-24 h-7 text-xs p-0 px-3 border-2 border-[#978839] rounded-md"
            >
              <option value="">Month</option>
              {months.map((m, index) => (
                <option key={index} value={index + 1}>
                  {m}
                </option>
              ))}
            </select>
            <select
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-20 h-7 text-xs p-0 px-3 border-2 border-[#978839] rounded-md"
            >
              <option value="">Year</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
          </div>
          <div className="text-center px-4">
            Please use your own date of birth even if this is for a business or
            some other purpose. No one will see this on your profile.
          </div>
          <div className="flex flex-col items-center gap-3">
            <Link to={'/register/addmobile'} className="bg-[#C6B34E] flex items-center justify-center w-40 h-11 shrink-0 rounded-3xl">Next</Link>
            <Link to={"/register"} className="text-[#978839] text-base">Go back</Link>
          </div>
          <div className="text-[#00000099] text-xs font-light">
            Already have an account? <Link to={"/login"} className="text-[#C6B34E]">Login!</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Birthday;
