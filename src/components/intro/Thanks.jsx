import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Thanks = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 2000);
  }, [])

  return (
    <div className='min-h-screen flex items-center justify-center bg-[#f0eac7]'>
      <img src="/images/reel.png" className='absolute left-24 h-screen' alt="" />
      <div>
        <h1 className='text-[#978839] text-7xl font-semibold text-center'>Welcome <br />to</h1>
        <img src="/images/tick.png" className='mx-auto w-36 my-8' alt="" />
        <h1 className="text-9xl text-center  text-[#C6B34E] font-semibold">flixdin</h1>
      </div>
    </div>
  )
}

export default Thanks
