import React from 'react'

const PageTop = () => {
    return (
        <>
            <Container fluid={true} className="topFixedPage p-0">
            <div className= "topPageOverlay">
                <Container className="topContent">
                    <Row>
                        <Col className="text-center">
                       
                        <h4 className="topPageSubTitle">About Me</h4>
                       
                        </Col>
                    </Row>

                </Container>

            </div>
            
        </Container> 
        </>
    )
}

export default PageTop
