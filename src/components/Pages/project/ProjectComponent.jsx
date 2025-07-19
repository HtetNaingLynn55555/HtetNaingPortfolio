import { IoArrowForwardOutline } from "react-icons/io5";

export default function ProjectComponent({ project }) {
  return (
    <div className="grid grid-cols-3 hover:opacity-[.80]  my-4 p-3 border-secondary bg-primary rounded-xl ">
      <div className="col-span-3 sm:col-span-2">
        <div className="  flex justify-start gap-6  ">
          <img
            src={project.img}
            className="size-20 bg-white overflow-hidden justify-self-start rounded-xl"
            alt=""
          />
          <div>
            <h1 className="text-secondary-font-color justify-self-start  text-[18px]  font-bold ">
              {project.title}
            </h1>
            <p className="text-secondary-font-color text-[15px]">
              {project.paragraph}
            </p>
          </div>
        </div>
      </div>
      <div className="sm:flex hidden  justify-end items-center border-secondary  p-1">
        <div className="w-8 h-8 bg-secondary rounded-xl flex justify-center items-center">
          <IoArrowForwardOutline />
        </div>
      </div>
    </div>
  );
}
