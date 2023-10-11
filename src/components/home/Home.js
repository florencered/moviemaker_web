// import './App.css';
import Nav from "./sidebar/Sidebar";
import Heading from "./Heading/Heading";
import Post from "./connectionCalls_home/ConnectionCallsHome";
import ProfileList from "./cards/CardMain2";
import Profile from "./cards/CardMain1";
import Carousel from "./caro/MyCr";
import useButtonGroup from "./sections/domain/UseButton";
// import RadioButtons from "./sections/domain/RadioButtons";
import Sections from "./sections/Sections";
import PostMain from "./sections/domain/PostMain";

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
          <PostMain />
        </div>{" "}
        <div class="basis-1/4">
          <Profile> </Profile> <ProfileList> </ProfileList>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
}

export default Home;
