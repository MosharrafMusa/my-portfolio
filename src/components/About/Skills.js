import React from 'react'
import {Container, Row, Col, Card,Image} from 'react-bootstrap';
import { BarChart, Bar,ResponsiveContainer, XAxis,Tooltip } from 'recharts';



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
                </Col>
                <Col>
                <Row>
                <Image src="https://mosharrafmusa.com/images/mhmusa.JPG" className="centerImage" />
                <p>Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </p>
                </Row>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Skills
