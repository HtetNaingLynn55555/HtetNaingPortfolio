import ProjectComponent from "./ProjectComponent";
import { Link, useLocation } from "react-router-dom";
export default function Projects() {
  const location = useLocation();
  const path = location.pathname;

  const projectList = [
    {
      id: 1,
      title: "Bee Exprees",
      img: "/projects/bee.png",
      pathname: "https://beexprss.com/",
      paragraph: "website to check delivery status",
    },
    {
      id: 2,
      title: "Mandalay Bay Resort",
      pathname: "https://mdybayresort.com/",
      img: "/projects/mandalaybay.jpg",
      paragraph: "Resort, Hotel and Restaurant ",
    },
    {
      id: 3,
      title: "Mandalay Water Boom",
      pathname: "https://mandalaywaterboom.com/",
      img: "/projects/mandalaywater.png",
      paragraph: "Resort, Hotel and Restaurant ",
    },

    {
      id: 4,
      title: "Yangon Water Boom",
      pathname: "https://yangonwaterboom.com/",
      img: "/projects/yangonwater.png",
      paragraph: "Resort, Hotel and Restaurant ",
    },

    {
      id: 5,
      title: "Open Mind",
      pathname: "https://openmind.com.mm/",
      img: "/projects/openmind.png",
      paragraph: "Digital Marketing Agency ",
    },
    {
      id: 6,
      title: "UMG Myanmar",
      pathname: "https://www.umgmyanmar.com/",
      img: "/projects/umg.png",
      paragraph: "Group of companies in Myanmar ",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12   mx-1.5">
      <div className=" grid grid-cols-8 rounded-lg text-[20px]  sm:col-start-2 mt-12  sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 bg-secondary border border-secondary ">
        <div className="col-start-1 col-span-8 px-4  md:px-6 my-5 ">
          {path === "/projects" ? (
            false
          ) : (
            <h1 className="text-third-font-color text-2xl font-bold">
              Projects
            </h1>
          )}
          {projectList.map((data) => (
            <span key={data.id}>
              <Link to={data.pathname} target="_blank">
                <ProjectComponent project={data} />
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
