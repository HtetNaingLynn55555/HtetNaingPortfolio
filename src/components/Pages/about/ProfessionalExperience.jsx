import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoEllipseOutline } from "react-icons/io5";
import { IoEllipseSharp } from "react-icons/io5";

export default function ProfessionalExperience() {
  const data = [
    {
      title: "Library Management System as Main PIC",
      paragraph_one:
        "Developed and maintained a libray management system to enhance user engagement and provide accessible, interactive educational content",
      paragraph_two:
        "Collaborated with a team to implement user-friendly features, such as course modules, progress tracking, and quizzes, to improve learning outcomes.",
    },

    {
      title: "Training Management System as Second PIC",
      paragraph_one:
        "Served as the second person in charge, collaborating closely on both front-end and back-end development of a Training Management System to enhance course scheduling, participant tracking, and reporting.",
      paragraph_two:
        "Contributed to the design and implementation of user-friendly interfaces, ensuring a seamless experience for trainers and trainess",
    },

    {
      title: "Online Learning Platform as Second PIC",
      paragraph_one:
        "Collaborated with a team to implement user-friendly features, such as course modules, progress tracking, and quizzes, to improve learning outcomes",
      paragraph_two:
        "Developed and maintained a learning platform to enchance user engagement and provide accessible, interactive educational content.",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12  mx-1.5">
      <div className=" grid grid-cols-8 rounded-lg text-[20px]  sm:col-start-2 mt-12  sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 bg-secondary border border-secondary ">
        <div className="col-start-1 col-span-8 px-4  md:px-6 my-5 ">
          <div className="flex justify-between items-center">
            <h1 className=" text-secondary-font-color   text-[18px]  font-bold">
              Web Developer ( mid-level )
            </h1>
            <h1 className="text-[12px] text-secondary-font-color ">
              2023 - Present at UMG Myanmar
            </h1>
          </div>
          <ProjectExp project={data[0]} />
          <ProjectExp project={data[1]} />
          <ProjectExp project={data[2]} />
          <OtherWebsite />
        </div>
      </div>
    </div>
  );
}

function ProjectExp({ project }) {
  return (
    <div className="grid grid-cols-3 hover:opacity-[.80]  my-4 p-3 border-secondary bg-primary rounded-xl ">
      <div className="col-span-3 ">
        <div>
          <h1 className="text-secondary-font-color justify-self-start  text-[18px]  font-bold ">
            {project.title}
          </h1>
          <ul className="text-secondary-font-color text-[15px] list-disc ms-4.5 my-2.5">
            <li>{project.paragraph_one}</li>
          </ul>
          <ul className="text-secondary-font-color text-[15px] ms-4.5 list-disc my-2.5">
            <li> {project.paragraph_two}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function OtherWebsite() {
  return (
    <div className="grid grid-cols-3 hover:opacity-[.80]  my-4 p-3 border-secondary bg-primary rounded-xl ">
      <div className="col-span-3 ">
        <div>
          <h1 className="text-secondary-font-color justify-self-start  text-[18px]  font-bold">
            Static WebSite
          </h1>
          <div className=" text-secondary-font-color text-[15px] my-2.5">
            <ul className="flex justify-around gap-1.5 items-center list-disc">
              <li className="hover:cursor-pointer hover:text-third-font-color">
                <a href="https://beexprss.com/" target="_blank">
                  BeeXprss
                </a>
              </li>
              <li className="hover:cursor-pointer hover:text-third-font-color">
                <a href="https://umglogistics.com/" target="_blank">
                  UMG Logestic
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
