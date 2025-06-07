import { IoArrowForwardOutline } from "react-icons/io5";
export default function ServiceComponent({ service }) {
  return (
    <div className="grid grid-cols-3 hover:opacity-[.80]  my-4 p-3 border-secondary bg-primary rounded-xl ">
      <div className="col-span-3">
        <img
          src={service.src}
          className="size-15 overflow-hidden justify-self-start rounded-xl"
          alt=""
        />
      </div>

      <div className="my-3.5 col-span-3 flex justify-between items-start">
        <div className="">
          <h1 className="text-main-font-color justify-self-start  text-2xl lowercase font-bold ">
            {service.title}
          </h1>
          <p className="text-secondary-font-color mt-4.5 text-[15px]">
            {service.paragraph}
          </p>
          <p className="text-secondary-font-color mt-2.5 text-[15px]">
            Starting at {service.price} Bath
          </p>
        </div>
        <div className="sm:flex hidden  justify-end items-center border-secondary  p-1">
          <div className="w-8 h-8 bg-secondary rounded-xl flex justify-center items-center">
            <IoArrowForwardOutline />
          </div>
        </div>
      </div>
    </div>
  );
}
