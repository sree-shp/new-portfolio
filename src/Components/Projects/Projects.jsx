import "./Projects.css";
import fash from "../../assets/fash.png";
import starwars from "../../assets/starwars.png";
import worldwise from "../../assets/wanderlog.png";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-list-wrapper">
        <div className="project-wrapper">
          <div className="project-pane">
            <div className="project-image-container">
              <img className="project-image" src={worldwise} alt="starwars" />
            </div>
          </div>
          <div className="project-details-pane">
            <div className="project-details-pane-row">
              <div className="project-name">WanderLog</div>
              <div className="project-tech-stack">
                React, MongoDB, Node, Express
              </div>

              <div className="project-abstract">
                WanderLog is an innovative web application designed to empower
                users with a comprehensive platform for tracking and managing
                their global travel experiences. As the lead developer for this
                project, I orchestrated the development of a user-friendly
                interface that allows individuals to effortlessly log and
                visualize their journeys across the globe. Leveraging
                technologies such as React, MongoDB, Node, Express, WanderLog
                enables users to input details about each location visited,
                including dates and personalized notes.
              </div>
            </div>
            <div className="project-timeline">Feb 2024 - Present</div>
            <div className="project-button-links">
              <a
                className="github-link"
                href="https://github.com/sree-shp/worldwise"
              >
                <button className="project-button" type="submit">
                  View Code
                </button>
              </a>
              <a
                className="project-link"
                href="https://wanderlog-dev.vercel.app/"
              >
                <button className="project-button" type="submit">
                  View Website
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="project-wrapper">
          <div className="project-pane">
            <div className="project-image-container">
              <img className="project-image" src={starwars} alt="starwars" />
            </div>
          </div>
          <div className="project-details-pane">
            <div className="project-details-pane-row">
              <div className="project-name">Starwars Planets</div>
              <div className="project-tech-stack">React</div>

              <div className="project-abstract">
                An innovative web development project dedicated to Star Wars
                planets, seamlessly integrating information on terrain, climate,
                population, and residents sourced from the Star Wars API. This
                dynamic platform provides an interactive and immersive
                experience, allowing users to explore the galaxys diverse worlds
                through detailed profiles, enriched with real-time data
                retrieved from the SW API
              </div>
            </div>
            <div className="project-timeline">Jan 2024 - Feb 2024</div>
            <div className="project-button-links">
              <a
                className="github-link"
                href="https://github.com/sree-shp/StarsWars-Planets"
              >
                <button className="project-button" type="submit">
                  View Code
                </button>
              </a>
              <a
                className="project-link"
                href="https://starwars-planets-coral.vercel.app/"
              >
                <button className="project-button" type="submit">
                  View Website
                </button>
              </a>
            </div>
          </div>
        </div> */}
        <div className="project-wrapper">
          <div className="project-pane">
            <div className="project-image-container">
              <img className="project-image" src={fash} alt="fash project" />
            </div>
          </div>
          <div className="project-details-pane">
            <div className="project-details-pane-row">
              <div className="project-name"> Fash </div>
              <div className="project-tech-stack">
                React, MongoDB, Node, Express
              </div>

              <div className="project-abstract">
                Fash, an innovative e-commerce web development project,
                seamlessly blends style and functionality by offering a
                user-friendly platform that showcases a diverse range of fashion
                products. With a sleek design, secure payment gateways, and
                personalized user accounts, Fash provides a dynamic shopping
                experience for customers to explore, select, and purchase the
                latest trends in clothing, accessories, and footwear.
                {/* <div>User Friendly Interface</div>
              <div>Wide Range of Products</div>
              <div>Robust Security Measures</div> */}
              </div>
            </div>
            <div className="project-timeline">Sep 2023 - Dec 2023</div>
            <div className="project-button-links">
              <a
                className="github-link"
                href="https://github.com/sree-shp/Fash"
              >
                <button className="project-button" type="submit">
                  View Code
                </button>
              </a>

              <a className="project-link" href="https://fash-store.vercel.app/">
                <button className="project-button" type="submit">
                  View Website
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
