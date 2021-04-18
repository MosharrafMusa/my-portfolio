import React from 'react'
import {Container, Row, Col,Image, ListGroup} from 'react-bootstrap';
import { BarChart, Bar,ResponsiveContainer, XAxis,Tooltip } from 'recharts';
import Details from '../../asset/image/mhm1.png';
import Adapt from '../../asset/image/mhm2.png';
import Critical from '../../asset/image/mhm3.png';



const Skills = () => {
    const data=([
        {Technology:'Javacsript', Strength: 100},
        {Technology:'React', Strength: 80},
        {Technology:'Redux', Strength: 100},
        {Technology:'NodeJS', Strength: 100},
        {Technology:'PostgreSql', Strength: 100},
        {Technology:'Python', Strength: 100},
    ]);
    const blue = "rgba(0,115,230,0.8)"
    return (
        <>
        <Container className="sectionGap">
            <h1 className="sectionTitle">ABOUT</h1>
            <Row>
                <Col style={{width:'100%',height:'300px',marginRight:"10px" }} lg={6} md={12} sm={12}>
                    <ResponsiveContainer>
                    <BarChart width={100} height={300} data={data}>
                        <XAxis dataKey="Technology"/>
                        <Tooltip/>
                        <Bar dataKey="Strength" fill={blue}>
                        </Bar>
                    </BarChart>
                    </ResponsiveContainer>
                    <h5 fontSize="18px"> Skills</h5>
                </Col>
                <Col>
                <Row>
                <Image src="https://mosharrafmusa.com/images/mhmusa.JPG" className="centerImage" />
                <p>I love to develop unique things, that make your business a differene!
                </p>
                </Row>
                </Col>
            </Row>
        </Container>
        <Container className="sectionGap">
            <Row>
            <Col sm={12} md ={6} lg ={3}>
            <ListGroup>
            <ListGroup.Item action variant="light">
            Details Oriented
            </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col sm={12} md ={6} lg ={3}>
            <ListGroup>
            <ListGroup.Item action variant="light">
            Eager to learn
            </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col sm={12} md ={6} lg ={3}>
            <ListGroup>
            <ListGroup.Item action variant="light">
            Active listener
            </ListGroup.Item>
            </ListGroup>
       
            </Col>
            <Col sm={12} md ={6} lg ={3}>
            <ListGroup>
            <ListGroup.Item action variant="light">
            Flexibility and Adaptability
            </ListGroup.Item>
            </ListGroup>
            </Col>
            
            <Col sm={12} md ={6} lg ={3}>
            <ListGroup>
            <ListGroup.Item action variant="light">
            Criticla Thinking
            </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col sm={12} md ={6} lg ={3}>
            <ListGroup>
            <ListGroup.Item action variant="light">
            Self Motivated
            </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col sm={12} md ={6} lg ={3}>
            <ListGroup>
            <ListGroup.Item action variant="light">
            Have Patience
            </ListGroup.Item>
            </ListGroup>
       
            </Col>
            <Col sm={12} md ={6} lg ={3}>
            <ListGroup>
            <ListGroup.Item action variant="light">
            Details Oriented
            </ListGroup.Item>
            </ListGroup>
            </Col>
            </Row>
           
        </Container>
        </>
    )
}

export default Skills
