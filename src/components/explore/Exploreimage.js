import React from "react";
import {Imagedatas} from "./data/images";

const Exploreimage = () => {

  return (
    <div>
      <div className="grid grid-cols-3 bg-[#C6B34E] bg-opacity-[22%] rounded-md">
        {Imagedatas.map((image)=>(
          <img key={image.id} src={image.src} alt={image.description} className="w-[250px] h-[180px] md:w-[300px] md:h-[220px] lg:w-[320px] lg:h-[270px] p-[5.5px] hover:transform hover:scale-105 duration-300"/>
        ))}
      </div>
    </div>
  );
};

export default Exploreimage;
