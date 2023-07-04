import React from 'react'
import {FaRegCircleDot} from 'react-icons/fa6';

function Section() {
  return (
    <>
    <div class = "flex flex-row mt-4">
        <a href=""><div class="flex bg-slate-400 hover:bg-yellow-200 py-2 ml-32 rounded-lg px-4 font-semibold">All</div></a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href=""><div class="flex bg-slate-400 hover:bg-yellow-200 py-2 rounded-lg px-4 font-semibold">NearMe</div></a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href=""><div class="flex bg-slate-400 hover:bg-yellow-200 py-2 rounded-lg px-4 font-semibold">Location</div></a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href=""><div class="flex bg-slate-400 hover:bg-yellow-200 py-2 rounded-lg px-4 font-semibold">Domain</div></a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href=""><div class="flex bg-slate-400 hover:bg-yellow-200 py-2 rounded-lg px-4 font-semibold"><FaRegCircleDot size="1.5rem"></FaRegCircleDot></div></a>
    </div>
    </>
  )
}

export default Section