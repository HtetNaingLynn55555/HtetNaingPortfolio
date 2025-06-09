import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12  mx-1.5">
      <div className=" grid grid-cols-8 rounded-lg text-[20px]  sm:col-start-2 mt-12  sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 bg-secondary border border-secondary ">
        <div className="col-start-1 col-span-8 md:col-start-3 md:col-span-4  ">
          <div className=" flex flex-col items-center justify-center gap-7 py-10 ">
            <p className="text-2xl/8 text-secondary-font-color font-semibold text-center   ">
              <p>Let’s create</p>
              <p>something together</p>
            </p>
            <Link to={"/contact"}>
              <button className="text-secondary-font-color hover:cursor-pointer hover:text-third-font-color hover:border-primary hover:border hover:rounded-sm border rounded-sm bg-primary border-secondary font-medium text-[16px] py-2.5 px-5.5">
                Contact
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
