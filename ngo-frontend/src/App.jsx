import { Navigationbar } from "./components/Navigationbar"
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import { Home } from "./components/Home"
import { Footer } from "./components/Footer"
import { About } from "./components/About";
import Donate from "./components/Donate";
import { Apply } from "./components/Apply";
import { LoginAdmin } from "./components/LoginAdmin";
import { LoginVolunteer } from "./components/LoginVolunteer";
import { AdminDashBoard } from "./components/dashboard/AdminDashboard";
import {VolunteerDashBoard} from "./components/dashboard/VolunteerDashBoard"

function App() {
  return(
    
    <BrowserRouter>
      <Navigationbar/>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about-us" element={<About/>}></Route>
        <Route path="/donate" element={<Donate/>}></Route>
        <Route path="/apply" element={<Apply/>}></Route>
        <Route path="/login/LoginAdmin" element={<LoginAdmin/>}></Route>
        <Route path="/login/LoginVolunteer" element={<LoginVolunteer/>}></Route>
        <Route path="/AdminDashBoard" element={<AdminDashBoard/>}></Route>
        <Route path="/VolunteerDashBoard" element={<VolunteerDashBoard/>}></Route>
      </Routes>

      <Footer/>
    </BrowserRouter>

    
  )
}

export default App
