import "./Projects.css";
import fash from "../../assets/fash.png";
import starwars from "../../assets/starwars.png";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects-heading">Projects</h1>
      <div className="projects-list-wrapper">
        <div className="project-wrapper">
          <div className="project-pane">
            <div className="project-image-container">
              <img className="project-image" src={fash} alt="fash project" />
            </div>
          </div>
          <div className="project-details-pane">
            <div className="project-details-pane-row">
              <div className="project-name"> Fash </div>
              <div className="project-tech-stack">MERN stack</div>

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
            <div className="project-timeline">Sep 2023 - Jan 2024</div>
          </div>
        </div>
        <div className="project-wrapper">
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
                experience, allowing users to explore the galaxy's diverse
                worlds through detailed profiles, enriched with real-time data
                retrieved from the SW API
                {/* <div>Data fetching from Starwars API</div>
              <div>Eye-catching animations</div> */}
              </div>
            </div>
            <div className="project-timeline">Feb 2024 - Present</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
