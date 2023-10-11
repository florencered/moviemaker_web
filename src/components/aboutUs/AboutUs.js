import React from 'react'
import Sidebar from "../home/sidebar/Sidebar";
import {CardContent} from "./CardContent"
function AboutUs() {
  return (
    <>
      <div className=" flex flex-row bg-[#fffadd]  w-full justify-center font-[Helvetica] ">
        <div className="basis-1/5 bg-[#F7EAA9] rounded-r-3xl my-2">
          <Sidebar />
        </div>{" "}
        <div className="bg-[#fffadd]  w-full border-none border h-[982px]">
          <div class="font-bold text-[38.1px] text-center flex-col"> Who Are We ? </div>{" "}
          <div className="rectangle bg-[#d9d9d9] h-[166px] w-[154px] mx-auto my-9 " /> 
          
          <p className="text-[22px] mx-3 my-9 ">
            Volutpat Odio Sed Ac Elementum Mattis Nullam.Nisl Quis Faucibus Id
            Massa.Sit Sagittis Molestie Amet Et.Dictum Pharetra Sed Ut Mattis
            Ornare Pellentesque Cras Mattis Cursus.Magna Sit Ultricies Feugiat
            Id Lectus Metus.Elit Quis Vitae Lectus Id Ultrices Sit Iaculis
            Porttitor Pulvinar.Faucibus Eu Natoque Mollis Platea.Sit Et Id Ut
            Elementum.Nisi Euismod Cursus Massa Felis Sit.{" "}
          </p>{" "}
          <p className="text-[40px] font-bold text-center"> What Can We Do For You ? </p>{" "}
          <h1 className="text-[38.1px] font-bold text-center my-9"> ABOUT US </h1>{" "}  
          <div className='flex justify-between my-5'>
          {CardContent.map((item)=>{ 
            return<div className="bg-gradient-to-r from-yellow-400 to-transparent rounded-[19.2px] h-[309px] w-[360px] mx-5">
            <div className="bg-[#645d5d] rounded-full h-[100px] w-[100px] mx-auto my-5" />
            <p className="text-[20px] text-center my-5 mx-3">
              {item.description}
            </p>
          </div> 
          
                      
          }

        )} 
        </div>
          
         
         
        </div>{" "}
      </div>
    </>
  );
}

export default AboutUs