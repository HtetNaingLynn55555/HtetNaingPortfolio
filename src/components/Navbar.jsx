import { IoMailOutline } from "react-icons/io5";
import { IoBuildOutline } from "react-icons/io5";
import { IoFolderOpenOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 y mx-1.5">
      <ul className="flex rounded-lg text-[20px] px-14 justify-around  sm:col-start-2 items-center py-4 sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 bg-secondary border border-secondary ">
        <li>
          <Link to={"/"}>
            <span>
              <IoHomeOutline />
            </span>
          </Link>
        </li>
        <li>
          <Link to={"/about"}>
            <span>
              <IoPersonOutline />
            </span>
          </Link>
        </li>
        <li>
          <Link to={"/projects"}>
            <span>
              <IoFolderOpenOutline />
            </span>
          </Link>
        </li>
        <li>
          <Link to={"/services"}>
            <span>
              <IoBagHandleOutline />
            </span>
          </Link>
        </li>
        <li>
          <Link to="/tools">
            <span>
              <IoBuildOutline />
            </span>
          </Link>
        </li>

        <li>
          <Link to={"/contact"} href="">
            <span>
              <IoMailOutline />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
