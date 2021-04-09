import React, {useState, useEffect} from 'react'
import {Navbar, Nav} from 'react-bootstrap';

const TopNavigation = () => {
    const [scrollState, setScrollState] = useState("navTitle");

    const onScroll=()=>{
        if(window.scrollY>100){
            setScrollState("navTitleScroll")
        }
        else if (window.scrollY<100){
            setScrollState(scrollState)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',onScroll)
      },[]);

    return (
        <>
  <Navbar fixed = "top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Mosharraf Musa</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Home</Nav.Link>
      <Nav.Link href="#deets">About</Nav.Link>
      <Nav.Link href="#deets">Portfolio</Nav.Link>
      <Nav.Link href="#deets">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            
        </>
    )
}

export default TopNavigation
