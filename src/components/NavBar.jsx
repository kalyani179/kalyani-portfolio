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
function refreshPage() {
  setTimeout(()=>{
      window.location.reload(false);
  }, 500);
  console.log('page to reload')
}
function NavBar(){
    return (
      <BrowserRouter basename="/kalyani-portfolio/">
    <div>
    <>
        <Navbar className="navbar" expand="lg" bg="black" data-bs-theme="dark">
            <Container>
              <Navbar.Brand className="nabar-brand" as={Link} to="/" onClick={refreshPage}>Portfolio</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />  
              <Navbar.Collapse id="basic-navbar-nav">  
                <Nav className="navs">
                  <Nav.Link className="nav-links" as={Link} to="/home">Home</Nav.Link>
                  <Nav.Link className="nav-links" as={Link} to="/about">About</Nav.Link>
                  <Nav.Link className="nav-links" as={Link} to="/skills">Skills</Nav.Link>
                  <Nav.Link className="nav-links" as={Link} to="/projects">Projects</Nav.Link>
                  <Nav.Link className="nav-links" as={Link} to="/Experiences">Experience</Nav.Link>
                </Nav>
              </Navbar.Collapse> 
            </Container>
          </Navbar>
          </>
          <div>
          <Routes>
              <Route exact path="/"  element={<Heading />}/>
              <Route path="/home"  element={<Heading />}/>
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