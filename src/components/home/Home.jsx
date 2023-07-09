// import './App.css';
import Nav from "./sidebar/Sidebar";
// import Flixlogo from "..../"
// image: "/images/flix_Logo.svg"
import Heading from "./Heading/Heading";
import Post from "./connectionCalls_home/connectionCalls_home";
// import PostCard from "./post/post";
import ProfileList from "./cards/card2";
import Profile from "./cards/card1";
import Carousel from "./caro/MyCr";
// import "./caro/carousel.css";
// import "./caro/carousel_styling"
// import "./styles/carousel.css";
import useButtonGroup from "./sections/domain/useButtonGroup";
import RadioButtons from "./sections/domain/RadioButtons";
import Sections from "./sections/Sections";
import PostCard from "./sections/domain/Domainpost";

function Home() {
  const [isOpen, isClicked, toggleDropdown] = useButtonGroup();

  return (
    <>
      <div className="App flex flex-row">
        <div class="basis-1/4 bg-[#F7EAA9] rounded-r-3xl my-2">
          <Nav> </Nav>{" "}
        </div>{" "}
        <div class="h-max md:basis-1/2 pr-3 space-y-2 relative">
          <Heading> </Heading> <Sections />
          <Carousel />
          <Post />
          <PostCard />
        </div>{" "}
        <div class="basis-1/4">
          <Profile> </Profile> <ProfileList> </ProfileList>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Home;
