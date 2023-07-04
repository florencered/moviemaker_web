import './App.css';
import Nav from './components/HomePage/Navbar'
import Flixlogo from "./flix_Logo.svg"
import Heading from './components/HomePage/Heading';
import Section from './components/HomePage/Section';
import Post from './components/HomePage/Post'
import PostCard from './components/HomePage/PostCard';
import ProfileList from './components/HomePage/ProfileList';
import Profile from './components/HomePage/Profile'

function App() {
  return (
    <>
    <div className="App flex flex-row">
      <div class="basis-1/4 bg-yellow-200 rounded-r-3xl my-2">
        <Nav props1 = {Flixlogo}></Nav>
      </div>
      <div class="basis-1/2 pr-3">
        <Heading></Heading>
        <Section></Section>
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

export default App;
