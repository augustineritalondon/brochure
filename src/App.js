import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import {Routes, Route} from 'react-router-dom'
import { Add, Home, Edit, Brochure } from './components/index'

function App() {


  return (
    <>
    <ToastContainer />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Brochure />} />
        <Route exact path="/add" element={<Add />} />
        <Route exact path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  );
}

export default App;
