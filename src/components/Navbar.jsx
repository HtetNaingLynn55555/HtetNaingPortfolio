import { IoMailOutline } from "react-icons/io5";
import { IoBuildOutline } from "react-icons/io5";
import { IoFolderOpenOutline } from "react-icons/io5";
import { IoHomeOutline } from "react-icons/io5";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  const [isHover, setIsHover] = useState("");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 y mx-1.5">
      <ul className="flex text-secondary-font-color rounded-lg text-[20px] px-14 justify-around  sm:col-start-2 items-center py-4 sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 bg-secondary border border-secondary ">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-third-font-color" : "text-secondary-font-color"
            }
            to={"/"}
          >
            <span>
              <IoHomeOutline className="hover:text-third-font-color" />
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? "text-third-font-color" : "text-secondary-font-color"
            }
          >
            <span>
              <IoPersonOutline className="hover:text-third-font-color" />
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-third-font-color" : "text-secondary-font-color"
            }
            to={"/projects"}
          >
            <span>
              <IoFolderOpenOutline className="hover:text-third-font-color" />
            </span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-third-font-color" : "text-secondary-font-color"
            }
            to={"/services"}
          >
            <span>
              <IoBagHandleOutline className="hover:text-third-font-color" />
            </span>
          </NavLink>
        </li> */}
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-third-font-color" : "text-secondary-font-color"
            }
            to="/tools"
          >
            <span>
              <IoBuildOutline className="hover:text-third-font-color" />
            </span>
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-third-font-color" : "text-secondary-font-color"
            }
            to={"/contact"}
            href=""
          >
            <span>
              <IoMailOutline className="hover:text-third-font-color" />
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
