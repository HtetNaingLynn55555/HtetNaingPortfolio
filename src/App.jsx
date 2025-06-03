import { useState } from "react";
// import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Projects from "./components/Project";
import Contact from "./components/Contact";
import ContactDetails from "./components/ContactDetails";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Contact />
      <ContactDetails />
      <Footer />
    </>
  );
}

export default App;
