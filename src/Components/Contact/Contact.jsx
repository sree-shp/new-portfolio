import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    thoughts: "",
  });

  function handleFormInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <>
      <h1 className="text-4xl text-primary font-azonix mb-8">Contact</h1>
      <div className="flex flex-col gap-10 md:flex-row md:gap-2 justify-center ">
        <div className="md:w-[50%] ">
          <h1 className="text-6xl font-semibold pb-5">
            Let&apos;s Work Together
          </h1>
          <p className="text-lg pb-5 text-justify">
            I&apos;m always excited to connect and collaborate on innovative
            projects. <br />
          </p>
          <p className="text-lg pb-5 text-justify">
            Whether you have a question, a partnership idea, or just want to
            chat about potential opportunities, feel free to reach out or email
            me directly at{" "}
            <a
              href="mailto:ksreehariprasad25@gmail.com"
              className="text-[#41ec4b] hover:scale-110 "
            >
              ksreehariprasad25@gmail.com
            </a>
            .
          </p>
          <p className="text-lg">
            Let&apos;s create something amazing together!
          </p>
        </div>
        <div className="md:w-[50%] flex flex-col items-center gap-3">
          <h1 className="text-left text-6xl font-semibold font-manrope pb-5">
            Get In Touch!
          </h1>
          <form className="w-full md:w-[60%] flex flex-col gap-3 ">
            <input
              className=" bg-[#1a1a1a] py-2 px-4 rounded-md outline-none focus:bg-[#1a1a1a]"
              placeholder="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleFormInputChange}
            />
            <input
              className=" bg-[#1a1a1a] py-2 px-4 rounded-md outline-none focus:bg-[#1a1a1a]"
              placeholder="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFormInputChange}
            />
            <textarea
              cols={20}
              rows={4}
              placeholder="What's on your mind?"
              name="thoughts"
              value={formData.thoughts}
              onChange={handleFormInputChange}
              className=" bg-[#1a1a1a] py-2 px-4 rounded-md outline-none"
            ></textarea>
            <button className="bg-[#2cea37] hover:bg-[#23bb2c] py-2 px-4 rounded-md text-black font-semibold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
