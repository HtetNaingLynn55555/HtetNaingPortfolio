import ProjectComponent from "./ProjectComponent";

export default function Projects() {
  const data = {
    title: "Bee Exprees",
    paragraph: "website to check delivery status",
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12  mx-1.5">
      <div className=" grid grid-cols-8 rounded-lg text-[20px]  sm:col-start-2 mt-12  sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 bg-secondary border border-secondary ">
        <div className="col-start-1 col-span-8 px-4  md:px-6 my-5 ">
          <h1 className="text-third-font-color text-2xl font-bold">Projects</h1>
          <ProjectComponent project={data} />
          <ProjectComponent project={data} />
          <ProjectComponent project={data} />
        </div>
      </div>
    </div>
  );
}
