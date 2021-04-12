import React from 'react'
import { Container,Form,Row,Button,Col } from 'react-bootstrap'

const Contact = () => {
    return (
        <>
        <Container className="sectionGap">
            <h1 className="sectionTitle">CONTACT</h1>
            
            <Row>
            <Col lg={6} md={6} sm={12}>
            <Form>
            <Form.Group controlId="formBasicEmail">
            <Form.Row>
            <Col>
            <Form.Control placeholder="First name" />
            </Col>
            <Col>
            <Form.Control placeholder="Last name" />
            </Col>
            </Form.Row>
            </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Subject" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Your Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Send Message
  </Button>
</Form>
</Col>
<Col lg={6} md={6} sm={12}>
<p>Please fill out the form to enquire about hiring me. To learn about how I work and the value I can bring to your project, please visit About Me or to see my skills and ability, view my Portfolio..</p>
</Col>
        </Row>

        </Container>  
        </>
    )
}

export default Contact
