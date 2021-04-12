import React from 'react'
import {Container, Row, Col, Card,Image} from 'react-bootstrap';
import { BarChart, Bar,ResponsiveContainer, XAxis,Tooltip } from 'recharts';
import Details from '../../asset/image/mhm1.png';
import Adapt from '../../asset/image/mhm2.png';
import Critical from '../../asset/image/mhm3.png';



const Skills = () => {
    const data=([
        {Technology:'Javacsript', Strength: 100},
        {Technology:'React', Strength: 80},
        {Technology:'Javacsript', Strength: 100},
        {Technology:'Javacsript', Strength: 100},
        {Technology:'Javacsript', Strength: 100},
        {Technology:'Javacsript', Strength: 100},
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
                <Col sm={12} md ={6} lg ={4}>
                <Image src={Details} className="centerImage" />
                <h4>Details Oriented</h4>
                <p>Web development is all about the details. As a detail oriented person, I have patience and determination to explore the problem and Proactive attitude that focuses on creating ideas and plans for correcting issues.
                </p>
                </Col>
                <Col sm={12} md ={6} lg ={4}>
                <Image src={Adapt} className="centerImage" />
                <h4>Ability To Adapt</h4>
                <p>In the field of web development, the frameworks and tools are changing and updating at a rapid pace, so being able to adapt quickly and work well with others is more important than knowing any particular technology.
                </p>
                </Col>
                <Col sm={12} md ={6} lg ={4}>
                <Image src={Critical} className="centerImage" />
                <h4>Critical Thinking</h4>
                <p>A successful web developer must need the critical thinking quality. My critical thinking ability helps to deconstruct a problem into its base components and figure out the most effective way to solve it.
                </p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Skills
