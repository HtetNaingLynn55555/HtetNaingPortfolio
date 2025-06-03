import { IoHeartOutline } from "react-icons/io5";
export default function Footer() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12  mx-1.5">
      <div className=" grid grid-cols-8 rounded-lg text-[20px]  sm:col-start-2 mt-12  sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 bg-secondary border border-secondary ">
        <div className="col-start-1 col-span-8 md:col-start-3 md:col-span-4  ">
          <div className="flex py-15 gap-2 flex-col justify-center items-center">
            <h1 className="text-secondary-font-color">htet naing lynn</h1>
            <ul className="flex items-center justify-center gap-1 text-[18px] text-secondary-font-color">
              <li>
                <a href="">
                  <span>home</span>
                </a>
              </li>

              <li>
                <a href="">
                  <span>projects</span>
                </a>
              </li>

              <li>
                <a href="">
                  <span>contact</span>
                </a>
              </li>
            </ul>

            <p className="flex justify-center items-center  gap-1 text-third-font-color text-[16px]">
              htet naing | 2025 <IoHeartOutline />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
