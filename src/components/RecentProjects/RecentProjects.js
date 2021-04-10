import React from 'react'
import {Col,Button, Card, Container, Row} from 'react-bootstrap';


const RecentProjects = () => {
    return (
        <Container test="center" className="sectionGap">
            <h1 className="sectionTitle">RECENT PROJECT</h1>
            <Row>
                <Col sm={12} md ={6} lg ={4}>
                <Card className="projectCard">
                    <Card.Img variant="top" src="https://mosharrafmusa.com/images/responsive.PNG" />
                    <Card.Body>
                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                        <Card.Text className="projectCardDes">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </Card>
                </Col>

                <Col sm={12} md ={6} lg ={4}>
                <Card className="projectCard">
                    <Card.Img variant="top" src="https://mosharrafmusa.com/images/git-for-web.PNG" />
                    <Card.Body>
                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                        <Card.Text className="projectCardDes">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </Card>
                </Col>

                <Col sm={12} md ={6} lg ={4}>
                <Card className="projectCard">
                    <Card.Img variant="top" src="https://mosharrafmusa.com/images/git-for-web.PNG" />
                    <Card.Body>
                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                        <Card.Text className="projectCardDes">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            
        </Container>
    )
}

export default RecentProjects

