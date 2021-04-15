import React from 'react'
import {Col,Button, Card, Container, Row, CardColumns} from 'react-bootstrap';
import Project1 from '../../asset/image/project-1-opt.jpg';



const RecentProjects = () => {
    return (
        <Container test="center" className="sectionGap">
            <h1 className="sectionTitle">RECENT PROJECT</h1>
            <Row>
                <CardColumns>
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
                <Card className="projectCard">
                    <Card.Img variant="top" src={Project1} />
                    <Card.Body>
                    <Card.Title className="projectCardTitle">Card Title</Card.Title>
                        <Card.Text className="projectCardDes">
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Details</Button>
                    </Card.Body>
                </Card>
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
                </CardColumns>

                
            </Row>
            
            
            
        </Container>
    )
}

export default RecentProjects

