import React from "react";
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";
import { FaMessage } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import { BsPersonCircle } from "react-icons/bs";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { FaList } from "react-icons/fa6";
import { VscSignOut } from "react-icons/vsc";
import Create from "../../create/create"

function sidebar(props) {
  const [modal, setModal] = useState(false);
  const handleCreate = (e) => {
    e.preventDefault();
    setModal(!modal);
  };
  return (
    <>

      <div class="flex flex-col justify-center items-center align-middle bg-black h-10 w-64 mt-8 rounded-3xl ml-1 pt-1 mr-2">

        
        <div
          class="text-center flex ml-12"
          style={{ alignItems: "center", width: "150px", height: "200px" }}
        >
          <div>
            <img
              class="h-8 w-8 mb-1.5 rounded-full"
              src="/images/flix_Logo.svg"
              alt="logo"
            />
          </div>
          <div>
            <h4 class="font-bold text-lg text-[#E0C949] text-center">
              flixdin
            </h4>
          </div>
        </div>
      </div>
      <a href="/">
        <div class="flex flex-row rounded-lg ml-10 mr-10 mt-10 p-2 hover:bg-white font-semibold">
          <FaHome size="1.5rem" class="ml-5"></FaHome>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home
        </div>
      </a>
      <a href="/">
        <div class="flex flex-row rounded-lg ml-10 mr-10 mt-1 p-2 hover:bg-white font-semibold">
          <FaSearch size="1.5rem" class="ml-5"></FaSearch>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Explore
        </div>
      </a>
      <a href="/">
        <div class="flex flex-row rounded-lg ml-11 mr-5 mt-2 p-1 hover:bg-white font-semibold">
          <FaClapperboard size="1.5rem" class="ml-5 mt-1"></FaClapperboard>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Connection Calls
        </div>
      </a>
      <a href="/">
        <div class="flex flex-row rounded-lg ml-10 mr-10 mt-1 p-2 hover:bg-white font-semibold">
          <FaSquareYoutube size="1.5rem" class="ml-5"></FaSquareYoutube>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Flicks
        </div>
      </a>
      <a href="/">
        <div class="flex flex-row rounded-lg ml-10 mr-10 mt-1 p-2 hover:bg-white font-semibold">
          <FaMessage size="1.5rem" class="ml-5"></FaMessage>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Messages
        </div>
      </a>
      <a href="/">
        <div class="flex flex-row rounded-lg ml-10 mr-10 mt-1 p-2 hover:bg-white font-semibold">
          <FaBell size="1.5rem" class="ml-5"></FaBell>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notifications
        </div>
      </a>
      <a href="/" onClick={handleCreate}>
        <div class="flex flex-row rounded-lg ml-10 mr-10 mt-1 p-2 hover:bg-white font-semibold">
          <FaSquarePlus size="1.5rem" class="ml-5"></FaSquarePlus>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create
        </div>
      </a>
      {modal && <Create handleCreate ={handleCreate} />}
      <a href="/"><div class = "flex flex-row rounded-lg ml-12 mr-10 mt-1 p-2 pl-4 hover:bg-white font-semibold"><img class="h-8 w-8 rounded-full" src="https://picsum.photos/id/1027/150/150"/>&nbsp;&nbsp;&nbsp;&nbsp;My Profile</div></a>

      <a href="/">
        <div class="flex flex-row rounded-lg ml-10 mr-10 mt-10 p-2 hover:bg-white font-semibold">
          <BsFillInfoCircleFill
            size="1.5rem"
            class="ml-5"
          ></BsFillInfoCircleFill>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About Us
        </div>
      </a>
      <a href="/">
        <div class="flex flex-row rounded-lg ml-10 mr-10 mt-1 p-2 hover:bg-white font-semibold">
          <FaList size="1.5rem" class="ml-5"></FaList>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;More
        </div>
      </a>
      <a href="/"><div class = "flex flex-row rounded-lg ml-10 mr-10 mt-1 mb-3 p-2 hover:bg-white font-semibold">&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ transform: 'scaleX(-1)' }}>
      <VscSignOut size="1.5rem" className="ml-5" color="red" />
    </span>Log out</div></a>
    </>
  );
}

export default sidebar;