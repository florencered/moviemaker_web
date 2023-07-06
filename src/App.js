import React, { Component } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from "./components/home/home";
import Explore from "./components/explore/explore.jsx";


function App() {
  return (
    <div className="App bg-[#FFFADD]">
      <BrowserRouter>
        <Routes>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/Explore" element = {<Explore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
