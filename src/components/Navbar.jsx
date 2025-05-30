import { IoMailOutline } from "react-icons/io5";
import { IoBuildOutline } from "react-icons/io5";
import { IoFolderOpenOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { useState } from "react";
export default function Navbar() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 y mx-1.5">
      <ul className="flex rounded-lg text-[20px] px-14 justify-around  sm:col-start-2 items-center py-4 sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 bg-secondary border border-secondary ">
        <li>
          <a href="">
            <span>
              <IoHomeOutline />
            </span>
          </a>
        </li>
        <li>
          <a href="">
            <span>
              <IoFolderOpenOutline />
            </span>
          </a>
        </li>
        <li>
          <a href="">
            <span>
              <IoBagHandleOutline />
            </span>
          </a>
        </li>
        <li>
          <a href="">
            <span>
              <IoBuildOutline />
            </span>
          </a>
        </li>

        <li>
          <a href="">
            <span>
              <IoMailOutline />
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
