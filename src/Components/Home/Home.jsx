/* eslint-disable react/no-unescaped-entities */
import "./Home.css";
import teamwork from "../../assets/teamwork.jpg";
import problemsolving from "../../assets/problemsolving.jpg";
import attentiontodetail from "../../assets/attentiontodetail.jpg";
import html from "../../assets/html-5.png";
import css from "../../assets/css-3.png";
import js from "../../assets/js.png";
import java from "../../assets/java.png";
import react from "../../assets/react.png";
import node from "../../assets/nodejs.png";
import mongodb from "../../assets/mongodb.png";
import express from "../../assets/express.png";
import tailwind from "../../assets/tailwind.png";

function Home() {
  return (
    <div className="home">
      <div className="homepage-wrapper">
        <div className="homepage-heading">
          <div className="welcome-message">
            <h1>Hi, I'm Sreehari</h1>
            <h2>FULL-STACK DEVELOPER</h2>
          </div>

          <h3>
            Coding dreams into reality, I craft seamless web experiences with a
            blend of innovation and precision.
          </h3>
          <img className="avatar" src="avatar.png" alt="avatar" />
        </div>
      </div>
      <div className="about-wrapper">
        <div className="about-heading">About Me</div>
        <div className="about-details">
          <div className="about-details-box">
            <div className="about-details-image-container">
              <img
                className="about-details-box-image"
                src={problemsolving}
                alt=""
              />
            </div>

            <h2>Problem-solving</h2>
            <div className="about-description">
              With expertise in front-end technologies, coupled with back-end
              proficiency, I thrive on crafting seamless, user-centric digital
              experiences.
            </div>
          </div>
          <div className="about-details-box">
            <div className="about-details-image-container">
              <img
                className="about-details-box-image"
                src={attentiontodetail}
                alt=""
              />
            </div>

            <h2>Attention to Detail</h2>
            <div className="about-description">
              I'm passionate about turning ideas into reality through clean,
              efficient code and staying ahead in the ever-evolving tech
              landscape.
            </div>
          </div>
          <div className="about-details-box">
            <div className="about-details-image-container">
              <img className="about-details-box-image" src={teamwork} alt="" />
            </div>
            <h2>Team Collaboration</h2>
            <div className="about-description">
              Effective communication and collaboration are at the core of my
              approach, ensuring successful project outcomes. Let's collaborate
              and bring your digital vision to life!
            </div>
          </div>
        </div>
      </div>
      <div id="skills">
        <h1 className="skills-heading">Skills</h1>
        <div className="skill-box-wrapper">
          <div className="skill-box">
            <img className="skill-img" src={html} />
          </div>
          <div className="skill-box">
            <img className="skill-img" src={css} />
          </div>
          <div className="skill-box">
            <img className="skill-img" src={js} />
          </div>
          <div className="skill-box">
            <img className="skill-img" src={react} />
          </div>
          <div className="skill-box">
            <img className="skill-img" src={mongodb} />
          </div>
          <div className="skill-box">
            <img className="skill-img" src={node} />
          </div>
          <div className="skill-box">
            <img className="skill-img" src={tailwind} />
          </div>
          <div className="skill-box">
            <img className="skill-img" src={java} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
