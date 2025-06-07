import ToolComponent from "./ToolComponent";
import { useLocation } from "react-router-dom";
export default function Tool() {
  const location = useLocation();
  const path = location.pathname;
  const data = [
    {
      src: "/tools/nextjs.png",
      title: "Nextjs",
      paragraph: "Nextjs framework",
    },
    {
      src: "/tools/react.png",
      title: "Reactjs",
      paragraph: "React framework",
    },
    {
      src: "/tools/vue.png",
      title: "Vuejs",
      paragraph: "Vue framework",
    },
    {
      src: "/tools/laravel.png",
      title: "Laravel",
      paragraph: "Laravel framework",
    },
    {
      src: "/tools/express.png",
      title: "Expressjs",
      paragraph: "Express js framework",
    },
    {
      src: "/tools/php.png",
      title: "PHP",
      paragraph: "PHP for webdevelopment ",
    },
    {
      src: "/tools/java.png",
      title: "JAVA",
      paragraph: "JAVA for webdevelopment ",
    },
    {
      src: "/tools/js.png",
      title: "JavaScript",
      paragraph: "JavaScript for webdevelopment ",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-12  mx-1.5">
      <div className=" grid grid-cols-8 rounded-lg text-[20px]  sm:col-start-2 mt-12  sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 bg-secondary border border-secondary ">
        <div className="col-start-1 col-span-8 px-4  md:px-6 my-5 ">
          {path === "/tools" ? null : (
            <h1 className="text-third-font-color text-2xl font-bold">Tools</h1>
          )}

          <ToolComponent tool={data[0]} />
          <ToolComponent tool={data[1]} />
          <ToolComponent tool={data[2]} />
          <ToolComponent tool={data[3]} />
          <ToolComponent tool={data[4]} />
          <ToolComponent tool={data[5]} />
          <ToolComponent tool={data[6]} />
          <ToolComponent tool={data[7]} />
        </div>
      </div>
    </div>
  );
}
