import ServiceComponent from "./ServiceComponent";
import { Link, useLocation } from "react-router-dom";

export default function Service() {
  const location = useLocation();
  const path = location.pathname;

  const data = [
    {
      title: "Website Development",
      paragraph:
        "Develop static, dynamic and interactive webistes for business. Develop portfolio websites for professional and business. ",
      price: "3000",
      src: "/service/web.jpg",
    },
    {
      title: "POS System",
      paragraph:
        "Develop point of sale system for small business, shops and restaurants",
      price: "5000",
      src: "/service/pos.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12  mx-1.5">
      <div className=" grid grid-cols-8 rounded-lg text-[20px]  sm:col-start-2 mt-12  sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 bg-secondary border border-secondary ">
        <div className="col-start-1 col-span-8 px-4  md:px-6 my-5 ">
          {path === "/services" ? null : (
            <h1 className="text-third-font-color text-2xl font-bold">
              Services
            </h1>
          )}
          <Link to={"/contact"}>
            <ServiceComponent service={data[0]} />
            <ServiceComponent service={data[1]} />
          </Link>
        </div>
      </div>
    </div>
  );
}
