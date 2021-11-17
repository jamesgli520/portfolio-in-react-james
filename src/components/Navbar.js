import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> <span className="black"> Home </span>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                <span className="black">Projects</span>
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn" >
              <Button
                href="https://jamesgli520.github.io/updated_portfolio_Version_03/assets/resume/resume.html"
                target="_blank"
                className="fork-btn-inner"
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> <span className="black"> Resume </span>
              </Button>
            </Nav.Item>
            <Nav.Item className="fork-btn" >
              <Button
                href="https://jamesgli520.github.io/updated_portfolio_Version_03/"
                target="_blank"
                className="fork-btn-inner"
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /><span className="black"> About Me</span>
              </Button>
            </Nav.Item>
            <Nav.Item>
              <a href="https://github.com/jamesgli520" rel="noreferrer" target="_blank" className="icon-colour  home-social-icons"><AiFillGithub /> </a>
              
            </Nav.Item>

            <Nav.Item>
                <a href="https://linkedin.com/in/jamesguandgongli" rel="noreferrer" target="_blank" className="icon-colour  home-social-icons" ><FaLinkedinIn /> </a>
                
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
