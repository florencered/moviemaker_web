// import './App.css';
import React, { useState, useEffect } from "react";
import Nav from "./sidebar/Sidebar";
// import Heading from "./Heading/Heading";
import Post from "./connectionCalls_home/ConnectionCallsHome";
import ProfileList from "./cards/CardMain2";
import Profile from "./cards/CardMain1";
import Carousel from "./caro/MyCr";
import useButtonGroup from "./sections/domain/UseButton";
// import RadioButtons from "./sections/domain/RadioButtons";
import Sections from "./sections/Sections";
import PostMain from "./sections/domain/PostMain";
import Footer from "./footer/Footer";
import { FaMessage } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import "./responsive.css";
import Modal from "./sidebar/Modal"; // Create a Modal component

function Home() {
  const [isOpen, isClicked, toggleDropdown] = useButtonGroup();
  const [isHidden, setIsHidden] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [modal, setModal] = useState(false);
  const handleCreate = (e) => {
    e.preventDefault();
    setModal(!modal);
  };

  useEffect(() => {
    // Add an event listener to track screen size changes
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    // Initial check for screen size when the component mounts
    handleResize();

    // Attach the event listener to the window
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Add a window resize event listener to update the windowWidth state
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let content;
  if (windowWidth < 768) {
    content = "Flixdin";
  } else {
    content = "Home";
  }

  const [showComponent, setShowComponent] = useState(false);

  const toggleComponent = () => {
    setShowComponent(showComponent);
  };

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setShowComponent(showComponent);
  };

  return (
    <>
      <div className="App flex flex-row justify-center items-centre  min-w-fit bg-[#F7EAA9]">
        {!isHidden && (
          <div class="basis-1/4 rounded-r-3xl sidebar-container min-w-fit bg-[#F7EAA9]">
            <Nav> </Nav>{" "}
          </div>
        )}{" "}
        <div class="h-max md:basis-1/2 space-y-2 relative bg-[#E8E1BA] items-start   ">
          {/* <Heading param1={content}> </Heading>  */}

          <div className="flex flex-column">
            <button
              onClick={toggleNav}
              class="text-5xl font-bold text-[#C1AD42] flex ml-12 mt-4"
            >
              {" "}
              {content}{" "}
            </button>{" "}
            {/* {!isHidden && <Footer />} */}
            {/* { !showComponent && isHidden && (<div class="flex flex-row mt-8 ml-48">
        <div className="mr-7">
      <a href="/" onClick={handleCreate}>
        <div class="flex flex-row rounded-lg hover:bg-white font-semibold">
          <FaSquarePlus size="1.5rem" class="ml-2 mr-2 mt-1 mb-1" color="#C1AD42">
            {" "}
          </FaSquarePlus>{" "}
  
        </div>{" "}
      </a></div><div>
      <a href="/message">
        <div class="flex flex-row rounded-lg hover:bg-white font-semibold">
          <FaMessage size="1.5rem" class="ml-2 mr-2 mt-1 mb-1" color="#C1AD42">
            {" "}
          </FaMessage>{" "}

        </div>{" "}
      </a></div></div>)} */}
          </div>
          {isNavOpen && isHidden && (
            <Modal class="ml-0" closeModal={toggleNav}>
              <Nav myprop={!showComponent} />
            </Modal>
          )}
          {isHidden && showComponent && <Nav myprop={!showComponent} />}
          {isHidden && !showComponent && <Sections />}
          {isHidden && !showComponent && <Carousel />}
          {isHidden && !showComponent && <Post />}
          {isHidden && !showComponent && <PostMain />}
          {/* {isHidden && !showComponent && <Footer/>} */}
          {!isHidden && <Sections />}
          {!isHidden && <Carousel />}
          {!isHidden && <Post />}
          {!isHidden && <PostMain />}
        </div>{" "}
        {!isHidden && (
          <div class="basis-1/4 bg-[#E8E1BA]">
            <Profile> </Profile> <ProfileList> </ProfileList>{" "}
          </div>
        )}{" "}
      </div>{" "}
    </>
  );
}

export default Home;
