export default function ContactDetails() {
  return (
    <>
      <Contact />
      <ContactForm />
    </>
  );
}

function Contact() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12  mx-1.5">
      <div className=" grid grid-cols-8 rounded-lg text-[20px]  sm:col-start-2 mt-12  sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 bg-secondary border border-secondary ">
        <div className="col-start-1 col-span-8 md:col-start-3 md:col-span-4  ">
          <div className="flex flex-col justify-center items-center gap-4  py-7">
            <h1 className="text-3xl font-bold">Contact</h1>
            <p className="text-[14px] font-extralight text-center indent-5">
              Whether you're interested in working together on a new project,
              have questions about my services, or just want to say hello, I'd
              love to hear from you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12  mx-1.5">
      <div className=" grid grid-cols-8 rounded-lg text-[20px]  sm:col-start-2 mt-12  sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 bg-secondary border border-secondary ">
        <div className="col-start-1 col-span-8 md:col-start-3 md:col-span-4  ">
          <form action="" className="flex flex-col gap-4 my-10 text-[14px]">
            <div className="flex flex-col">
              <input
                type="text"
                className="bg-primary rounded-xl text-[14px] px-1.5 border-1 border-primary focus:border-1 focus:border-third py-2 focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="email"
                className="bg-primary rounded-xl text-[14px] px-1.5 border-1 border-primary focus:border-1 focus:border-third py-2 focus:outline-none"
                placeholder="youremail@gmail.com"
              />
            </div>

            <div className="flex flex-col">
              <textarea
                name=""
                rows={4}
                className="bg-primary rounded-xl text-[14px] px-1.5 border-1 border-primary focus:border-1 focus:border-third py-2 focus:outline-none"
                placeholder="Message"
                id=""
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
