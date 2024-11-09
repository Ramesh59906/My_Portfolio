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
    <div className="py-5" style={{ background: "" }}>
    <Container fluid>
      {/* Section Heading */}
      <h2 
        className="text-center mb-5"
        style={{
          fontSize: "2.2rem", 
          fontWeight: "bold", 
          color: "#003366", 
          letterSpacing: "1.5px", 
          animation: "fadeInDown 1s ease-in-out"
        }}
      >
        My Services
      </h2>
  
      {/* Services Row */}
      <Row className="g-4">
        {services.map((service, index) => (
          <Col 
            md={6} 
            sm={6} 
            lg={4} 
            key={index} 
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* Service Card */}
            <Card 
              className="service-card shadow"
              style={{
                background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
                borderRadius: "20px",
                transition: "transform 0.3s",
                cursor: "pointer",
                overflow: "hidden",
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
              data-aos="fade-up"
            >
              <Card.Body className="text-center p-4" style={{ position: "relative" }}>
                {/* Floating Icon */}
                <div 
                  className="service-icon mb-3" 
                  style={{
                    fontSize: "3.5rem",
                    color: "#007bff",
                    background: "rgba(0, 123, 255, 0.1)",
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <i className={service.icon}></i>
                </div>
  
                {/* Service Title */}
                <Card.Title 
                  style={{
                    fontWeight: "600",
                    fontSize: "1.25rem",
                    color: "#333",
                    marginTop: "15px",
                  }}
                >
                  {service.title}
                </Card.Title>
  
                {/* Service Description */}
                <Card.Text 
                  style={{
                    fontWeight: "400",
                    fontSize: "0.95rem",
                    color: "#666",
                    marginTop: "10px",
                    lineHeight: "1.5",
                    letterSpacing: "0.3px",
                    padding: "0 15px",
                  }}
                >
                  {service.description}
                </Card.Text>
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
