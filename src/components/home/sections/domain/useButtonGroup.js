import { useState } from "react";

const UseButtonGroup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const toggleDropdown = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };

  const handleValueChange = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return [isOpen, isClicked, toggleDropdown, selectedValue, handleValueChange];
};

export default UseButtonGroup;
