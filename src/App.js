import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from "./components/home/home";
import Explore from "./components/explore/explore.jsx";
import aboutUs from "./components/aboutUs/aboutUs";
import Home from "./components/myProfile/myProfile";



function App() {
  return (
    <div className="App bg-[#FFFADD]">
      <BrowserRouter>
        <Routes>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/Explore" element = {<Explore />} />
        <Route path = "/aboutUs" element = {<aboutUs />} />
        <Route path = "/myProfile" element = {<myProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
