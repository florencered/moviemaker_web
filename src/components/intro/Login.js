import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import {signInWithEmailAndPassword, getAuth} from 'firebase/auth'

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const auth = getAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/home');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode)
      })
  };

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-10/12 h-full flex justify-between items-center">
        <img src="/images/images/reel.png" alt=".." className="h-screen lg:block hidden w-24 " />
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
              Login
            </div>
            <div className="flex flex-col gap-2 w-9/12">
              <label className="text-[#978839] text-sm font-light tracking-tight">
                Enter username/email/mobile no.
              </label>
              <input
                className="w-full h-12 border-2 border-[#978839] rounded-3xl py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#978839]"
                type="text"
                placeholder="Enter field"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label className="text-[#978839] text-sm font-light tracking-tight">
                Enter password
              </label>
              <input
                className="w-full h-12 border-2 border-[#978839] rounded-3xl py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#978839]"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-40 h-11 bg-[#c6b34e] rounded-3xl"
              onClick={handleLogin}
            >
              Login
            </button>

            <div className="text-[#00000099] text-xs font-light mb-8">
              <p>
                Don't have an account?
                <Link to="/register" className="text-[#C6B34E]">
                  Register
                </Link>
              </p>
              <Link className="text-[#C6B34E]">Forgot your password?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
