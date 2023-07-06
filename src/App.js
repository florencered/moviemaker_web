import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from "./components/home/home"
import aboutUs from "./components/aboutUs/aboutUs"
import Profile from "./components/myProfile/Profile"



function App() {
  return (
    <div className="App bg-[#FFFADD]">
      <BrowserRouter>
        <Routes>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/aboutUs" element = {<aboutUs/>}/>
        <Route path = "/profile" element = {<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
