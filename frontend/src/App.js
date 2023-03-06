import logo from './logo.svg';
import './App.css';
import Shuffle from './components/shuffle/shuffle';
import Home from './components/home/home';
import {useState} from "react";
import Header from './components/shared/header';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CreatePost from './components/createPost/createPost';
import ViewPosts from './components/posts/viewposts';
function App() {
  return(
  <div className='page'>
    <Header></Header>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/shuffle" element={<Shuffle/>}/>
        <Route exact path="/createpost" element={<CreatePost/>}/>
        <Route exact path="/posts" element={<ViewPosts/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
