// import React, { Component } from 'react';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from "./components/home/home"
import Auth from './components/intro/Auth.jsx';
import LoginForm from './components/intro/Login.jsx';
import RegisterForm from './components/intro/Register.jsx';
import Numberverificationform from './components/intro/Numberverification.jsx';
import Thanks from './components/intro/Thanks';

function App() {
  return (
    <div className="App bg-[#FFFADD]">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Auth><LoginForm /></Auth>} />
            <Route path="register" element={<Auth><RegisterForm /></Auth>} />
            <Route path="verification" element={<Auth><Numberverificationform /></Auth>} />
            <Route path="thanks" element={<Thanks />} />
            <Route path = "/home" element = {<Home/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
