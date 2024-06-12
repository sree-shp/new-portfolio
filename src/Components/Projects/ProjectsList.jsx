import github from "../../assets/github-mark-white.png";
import link from "../../assets/link-512.png";
import fash from "../../assets/fash.png";
import wanderlog from "../../assets/wanderlog.png";
import starwars from "../../assets/starwars.png";
import brunel from "../../assets/brunnel.png";
import blaze from "../../assets/blaze.png";

function ProjectsList({ selectedProject, setSelectedProject }) {
  function handleProjectClick(name) {
    switch (name) {
      case fash:
        setSelectedProject({
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
        break;

      case wanderlog:
        setSelectedProject({
          name: "Wanderlog - Travel Tracking Platform",
          img: wanderlog,
          skill: [
            "React",
            "Express",
            "Nodejs",
            "MongoDB",
            "TailwindCSS",
            "Leaflet Library",
            "REST API",
            "JWT AUthentication",
            "Git",
          ],
        });
        break;

      case starwars:
        setSelectedProject({
          name: "Starwars Planets",
          img: starwars,
          skill: ["React", "TailwindCSS", "REST API", "UI", "Git"],
        });
        break;

      case blaze:
        setSelectedProject({
          name: "Blaze - Hosting Service",
          img: blaze,
          skill: ["React", "TailwindCSS", "UI/UX", "Git"],
        });
        break;

      case brunel:
        setSelectedProject({
          name: "Brunel Landing Page",
          img: brunel,
          skill: ["React", "UI/UX", "TailwindCSS", "Git"],
        });
        break;
      default:
        setSelectedProject({
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
        break;
    }
  }
  return (
    <div className="flex flex-col gap-3  rounded-xl  font-manrope">
      <div
        className="bg-black rounded-md flex justify-between items-center cursor-pointer hover:border-white border border-[#1a1a1a] "
        onClick={() => handleProjectClick(fash)}
      >
        <div className="h-full flex items-center ">
          <div
            className={`w-[8px] h-full ${
              selectedProject.img === fash ? "!bg-primary " : ""
            }bg-[#1a1a1a] rounded-tl-xl rounded-bl-md`}
          ></div>
          <h1 className="p-3">Fash</h1>
        </div>
        <div className="flex gap-8 mx-5">
          <a href="https://fash-store.vercel.app/">
            <img
              src={link}
              className="w-[25px] hover:scale-110 transition-transform shadow-[#2cea37]"
            />
          </a>
          <a href="https://github.com/sree-shp/Fash">
            <img
              src={github}
              className="w-[25px] hover:scale-[1.2] transition-transform"
            />
          </a>
        </div>
      </div>
      <div
        className="bg-black rounded-md flex justify-between items-center  cursor-pointer hover:border-white border border-[#1a1a1a] "
        onClick={() => handleProjectClick(wanderlog)}
      >
        <div className="h-full flex items-center ">
          <div
            className={`w-[8px] h-full ${
              selectedProject.img === wanderlog ? "!bg-primary " : ""
            }bg-[#1a1a1a] rounded-tl-xl rounded-bl-md`}
          ></div>
          <h1 className="p-3">WanderLog</h1>
        </div>
        <div className="flex gap-8 mx-5">
          <a href="https://wanderlog-dev.vercel.app/">
            <img
              src={link}
              className="w-[25px] hover:scale-[1.2] transition-transform"
            />
          </a>
          <a href="https://github.com/sree-shp/wanderlog">
            <img
              src={github}
              className="w-[25px] hover:scale-[1.2] transition-transform"
            />
          </a>
        </div>
      </div>
      <div
        className="bg-black rounded-md flex justify-between items-center  cursor-pointer hover:border-white border border-[#1a1a1a] "
        onClick={() => handleProjectClick(blaze)}
      >
        <div className="h-full flex items-center ">
          <div
            className={`w-[8px] h-full ${
              selectedProject.img === blaze ? "!bg-primary " : ""
            }bg-[#1a1a1a] rounded-tl-xl rounded-bl-md`}
          ></div>
          <h1 className="p-3">Blaze</h1>
        </div>
        <div className="flex gap-8 mx-5">
          <a href="https://blaze-hosting-service.vercel.app/">
            <img
              src={link}
              className="w-[25px] hover:scale-[1.2] transition-transform"
            />
          </a>
          <a href="https://blaze-hosting-service.vercel.app/">
            <img
              src={github}
              className="w-[25px] hover:scale-[1.2] transition-transform"
            />
          </a>
        </div>
      </div>
      <div
        className="bg-black rounded-md flex justify-between items-center  cursor-pointer hover:border-white border border-[#1a1a1a] "
        onClick={() => handleProjectClick(starwars)}
      >
        <div className="h-full flex items-center ">
          <div
            className={`w-[8px] h-full ${
              selectedProject.img === starwars ? "!bg-primary " : ""
            }bg-[#1a1a1a] rounded-tl-xl rounded-bl-md`}
          ></div>
          <h1 className="p-3">StarWars Planets</h1>
        </div>
        <div className="flex gap-8 mx-5">
          <a href="https://starwars-eight-theta.vercel.app/">
            <img
              src={link}
              className="w-[25px] hover:scale-[1.2] transition-transform"
            />
          </a>
          <a href="https://github.com/sree-shp/starwars">
            <img
              src={github}
              className="w-[25px] hover:scale-[1.2] transition-transform"
            />
          </a>
        </div>
      </div>
      <div
        className="bg-black rounded-md flex justify-between items-center  cursor-pointer hover:border-white border border-[#1a1a1a] "
        onClick={() => handleProjectClick(brunel)}
      >
        <div className="h-full flex items-center ">
          <div
            className={`w-[8px] h-full ${
              selectedProject.img === brunel ? "!bg-primary " : ""
            }bg-[#1a1a1a] rounded-tl-xl rounded-bl-md`}
          ></div>
          <h1 className="p-3">Brunel</h1>
        </div>
        <div className="flex gap-8 mx-5">
          <a href="https://brunnel-app.vercel.app/">
            <img
              src={link}
              className="w-[25px] hover:scale-[1.2] transition-transform"
            />
          </a>
          <a href="https://github.com/sree-shp/brunnel-app">
            <img
              src={github}
              className="w-[25px] hover:scale-[1.2] transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsList;
