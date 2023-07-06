// import './App.css';
import Nav from './sidebar/sidebar';
// import Flixlogo from "..../"
// image: "/images/flix_Logo.svg"
import Heading from './Heading/Heading';
import Section from './sections/sections';
import Post from './connectionCalls_home/ConnectionCalls_home'
import PostCard from './post/Post';
import ProfileList from './cards/card2';
import Profile from './cards/card1'
import Carousel from './caro/Carousel';
import MyCr from './caro/MyCr'
// import "./caro/carousel.css";
// import "./caro/carousel_styling"
import "./styles/carousel.css"

function home() {
  return (
    <>
    <div className="App flex flex-row justify-between">
      <div class="basis-1/4 bg-[#F7EAA9] rounded-r-3xl my-2">
        <Nav></Nav>
      </div>
      <div class="basis-1/2 ">
        <Heading></Heading>
        <Section></Section>
        {/* <Carousel /> */}
        <MyCr/>
        <Post></Post>
        <PostCard></PostCard>
      </div>
      <div class="basis-1/4">
        <Profile></Profile>
        <ProfileList></ProfileList>
      </div>
    </div>
    </>
  );
}

export default home;