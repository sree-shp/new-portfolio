/* eslint-disable react/no-unescaped-entities */
import "./Home.css";
import teamwork from "../../assets/teamwork.jpg";
import problemsolving from "../../assets/problemsolving.jpg";
import attentiontodetail from "../../assets/attentiontodetail.jpg";

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
          <div className="skill-box">HTML</div>
          <div className="skill-box">CSS</div>
          <div className="skill-box">Javascript</div>
          <div className="skill-box">SQL</div>
          <div className="skill-box">ReactJS </div>
          <div className="skill-box">MongoDB</div>
          <div className="skill-box">NodeJS</div>
          <div className="skill-box">Java</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
