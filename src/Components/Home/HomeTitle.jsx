function HomeTitle() {
  return (
    <div className="h-full flex flex-col items-center justify-center ">
      <div className="welcome-message relative text-center">
        <div className="flex flex-col items-center justify-center relative z-[1000">
          <h1 className=" text-6xl md:text-8xl font-azonix text-white mb-4  tracking-wider">
            Hi, I&apos;m Sreehari
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold font-azonix text-primary tracking-wider mb-8 ">
            FULL-STACK DEVELOPER
          </h2>
          <p className=" flex flex-col md:flex-row justify-center items-center gap-5 text-lg text-manrope ">
            <span className="">
              Let &apos;s build something amazing together!
            </span>
            <a href="#contact">
              <button className="text-primary  rounded-3xl transition-transform hover:scale-[1.1]">
                Get in touch
              </button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomeTitle;
