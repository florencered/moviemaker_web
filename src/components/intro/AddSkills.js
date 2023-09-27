import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddSkills = () => {
  const [skills, setSkills] = useState([]);

  const handleSkilsChange = (e) => {
    if (skills.includes(e.target.value)) {
      const index = skills.indexOf(e.target.value);
      if (index > -1) {
        skills.splice(index, 1);
      }
    } else {
      setSkills((prev) => [...prev, e.target.value]);
    }
  };
  console.log(skills);
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-10/12 h-full flex justify-between items-center">
        <img src="/images/images/reel.png" alt=".." className="h-screen lg:block hidden w-24" />
        <img src="/images/flixdin.png" alt=".." className="md:block hidden" />
        <div
          className="sm:w-96 w-80 rounded-3xl border-2 border-[#978839] bg-[#fff] flex flex-col items-center"
          style={{ height: "680px" }}
        >
          <img src="/images/skills.png" className="mt-5" />
          <div className="flex flex-col items-center mt-2">
            <h1 className="font-semibold text-xl">Add Other Skills</h1>
            <p className="text-sm font-light leading-5">
              Add other skills other than the main domain selected.
            </p>
          </div>
          <div className="w-5/6 flex flex-col gap-3 mt-8 text-base font-light leading-4 border-2 border-[#978839] rounded-2xl p-4">
            <div className="flex flex-row-reverse w-full justify-between items-center">
              <input
                type="checkbox"
                id="actor"
                value="Actor"
                className="rounded-full text-[#978839]"
                onChange={handleSkilsChange}
              />
              <label htmlFor="actor">Actor</label>
            </div>
            <div className="flex flex-row-reverse w-full justify-between items-center">
              <input
                type="checkbox"
                id="animation"
                value="Animation"
                className="rounded-full text-[#978839]"
                onChange={handleSkilsChange}
              />
              <label htmlFor="animation">Animation</label>
            </div>
            <div className="flex flex-row-reverse w-full justify-between items-center">
              <input
                type="checkbox"
                id="artdirector"
                value="Art Director"
                className="rounded-full text-[#978839]"
                onChange={handleSkilsChange}
              />
              <label htmlFor="artdirector">Art Director</label>
            </div>
            <div className="flex flex-row-reverse w-full justify-between items-center">
              <input
                type="checkbox"
                id="cinematographer"
                value="Cinematographer"
                className="rounded-full text-[#978839]"
                onChange={handleSkilsChange}
              />
              <label htmlFor="cinematographer">Cinematographer</label>
            </div>
            <div className="flex flex-row-reverse w-full justify-between items-center">
              <input
                type="checkbox"
                id="director"
                value="Director"
                className="rounded-full text-[#978839]"
                onChange={handleSkilsChange}
              />
              <label htmlFor="director">Director</label>
            </div>
            <div className="flex flex-row-reverse w-full justify-between items-center">
              <input
                type="checkbox"
                id="editor"
                value="Editor"
                className="rounded-full text-[#978839]"
                onChange={handleSkilsChange}
              />
              <label htmlFor="editor">Editor</label>
            </div>
            <div className="flex flex-row-reverse w-full justify-between items-center">
              <input
                type="checkbox"
                id="musicdirector"
                value="Music Director"
                className="rounded-full text-[#978839]"
                onChange={handleSkilsChange}
              />
              <label htmlFor="musicdirector">Music Director</label>
            </div>
            <div className="flex flex-row-reverse w-full justify-between items-center">
              <input
                type="checkbox"
                id="screenwriter"
                value="Screenwriter"
                className="rounded-full text-[#978839]"
                onChange={handleSkilsChange}
              />
              <label htmlFor="screenwriter">Screenwriter</label>
            </div>
            <div className="flex flex-row-reverse w-full justify-between items-center">
              <input
                type="checkbox"
                id="Sounddesigner"
                value="Sound Designer"
                className="rounded-full text-[#978839]"
                onChange={handleSkilsChange}
              />
              <label htmlFor="Sounddesigner">Sound Designer</label>
            </div>
            <div className="flex flex-row-reverse w-full justify-between items-center">
              <input
                type="checkbox"
                id="VFXArtist"
                value="VFX Artist"
                className="rounded-full text-[#978839]"
                onChange={handleSkilsChange}
              />
              <label htmlFor="VFXArtist">VFX Artist</label>
            </div>
            <div className="flex flex-row-reverse w-full justify-between items-center">
              <input
                type="checkbox"
                id="Writer"
                value="Writer"
                className="rounded-full text-[#978839]"
                onChange={handleSkilsChange}
              />
              <label htmlFor="Writer">Writer</label>
            </div>
            <div className="flex flex-row-reverse w-full justify-between items-center">
              <input
                type="checkbox"
                id="Producer"
                value="Producer"
                className="rounded-full text-[#978839]"
                onChange={handleSkilsChange}
              />
              <label htmlFor="Producer">Producer</label>
            </div>
          </div>
          <div className="flex flex-col items-center mt-4">
            <Link
              className="bg-[#C6B34E] flex items-center justify-center w-32 h-11 shrink-0 rounded-3xl"
              to={"/register/termsandconditions"}
            >
              Add Skills
            </Link>
          </div>
          <div className="text-[#00000099] text-xs font-light mt-1">
            Already have an account?{" "}
            <Link to={"/login"} className="text-[#C6B34E]">
              Login!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSkills;
