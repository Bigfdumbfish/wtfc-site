import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Apply from './pages/Apply';
import Navbar from './components/Navbar';
=======
import { BrowserRouter } from 'react-router-dom';
import Home from './App';
>>>>>>> b7e80c23802a8e569b3f679f5e90a5d749524546
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
=======
      <Home />
>>>>>>> b7e80c23802a8e569b3f679f5e90a5d749524546
    </BrowserRouter>
  </React.StrictMode>
);
