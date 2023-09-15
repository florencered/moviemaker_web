import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Domainpage from "./components/home/sections/domain/Domainpage";
import "./App.css";
import Call from "./components/connectionCalls/ConnectionCalls";
import Home from "./components/home/Home";
import Explore from "./components/explore/Explore";
import AboutUs from "./components/aboutUs/AboutUs";
import Notifications from "./components/notifications/Notifications";

import More from "./components/more/Settings";

import Messages from "./components/messages/Messages";

import Intro from "./components/intro/Intro";
import Login from "./components/intro/Login";
import Register from "./components/intro/Register";
import Birthday from "./components/intro/Birthday"
import SelectDomain from "./components/intro/SelectDomain";
import TAndC from "./components/intro/TAndC";
import MobileNo from "./components/intro/MobileNo";
import AddSkills from "./components/intro/AddSkills";
import Welcome from "./components/intro/Welcome";
import Settings from "./components/more/Settings";


function App() {
  return (
    <div className="App bg-[#FFFADD]">
      <BrowserRouter>
        <Routes>
          <Route path="/intro" element={<Intro/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/register/addbirth" element={<Birthday/>}/>
          <Route path="/register/addmobile" element={<MobileNo/>}/>
          <Route path="/register/adddomain" element={<SelectDomain/>}/>
          <Route path="/register/addskills" element={<AddSkills/>}/>
          <Route path="/register/termsandconditions" element={<TAndC/>}/>
          <Route path="/welcome" element={<Welcome/>}/>
          <Route path="/home" element={<Home />} />{" "}
          <Route path="/domainpage" element={<Domainpage />} />{" "}
          <Route path="/explore" element={<Explore />} />{" "}
          <Route path="/aboutUs" element={<AboutUs />} />{" "}
          <Route path="/notifications" element={<Notifications />} />{" "}
          <Route path="/connectionCalls" element={<Call />} />{" "}
          <Route path="/message" element={<Messages />} />{" "}
          <Route path="/more/Settings" element={<Settings />} />{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
