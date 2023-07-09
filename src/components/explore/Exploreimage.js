import React from "react";
import {Imagedatas} from "./data/Images";

const Exploreimage = () => {

  return (
    <div>
      <div className="grid grid-cols-3 bg-[#C6B34E] bg-opacity-[22%] rounded-md">
        {Imagedatas.map((image)=>(
          <img key={image.id} src={image.src} alt={image.description} className="images"/>
        ))}
      </div>
    </div>
  );
};

export default Exploreimage;
