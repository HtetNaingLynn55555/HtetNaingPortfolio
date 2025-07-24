import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { IoEllipseOutline } from "react-icons/io5";
import { IoEllipseSharp } from "react-icons/io5";

export default function ProfessionalExperience() {
  const data = [
    {
      key: 1,
      title: "Learning Management System as Main PIC",
      paragraph: [
        "Collaborated on scope definition, feature implementation and responsive frontend integration.",
        "Implemented admin dashboards, course detail pages and lesson video playback features.",
        "Integrated API endpoints to display dynamic content such as enrolled courses and quiz results.",
        "Ensured cross-browser compatibility and mobile responsiveness.",
      ],
    },

    {
      key: 2,
      title: "Meeting Management System as Second PIC",
      paragraph: [
        "Developed dynamic and responsive user interfaces using Vue.js",
        "Designed and implemented RESTful APIs and backend logic using Laravel, Eloquent ORM and MySQL",
        "Developed CRUD features for meetings, attendees and departments",
        "Used Tailwind CSS to build clean mobile-first UI",
      ],
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
              2023 - June-2025
            </h1>
          </div>

          {data.map((project) => (
            <ProjectExp key={project.key} project={project} />
          ))}

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
            {project.paragraph.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
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
          <div className=" text-secondary-font-color  text-[15px] my-2.5">
            <ul className="grid grid-cols-12 px-2.5 ms-3.5">
              <div className="col-span-12 sm:col-span-6 list-disc ">
                <li className="hover:cursor-pointer  hover:text-third-font-color">
                  <a href="https://beexprss.com/" target="_blank">
                    BeeXprss
                  </a>
                </li>
                <li className="hover:cursor-pointer hover:text-third-font-color">
                  <a href="https://mdybayresort.com/" target="_blank">
                    Mandalay Bay Resort
                  </a>
                </li>

                <li className="hover:cursor-pointer hover:text-third-font-color">
                  <a href="https://mandalaywaterboom.com/" target="_blank">
                    Mandalay Water Boom
                  </a>
                </li>
              </div>
              <div className="col-span-12 sm:col-span-6 list-disc">
                <li className="hover:cursor-pointer hover:text-third-font-color">
                  <a href="https://yangonwaterboom.com/" target="_blank">
                    Yangon Water Boom
                  </a>
                </li>

                <li className="hover:cursor-pointer hover:text-third-font-color">
                  <a href="https://openmind.com.mm/" target="_blank">
                    Open Mind
                  </a>
                </li>

                <li className="hover:cursor-pointer hover:text-third-font-color">
                  <a href="https://www.umgmyanmar.com/" target="_blank">
                    UMG Myanmar
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
