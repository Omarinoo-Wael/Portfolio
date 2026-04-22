import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import Card from "../project-card/card";
import "./tabs.css";
import Proj1 from "../../assets/proj1.avif";
import { Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1.",
    imgUrl: Proj1,
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2.",
    imgUrl: Proj1,
  },
  {
    title: "Project 3",
    description: "A brief description of Project 3.",
    imgUrl: Proj1,
  },
  {
    title: "Project 4",
    description: "A brief description of Project 4.",
    imgUrl: Proj1,
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <TrackVisibility partialVisibility offset={100}>
          {({ isVisible }) => (
            <div className={isVisible ? "anim1" : "anim2"}>
              <h1>Projects</h1>
              <h3>A selection of projects I've worked on:</h3>

              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                {/* justify-content-center ensures it aligns with your headers */}
                <Nav variant="pills" className="tabs justify-content-center">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row className="project-row justify-content-center g-4">
                      {projects.map((project, index) => {
                        return <Card key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <h3>Nothing to see here yet!</h3>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <h3>Nothing to see here yet!</h3>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          )}
        </TrackVisibility>
      </div>
    </section>
  );
}

export default Projects;
