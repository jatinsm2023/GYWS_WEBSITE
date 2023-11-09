import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/navbar/Navbar';
import Home from './Components/Homepage/Home';
import Media from './Components/Media/Media';
import ScrollToTop from './Components/scrollToTop/scrollToTop'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
        </Routes>
      </BrowserRouter>
      <ScrollToTop />
    </>
  );
}

export default App;