import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/Homepage/Home';
import Media from './Components/Media/Media';
import ScrollToTop from './Components/scrollToTop/scrollToTop'
import Member from './Components/Members/Members';

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path="/members" element={<Member />} />
        </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;