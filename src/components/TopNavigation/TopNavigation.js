import React, {useState, useEffect} from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import whiteLogo from '../../asset/image/logo.png';
import blueLogo from '../../asset/image/mylogo.png';
import '../../asset/css/custom.css'

const TopNavigation = () => {
    const [scrollState, setScrollState] = useState("navTitle");
    const [navbarLogo, setNavbarLogo] = useState([whiteLogo]);
    const [navbarBack, setNavbarBack] = useState("navBackground")
    const [navbarItem, setNavbarItem] = useState("navItem")
    const [navVarient, setNavVarient] = useState("dark")

    const onScroll=()=>{
        if(window.scrollY>100){
            setScrollState("navTitleScroll")
            setNavbarLogo([blueLogo])
            setNavbarBack("navBackgroundScroll")
            setNavbarItem("navItemScroll")
            setNavVarient("light")
        }
        else if (window.scrollY<100){
            setScrollState("navTitle")
            setNavbarLogo([whiteLogo])
            setNavbarBack("navBackground")
            setNavbarItem("navItem")
            setNavVarient("dark")
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',onScroll)
      },[]);

    return (
        <>
  <Navbar varient={navVarient} className={ navbarBack} fixed = "top" collapseOnSelect expand="lg">
  <Navbar.Brand className={scrollState}><img alt="logo" src={navbarLogo}/> Mosharraf Musa</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Nav>
      <Nav.Link className={navbarItem} href="#deets">Home</Nav.Link>
      <Nav.Link className={navbarItem} href="#deets">Portfolio</Nav.Link>
      <Nav.Link className={navbarItem} href="#deets">About</Nav.Link>
      <Nav.Link className={navbarItem} href="#deets">Contact</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            
        </>
    )
}

export default TopNavigation
