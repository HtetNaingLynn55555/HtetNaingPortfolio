import Tool from "./Tool";
export default function ToolDetails() {
  return (
    <>
      <ToolHeader />
      <Tool />
    </>
  );
}

function ToolHeader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12  mx-1.5">
      <div className=" grid grid-cols-8 rounded-lg text-[20px]  sm:col-start-2 mt-12  sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 bg-secondary border border-secondary ">
        <div className="col-start-1 col-span-8 md:col-start-3 md:col-span-4  ">
          <div className="flex flex-col justify-center items-center gap-4  py-7">
            <h1 className="text-3xl font-bold">Tools</h1>
            <p className="text-[14px] font-extralight text-center indent-5">
              The tools and technologies I use to bring my projects to life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
