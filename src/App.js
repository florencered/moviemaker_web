

import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Domainpage from "./components/home/sections/domain/Domainpage";
import "./App.css";

import Home from "./components/home/home";
import Explore from "./components/explore/explore.jsx";
import Notifications from "./components/notifications/notifications"

function App() {
  return (
    <div className="App bg-[#FFFADD]">
      <BrowserRouter>
        <Routes>

          <Route path="/home" element={<Home />} />
          <Route path="/domainpage" element={<Domainpage />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
