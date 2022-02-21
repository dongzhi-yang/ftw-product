import React, { useState, useEffect } from "react"
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, NavDropdown } from 'react-bootstrap';
import '../../LandingPage/LandingPage.module.css';
import config from '../../../config';
import drawImage from '../../../assets/Method-Draw-Image.png';
import draw1Image from '../../../assets/Method-Draw-Image-mbl.png';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
	
  const schemaImage = `${config.canonicalRootURL}`;
 
      const [scroll, setScroll] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10)
    })
  }, [])
  
  return <div  className={scroll ? "main-header scrolled topnav" : "topnav"}>  

  <>
<div className='logo-sec'>
    <img 
    className="logo-img pc-logo-img"
    src={schemaImage+drawImage}
    alt="E- Motive Logo"
    />
    <img
    className="logo-img mbl-logo-img"
    src={draw1Image}
    alt="E- Motive Logo"
    />
</div>


<div className="nav-sec">
<Navbar bg="gray" expand="lg">
  <Container fluid>
    <Navbar.Toggle aria-controls="navbarScroll"/>
    <Navbar.Collapse id="navbarScroll">   
      <Nav
        className="nav-main"
        navbarScroll
      >
        <Nav.Link href="/l/new">Sell</Nav.Link>
        <Nav.Link href="/l/new">Buy</Nav.Link>
        <NavDropdown title="About E-Motive" id="navbarScrollingDropdown" className='logo-letter'>
          <NavDropdown.Item href="#action3">How It Works</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/login">
        Sign In / Sign Up
        </Nav.Link>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>

<div className="search-container">
   
    
   <form action="/action_page.php">
     <input type="text" placeholder="make, model, color..." name="search"/>
     <button type="submit">Submit</button>
   </form>
   
 </div>

 <Nav>
        <Nav.Link className="hide-mbl" href="/login">Sign In / Sign Up</Nav.Link>
  
      </Nav>

          </>
  </div>;  
}

