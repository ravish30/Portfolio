import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import corestarter from "../../Assets/Projects/corestarter.png";
import parkhub from "../../Assets/Projects/parkhub.png";
import secvolt from "../../Assets/Projects/secvolt.png";
import tweetx from "../../Assets/Projects/tweetx.png";
import upsocial from "../../Assets/Projects/upsocial.png";


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
              imgPath={corestarter}
              isBlog={false}
              title="Corestarter"
              description="Corestarter is a multi-chain IDO Launchpad with NFT marketplace and high yield token staking platform on Solana Blockchain for high performance and low transaction fees.
              Corestarter breaks barriers for small investors to enter IDO Launchpad in the crypto market."
              ghLink="https://github.com/ravish30"
              demoLink="https://corestarter.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parkhub}
              isBlog={false}
              title="Parkhub"
              description="Parkhub is a platform where small companies can register themselves and can manage their parking lots efficiently. It aims to the problem of management of parking."
              ghLink="https://github.com/ravish30/Parkhub-personal"
              demoLink="https://parkhub-personal.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={secvolt}
              isBlog={false}
              title="Secvolt"
              description="Secvolt is a global investment management firm. Our investment approach is dedicated to pursuing strong & consistent returns across distinct market cycles and micro-events by using our mathematical and statistical quant models."
              ghLink="https://github.com/ravish30"
              demoLink="https://accounts.secvolt.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tweetx}
              isBlog={false}
              title="Tweet-X"
              description="Tweet X is a Twitter clone web app where multiple users can sign in and post to their feed and every user can see everyone's tweet and can follow a
              particular user and can also unfollow and can also access the list of the users following him or his followers on the profile page."
              ghLink="https://github.com/ravish30/TweetX"
              demoLink="https://tweet-x.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={upsocial}
              isBlog={false}
              title="Upsocial"
              description="UpSocial is a platform for content creators to engage with their fans through social tokens. It aims to build a decentralized social token network to
              enable monetization for creators and exclusive communities for fans."
              ghLink="https://github.com/ravish30"
              demoLink="https://app.upsocial.network/"
            />
          </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
