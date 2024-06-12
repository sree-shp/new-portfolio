import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import HomeTitle from "../Components/Home/HomeTitle";
import AboutMeDetails from "../Components/About/AboutMeDetails";
import Skills from "../Components/About/Skills";
import fash from "../assets/fash.png";
import ProjectsList from "../Components/Projects/ProjectsList";
import ProjectDetails from "../Components/Projects/ProjectDetails";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

function Home() {
  const [selectedProject, setSelectedProject] = useState({
    name: "Fash - E-Commerce Platform",
    img: fash,
    skill: [
      "React",
      "Express",
      "Nodejs",
      "MongoDB",
      "TailwindCSS",
      "REST API",
      "JWT AUthentication",
      "Git",
    ],
  });

  return (
    <section id="home" className="h-screen bg-cover bg-fixed text-secondary ">
      <img src="/bg7.jpg" className="fixed z-[10] w-full h-full object-cover" />
      <section
        id="#home"
        className="homepage-wrapper flex flex-col items-center justify-center relative h-full px-[1rem] z-[100]"
      >
        <Navbar />
        <HomeTitle />
      </section>

      <section
        id="about"
        className=" bg-tertiary text-white grid grid-rows-2 md:grid-cols-2 md:grid-rows-1  gap-10 py-[5rem] px-[1rem] md:p-[5rem] relative z-[100]"
      >
        <div className="">
          <h1 className=" font-azonix text-4xl text-primary mb-8">About Me</h1>
          <AboutMeDetails />
        </div>
        <div id="skills ">
          <h1 className=" font-azonix text-4xl text-primary mb-8">Skills</h1>

          <Skills />
        </div>
      </section>

      <section
        id="projects"
        className="bg-[#101010] px-[1rem] pt-[5rem] md:p-[5rem] md:pb-[2rem] relative z-[100]"
      >
        <h1 className="text-4xl text-primary font-azonix mb-8">Projects</h1>

        <div className="grid md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-5  rounded-xl min-h-[475px]">
          <ProjectsList
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
          <ProjectDetails selectedProject={selectedProject} />
        </div>
      </section>

      <section
        id="contact"
        className="bg-black px-[1rem] py-[5rem] md:p-[5rem] relative z-[100]"
      >
        <Contact />
      </section>

      <section
        id="footer"
        className="flex flex-col  justify-center items-center gap-5 bg-black h-[200px] relative z-[100]"
      >
        <Footer />
      </section>
    </section>
  );
}

export default Home;
