import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import './index.css';
import Home from "./components/home/home";
import Explore from "./components/explore/explore.jsx";
import Flicks from "./components/flicks/flicks.jsx";


function App() {
  return (
    <div className="App bg-[#FFFADD] h-screen">
      <BrowserRouter>
        <Routes>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/explore" element = {<Explore />} />
        <Route path = "/flicks" element = {<Flicks />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
