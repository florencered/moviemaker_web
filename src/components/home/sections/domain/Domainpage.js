import React from "react";
import DomainMain from "./DomainMain";
import "./Domain.css";
import Nav from "../../sidebar/Sidebar";
import Profile from "../../cards/card1";
import ProfileList from "../../cards/card2";
const Domainpage = () => {
  return (
    <div className="bg-dc ">
      <div className=" flex flex-row">
        <div className="sticky top-0 basis-1/4 h-screen bg-[#F7EAA9] rounded-r-3xl my-2 ">
          <Nav />
        </div>{" "}
        <div class="h-max md:basis-1/2 pr-3 ">
          <DomainMain />
        </div>{" "}
        <div className="h-sceen basis-1/4 text-center">
          <Profile> </Profile> <ProfileList> </ProfileList>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Domainpage;