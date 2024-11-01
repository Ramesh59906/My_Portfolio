import React, { useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Typewriter from "typewriter-effect";
import paner from "../assets/Pasted image-ND94dH5D.png"
import "../Edit/E.css";


// Import the PDF file
import resumePDF from '../assets/RAMESH N B_TECH(IT)_Chennai (4).pdf'; // Adjust the path according to where you placed the PDF
import Aos from 'aos';
import "aos/dist/aos.css"
import HireMeModal from './HireMeModal';




const Home = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="" style={{ padding: "100px 0px" }}>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col md={6} sm={12} className="text-md-left mb-4 mb-md-0" data-aos="fade-up">
            <div>
              <span className='text-info animate-fadeIn'>Hi there!</span>
              <div className='fs-1'>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 80,
                    strings: "I'm Ramesh"
                  }}
                />
              </div>
              <h4 className='animate-fadeIn text-info' style={{ fontWeight: "900", fontSize: "27px" }}>Front-End Developer & Designer...</h4>
              <div className='my-3 animate-rotateWave'>
                <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" className='text-dark'> <i className="bi bi-linkedin px-1"></i></a>
                <a href="https://www.instagram.com/x_jezz_07/" className='text-dark'><i className="bi bi-instagram px-1"></i></a>
                <a href="https://web.whatsapp.com/" className='text-dark'><i className="bi bi-whatsapp px-1"></i></a>
                <a href="https://github.com/Ramesh59906/" className='text-dark'><i className="bi bi-github px-1"></i></a>
              </div>
              <button onClick={() => window.location.href = "mailto:rameshn07101@gmail.com?subject=Job%20Opportunity&body=Hello%2C%20I%20am%20interested%20in%20working%20with%20you.%20Please%20share%20details%20about%20the%20project."} className='border bg-info rounded text-white mt-4 px-3 py-1 mx-0 animate-fadeIn'>
                Hire Me!!
              </button>
              {/* <Button
                className="bg-info border rounded text-white mt-4 px-3 py-1 animate-fadeIn"
                onClick={() => window.location.href = "mailto:ajiajeem2001@gmail.com?subject=Job Opportunity&body=Hi, I would like to connect regarding..."}
              >
                Hire Me!
              </Button> */}
              <button 
                href={resumePDF}  // Link to the imported PDF file
                target="_blank"
                className='border bg-info rounded text-white mt-4 px-3 py-1 mx-3 animate-fadeIn'
              >
                Resume
              </button>
            </div>
          </Col>

          <Col md={6} sm={12} className="text-center" data-aos="fade-down">
            <img className='img-fluid mt-3 animate-shake' src={paner} alt="Interview Illustration" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
