import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../Edit/E.css"; // Adjust this path if needed
import Aos from 'aos';
import "aos/dist/aos.css"


const services = [
  {
    title: "Web Development",
    description: "Creating responsive and dynamic websites using modern technologies like React.js, HTML5, CSS3, and JavaScript.",
    icon: "bi bi-laptop",
  },
  {
    title: "UI/UX Design",
    description: "Designing user-friendly interfaces with a focus on accessibility and seamless user experience.",
    icon: "bi bi-palette",
  },
  {
    title: "SEO Optimization",
    description: "Improving website visibility on search engines through on-page and off-page SEO strategies.",
    icon: "bi bi-graph-up",
  },
  {
    title: "E-commerce Solutions",
    description: "Building scalable and secure e-commerce platforms tailored to your business needs.",
    icon: "bi bi-cart4",
  },
];

const Services = () => {

  
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div className="py-5 bg-lightblue">
      <Container>
        <h2 className="text-center mb-5 animate-fadeIn animate-rotateAndColor">My Services</h2>
        <Row className="g-4">
          {services.map((service, index) => (
            <Col md={6} sm={6} lg={4} key={index} className="animate-fadeIn">
              <Card className="h-100 shadow-sm" style={{background: "linear-gradient(to right, #ffffff, rgb(170 241 255))",border:"none"}} data-aos="zoom-in">
                <Card.Body className="text-center">
                  <i className={`${service.icon} text-info mb-3`} style={{ fontSize: "3rem" }}></i>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text style={{fontWeight:"600",fontStyle:"oblique"}}>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
