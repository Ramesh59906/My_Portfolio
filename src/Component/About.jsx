import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import img from "../assets/interview-concept-illustration_114360-1678.avif"
import "../Edit/E.css";
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container id="about" className="my-5">
    {/* Section Header with Stylish Animation */}
    <Row className="animate-fadeIn">
      <Col>
        <h3
          style={{
            fontSize: "2.2rem",
            fontWeight: "bold",
            color: "#003366",
            letterSpacing: "0.8px",
            animation: "fadeInDown 1s ease-in-out",
            textShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)"
          }}
          className="text-center animate-rotateAndColor"
        >
          About Me
        </h3>
      </Col>
    </Row>
  
    {/* About Me Section with Enhanced Layout */}
    <Row className="animate-fadeIn d-flex justify-content-center align-items-center mb-4 py-2">
      {/* Profile Image with Subtle Shadow and Border */}
      <Col sm={12} md={12} xs={12} lg={6} className="text-center mb-4 my-5 mb-md-0" data-aos="zoom-in">
        <img
          className="img-fluid rounded"
          style={{
            maxHeight: "450px",
            // border: "0.5px solid #003366",
            padding: "0.3rem",
            // boxShadow: "0px 8px 20px rgba(0, 51, 102, 0.3)"
          }}
          src={img}
          alt="Illustration of a Job Interview"
        />
      </Col>
  
      {/* Introduction Card with Gradient Background and Smooth Animations */}
      <Col sm={12} md={12} xs={12} lg={6} className="my-5">
        <Card
          className="border-0"
          style={{
            background: "linear-gradient(135deg, #ffffff, #e0f7fa)",
            borderRadius: "15px",
            padding: "1.5rem",
            // boxShadow: "0px 4px 20px rgba(0, 51, 102, 0.1)"
          }}
          data-aos="fade-up"
        >
          <Card.Body className="p-0 mt-1">
            <Card.Title>
              <h3 className="mt-1 text-info">Hi, I'm Ramesh</h3>
            </Card.Title>
            <Card.Text className="text-muted">
              <ul className="list-unstyled">
                <li className="mt-3 custom-list-item">
                  <i className="bi bi-code-slash text-primary me-2"></i>
                  I'm a passionate front-end developer with experience in creating responsive and dynamic web applications. I specialize in React.js and have a strong foundation in HTML, CSS, and JavaScript.
                </li>
                <li className="mt-3 custom-list-item">
                  <i className="bi bi-palette text-primary me-2"></i>
                  With a keen eye for design and a knack for problem-solving, I strive to build user-friendly and visually appealing interfaces. I love collaborating with teams and continuously learning new technologies to enhance my skills.
                </li>
                <li className="mt-3 custom-list-item">
                  <i className="bi bi-book text-primary me-2"></i>
                  When I'm not coding, you might find me exploring new tech trends, designing UI/UX prototypes, or enjoying a good book. Feel free to reach out if you'd like to discuss potential projects or opportunities!
                </li>
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
  
  );
};

export default About;
