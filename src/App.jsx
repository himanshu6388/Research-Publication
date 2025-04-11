import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import PublicationsPage from "./components/PublicationsPage";
import Submission from "./components/Submission";
import Contact from "./components/Contact";
import LoginBtn from './components/LoginBtn'; // Adjust path as needed
import './css/Home.css';

import { NavLink, Routes, Route } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
function App() {
 
 

  return (
    <div className="w-full min-h-screen bg-img">
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/publicationspage" element={<PublicationsPage/>} />
        <Route path="/submission" element={<Submission/>} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <Routes> 
        <Route path="/home" element={<Home />} /> 
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  )
}

export default App
