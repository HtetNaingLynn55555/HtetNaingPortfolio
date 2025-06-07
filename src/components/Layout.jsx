import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Pages/contact/Contact";
import { useLocation } from "react-router-dom";
export default function Layout() {
  let location = useLocation();
  let path = location.pathname;
  return (
    <>
      <Navbar />
      <Outlet />
      {path === "/contact" ? null : <Contact />}
      <Footer />
    </>
  );
}
