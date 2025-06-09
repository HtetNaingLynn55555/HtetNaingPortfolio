import { IoHeartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12  mx-1.5">
      <div className=" grid grid-cols-8 rounded-lg text-[20px]  sm:col-start-2 mt-12  sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 bg-secondary border border-secondary ">
        <div className="col-start-1 my-8 col-span-8 md:col-start-3 md:col-span-4  ">
          <div className=" my-4 text-center text-[18px] text-third-font-color font-semibold">
            <h1>Htet Naing Lynn</h1>
          </div>
          <div>
            <ul className="my-4 text-[14px] font-light flex justify-between items-center">
              <li className=" hover:text-third-font-color">
                <Link to={"/"}>Home</Link>
              </li>
              <li className=" hover:text-third-font-color">
                <Link to={"/about"}>About</Link>
              </li>
              <li className=" hover:text-third-font-color">
                <Link to={"/projects"}>Projects</Link>
              </li>
              <li className=" hover:text-third-font-color">
                <Link to={"/contact"}>Contacts</Link>
              </li>
            </ul>
          </div>
          <div className="my-4 text-primary font-bold border-0">
            <hr />
          </div>
          <div className=" text-[12px] font-light text-center">
            <h5 className="flex justify-center items-center gap-3">
              <span>
                <IoHeartOutline className="text-third-font-color" />
              </span>
              <span>htetnainglynnhnl@gmail.com</span>
              <span>
                <IoHeartOutline className="text-third-font-color" />
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
