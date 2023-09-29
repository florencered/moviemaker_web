
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Domainpage from "./components/home/sections/domain/Domainpage";
import "./App.css";
import Home from "./components/home/home";
import Explore from "./components/explore/explore.js";
import Notifications from "./components/notifications/notifications.js"
import ProfileHome from "./components/myProfile/myProfile.js";
import CommentPage from "./components/myProfile/Commentpage.js";
import PhotoPage from "./components/myProfile/PhotoPage.js";
import PortifolioPage from "./components/myProfile/PortifolioPage";

function App() {
  return (
    <div className="App bg-[#FFFADD] max-h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/domainpage" element={<Domainpage />} />
          <Route path="/Explore" element={<Explore />} />
          <Route path="/notifications" element={<Notifications/>}/>
          <Route path="/Profile" element={<ProfileHome/>}/>
          <Route path="/Profile/CommentPage" element={<CommentPage/>}/>
          <Route path="/Profile/PhotoPage" element={<PhotoPage/>}/>
          <Route path="/Profile/PortifolioPage" element={<PortifolioPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
