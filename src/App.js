import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Domainpage from "./components/home/sections/domain/Domainpage";
import "./App.css";
import Call from "./components/connectionCalls/connectionCalls";
import Home from "./components/home/Home";
import Explore from "./components/explore/Explore";
import AboutUs from "./components/aboutUs/aboutUs";
import Notifications from "./components/notifications/Notifications.jsx";

function App() {
  return (
    <div className="App bg-[#FFFADD]">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />{" "}
          <Route path="/domainpage" element={<Domainpage />} />{" "}
          <Route path="/explore" element={<Explore />} />{" "}
          <Route path="/aboutUs" element={<AboutUs />} />{" "}
          <Route path="/notifications" element={<Notifications />} />{" "}
          <Route path="/connectionCalls" element={<Call />} />{" "}
        </Routes>{" "}
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
