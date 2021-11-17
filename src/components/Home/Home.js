import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";
import Footer from "../Footer";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                  <h1 style={{ paddingBottom: 15 }} className="heading">
                    Hi, <span className="wave" role="img" aria-labelledby="wave">Welcome</span> to my Portfolio 
                  </h1>
                  <div style={{ padding: 100, textAlign: "left" }}>
                  </div>
              </Col>

              <Col md={5} style={{ paddingBottom: 5 }}></Col>
              
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  <span className="bio"> Bio </span>
                </h1>
                My name is James Guangdong li. Currently, I am a restaurant manager, and I am ready for a change to redefined my career path to becoming a 
                <span className="colorNfontsize"> full-stack developer </span>
                  
              </Col>

              <Col></Col>
            </Row>
          </Container>
          <Footer />
      </Container>
      
    </section>
  );
}

export default Home;
