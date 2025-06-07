export default function ToolComponent({ tool }) {
  return (
    <div className="grid grid-cols-3 hover:opacity-[.80]  my-4 p-3 border-secondary bg-primary rounded-xl ">
      <div className="col-span-3 sm:col-span-2">
        <div className="flex justify-start gap-6  ">
          <img
            src={tool.src}
            className="size-20 overflow-hidden justify-self-start rounded-xl"
            alt=""
          />
          <div>
            <h1 className="text-main-font-color justify-self-start  text-[18px] lowercase font-bold ">
              {tool.title}
            </h1>
            <p className="text-secondary-font-color text-[15px]">
              {tool.paragraph}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
