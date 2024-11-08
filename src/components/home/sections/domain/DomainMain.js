import React from "react";
import RadioButtons from "./RadioButtons";
import PostCard from "./Domainpost";
import Heading from "../../Heading/Heading";
import Carousel from "../../caro/MyCr";
import Post from "../../connectionCalls_home/ConnectionCallsHome";
import Sections from "../../sections/Sections";
import useButtonGroup from "./UseButton";
import { TypeContent } from "./data";

const DamainMain = () => {
  const [isOpen, isClicked, toggleDropdown, selectedValue, handleValueChange] =
    useButtonGroup();

  return (
    <div className="flex-col relative">
      <Heading />
      <Sections isClicked={isClicked} toggleDropdown={toggleDropdown} />{" "}
      {isOpen && (
        <div className="z-96 items-center justify-center display: block;">
          <RadioButtons
            selectedValue={selectedValue}
            onValueChange={handleValueChange}
            className="max-w-md"
          />
        </div>
      )}{" "}
      <Carousel />
      <Post />
      {TypeContent.map((user) => (
        <div key={user.id}>
          <PostCard id={user.id} />
        </div>
      ))}
    </div>
  );
};

export default DamainMain;
