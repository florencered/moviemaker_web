import React from 'react'

function MyCr() {
  return (
    <>
        

  <ul class="flex space-x-2 justify-between ml-32 mr-16">
    <li class="flex flex-col items-center space-y-1 ">
      <div class="relative bg-[#C6B34E] p-1 rounded-full">
        <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
          <img class="w-16 h-16 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty"/>
        </a>
        <button class="absolute bg-[#C6B34E] text-white text-2xl font-medium w-8 h-8 rounded-full bottom-0 right-1 border-4 border-white flex justify-center items-center font-mono hover:bg-[#C6B34E] focus:outline-none">
          <div class="transform -translate-y-px">+</div>
        </button>
      </div>

      <a href="#" class="text-sm">kitty_one</a>
    </li>

    <li class="flex flex-col items-center space-y-1 ">
      <div class="relative bg-[#C6B34E] p-1 rounded-full">
        <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
          <img class="w-16 h-16 rounded-full" src="https://placekitten.com/200/200" alt="cute kitty"/>
        </a>
        <button class="absolute bg-[#C6B34E] text-white text-sm font-small w-10 h-6 bottom-0 right-1 border-2 border-white flex justify-center items-center font-mono hover:bg-[#C6B34E] focus:outline-none">
          <div class="transform -translate-y-px">Live</div>
        </button>
      </div>

      <a href="#" class="text-sm">kitty_two</a>
    </li>

    <li class="flex flex-col items-center space-y-1 ">
      <div class="bg-[#C6B34E] p-1 rounded-full">
        <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
          <img class="w-16 h-16 rounded-full" src="https://placekitten.com/200/203" alt="cute kitty"/>
        </a>
      </div>

      <a href="#" class="text-sm">kitty_three</a>
    </li>

    <li class="flex flex-col items-center space-y-1 ">
      <div class="bg-[#C6B34E] p-1 rounded-full">
        <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
          <img class="w-16 h-16 rounded-full" src="https://placekitten.com/202/201" alt="cute kitty"/>
        </a>
      </div>

      <a href="#" class="text-sm">kitty_four</a>
    </li>

    <li class="flex flex-col items-center space-y-1 ">
      <div class="bg-[#C6B34E] p-1 rounded-full">
        <a href="#" class="block bg-white p-1 rounded-full transform transition hover:-rotate-6">
          <img class="w-16 h-16 rounded-full" src="https://placekitten.com/202/201" alt="cute kitty"/>
        </a>
      </div>

      <a href="#" class="text-sm">kitty_five</a>
    </li>

  </ul>

    </>
  )
}

export default MyCr