// import React, { useEffect } from 'react';
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
// import "../Edit/E.css"
// import Aos from 'aos';
// import "aos/dist/aos.css"


// const Contact = () => {

  
//   useEffect(()=>{
//     Aos.init({duration:2000});
//   },[]);
//   return (
//     <div className="container-fluid">
//   <Container id="contact" className="my-5">
//       <h2 className="animate-fadeIn">Contact</h2>
//       <hr />
//       <Row className='animate-fadeIn contact-card'>
//         <Col md={6} className="mb-4">
//           <Card className="contact-card mt-3" style={{background: "linear-gradient(to right, #ffffff, #b2d1ff)"}} data-aos="fade-up">
//             <Card.Body>
//               <Card.Title className="contact-card-title">Get in Touch</Card.Title>
//               <Card.Text className="contact-card-text">
//                 <strong>Address:</strong> 5/1/21 Street jose, chennai, Tamil nadu
//                 <br />
//                 <strong>Phone:</strong> +91 6369569872
//                 <br />
//                 <strong >Email:</strong> rameshn07101@gmail.com
//               </Card.Text>
//               <Card.Text className="contact-card-links">
//                 {/* <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
//                 <br />
//                 <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">GitHub</a>
//                 <br />
//                 <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a> */}
//                   <i className="bi bi-linkedin px-1"></i>
//                 <i className="bi bi-instagram px-1"></i>
//                 <i className="bi bi-whatsapp px-1"></i>
//                 <i className="bi bi-github px-1"></i>
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//         <Col md={6} className="mb-4">
//           <Form className='mt-3 p-2 border rounded' style={{background: "linear-gradient(to right, #ffffff, #b2d1ff)"}} data-aos="fade-up">
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" />
//             </Form.Group>
//             <Form.Group controlId="formBasicMessage">
//               <Form.Label>Message</Form.Label>
//               <Form.Control as="textarea" rows={3} />
//             </Form.Group>
//             <Button variant="primary" className='my-2' type="submit">Submit</Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//     </div>
  
//   );
// };

// export default Contact;
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
    <div className="container-fluid">
      <Container id="contact" className="my-5">
      <Row className="animate-fadeIn">
        <Col>
        <h2 className="animate-fadeIn text-center animate-rotateAndColor py-md-4 my-sm-3">Contact</h2>
        </Col>
      </Row>
    
        <Row className='animate-fadeIn contact-card'>
          <Col md={6} className="mb-4 my-3">
            <Card className="contact-card mt-3" style={{ background: "linear-gradient(to right, #ffffff, rgb(170 241 255))" }} data-aos="fade-up">
              <Card.Body>
                <Card.Title className="contact-card-title">Get in Touch</Card.Title>
                <Card.Text className="contact-card-text">
                  <strong>Address:</strong> 5/1/21 Street jose, chennai, Tamil nadu
                  <br />
                  <strong>Phone:</strong> +91 6369569872
                  <br />
                  <strong>Email:</strong> rameshn07101@gmail.com
                </Card.Text>
                <Card.Text className="contact-card-links">
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className='text-dark'> <i className="bi bi-linkedin px-1"></i></a>
                <a href="https://www.instagram.com/x_jezz_07/" className='text-dark'><i className="bi bi-instagram px-1"></i></a>
                <a href="https://web.whatsapp.com/" className='text-dark'><i className="bi bi-whatsapp px-1"></i></a>
                <a href="https://github.com/Ramesh59906/" className='text-dark'><i className="bi bi-github px-1"></i></a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Form onSubmit={handleSubmit} className='mt-3 p-2 border rounded' style={{ background: "linear-gradient(to right, #ffffff, rgb(170 241 255))" }} data-aos="fade-up">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Button className='my-2 bg-info border shadow' type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
      </Container>
    </div>
  );
};

export default Contact;
