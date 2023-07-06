import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth'
import { initFirebase } from '../../firebase/firebaseApp';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const LoginForm = () => {
  const navigate = useNavigate();
  initFirebase();
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);
  
  const loginHandler = async (e) => {
    e.preventDefault();
    const res = await signInWithEmailAndPassword(auth, email, password);
    if (user) {
      navigate("/home");
    }
  }
  return (
    <>
      <img src="/images/logo.png"className="mx-auto w-24" alt="" />
      <h2 className="text-3xl font-normal text-center text-[#978839]">Login</h2>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Enter email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Enter field"
          className="input bg-white rounded-full border-[#978839]"
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Enter password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="input rounded-full border-[#978839] bg-white"
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <div className="form-control mt-6">
        <button
          className="btn bg-[#C6B34E] normal-case rounded-full border-none text-black hover:bg-[#978839]"
          onClick={loginHandler}>
          Login
        </button>
        <label className="label text-center mx-auto mt-8">
          <Link to="/register" className="label-text-alt link link-hover">
            Don’t have an account? Register!
          </Link>
        </label>
      </div>
    </>
  );
};

export default LoginForm;
