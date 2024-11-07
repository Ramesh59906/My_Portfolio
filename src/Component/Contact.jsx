
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Aos from 'aos';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "aos/dist/aos.css";
import "../Edit/E.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_z6vye1p',      // Your EmailJS service ID
      'template_pdh6pxb',     // Your EmailJS template ID
      formData,
      'rw1gguxY-J0XCK5z_'     // Your EmailJS user ID
    )
    .then((response) => {
      console.log('Email successfully sent!', response.status, response.text);
      toast.success('Message sent successfully!');
      setFormData({ email: '', message: '' });
    })
    .catch((error) => {
      console.error('There was an error sending the email:', error);
      toast.error('Failed to send message. Please try again later.');
    });
  };

  return (
    // <div className="container-fluid">
    <Container fluid id="contact" className="my-5">
    {/* Section Header with Animation */}
    <Row className="animate-fadeIn">
      <Col>
        <h2 
          className="text-center py-md-4 my-sm-3" 
          style={{
            fontSize: "2.2rem", 
            fontWeight: "bold", 
            color: "#003366", 
            letterSpacing: "1.5px", 
            animation: "fadeInDown 1s ease-in-out"
          }}
        >
          Let’s Connect
        </h2>
        {/* <p className="text-center" style={{ color: "#666", fontSize: "1.2rem" }}>
          I’m here to answer any questions and collaborate on exciting projects.
        </p> */}
      </Col>
    </Row>
  
    <Row className="animate-fadeIn contact-card  bg-white">
      {/* Contact Information Card with Interactive Icons */}
      <Col md={12} lg={6} sm={12} xs={12} className="mb-4 p-0 my-3">
        <Card 
          className="contact-card shadow-lg" 
          style={{
            background: "linear-gradient(135deg, #e0f7fa, #ffffff)",
            borderRadius: "15px", 
            padding: "1.5rem",
            border: "none",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)"
          }} 
          data-aos="fade-up"
        >
          <Card.Body>
            <Card.Title 
              style={{
                fontWeight: "700", 
                fontSize: "1.6rem", 
                color: "#003366"
              }}
            >
              Get in Touch
            </Card.Title>
            <hr style={{ borderColor: "#003366", borderWidth: "2px", width: "50px" }} />
            <Card.Text style={{ color: "#555", fontSize: "1rem", lineHeight: "2.2" }}>
              <strong>Address:</strong> 5/1/21 Street Jose, Chennai, Tamil Nadu
              <br />
              <strong>Phone:</strong> +91 6369569872
              <br />
              <strong>Email:</strong> rameshn07101@gmail.com
            </Card.Text>
            <div className="d-flex justify-content-start mt-4">
              <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className='me-3' style={{ color: "#0077b5" }}>
                <i className="bi bi-linkedin" style={{ fontSize: "1.2rem", transition: "0.3s", transform: "scale(1)" }}></i>
              </a>
              <a href="https://www.instagram.com/x_jezz_07/" className='me-3' style={{ color: "#c32aa3" }}>
                <i className="bi bi-instagram" style={{ fontSize: "1.2rem", transition: "0.3s", transform: "scale(1)" }}></i>
              </a>
              <a href="https://web.whatsapp.com/" className='me-3' style={{ color: "#25d366" }}>
                <i className="bi bi-whatsapp" style={{ fontSize: "1.2rem", transition: "0.3s", transform: "scale(1)" }}></i>
              </a>
              <a href="https://github.com/Ramesh59906/" style={{ color: "#333" }}>
                <i className="bi bi-github" style={{ fontSize: "1.2rem", transition: "0.3s", transform: "scale(1)" }}></i>
              </a>
            </div>
          </Card.Body>
        </Card>
      </Col>
  
      {/* Contact Form with Subtle Animations */}
      <Col md={12} lg={6} sm={12} xs={12} className="mb-4">
        <Form 
          onSubmit={handleSubmit} 
          className="p-4 shadow-lg" 
          style={{
            background: "linear-gradient(135deg, #ffffff, #dbeafe)", 
            borderRadius: "15px", 
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)"
          }} 
          data-aos="fade-up"
        >
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label style={{ fontWeight: "600", color: "#003366" }}>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              style={{
                borderRadius: "8px", 
                boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.1)", 
                borderColor: "#d1d5db"
              }}
            />
          </Form.Group>
          
          <Form.Group controlId="formBasicMessage" className="mb-3">
            <Form.Label style={{ fontWeight: "600", color: "#003366" }}>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleInputChange}
              required
              style={{
                borderRadius: "8px", 
                boxShadow: "inset 0px 1px 2px rgba(0, 0, 0, 0.1)", 
                borderColor: "#d1d5db"
              }}
            />
          </Form.Group>
  
          <Button 
            type="submit" 
            className="w-100 mt-3" 
            style={{
              backgroundColor: "#003366", 
              border: "none", 
              borderRadius: "8px", 
              fontWeight: "bold",
              color: "#fff",
              padding: "0.75rem",
              transition: "0.3s ease",
              boxShadow: "0px 3px 10px rgba(0, 51, 102, 0.3)"
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = "#00509e"}
            onMouseLeave={(e) => e.target.style.backgroundColor = "#003366"}
          >
            Send Message
          </Button>
        </Form>
      </Col>
    </Row>
  
    <ToastContainer 
      position="top-right" 
      autoClose={5000} 
      hideProgressBar={false} 
      closeOnClick 
      pauseOnHover 
      draggable 
    />
  </Container>
  
    // </div>
  );
};

export default Contact;
