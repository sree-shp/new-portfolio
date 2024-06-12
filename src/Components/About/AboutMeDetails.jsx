function AboutMeDetails() {
  return (
    <div className="about-details font-manrope flex flex-col gap-5 ">
      <p className="text-justify text-md">
        A passionate full stack developer with hands-on experience in building
        dynamic, responsive, and user-centric web applications. My expertise
        spans both front-end and back-end development, allowing me to create
        seamless and efficient solutions from conception to deployment.
      </p>
      <p className="text-justify text-md">
        I thrive in collaborative environments, working closely with
        cross-functional teams to understand user needs and translate them into
        innovative digital experiences. My problem-solving skills and attention
        to detail ensure that I deliver high-quality, scalable, and maintainable
        code.
      </p>
      {/* <p>Let's build something amazing together!</p> */}
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-primary">Education: </h1>
        <div className="flex flex-col gap-2">
          <div className="w-full">
            <p className="flex justify-between">
              <span className="">
                PSG Institute of Technology and Applied Research
              </span>
              <span className="text-primary text-right">CGPA 8.55</span>
            </p>
            <p className="text-[#a3a3a3]">B.E in Mechanical Engineering </p>
          </div>
          <div className="">
            <p className="flex justify-between">
              <span className="">
                Bharathi Matriculation Higher Secondary School
              </span>
              <span className="text-primary">89.6%</span>
            </p>
            <p className="text-[#a3a3a3]">HSC</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="">
          <h1 className="font-semibold text-primary mb-2">Hobbies: </h1>

          <ul className="">
            <li className="">Football</li>
            <li className="">Cricket</li>
            <li className="">Music Production</li>
          </ul>
        </div>
        <div className="">
          <h1 className="font-semibold text-primary mb-2">My Resume: </h1>
          <a href={`./resume.pdf`} download="resume.pdf">
            <button className="bg-[#1a1a1a] text-white px-8 py-2 rounded-md">
              Download
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMeDetails;
