import { useState } from "react";
// import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import ContactDetails from "./components/ContactDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
