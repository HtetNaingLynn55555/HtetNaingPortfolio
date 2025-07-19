import { useState, useRef } from "react";
import { IoHeart } from "react-icons/io5";
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
            <h1 className="text-3xl text-secondary-font-color font-bold">
              Contact
            </h1>
            <p className="text-[15px] font-semibold text-secondary-font-color text-center ">
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
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");
  let [submitted, setSubmitted] = useState(false);
  let [isNameFocus, setIsNameFocus] = useState(false);
  let [isEmailFocus, setIsEmailFocus] = useState(false);
  let [isMessageFocus, setIsMessageFocus] = useState(false);

  // let nameRef = useRef(null);
  // let emailRef = useRef(null);
  // let messageRef = useRef(null);

  const handleFocus = (e) => {
    if (e.target.name === "name") {
      setIsNameFocus(true);
    }
    if (e.target.name === "email") {
      setIsEmailFocus(true);
    }
    if (e.target.name === "message") {
      setIsMessageFocus(true);
    }
  };
  const handleBlur = (e) => {
    if (e.target.name === "name") {
      setIsNameFocus(false);
    }
    if (e.target.name === "email") {
      setIsEmailFocus(false);
    }
    if (e.target.name === "message") {
      setIsMessageFocus(false);
    }
  };
  const onChangeHander = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    }
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "message") {
      setMessage(e.target.value);
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setIsNameFocus(true);
    }
    if (message === "") {
      setIsMessageFocus(true);
    }
    if (email === "") {
      setIsEmailFocus(true);
    }

    if (name && email && message) {
      fetch("https://formspree.io/f/xkgzogjj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })
        .then((res) => {
          if (res.ok) {
            setSubmitted(true);
            setName("");
            setEmail("");
            setMessage("");
          } else {
            alert("Something went wrong. Please try again.");
          }
        })
        .catch((err) => alert("Error: " + err));
    }
  };
  // console.log(nameRef.current);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12  mx-1.5">
      <div className=" grid grid-cols-8 rounded-lg text-[20px]  sm:col-start-2 mt-12  sm:col-span-10 md:col-start-3 md:col-span-8 lg:col-start-4 lg:col-span-6 bg-secondary border border-secondary ">
        <div className="col-start-1 col-span-8 md:col-start-2 md:col-span-6 px-4 md:p-0 ">
          {submitted ? (
            <div className="flex flex-col gap-7 my-10 text-[14px]">
              <div className="flex flex-col items-center text-secondary-font-color font-semibold tracking-wide ">
                " Thank you for your message. I'll be in touch soon! "
                <IoHeart className="text-pink-700 mt-2" />
              </div>
            </div>
          ) : (
            <form
              action=""
              onSubmit={handleSubmit}
              className="flex flex-col gap-7 my-10 text-[14px]"
            >
              <div className="flex flex-col">
                <input
                  name="name"
                  // ref={nameRef}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  type="text"
                  value={name}
                  onChange={onChangeHander}
                  className="placeholder:px-2 placeholder:text-[14px]  bg-primary rounded-xl text-[14px] px-1.5 border-1 border-primary focus:border-1 focus:border-third py-3 focus:outline-none"
                  placeholder="your name"
                />
                {isNameFocus && name == "" ? (
                  <span className="text-red-700 mt-0.5">
                    {" "}
                    * your name is required{" "}
                  </span>
                ) : (
                  ""
                )}
              </div>

              <div style={{ display: "none" }}>
                <label>Leave this field empty:</label>
                <input type="text" name="_gotcha" />
              </div>

              <div className="flex flex-col">
                <input
                  // ref={emailRef}
                  name="email"
                  value={email}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  onChange={onChangeHander}
                  type="email"
                  className="bg-primary rounded-xl placeholder:px-2 placeholder:text-[14px]  text-[14px]  px-1.5 border-1 border-primary focus:border-1 focus:border-third py-3 focus:outline-none"
                  placeholder="youremail@gmail.com"
                />
                {isEmailFocus && email == "" ? (
                  <span className="text-red-700 mt-0.5">
                    {" "}
                    * your email is required{" "}
                  </span>
                ) : (
                  ""
                )}
              </div>

              <div className="flex flex-col">
                <textarea
                  name="message"
                  // ref={messageRef}

                  value={message}
                  onChange={onChangeHander}
                  onBlur={handleBlur}
                  onFocus={handleFocus}
                  rows={4}
                  className="bg-primary placeholder:px-2 placeholder:text-[14px]  rounded-xl text-[14px] px-1.5 border-1 border-primary focus:border-1 focus:border-third py-3 focus:outline-none"
                  placeholder="message"
                  id=""
                ></textarea>
                {isMessageFocus && message == "" ? (
                  <span className="text-red-700 mt-0.5">
                    {" "}
                    * message is required{" "}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="flex flex-col">
                <button className="rounded-xl text-secondary-font-color text-[14px] px-1.5 border-none bg-primary py-3 hover:text-third-font-color">
                  submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
