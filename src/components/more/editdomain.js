import React from "react";

const Editdomain = () => {
  const genders = [
    "Actor",
    "Animation",
    "Art Director",
    "Cinematographer",
    "Director",
    "Editor",
    "Music Director",
    "Screenwriter",
    "Sound Designer",
    "VFX Artist",
    "Writer",
    "Producer",
  ];

  return (
    <div className="ml-48">
      <div className="w-[437px]  h-[458px] relative top-10 rounded-[20px] border  border-[#978839] flex flex-col">
        <div>
          <p className="w-[120px] text-[#978839] ml-[20px]">
            <strong>Edit Domain</strong>
          </p>
          {genders.map((gender) => (
            <div className="ml-[20px] mb-[10px]">
              <div key={gender}>
                <input
                  type="radio"
                  value={gender}
                  name="gender"
                  id={gender.toLowerCase()}
                />
                <label htmlFor={gender.toLowerCase()}>{gender}</label>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Editdomain;
