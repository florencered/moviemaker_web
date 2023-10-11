import React, { useState } from "react";
import { Link } from "react-router-dom";

const SelectDomain = () => {


  const [domain, setDomain] = useState("");

  const handleDomainChange = (e) => {
    setDomain(e.target.value);
  };
  console.log(domain);

  return (
    <div className="w-full h-screen flex justify-center">
      <div className="w-10/12 h-full flex justify-between items-center">
        <img src="/images/images/reel.png" alt=".." className="h-screen lg:block hidden w-24" />

        <img src="/images/flixdin.png" alt=".." className="md:block hidden" />

          <div
            className="sm:w-96 w-80 shrink-0 rounded-3xl border-2 border-[#978839] bg-[#fff] flex flex-col items-center"
            style={{ height: "680px" }}
          >
            <img src="/images/domain.png" className="mt-5" />
            <div className="flex flex-col items-center mt-2">
              <h1 className="font-semibold text-xl">Select Domain</h1>
              <p>The domain describes your main profession.</p>
            </div>
            <div className="w-5/6 flex flex-col gap-3 mt-8 text-base font-light leading-4">
              <div className="flex flex-row-reverse w-full justify-between items-center">
                <input
                  type="radio"
                  id="actor"
                  name="domain"
                  value="Actor"
                  className="checked:text-[#978839] cursor-pointer"
                  onChange={handleDomainChange}
                />
                <label htmlFor="actor">Actor</label>
              </div>
              <div className="flex flex-row-reverse w-full justify-between items-center">
                <input
                  type="radio"
                  id="animation"
                  name="domain"
                  value="Animation"
                  className="checked:text-[#978839] cursor-pointer"
                  onChange={handleDomainChange}
                />
                <label htmlFor="animation">Animation</label>
              </div>
              <div className="flex flex-row-reverse w-full justify-between items-center">
                <input
                  type="radio"
                  id="artdirector"
                  name="domain"
                  value="Art Director"
                  className="checked:text-[#978839] cursor-pointer"
                  onChange={handleDomainChange}
                />
                <label htmlFor="artdirector">Art Director</label>
              </div>
              <div className="flex flex-row-reverse w-full justify-between items-center">
                <input
                  type="radio"
                  id="cinematographer"
                  name="domain"
                  value="Cinematographer"
                  className="checked:text-[#978839] cursor-pointer"
                  onChange={handleDomainChange}
                />
                <label htmlFor="cinematographer">Cinematographer</label>
              </div>
              <div className="flex flex-row-reverse w-full justify-between items-center">
                <input
                  type="radio"
                  id="director"
                  name="domain"
                  value="Director"
                  className="checked:text-[#978839] cursor-pointer"
                  onChange={handleDomainChange}
                />
                <label htmlFor="director">Director</label>
              </div>
              <div className="flex flex-row-reverse w-full justify-between items-center">
                <input
                  type="radio"
                  id="editor"
                  name="domain"
                  value="Editor"
                  className="checked:text-[#978839] cursor-pointer"
                  onChange={handleDomainChange}
                />
                <label htmlFor="editor">Editor</label>
              </div>
              <div className="flex flex-row-reverse w-full justify-between items-center">
                <input
                  type="radio"
                  id="musicdirector"
                  name="domain"
                  value="Music Director"
                  className="checked:text-[#978839] cursor-pointer"
                  onChange={handleDomainChange}
                />
                <label htmlFor="musicdirector">Music Director</label>
              </div>
              <div className="flex flex-row-reverse w-full justify-between items-center">
                <input
                  type="radio"
                  id="screenwriter"
                  name="domain"
                  value="Screenwriter"
                  className="checked:text-[#978839] cursor-pointer"
                  onChange={handleDomainChange}
                />
                <label htmlFor="screenwriter">Screenwriter</label>
              </div>
              <div className="flex flex-row-reverse w-full justify-between items-center">
                <input
                  type="radio"
                  id="Sounddesigner"
                  name="domain"
                  value="Sound Designer"
                  className="checked:text-[#978839] cursor-pointer"
                  onChange={handleDomainChange}
                />
                <label htmlFor="Sounddesigner">Sound Designer</label>
              </div>
              <div className="flex flex-row-reverse w-full justify-between items-center">
                <input
                  type="radio"
                  id="VFXArtist"
                  name="domain"
                  value="VFX Artist"
                  className="checked:text-[#978839] cursor-pointer"
                  onChange={handleDomainChange}
                />
                <label htmlFor="VFXArtist">VFX Artist</label>
              </div>
              <div className="flex flex-row-reverse w-full justify-between items-center">
                <input
                  type="radio"
                  id="Writer"
                  name="domain"
                  value="Writer"
                  className="checked:text-[#978839] cursor-pointer"
                  onChange={handleDomainChange}
                />
                <label htmlFor="Writer">Writer</label>
              </div>
              <div className="flex flex-row-reverse w-full justify-between items-center">
                <input
                  type="radio"
                  id="Producer"
                  name="domain"
                  value="Producer"
                  className="checked:text-[#978839] cursor-pointer"
                  onChange={handleDomainChange}
                />
                <label htmlFor="Producer">Producer</label>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 mt-4">
              <Link
                to={'/register/addskills'}
                className="bg-[#C6B34E] flex items-center justify-center w-24 h-9 shrink-0 rounded-3xl"
              >
                Next
              </Link>
              <Link
                to={"/register/addmobile"}
                className="text-[#978839] text-base"
              >
                Go back
              </Link>
            </div>
            <div className="text-[#00000099] text-xs font-light mt-3">
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

export default SelectDomain;
