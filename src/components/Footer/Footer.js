import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'


const Footer = () => {
    return (
        <>
        <Container fluid={true} className=" text-center footerSection">
            <Row>
                <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                    <h1 className="footerTitle">Follow Me</h1>
                    <a href="#"><i className='fab fa-facebook'/> facebook</a><br/>
                    <a href="#"><i className='fab fa-twitter'/> twitter</a>
                </Col>
                <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                <h1 className="footerTitle">Address</h1>
                    <p> <i className='fa fa-envelope'/> mosharrafny@gmail.com</p><br/>
                    <p><i className='fa fa-phone'/> +1 (347) 547 8929</p>

                </Col>
                <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                <h1 className="footerTitle">Information</h1>
                <a href="#">About Me</a><br/>
                <a href="#">My Resume</a><br/>
                <a href="#">Contact Me</a>
                </Col>
                
                <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                <h1 className="footerTitle">Legal</h1>
                <a href="#">Privacy Policy</a><br/>
                <a href="#">Terms and Contitions</a><br/>
                </Col>
            </Row>
        </Container> 
        </>
    )
}

export default Footer
