import React, { useState } from 'react'

const NewConnection = ({handleConnectionClick}) => {
 
    const [confirm, setConfirm] = useState(false);

    return (
      <div className="fixed inset-0 bg-[#D3C672]/[0.53] z-50 grid place-items-center px-3.5 py-1 border-none">
        <div className="flex flex-col gap-5 h-5/6 w-6/12  rounded-xl bg-[#fffadd] shadow-2xl ">
        <div className="flex m-1 justify-between h-10 items-center">
          <div className="flex m-auto mt-2 shrink-0 text-[#978839] text-center text-3xl font-inter justify-center items-center font-normal leading-normal">
          New Connection Call
          </div>
          <img
            src="/images/lucide_x.png"
            alt=".."
            onClick={handleConnectionClick}
            className="cursor-pointer mr-5 mt-4"
          />
        </div>
        <div className="w-full h-0.5 bg-[#978839]"></div>
        <div className='flex w-full h-full flex-col gap-2 items-center rounded-lg'>
            <div className='bg-[#f1e294e0] w-5/6 h-5/6 p-7 flex flex-col gap-4'>
                <div className='flex gap-2 items-center'>
                    <img src="/images/Ellipse_92.png" alt="" className='w-9 h-9 shrink-0 rounded-full' />
                    <div>
                        <div className='text-[#000] font-inter not-italic leading-3 font-bold tracking-tight mb-2'>samrzkhan</div>
                        <div className='flex items-center justify-center text-[#535353] font-inter not-italic font-medium leading-3 tracking-tight'><p>Director</p>
                        <p className='w-1 h-1 shrink-0 bg-[#B1991E] mx-2 relative top-0.5'></p>
                            <p>Add Your Location</p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <p className='text-[#000] font-inter text-base font-normal leading-3 tracking-tight '>Need</p>
                    <select className='w-40 h-6 shrink-0 rounded-md bg-[#cebe6bde] border-none text-center'>
                        <option></option>
                    </select>
                    <p className='text-[#000] font-inter text-base font-normal leading-3 tracking-tight '>Connection</p>
                </div>
                <div className='flex items-center gap-2'>
                    <img src="/images/location_icon.png" alt="" />
                    <input type="text" placeholder='Add the location you need your connection at...' className='w-72 h-6 shrink-0 outline-none placeholder:text-[#7B7B7B] placeholder:text-xs placeholder:font-normal placeholder:tracking-tight placeholder:leading-3 rounded-md px-1 bg-[#D3C472]'/>
                </div>
                <div className='w-full h-full rounded-md'>
                    <div className='w-full h-full'>
                    <textarea className='w-full h-full rounded-md p-2 bg-[#cebe6bde] placeholder:text-[#000] placeholder:font-normal placeholder:text-xl placeholder:tracking-tight placeholder:pl-5 resize-none border-none outline-none ' placeholder='Add Description'></textarea>
                    </div>
                    <div className='w-full flex justify-end'><img src="/images/Vector1.png" alt="" className='relative w-5 h-5 -top-8 right-2'/></div>
                </div>
            </div>
            <div className='w-24 h-10 shrink-0 mt-3'>
                <button onClick={()=>setConfirm(!confirm)} className='w-full h-full rounded-lg bg-[#C6B34E] text-[#000] text-center font-medium text-2xl tracking-tight'>Add</button>
            </div>
            {confirm && <div className="fixed inset-0 bg-[#D3C672]/[0.53] z-50 grid place-items-center px-3.5 py-1 border-none">
        <div className="flex flex-col gap-5 h-1/6 w-2/12  rounded-xl bg-[#fffadd] shadow-2xl ">
                <div className='p-2 w-full h-full flex flex-col justify-center items-center gap-4'>
                    <p className='text-[#000] text-center font-inter text-xl font-normal leading-3 tracking-tight'>Do you want to Continue ?</p>
                    <div className='flex gap-2'>
                        <button className='w-24 h-10 shrink-0 rounded-lg bg-[#C6B34E] text-[#000] font-inter text-2xl font-medium leading-3 tracking-tight'>Yes</button>
                        <button className='w-24 h-10 shrink-0 rounded-lg bg-[#C6B34E] text-[#000] font-inter text-2xl font-medium leading-3 tracking-tight' onClick={()=>setConfirm(!confirm)}>No</button>
                    </div>
                </div>
            </div></div>}
            
        </div>
        </div>
      </div>
  )
}

export default NewConnection
