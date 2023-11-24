import React, { useState } from "react";
import Nav from "../sidebar/Sidebar";

function Heading(param) {
  const [showComponent, setShowComponent] = useState(false);

  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };
    return (
      <>
      <div>
        <button onClick={toggleComponent} class="text-5xl font-bold text-[#C1AD42] flex ml-12 mt-4">
          {" "}
          {param.param1}{" "}
        </button>{" "}
        {showComponent && <Nav />}
      </div> 
      </>
    );
}

export default Heading