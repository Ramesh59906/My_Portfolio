import React from 'react';
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

function OffcanvasExample() {
  return (
    <>
      <Navbar expand="lg" style={{ background: "linear-gradient(to right, #ffffff, #b2d1ff)",padding:"0px", boxShadow: "2px 2px 3px gray", position: "sticky", top: "0px", zIndex: "1" }}>
        <Container>
          <Navbar.Brand href="#home" className='fs-2 animate-rotateAndColor'>P<span  className='text-info fs-1'>o</span>rtFolio</Navbar.Brand>
          <Navbar.Toggle
            className='border-0' // Remove border
            aria-controls="offcanvasNavbar"
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="offcanvas-animation" // Custom class for animation
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">          <Navbar.Brand href="#home" className='fs-2 animate-rotateAndColor'>P<span  className='text-info fs-1'>o</span>rtFolio</Navbar.Brand>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <div className='d-flex justify-content-center d-md-none'>
              <img width={170} className='p-0 mt--5' src="data:image/png;base64,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" alt="" />

            </div>
            <Offcanvas.Body>     
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link href="#home" className='px-4' id='nav-link'>Home</Nav.Link>
                <Nav.Link href="#services" className='px-4' id='nav-link'>services</Nav.Link>
                <Nav.Link href="#about" className='px-4' id='nav-link'>About</Nav.Link>
                <Nav.Link href="#project" className='px-4' id='nav-link'>Project</Nav.Link>
                <Nav.Link href="#skill" className='px-4' id='nav-link'>skill</Nav.Link>
                <Nav.Link href="#contact" className='px-4' id='nav-link'>Contact</Nav.Link>
                {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
              <Form className="d-flex mt-3 mt-lg-0">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      <section id="home" style={{ padding: "0px 0" }}>
        <Container>
          {/* <h1>Home Section</h1>
          <p>This is the home section content.</p> */}
          <Home />
        </Container>
      </section>

      <section id="about" style={{ padding: "30px 0" }}>
        <Container>
          {/* <h1>About Section</h1>
          <p>This is the about section content.</p> */}
          <About />
        </Container>
      </section>

      <section id="project" style={{ padding: "70px 0px 10px 0px" }}>
        <Container>
          {/* <h1>Project Section</h1>
          <p>This is the project section content.</p> */}
          <Projects />
        </Container>
      </section>


      <section id="skill" style={{ padding: "70px 0px 70px 0px" }}>
        <Container>
          {/* <h1>Contact Section</h1>
          <p>This is the contact section content.</p> */}
          <Skill />
        </Container>
      </section>
      <section id="services" style={{ padding: "50px 0" }}>
        <Container>
          {/* <h1>Home Section</h1>
          <p>This is the home section content.</p> */}
        <Services/>
        </Container>
      </section>
      <section id="contact" style={{ padding: "50px 0" }}>

        <Container>
          {/* <h1>Contact Section</h1>
          <p>This is the contact section content.</p> */}
          <Contact />
        </Container>
      </section>

      <section  id="contact" style={{ padding: "0" ,backgroundColor: "lightblue"}}>
  <Container style={{ backgroundColor: "lightblue", padding: "50px 0", justifyContent: "center", display: "flex" }}>
    <div className='text-center'>
      <h1>Portfolio</h1>
      <hr />
      <div className="d-flex justify-content-center mb-3">
        <i className="bi bi-linkedin px-2"></i>
        <i className="bi bi-instagram px-2"></i>
        <i className="bi bi-whatsapp px-2"></i>
        <i className="bi bi-github px-2"></i>
      </div>
      <div className="d-flex justify-content-center mb-3 flex-wrap">
        <Nav.Link href="#home" className='px-2' id='nav-link'>Home</Nav.Link>
        <Nav.Link href="#about" className='px-2' id='nav-link'>About</Nav.Link>
        <Nav.Link href="#project" className='px-2' id='nav-link'>Project</Nav.Link>
        <Nav.Link href="#skill" className='px-2' id='nav-link'>Skill</Nav.Link>
        <Nav.Link href="#contact" className='px-2' id='nav-link'>Contact</Nav.Link>
      </div>
      <p className='mt-2'><i className="bi bi-c-circle"></i>opyright.com</p>
    </div>
  </Container>
</section>
    </>
  );
}

export default OffcanvasExample;
