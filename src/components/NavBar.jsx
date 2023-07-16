import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar,Nav,Container} from 'react-bootstrap';
import "../index.css";
import {
  Route,Routes,Link, BrowserRouter
} from "react-router-dom";

import Heading from "./Heading";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experiences from "./Experiences"

function NavBar(){
    return (
      <BrowserRouter basename="/kalyani-portfolio">
    <div>
    <>
        <Navbar className="navbar" bg="black" data-bs-theme="dark">
            <Container>
             <Navbar.Brand className="nabar-brand" as={Link} to="/kalyani-portfolio">Portfolio</Navbar.Brand>
             <Nav className="navs">
                <Nav.Link className="nav-links" as={Link} to="/">Home</Nav.Link>
                <Nav.Link className="nav-links" as={Link} to="/about">About</Nav.Link>
                <Nav.Link className="nav-links" as={Link} to="/skills">Skills</Nav.Link>
                <Nav.Link className="nav-links" as={Link} to="/projects">Projects</Nav.Link>
                <Nav.Link className="nav-links" as={Link} to="/Experiences">Experience</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          </>
          <div>
          <Routes>
              <Route exact path="/kalyani-portfolio" element={<Heading />}/>
              <Route exact path="/" element={<Heading />}/>
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/Experiences" element={<Experiences />} />
          </Routes>
          </div>
    </div>
    </BrowserRouter>
    );
}

export default NavBar;