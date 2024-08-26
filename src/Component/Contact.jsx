import React, { useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import "../Edit/E.css"
import Aos from 'aos';
import "aos/dist/aos.css"


const Contact = () => {

  
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div className="container-fluid">
  <Container id="contact" className="my-5">
      <h2 className="animate-fadeIn">Contact</h2>
      <hr />
      <Row className='animate-fadeIn contact-card'>
        <Col md={6} className="mb-4">
          <Card className="contact-card mt-3" style={{background: "linear-gradient(to right, #ffffff, #b2d1ff)"}} data-aos="fade-up">
            <Card.Body>
              <Card.Title className="contact-card-title">Get in Touch</Card.Title>
              <Card.Text className="contact-card-text">
                <strong>Address:</strong> 5/1/21 Street jose, chennai, Tamil nadu
                <br />
                <strong>Phone:</strong> +91 6369569872
                <br />
                <strong >Email:</strong> rameshn07101@gmail.com
              </Card.Text>
              <Card.Text className="contact-card-links">
                {/* <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <br />
                <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
                <br />
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a> */}
                  <i className="bi bi-linkedin px-1"></i>
                <i className="bi bi-instagram px-1"></i>
                <i className="bi bi-whatsapp px-1"></i>
                <i className="bi bi-github px-1"></i>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="mb-4">
          <Form className='mt-3 p-2 border rounded' style={{background: "linear-gradient(to right, #ffffff, #b2d1ff)"}} data-aos="fade-up">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" className='my-2' type="submit">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </div>
  
  );
};

export default Contact;
