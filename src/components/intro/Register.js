
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name,setName] = useState("")
    const [confirmpassword,setConfirmPassword] = useState("");



    
  const handleRegister = () => {};

  return (
    <div className="w-full h-screen flex justify-center">
    <div className="w-10/12 h-full flex justify-between items-center">
      <img src="/images/images/reel.png" alt=".." className="h-screen lg:block hidden w-24" />

      <img src="/images/flixdin.png" alt=".." className="md:block hidden" />
      <div
        className="sm:w-96 w-80 rounded-3xl border-2 border-[#978839] bg-[#fff] flex flex-col items-center"
        style={{ height: "680px" }}
      >
        <div className="w-64">
          <img src="/images/images/flix_Logo.png" className="" />
        </div>
        <div className="w-full flex h-full flex-col items-center justify-between">
          <div className="text-3xl font-normal text-center text-[#978839]">
            Register
          </div>
          <div className="flex flex-col w-9/12 gap-1">
            <label className="text-[#978839] text-sm font-light tracking-tight">
              Name
            </label>
            <input
              className="w-full h-10 border-2 border-[#978839] rounded-3xl text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#978839]"
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="text-[#978839] text-sm font-light tracking-tight">
              Username
            </label>
            <input
              className="w-full h-10 border-2 border-[#978839] rounded-3xl py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#978839]"
              type="text"
              value={username}
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="text-[#978839] text-sm font-light tracking-tight">
              Enter password
            </label>
            <input
              className="w-full h-10 border-2 border-[#978839] rounded-3xl py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#978839]"
              type="password"
              value={password}
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="text-[#978839] text-sm font-light tracking-tight">
              Re-Enter Password
            </label>
            <input
              className="w-full h-10 border-2 border-[#978839] rounded-3xl py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#978839]"
              type="password"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Link to={'/register/addbirth'}
            className="w-40 flex items-center justify-center h-11 mt-4 bg-[#c6b34e] rounded-3xl text-lg"
            onClick={handleRegister}

          >
            Register
          </Link>

          <div className="text-[#00000099] text-xs font-light mb-3">
            <p >
              Already have an account?
              <Link to="/login" className="text-[#C6B34E]">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Register
