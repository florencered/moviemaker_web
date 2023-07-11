import { useState } from "react";

const useButtonGroup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };

  return [isOpen, isClicked, toggleDropdown];
};

export default useButtonGroup;
