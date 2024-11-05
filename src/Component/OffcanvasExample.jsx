import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Skill from './Skill';
import Services from './services';
import "../Edit/E.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faConciergeBell, faUser, faProjectDiagram, faCogs, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CgMenuLeftAlt } from "react-icons/cg";
import profile from "../assets/8126866b-feaa-45b8-af44-1ecaf379ee33.jpg"

function OffcanvasExample() {
  const [activeLink, setActiveLink] = useState('#home');
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [padding, setPadding] = useState("80px 0px 60px 0px");

  useEffect(() => {
    const updatePadding = () => {
      if (window.innerWidth < 768) {
        // Small devices
        setPadding("25px 0px 10px 0px");
      } else {
        // Medium and larger devices
        setPadding("80px 0px 0px 0px");
      }
    };

    // Initial padding check
    updatePadding();

    // Add resize event listener
    window.addEventListener("resize", updatePadding);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", updatePadding);
  }, []);
  const handleToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleClose = () => setShowOffcanvas(false);
  const handleSetActive = (link) => {
    setActiveLink(link);
  };
  return (
    <>
      <Navbar expand="lg" style={{ background: "linear-gradient(to right, #ffffff, #b2d1ff)", padding: "7px", position: "sticky", top: "0px", zIndex: "1" }}>
        <Container>
          <Navbar.Brand href="#home" className="fs-2 animate-rotateAndColor">
            P<span className="text-info fs-1">o</span>rtFolio
          </Navbar.Brand>

          {/* Custom Toggle Icon only visible on small screens */}
          <div
            className="d-lg-none d-block" // Show only on extra-small screens (up to small)
            onClick={handleToggle}
            style={{ cursor: "pointer" }}
          >
            <CgMenuLeftAlt size={30} className="text-dark" />
          </div>


          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            show={showOffcanvas}
            onHide={handleClose}
            className="offcanvas-animation"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                <Navbar.Brand href="#home" className="fs-2 animate-rotateAndColor">
                  P<span className="text-info fs-1">o</span>rtFolio
                </Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>

            <div className="d-flex justify-content-center d-lg-none">
              {/* <img
            width={170}
            style={{ mixBlendMode: "darken", borderRadius: "110px" }}
            className="p-0 mt--5 zoom-effect"
            src={profile}
            alt="Zoomable Image"
          /> */}
              <i class="bi bi-person-circle" style={{ fontSize: "120px", color: "teal" }}></i>
            </div>

            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link
                  href="#home"
                  className={`px-md-4 px-sm-2 ${activeLink === '#home' ? 'active-link' : ''}`}
                  style={{ color: activeLink === '#home' ? 'teal' : 'lightseagreen' }}
                  onClick={() => {
                    handleSetActive('#home');
                    handleClose();
                  }}
                >
                  <FontAwesomeIcon icon={faHome} className="me-2" /> Home
                  <hr className='d-md-none' />
                </Nav.Link>
                <Nav.Link
                  href="#services"
                  className={`px-md-4 px-sm-2 ${activeLink === '#services' ? 'active-link' : ''}`}
                  style={{ color: activeLink === '#services' ? 'teal' : 'lightseagreen' }}
                  onClick={() => {
                    handleSetActive('#services');
                    handleClose();
                  }}
                >

                  <FontAwesomeIcon icon={faConciergeBell} className="me-2" /> Services
                  <hr className='d-md-none' />
                </Nav.Link>
                <Nav.Link
                  href="#about"
                  className={`px-md-4 px-sm-2 ${activeLink === '#about' ? 'active-link' : ''}`}
                  style={{ color: activeLink === '#about' ? 'teal' : 'lightseagreen' }}
                  onClick={() => {
                    handleSetActive('#about');
                    handleClose();
                  }}
                >
                  <FontAwesomeIcon icon={faUser} className="me-2" /> About
                  <hr className='d-md-none' />
                </Nav.Link>
                <Nav.Link
                  href="#project"
                  className={`px-md-4 px-sm-2 ${activeLink === '#project' ? 'active-link' : ''}`}
                  style={{ color: activeLink === '#project' ? 'teal' : 'lightseagreen' }}
                  onClick={() => {
                    handleSetActive('#project');
                    handleClose();
                  }}
                >
                  <FontAwesomeIcon icon={faProjectDiagram} className="me-2" /> Project
                  <hr className='d-md-none' />
                </Nav.Link>
                <Nav.Link
                  href="#skill"
                  className={`px-md-4 px-sm-2${activeLink === '#skill' ? 'active-link' : ''}`}
                  style={{ color: activeLink === '#skill' ? 'teal' : 'lightseagreen' }}
                  onClick={() => {
                    handleSetActive('#skill');
                    handleClose();
                  }}
                >
                  <FontAwesomeIcon icon={faCogs} className="me-2" /> Skill
                  <hr className='d-md-none' />
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  className={`px-md-4 px-sm-2${activeLink === '#contact' ? 'active-link' : ''}`}
                  style={{ color: activeLink === '#contact' ? 'teal' : 'lightseagreen' }}
                  onClick={() => {
                    handleSetActive('#contact');
                    handleClose();
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} className="me-2" /> Contact
                  <hr className='d-md-none' />
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <section id="home" className="section" style={{ padding }}>
        <Container>
          {/* <h1>Home Section</h1>
          <p>This is the home section content.</p> */}
          <Home />
        </Container>
      </section>

      <section id="about" className="section" style={{ padding }}>
        <Container>
          {/* <h1>About Section</h1>
          <p>This is the about section content.</p> */}
          <About />
        </Container>
      </section>

      <section id="project" style={{ padding }}>
        <Container>
          <Projects />
        </Container>
      </section>


      <section id="skill" className="section" style={{ padding }}>
        <Container>
          {/* <h1>Contact Section</h1>
          <p>This is the contact section content.</p> */}
          <Skill />
        </Container>
      </section>
      <section id="services" className="section" style={{ padding }}>
        <Container>
          <Services />
        </Container>
      </section>
      <section id="contact" className="section" style={{ padding }}>

        <Container>
          {/* <h1>Contact Section</h1>
          <p>This is the contact section content.</p> */}
          <Contact />
        </Container>
      </section>

      <section id="contact" style={{ padding: "0", backgroundColor: "lightblue" }}>
        <Container style={{ backgroundColor: "lightblue", padding: "50px 0", justifyContent: "center", display: "flex" }}>
          <div className='text-center'>
            <h1>Portfolio</h1>
            <hr />
            <div className="d-flex justify-content-center mb-3">
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className='text-dark'> <i className="bi bi-linkedin px-1"></i></a>
              <a href="https://www.instagram.com/x_jezz_07/" className='text-dark'><i className="bi bi-instagram px-1"></i></a>
              <a href="https://web.whatsapp.com/" className='text-dark'><i className="bi bi-whatsapp px-1"></i></a>
              <a href="https://github.com/Ramesh59906/" className='text-dark'><i className="bi bi-github px-1"></i></a>
            </div>
            <div className="d-flex justify-content-center mb-3 flex-wrap">
              <Nav.Link href="#home" className='px-2' style={{ fontWeight: "bold" }} id='nav-link'>Home</Nav.Link>
              <Nav.Link href="#about" className='px-2' style={{ fontWeight: "bold" }} id='nav-link'>About</Nav.Link>
              <Nav.Link href="#project" className='px-2' style={{ fontWeight: "bold" }} id='nav-link'>Project</Nav.Link>
              <Nav.Link href="#skill" className='px-2' style={{ fontWeight: "bold" }} id='nav-link'>Skill</Nav.Link>
              <Nav.Link href="#contact" className='px-2' style={{ fontWeight: "bold" }} id='nav-link'>Contact</Nav.Link>
            </div>
            <p className='mt-2'><i className="bi bi-c-circle"></i>opyright.com</p>
          </div>
        </Container>
      </section>
    </>
  );
}

export default OffcanvasExample;
