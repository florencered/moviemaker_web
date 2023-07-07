import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { initFirebase } from "../../firebase/firebaseApp";
import { getDatabase, ref, set } from 'firebase/database';

const RegisterForm = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  initFirebase();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const [active, setActive] = useState("first");
  const [dob, setDob] = useState("");
  const [domain, setDomain] = useState("");
  const [skills, setSkills] = useState([]);
  let checkboxCount = 0;

  const registerUser = async (e) => {
    e.preventDefault();
    const temp = [...skills]
    const skillList = ["Animation", "Art Director", "Cinematographer", "Actor", "Director", "Editor", "Music Director", "Screenwriter", "Sound Designer", "VFX Artist", "Writer", "Producer"]
    const skillset = []
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] === 'true') {
        skillset.push(skillList[i])
      }
    }
    console.log(skillset);
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const db = getDatabase();
    set(ref(db, `users/${username}`), {
      name: name,
      email: email,
      username: username,
      phone: phone,
      dob: dob,
      domain: domain,
      skills: temp
    });
    navigate('/thanks');
  }

  const checkboxForm = (e) => {
    let temp = [...skills];
    temp[e.target.id - 1] === 'true' ? temp[e.target.id - 1] = 'false' : temp[e.target.id - 1] = 'true';
    setSkills(temp);

    checkboxCount = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if (checkboxCount === 0) {
      document.querySelectorAll('input[type="checkbox"]:not(:checked)').forEach((checkbox) => { checkbox.disabled = false });
    }
    else if (checkboxCount === 1) {
      document.querySelectorAll('input[type="checkbox"]:not(:checked)').forEach((checkbox) => { checkbox.disabled = false });
    }
    else if (checkboxCount === 2) {
      document.querySelectorAll('input[type="checkbox"]:not(:checked)').forEach((checkbox) => { checkbox.disabled = true });
    }
  }

  return (
    <>
      {active === "first" && <>
        <img src="/images/logo.png" className="mx-auto w-24" alt="" />
        <h2 className="text-3xl font-normal text-center text-[#978839]">
          Register
        </h2>
        <div className="form-control -mb-2 -mt-1">
          <label className="label py-1">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter name"
            className="input bg-white rounded-full border-[#978839]"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>

        <div className="form-control -mb-2 mt-1">
          <label className="label py-1">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter email"
            className="input rounded-full border-[#978839] bg-white"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-control -mb-2 -mt-1">
          <label className="label py-1">
            <span className="label-text">Username</span>
          </label>
          <input
            type="text"
            placeholder="Enter username"
            className="input rounded-full border-[#978839] bg-white"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="form-control -mb-2 mt-1">
          <label className="label py-1">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter password"
            className="input rounded-full border-[#978839] bg-white"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {/* <div className="form-control -mb-2 mt-1">
          <label className="label py-1">
            <span className="label-text">Re-Enter Password</span>
          </label>
          <input
            type="text"
            placeholder="Enter mobile no."
            className="input rounded-full border-[#978839] bg-white"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div> */}
        <div className="form-control -mb-2 mt-3">
          <button className="btn bg-[#C6B34E] normal-case rounded-full border-none text-black hover:bg-[#978839]"
            onClick={() => { setActive("second") }}>
            Register
          </button>
          <label className="label text-center mx-auto">
            <Link to="/" className="label-text-alt link link-hover">
              Already have an account? Login!
            </Link>
          </label>
        </div>
      </>}

      {active === "second" && <>
        <img src="/images/phone.png" className='mx-auto w-20 mt-24' alt="" />
        <h2 className="text-xl mt-8 font-semibold text-center text-black">Add your mobile number:</h2>
        <div className="form-control">
          <input type="text" className="input bg-white border-[#978839]"
            onChange={(e) => { setPhone(e.target.value) }}
            value={phone} />
        </div>
        <div className="form-control mt-6">
          <button
            className="btn bg-[#C6B34E] normal-case rounded-full border-none text-black hover:bg-[#978839]"
            onClick={() => { setActive("third") }}>
            Confirm
          </button>
          <p className="text-1xl font-semibold text-center text-[#978839]">
            <button onClick={() => { setActive("first") }}>
              Go back
            </button></p>
          <label className="label text-center mx-auto mt-8 ">
            <Link to="/" className="label-text-alt link link-hover">Already have an account? Login!</Link>
          </label>
        </div>
      </>}

      {active === "third" && <>
        <img src="/images/cake.png" className='mx-auto w-20' alt="" />
        <p className="text-1xl font-semibold text-center text-black">Add your date of birth</p>
        <p className="text-1xl font-normal text-center text-black">This won’t be a part of a your public profile.</p>
        <div className="bg-white flex items-center">
          <input type="date" className="input text-center bg-transparent w-full z-20 border-[#978839]"
            onChange={(e) => { setDob(e.target.value) }}
            value={dob} />
          <span className='-ml-8 z-0 text-xl'>📅</span>
        </div>
        <p className='text-black text-center text-xs'>Please use your own date of birth even if this is for a business or some other purpose. No one will see this on your profile.</p>
        <div className="form-control mt-6">
          <button className="btn bg-[#C6B34E] rounded-full border-none text-black hover:bg-[#978839] normal-case" onClick={() => { setActive("fourth") }}>Next</button>
          <p className="text-1xl font-semibold text-center text-[#978839]"><Link onClick={() => { setActive("second") }}>Go back</Link></p>
          <label className="label text-center mx-auto mt-8">
            <Link to="/register" className="label-text-alt link link-hover">Don’t have an account? Register!</Link>
          </label>
        </div>
      </>}

      {active === "fourth" && <>
        <img src="/images/film.png" className='mx-auto w-20' alt="" />
        <p className="text-md font-semibold text-center text-black">Select domain</p>
        <p className="text-xs font-normal text-center text-black">The domain describes your main profession.</p>
        <div className="radio-container flex flex-col text-black text-sm">
          <form onChange={(e) => { setDomain(e.target.value) }}>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Actor" /><span>Actor</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Animation" /><span>Animation</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Art Director" /><span>Art Director</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Cinematographer" /><span>Cinematographer</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Director" /><span>Director</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Editor" /><span>Editor</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Music Director" /><span>Music Director</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Screenwriter" /><span>Screenwriter</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Sound Designer" /><span>Sound Designer</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="VFX Artist" /><span>VFX Artist</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Writer" /><span>Writer</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="radio" id="domain" name="domain" value="Producer" /><span>Producer</span></div>
            <div className="form-control mt-2">
              <button type="submit" className="btn bg-[#C6B34E] rounded-full border-none text-black hover:bg-[#978839] normal-case" onClick={(e) => { e.preventDefault(); setActive("fifth") }}>Next</button>
              <p className="text-1xl font-semibold text-center text-[#978839]"><Link onClick={() => { setActive("third") }}>Go back</Link></p>
              <label className="label text-center mx-auto mt-2">
                <Link to="/" className="label-text-alt link link-hover">Already have an account? Login!</Link>
              </label>
            </div>
          </form>
        </div>
      </>}

      {active === "fifth" && <>
        <img src="/images/Skills.png" className='mx-auto w-24' alt="" />
        <p className="text-1xl font-semibold text-center text-black">Add Other Skills</p>
        <p className="text-1xl font-normal text-center text-black">Add other skills other than the main domain selected.</p>
        <form onChange={checkboxForm}>
          <div className="radio-container border border-[#978839] p-3 rounded-md flex flex-col text-black text-sm">
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="checkbox" id="1" name="Animation" value="Animation" /><span>Animation</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="checkbox" id="2" name="Art Director" value="Art Director" /><span>Art Director</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="checkbox" id="3" name="Cinematographer" value="Cinematographer" /><span>Cinematographer</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="checkbox" id="4" name="Actor" value="Actor" /><span>Actor</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="checkbox" id="5" name="Director" value="Director" /><span>Director</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="checkbox" id="6" name="Editor" value="Editor" /><span>Editor</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="checkbox" id="7" name="Music Director" value="Music Director" /><span>Music Director</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="checkbox" id="8" name="Screenwriter" value="Screenwriter" /><span>Screenwriter</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="checkbox" id="9" name="Sound Designer" value="Sound Designer" /><span>Sound Designer</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="checkbox" id="10" name="VFX Artist" value="VFX Artist" /><span>VFX Artist</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="checkbox" id="11" name="Writer" value="Writer" /><span>Writer</span></div>
            <div className='flex flex-row-reverse w-full justify-between items-center'><input type="checkbox" id="12" name="Producer" value="Producer" /><span>Producer</span></div>
          </div>
          <div className="form-control mt-2">
            <button type="submit" className="btn bg-[#C6B34E] rounded-full normal-case border-none text-black hover:bg-[#978839]" onClick={(e) => { e.preventDefault(); setActive("sixth"); }}>Add Skills</button>
            <label className="label text-center mx-auto mt-auto">
              <Link to="/" className="label-text-alt link link-hover">Already have an account? Login!</Link>
            </label>
          </div>
        </form>
      </>}

      {active === "sixth" && <>
        <img src="/images/Terms.png" className="mx-auto w-24" alt="" />
        <h2 className="text-1xl font-semibold text-center text-black">
          Agree to flixdin terms and policies
        </h2>
        <div className="form-control">
          <p className="font-normal text-sm text-black">
            People who use our service may have already entered your number.
            <br />
            By clicking on I agree, you agree to create an account and to
            Instagram. Learn More
            <br />
            The Privacy Policy describes the ways we can use the information we
            collect when you create an account. For example, we use this
            information to provide, personalize, and improve our products,
            including ads.
          </p>
        </div>
        <div className="form-control mt-6">
          <button
            className="btn normal-case bg-[#C6B34E] rounded-full border-none text-black hover:bg-[#978839]"
            onClick={registerUser}>
            I agree
          </button>
        </div>
        <div className="form-control mt-auto">
          <label className="label text-center mx-auto mt-1">
            <Link to="/" className="label-text-alt link link-hover">Already have an account? Login!</Link>
          </label>
        </div>
      </>}

    </>
  );
};

export default RegisterForm;
