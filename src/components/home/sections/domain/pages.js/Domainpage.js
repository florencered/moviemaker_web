import React from "react";
import DomainMain from "../components/DamainMain";
const Domainpage = () => {
  return (
    <div className="bg-dc ">
      <div className=" flex flex-row">
        <div
          className="sticky top-0 w-full basis-1/4 bg-dc
   rounded-r-3xl my-2 items-center text-center"
        >
          {" "}
          Left
        </div>
        <div class="w-full h-max md:basis-1/2 pr-3 ">
          <DomainMain />
        </div>
        <div className="w-full h-sceen basis-1/4 text-center">Right</div>
      </div>
    </div>
  );
};

export default Domainpage;
