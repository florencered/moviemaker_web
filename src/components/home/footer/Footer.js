import React from 'react'
import { FaHome } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaClapperboard } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";

function Footer() {
  return (
    <div>
        
<footer
  className="fixed bottom-0 left-0 flex flex-col items-center bg-[#C6B34E] text-center text-white dark:bg-[#F7EAA9] w-full">
  <div class="container pt-2">
    <div class="mb-1 flex justify-around">
        <div>
    <a href="/home">
        <div class="flex flex-row rounded-lg  hover:bg-white font-semibold">
          <FaHome size="1.5rem" class="ml-2 mr-2 mt-1 mb-1" color="#C6B34E">
            {" "}
          </FaHome>{" "}
        </div>{" "}
      </a></div>
      <div><a href="/explore">
        <div class="flex flex-row rounded-lg  hover:bg-white font-semibold">
          <FaSearch size="1.5rem" class="ml-2 mr-2 mt-1 mb-1" color="#C6B34E">
            {" "}
          </FaSearch>{" "}
        </div>{" "}
      </a></div>
      <div><a href="/connectionCalls">
        <div class="flex flex-row rounded-lg  hover:bg-white font-semibold">
          <FaClapperboard size="1.5rem" class="ml-2 mr-2 mt-1 mb-1" color="#C6B34E">
            {" "}
          </FaClapperboard>{" "}
          
        </div>{" "}
      </a></div>
      <div><a href="/notifications">
        <div class="flex flex-row rounded-lg  hover:bg-white font-semibold">
          <FaBell size="1.5rem" class="ml-2 mr-2 mt-1 mb-1" color="#C6B34E">
            {" "}
          </FaBell>{" "}
          
        </div>{" "}
      </a></div>
      <div><a href="/">
        {" "}
        <div class="flex flex-row rounded-lg  hover:bg-white font-semibold">
          {" "}
          <img
            class="h-8 w-8 rounded-full ml-2 mr-2 mt-1 mb-1"
            src="https://picsum.photos/id/1027/150/150" alt="image of the user"
          />
        </div>{" "}
      </a></div>
      
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer
