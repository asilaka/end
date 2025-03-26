import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Discover from './pages/Discover';
import Header from './components/Header/Header';
import Wishlist from './components/Wishlist/Wishlist';
import Join from './components/Join/Join';
import More from './pages/More';
import Akk from './pages/akk';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/More" element={<More />} />
      <Route path="/Akk" element={<Akk/>} />
      </Routes>
    </>
  );
};

export default App;
