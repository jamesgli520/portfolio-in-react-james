import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import marvel from "../../Assets/project.PNG";
import passwordGenerator from "../../Assets/password-generator.PNG";
import WorkDay from "../../Assets/work-day-scheduler.PNG";
import noteTaker from "../../Assets/note-taker.PNG";
import weatherDashboard from "../../Assets/weather-dashboard.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Here are few of my work
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={marvel}
              isBlog={false}
              title="Marvel Library"
              description="there is a way to find out more about your favorite Marvel Comic Universe characters. We’ve built an application that sorts through all of Marvel’s data to bring you the important information you’ve been searching for, all in one app. Our application details who the character is, their powers, and even where to find their comics for sale."
              link="https://lukecp5.github.io/marvel-library/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={passwordGenerator}
              isBlog={false}
              title="Password Generator"
              description="A sample password generator with the option to include four types of characters uppercase, lowercase, special characters, and numbers."
              link="https://jamesgli520.github.io/Password-Generator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WorkDay}
              isBlog={false}
              title="Work Day Scheduler"
              description="This is a simple calendar application that user can enter events and save event from 9am to 5pm."
              link="https://jamesgli520.github.io/Work-Day-Scheduler/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noteTaker}
              isBlog={false}
              title="Note Talker with Express"
              description="This is a application that user can write and save notes that use Express.js and node.js, and it saves and retrieves data from the JSON file."
              link="https://note-taker-app-ver01.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherDashboard}
              isBlog={false}
              title="Weather Dashboard"
              description="An application that shows current and five-day forecast weather of a city."
              link="https://jamesgli520.github.io/Weather-Dashboard/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
