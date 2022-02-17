import React from 'react';
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
  return <div className='topnav'>    <>
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
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">   
      <Nav
        className="nav-main"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Sell</Nav.Link>
        <Nav.Link href="#action2">Buy</Nav.Link>
        <NavDropdown title="About E-Motive" id="navbarScrollingDropdown" className='logo-letter'>
          <NavDropdown.Item href="#action3">How It Works</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
        Sign In / Sign Up
        </Nav.Link>
        <Nav.Link className='hide-pc' href="#action2">Link</Nav.Link>

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
        <Nav.Link className="hide-mbl" href="#action1">Sign In / Sign Up</Nav.Link>
  
      </Nav>

          </>
  </div>;
}