import React from 'react';
import { Container, Col, Row, Button} from 'react-bootstrap';

import '../../../src/App.css';
import facebookImage from '../../assets/sneakertimeFacebook-1200x630.jpg';
import twitterImage from '../../assets/sneakertimeTwitter-600x314.jpg'
import Header from '../LandingPage/my component/Header';
import Footer from '../LandingPage/my component/Footer';
import config from '../../config';

    import howItworks from '../../assets/car-dealer-36.jpg';
    import pkey from '../../assets/phone-and-keys.webp';
    import CarCarrier from '../../assets/Car-carrier.webp';
    import Valuation from '../../assets/Valuation.webp';
    import Inspection2 from '../../assets/Inspection2.webp'; 
    import evideo from '../../assets/Explainer-Half-Rez.mp4'; 
    
export const HowItWorksPageComponent = props => {

    const schemaImage = `${config.canonicalRootURL}`;

  
	  const siteTitle = config.siteTitle;
 
  return (
      <>
      <Header></Header>
      <div className="how-works-main">

<div className="how-banner" style={{ 
  backgroundImage: 'linear-gradient(180deg,rgba(27,31,37,0) 0%,#23abe2 100%),url('+config.canonicalRootURL+howItworks+')'}}>
<h1>How It Works</h1>
</div>
<Container>
<div className="how-first">

<Row className="clip-h">  
    <Col className="how-first-inner inner-how" xs={12} lg={7} md={7}>

 <h4><strong><span>E</span>-Motive</strong> offers the most customer-friendly auto marketplace available today for buying and selling vehicles.</h4>
  </Col>

  <Col className="how-first-inner inner-how-img" xs={12} lg={5} md={5}>
<img
        className="how-c-img"
        src={pkey}
		data-aos="zoom-in"
    data-aos-duration="1000"  
    />
  </Col>
</Row>

</div>


<div className="divider-top"></div>
<div className="divider-how"></div>


<div className="how-second">
<Row className="clip-f">  
   
<Col className="how-first-inner inner-how-img" xs={12} lg={5} md={5}>
<img
        className="how-c-img"
        src={Valuation}
		data-aos="zoom-in"
    data-aos-duration="1000"  
    />
  </Col>
   
    <Col className="how-first-inner inner-how" xs={12} lg={7} md={7}>

 <h4>Our new, intelligent vehicle valuation system makes pricing and listing a breeze for sellers while offering trustworthy and comprehensive condition information for buyers.
</h4>
  </Col>


</Row>
</div>
<div className="divider-top"></div>
<div className="divider-how"></div>


<div className="how-third">

<Row className="clip-f">  
    <Col className="how-first-inner inner-how" xs={12} lg={7} md={7}>

 <h4>Besides the selling simplicity and customer confidence our technology delivers, we offer additional layers of trust and security. All vehicles are inspected before sales are final. Additionally, all buyers and sellers are verified and personal information is protected throughout the process.
</h4>
  </Col>

  <Col className="how-first-inner inner-how-img" xs={12} lg={5} md={5}>
<img
        className="how-c-img"
        src={Inspection2}
		data-aos="zoom-in"
    data-aos-duration="1000"  
    />
  </Col>
</Row>
</div>

<div className="divider-top"></div>
<div className="divider-how"></div>


<div className="how-fourth">

<Row className="clip-f">  
  
<Col className="how-first-inner inner-how-img" xs={12} lg={5} md={5}>
<img
        className="how-c-img"
        src={CarCarrier}
		data-aos="zoom-in"
    data-aos-duration="1000"  
    />
  </Col>
  
    <Col className="how-first-inner inner-how" xs={12} lg={7} md={7}>

 <h4>Finally, would you like your vehicle delivered? We’ve got that covered, too.
</h4>
  </Col>


</Row>
</div>

<div className="divider-top"></div>
<div className="divider-how"></div>

<div className="how-fifth">

<Row className="clip-f">  
  
<Col className="how-first-inner inner-how-img" xs={12} lg={12} md={12}>
<h4>Please watch the video below to view our <strong><span>“Easy, Secure, Trustworthy”</span></strong> process in action.
</h4>
  </Col>
  



</Row>
</div>

<div className="divider-top"></div>
</Container>


<Container fluid className="video-sec">

<Row>  
  
<Col className="how-first-inner inner-how-img" xs={12} lg={12} md={12}>

<div className="video-box">
<video controls>
  <source type="video/mp4" src={evideo}></source>
</video>

</div>

<h4>Our <em>Easy, Secure, Trustworthy</em> Process</h4>

</Col>

</Row>
</Container>

</div>
      <Footer></Footer>
      </>
      );
};


// Note: it is important that the withRouter HOC is **outside** the
// connect HOC, otherwise React Router won't rerender any Route
// components since connect implements a shouldComponentUpdate
// lifecycle hook.
//
// See: https://github.com/ReactTraining/react-router/issues/4671
const HowItWorksPage =(HowItWorksPageComponent);

export default HowItWorksPage;
