import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import img from "../../src/assets/86.png";
import img3 from "../../src/assets/TASK_MANAGEMENT.png";
import img1 from "../../src/assets/e-commerce-website-building-guide.png";
import Aos from 'aos';
import "aos/dist/aos.css";

const Projects = () => {
    const projectList = [
        { title: 'Portfolio Website', description: 'A personal portfolio website to showcase my skills, projects, and experience. Built with React.js, Bootstrap, and Sass.', imgSrc: img, Url: "https://my-portfolio-1yar.vercel.app/" },
        { title: 'E-commerce Platform', description: 'A responsive e-commerce platform with product listings, shopping cart, and payment gateway integration. Built using Angular and Bootstrap.', imgSrc: img1, Url: "https://github.com/Ramesh59906/" },
        { title: 'Real-Time Chat Application', description: 'A real-time chat application with private and group chat functionalities. Developed using Vue.js, Socket.io, and Node.js.', imgSrc: img3, Url: "https://github.com/Ramesh59906/" }
        // Add more projects here
    ];

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const [minHeight, setMinHeight] = useState("400px");

    useEffect(() => {
        const updateHeight = () => {
            if (window.innerWidth <= 576) {
                setMinHeight("300px"); // For small devices
            } else if (window.innerWidth <= 768) {
                setMinHeight("380px"); // For medium devices
            } else {
                setMinHeight("410px"); // For large devices and above
            }
        };

        window.addEventListener('resize', updateHeight);
        updateHeight(); // Call the function initially

        return () => window.removeEventListener('resize', updateHeight);
    }, []);
    return (
        <Container id="projects" className='my-5'>
            <Row className="animate-fadeIn">
                <Col>
                    <h3 style={{
                        fontSize: "2.2rem",
                        fontWeight: "bold",
                        color: "#003366",
                        letterSpacing: "1.2px",
                        animation: "fadeInDown 1s ease-in-out"
                    }} className='text-center animate-rotateAndColor mb-5' >Projects</h3>
                    {/* <hr /> */}
                </Col>
            </Row>
            <Row>
                {projectList.map((project, index) => (
                    <Col md={6} sm={6} lg={4} xs={12} key={index} className="my-1">
                        <Card className="mb-4 shadow" data-aos="zoom-in" style={{ minHeight, border: "none" }}>
                            <Card.Img variant="top" src={project.imgSrc} fluid />
                            {/* <img src={project.imgSrc} className='image-fluid' alt="" /> */}
                            <Card.Body>
                                <Card.Title>{project.title}</Card.Title>
                                <Card.Text style={{ color: "gray" }}>{project.description}</Card.Text>
                                <Card.Text>
                                    <a href={project.Url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#007bff" }}>
                                        Clike here
                                    </a>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Projects;
