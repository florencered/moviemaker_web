import React from "react";
import RadioButtons from "./RadioButtons";
import PostCard from "./Domainpost";
import Heading from "../../Heading/Heading";
import Carousel from "../../caro/Carousel";
import Post from "../../connectionCalls_home/connectionCalls_home";
import Sections from "../../sections/sections";
import useButtonGroup from "./useButtonGroup";

const DamainMain = () => {
  const [isOpen, isClicked, toggleDropdown, selectedValue, handleValueChange] =
    useButtonGroup();

  return (
    <div className="flex-col relative">
      <Heading />
      <Sections isClicked={isClicked} toggleDropdown={toggleDropdown} />
      {isOpen && (
        <div className="z-96 items-center justify-center display: block;">
          <RadioButtons
            selectedValue={selectedValue}
            onValueChange={handleValueChange}
            className="max-w-md"
          />
        </div>
      )}
      <Carousel />
      <Post />
      <PostCard selectedValue={selectedValue} />
    </div>
  );
};

export default DamainMain;
