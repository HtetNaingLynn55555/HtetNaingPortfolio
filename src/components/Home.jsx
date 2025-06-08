import { IoLogoLinkedin } from "react-icons/io5";
import Projects from "./Pages/project/Project";
import Contact from "./Pages/contact/Contact";
import Service from "./Pages/service/Service";
import Tool from "./Pages/tools/Tool";
export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-12  mx-1.5">
        <div className=" grid grid-cols-8 rounded-lg text-[20px]  sm:col-start-2 mt-12  sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 bg-secondary border border-secondary ">
          <div className="col-start-1 col-span-8 md:col-start-3 md:col-span-4  ">
            <div className="flex py-15 gap-3 flex-col justify-center items-center">
              <img
                className=" rounded-full w-24 h-24"
                src="/download.jpeg"
                alt="my profile image"
              />
              <span className="text-secondary-font-color text-[12px]">
                htetnainglynnhnl@gmail.com
              </span>
              <h1 className="text-main-font-color mb-2 text-3xl font-bold text-center">
                Htet Naing Lynn
              </h1>
              <div>
                <span className="text-third-font-color">
                  <IoLogoLinkedin />
                </span>
              </div>
              <p className="text-center font-semibold mt-2  px-4 md:px-0 text-secondary-font-color text-[15px]">
                Hi, I'm Htet Naing, a Fullstack Web devloper who loves to create
                useful and beautiful websites
              </p>
              <div className="flex gap-5 mt-4">
                <button className="hover:cursor-pointer text-secondary-font-color  hover:text-third-font-color border rounded-xl bg-primary border-secondary font-medium text-[16px] py-1.5 px-2.5">
                  About Me
                </button>
                <button className="hover:cursor-pointer text-secondary-font-color hover:text-third-font-color border rounded-xl bg-primary border-secondary font-medium text-[16px] py-1.5 px-2.5">
                  Resume
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Projects />
      <Service />
      <Tool />
    </>
  );
}
