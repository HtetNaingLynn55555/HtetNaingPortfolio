import { useState } from "react";
// import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

import Contact from "./components/Pages/contact/Contact";
import ContactDetails from "./components/Pages/contact/ContactDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProjectDetails from "./components/Pages/project/ProjectDetails";
import ServiceDetails from "./components/Pages/service/ServiceDetails";
import ToolDetails from "./components/Pages/tools/ToolDetails";
import About from "./components/Pages/about/About";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<ContactDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectDetails />} />
            {/* <Route path="/services" element={<ServiceDetails />} /> */}
            <Route path="/tools" element={<ToolDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
