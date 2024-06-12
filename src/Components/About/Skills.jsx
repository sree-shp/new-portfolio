import Marquee from "react-fast-marquee";

import html from "../../assets/html-5.png";
import css from "../../assets/css-3.png";
import js from "../../assets/js.png";
import java from "../../assets/java.png";
import react from "../../assets/react.png";
import node from "../../assets/nodejs.png";
import mongodb from "../../assets/mongodb.png";
import tailwind from "../../assets/tailwind.png";
import git from "../../assets/git.png";
import postman from "../../assets/postman.png";
import excel from "../../assets/excel.png";
import word from "../../assets/word.png";
import vscode from "../../assets/vscode.png";

function Skills() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full md:h-fit">
        <div className="pb-10">
          <div className="overflow-hidden whitespace-nowrap flex  ">
            <Marquee className="w-[300px] md:w-full relative z-[1000] before:absolute before:top-0 before:w-[50px] md:before:w-[150px] before:h-full before:bg-gradient-to-r before:from-black before:to-transparent before:left-0 before:z-[10000] after:absolute after:top-0 after:w-150px] md:after:w-[150px] after:h-full after:z-[10000] after:bg-gradient-to-l after:from-black after:to-transparent after:right-0">
              <img className="skill-img w-[150px] px-[20px]" src={html} />

              <img className="skill-img w-[150px] px-[20px]" src={css} />

              <img className="skill-img w-[150px] px-[20px]" src={js} />

              <img className="skill-img w-[150px] px-[20px]" src={react} />

              <img className="skill-img w-[150px] px-[20px]" src={tailwind} />
            </Marquee>
          </div>
        </div>
        <div className="py-10">
          <div className="overflow-hidden whitespace-nowrap flex  ">
            <Marquee
              direction="right"
              className="w-[300px] md:w-full relative z-[1000] before:absolute before:top-0 before:w-[50px] md:before:w-[150px] before:h-full before:bg-gradient-to-r before:from-black before:to-transparent before:left-0 before:z-[10000] after:absolute after:top-0 after:w-150px] md:after:w-[150px] after:h-full after:z-[10000] after:bg-gradient-to-l after:from-black after:to-transparent after:right-0"
            >
              <img className="skill-img w-[150px] px-[20px]" src={java} />

              <img className="skill-img w-[150px] px-[20px]" src={node} />

              <img className="skill-img w-[150px] px-[20px]" src={mongodb} />

              <img className="skill-img w-[150px] px-[20px]" src={react} />

              <img className="skill-img w-[150px] px-[20px]" src={tailwind} />
            </Marquee>
          </div>
        </div>
        <div className="py-10">
          <div className="overflow-hidden whitespace-nowrap flex  ">
            <Marquee className="w-[300px] md:w-full relative z-[1000] before:absolute before:top-0 before:w-[50px] md:before:w-[150px] before:h-full before:bg-gradient-to-r before:from-black before:to-transparent before:left-0 before:z-[10000] after:absolute after:top-0 after:w-150px] md:after:w-[150px] after:h-full after:z-[10000] after:bg-gradient-to-l after:from-black after:to-transparent after:right-0">
              <img className="skill-img w-[150px] px-[20px]" src={git} />

              <img className="skill-img w-[150px] px-[20px]" src={postman} />

              <img className="skill-img w-[150px] px-[20px]" src={vscode} />

              <img className="skill-img w-[150px] px-[20px]" src={word} />

              <img className="skill-img w-[150px] px-[20px]" src={excel} />
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
