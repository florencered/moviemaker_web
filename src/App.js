import { BrowserRouter, Routes, Route } from "react-router-dom";
import Domainpage from "./components/home/sections/domain/Domainpage";
import "./App.css";
import Home from "./components/home/home";

function App() {
  return (
    <div className="App bg-[#FFFADD]">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/domainpage" element={<Domainpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
