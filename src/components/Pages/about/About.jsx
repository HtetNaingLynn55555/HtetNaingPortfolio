import ProfessionalExperience from "./ProfessionalExperience";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <>
      <AboutHeader />
      <ProfessionalExperience />
    </>
  );
}

function AboutHeader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12  mx-1.5">
      <div className=" grid grid-cols-8 rounded-lg text-[20px]  sm:col-start-2 mt-12  sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 bg-secondary border border-secondary ">
        <div className="col-start-1 col-span-8 md:col-start-3 md:col-span-4  ">
          <div className="flex flex-col justify-center items-center gap-4  py-7">
            <h1 className="text-3xl text-secondary-font-color font-bold">
              About Me
            </h1>
            <p className="text-[15px] font-semibold text-secondary-font-color text-center ">
              Dedicated web developer with 2 years of experience in creating
              dynamic and responsive websites.
            </p>

            <Link to={"/about"}>
              <button className="mt-1.5 text-secondary-font-color hover:cursor-pointer hover:text-third-font-color hover:border-primary hover:border hover:rounded-sm border rounded-sm bg-primary border-secondary font-medium text-[16px] py-2.5 px-5.5">
                Resume Download
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
