import React from 'react';

function Request() {
  return (
    <div>
      <div className="flex flex-row mt-3">
        <ul class="flex flex-col space-y-2 ml-5">
          <p className="font-semibold text-[19px] tracking-normal text-[#978839]">GENERAL</p>
          <li class="flex flex-row">
            <div class="relative bg-gradient-to-br from-rose-600 via-yellow-400 to-transparent p-0.5 rounded-full">
              <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
                <img class="w-16 h-16 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
              </a>
            </div>
            <div className="ml-5 mt-2">
              <p className="font-bold text-[21px] tracking-normal text-[#978839]">Killan James</p>
              <p className="font-semibold text-[12px] tracking-normal text-black">Thankyou</p>
            </div>
          </li>

          <li class="flex flex-row">
            <div class="relative bg-gradient-to-br from-rose-600 via-yellow-400 to-transparent p-0.5 rounded-full">
              <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
                <img class="w-16 h-16 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
              </a>
            </div>
            <div className="ml-5 mt-2">
              <p className="font-bold text-[21px] tracking-normal text-[#978839]">Killan James</p>
              <p className="font-semibold text-[12px] tracking-normal text-black">2 new messages</p>
            </div>
          </li>

          <li class="flex flex-row">
            <div class="relative bg-gradient-to-br from-rose-600 via-yellow-400 to-transparent p-0.5 rounded-full">
              <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
                <img class="w-16 h-16 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
              </a>
            </div>
            <div className="ml-5 mt-2">
              <p className="font-bold text-[21px] tracking-normal text-[#978839]">Killan James</p>
              <p className="font-semibold text-[12px] tracking-normal text-black">Bye</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="absolute w-[710px] h-[480px] top-[120px] left-[420px] bg-opacity-18 rounded-2xl bg-[#FEF5C2]">
        <div className=" flex space-x-3 relative top-[12px] left-[220px]">
          <div className="flex flex-row ml-20">
            <div class="absolute bg-gradient-to-br from-rose-600 via-yellow-400 to-transparent p-0.5 rounded-full">
              <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
                <img class="w-16 h-16 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty" />
              </a>
            </div>
            <div className="flex flex-col mt-20 ml-1 pr-20">
              <p className="font-bold text-[21px] tracking-normal text-#000000">Sameer Khan</p>
              <p className="font-semibold text-[19px] tracking-normal text-#7C7C7C">Director</p>
              <p className="font-semibold text-[19px] tracking-normal text-#7C7C7C pb-2">I didn’t go to film school, I went to films.</p>
              <a href='#'>
              <button class="flex bg-[#EBCC28] py-2 w-[150px] rounded-2xl justify-center font-semibold">
                view profile
              </button>
              </a>
            </div>
          </div>
        </div>
        <div className="relative flex space-x-10 top-[200px] left-[100px]">
          <button class="flex bg-[#C6B34E] hover:bg-[#EBCC28] ml-6 rounded-2xl py-2 w-[100px] justify-center font-bold text-white">
            Block
          </button>
          <a href="">
            <button class="flex bg-[#C6B34E] hover:bg-[#EBCC28] ml-6 rounded-2xl py-2 w-[100px] justify-center font-bold text-white">
              Delete
            </button>
          </a>
          <a href="">
            <button class="flex bg-[#C6B34E] hover:bg-[#EBCC28] ml-6 rounded-2xl py-2 w-[100px] justify-center font-bold text-white">
              Accept
            </button>
          </a>
        </div>
      </div>
      </div>
      )
};

      export default Request;