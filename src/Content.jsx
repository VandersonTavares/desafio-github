import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Perfil from "./pages/Perfil";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const Content = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Content;
