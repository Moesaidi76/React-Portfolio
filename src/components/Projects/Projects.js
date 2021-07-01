import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import fitnessTracker from "../../Assets/Projects/fitnessTracker.png";
import budgetTracker from "../../Assets/Projects/budgetTracker.PNG";
import StockViewer from "../../Assets/Projects/StockViewer.PNG";
import SyncAlyzer from "../../Assets/Projects/SyncAlyzer.jpg";
import NexCity from "../../Assets/Projects/NexCity.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={StockViewer}
              isBlog={false}
              title="StockViewer_App"
              description="StockViewer app will provide users with a specific ticker's data information such as last sale, previous close price, current price, bid price and ask price. It will also indicate the daily chart of the stock."
              link="https://github.com/Moesaidi76/StockViewer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NexCity}
              isBlog={false}
              title="NexCity"
              description="Are you easily stressed when planning trips or vacations? Tired of sifting through multiple flights and hotel deals? Wish there was someone or something that could do it all for you? Then look no further, NexCity is the solution to all your trip planning woes. This app is designed to take all your desired requests for your ideal trip, and based on your requests, produce multiple options of affordable trips that meets the users’ requirements. The app will also allow the user to save their favorite trips so they can review their selection anytime they want."
              link="https://github.com/Moesaidi76/NexCity"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budgetTracker}
              isBlog={false}
              title="budgetTracker"
              description="The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online. Offline Functionality: Enter deposits offline, Enter expenses offline, When brought back online, Offline entries should be added to tracker."
              link="https://github.com/Moesaidi76/budget-tracker/tree/master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SyncAlyzer}
              isBlog={false}
              title="SyncAlyzer"
              description="Coming Soon."
              link="https://github.com/Moesaidi76/SyncAlyzer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitnessTracker}
              isBlog={false}
              title="fitnessTracker"
              description="This is a Workout Tracker using a Nosql database. When the user loads the page, they should be given the option to create a new workout, or continue with their last workout."
              link="https://github.com/Moesaidi76/fitness_tracker"
            />
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}

export default Projects;
