import React, { useState } from "react";

const RadioButtons = ({ selectedValue }) => {
  const [value, setValue] = useState(selectedValue);

  const handleValueChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  const types = [
    { id: 1, name: "Actor" },
    { id: 2, name: "Animation" },
    { id: 3, name: "Art Director" },
    { id: 4, name: "Cinematographer" },
    { id: 5, name: "Director" },
    { id: 6, name: "Editor" },
    { id: 7, name: "Film Gear" },
    { id: 8, name: "Film Critic" },
    { id: 9, name: "Music Director" },
    { id: 10, name: "Producer" },
    { id: 11, name: "Production House" },
    { id: 12, name: "Screenwriter" },
    { id: 13, name: "Sound Designer" },
    { id: 14, name: "VFX Artist" },
    { id: 15, name: "Writer" },
  ];

  //in the second div make it absolute if you want the domain to overlap
  return (
    <div className=" items-center w-[28rem]  display: block;">
      <div className="flex flex-col  bg-radio rounded-lg ">
        <div className="text-black font-medium border-b-2 border-[#b1991e] text-center  border-color:#b1991e">
          Select Domain{" "}
        </div>{" "}
        {types.map((type) => (
          <label
            key={type.id}
            className="flex mt-1 justify-between px-3 cursor-pointer"
          >
            <span className=""> {type.name} </span>{" "}
            <input
              type="radio"
              value={type.name}
              checked={value === type.name}
              onChange={handleValueChange}
              className="appearance-none w-4 h-4 border-4 border-white rounded-full bg-white hidden checked:block checked:bg-black checked:border-white focus:outline-none "
            />
          </label>
        ))}{" "}
      </div>{" "}
    </div>
  );
};

export default RadioButtons;
