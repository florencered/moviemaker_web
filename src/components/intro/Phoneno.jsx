import React from 'react';
import Logo from '../../images/phone.png'
import { Link } from 'react-router-dom';
const Phonenoform= () => {
  return (
    <>
      <img src={Logo} className='mx-auto w-20 mt-24' alt="" />
      <h2 className="text-xl mt-8 font-semibold text-center text-black">Add your mobile number:</h2>
      <div className="form-control">
        <input type="text" className="input bg-white border-[#978839]" />
      </div>
      <div className="form-control mt-6">
        <button className="btn bg-[#C6B34E] normal-case rounded-full border-none text-black hover:bg-[#978839]" onClick={() => { window.location.href = '/auth/verification' }}>Confirm</button>
        <p className="text-1xl font-semibold text-center text-[#978839]"><Link to="/auth/birthday">Go back</Link></p>
        <label className="label text-center mx-auto mt-8 ">
            <Link to="/auth/login" className="label-text-alt link link-hover">Already have an account? Login!</Link>
        </label>
      </div>
    </>
  );
};

export default Phonenoform;
