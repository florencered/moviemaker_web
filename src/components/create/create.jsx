import React from 'react'

import NewPost from "./NewPost";

const Create = () => {
  const [modal, setModal] = useState(false);
  const handleClick1 = (e) => {
    e.preventDefault();
    setModal(!modal);
  };
  return (
    <div className="fixed inset-0 bg-[#D3C672]/[0.53] z-50 grid place-items-center px-3.5 py-1 border-none">
      <div className="flex flex-col gap-5 h-5/6 w-6/12  rounded-xl bg-[#fffadd] shadow-2xl ">
        <div className="flex m-1 justify-between h-10 items-center">
          <div className="flex m-auto w-64 mt-1 shrink-0 text-[#978839] text-center text-3xl font-inter justify-center items-center font-normal leading-normal">Create New post</div>
          <img src="/images/lucide_x.png" alt=".." onClick={handleCreateClick} className="cursor-pointer mr-5"/>
        </div>
        <div className="w-full h-0.5 bg-[#978839]"></div>
        <div className="w-full h-full flex flex-col justify-center items-center gap-9">
          <div className="w-34 h-28 shrink-0">
            <img className="w-20 h-20 shrink-0" src="/images/icon-park-outline_picture-one.png" alt=".." />
            <img className="relative -top-2/4 left-10 bg-[#fffadd] " src="/images/icon-park-outline_picture-one.png" alt=".." />
          </div>
          <div className="flex w-7/12 h-8 flex-col justify-center shrink-0 text-[#000] items-center text-3xl font-inter not-italic font-normal leading-3 tracking-tight">Drag photos and videos here</div>
          <button className="flex items-center p-4 h-12 rounded-2xl bg-[#E0C949]" onClick={handleClick1} >Select from Computer</button>
          {modal && <NewPost handleClick1={handleClick1}/>}
        </div>
      </div>
    </div>
  )
}

export default Create