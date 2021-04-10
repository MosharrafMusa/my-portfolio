import React from 'react'
import { Container,Row,Col,Button } from 'react-bootstrap'




const TopBanner = () => {
    return (
        <Container fluid={true} className="topFixedBanner p-0">
            <div className= "topBannerOverlay">
                <Container className="topContent">
                    <Row>
                        <Col className="text-center">
                        <h1 className="topTitle">Hello, I'm Mosharraf Musa</h1>
                        <h4 className="topSubTitle">Full-stack Web Developer</h4>
                        <Button varient="primary">View my work</Button>
                        </Col>
                    </Row>

                </Container>

            </div>
            
        </Container>
    )
}

export default TopBanner
