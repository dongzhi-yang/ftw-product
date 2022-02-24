import React from "react";
import { Container, Col, Row, Button} from 'react-bootstrap';
//import 'font-awesome/css/font-awesome.min.css';
import toyotaImage from '../../../assets/Toyota-on-beach.jpg';
import priceImage from '../../../assets/price-tag.png';
import moneyImage from '../../../assets/money.png';
import img1 from '../../../assets/1950630.png';
import img2 from '../../../assets/59505.png';
import img3 from '../../../assets/807303.png';
import img4 from '../../../assets/1670915.png';
import img5 from '../../../assets/SurveyMonkey-Logo-1.png';
import quote from '../../../assets/quote.png';
//import backgroundimg from '../../../assets/qublurry-car-copyote.png';
import config from '../../../config';
import AOS from "aos";
AOS.init();
export default function Content()
{
  const schemaImage = `${config.canonicalRootURL}`;
    return <div className="main-section"> <>
<div className="main-banner">
<h1 data-aos="zoom-in" data-aos-duration="1600">Welcome to the Dawn of the New Auto Marketplace</h1>

<img
        className="service-img"
        src={config.canonicalRootURL+toyotaImage}
        
    />
</div>


<div className="second-sec">
<div className="second-inner">
  <Container>
    <Row>  
    <Col className="inner-sec tag-sec" xs={12} lg={6}>
<Button href="/l/new" alue="Sell">SELL <span>🡢</span></Button>
<i class="fa fa-tags"></i>
 <h3> SELL WITH 100% TRUST</h3>
<p>Shop your vehicle in our auto marketplace and receive an instant offer.</p>
  </Col>
  <Col className="inner-sec" xs={12} lg={6}>
<Button href="/s?" alue="Buy">BUY <span>🡢</span></Button>
<i class="fa fa-money"></i>
 <h3>BUY WITH TOTAL CONFIDENCE</h3>
<p>Explore our auto marketplace and find the right vehicle for you today.</p>
  </Col>
</Row>
</Container>
</div>
</div>


<div className="third-sec">
<div className="third-inner">
  <div className="main-heading"><h1 data-aos="zoom-in" data-aos-duration="1000"><em><span className="logo-color">E</span>-Motive</em> Delivers…</h1></div>
  <Container>
    <Row>  
    <Col className="third-inner-sec" xs={12} lg={6} md={6}>
<img
        className="third-inner-img"
        src={img1}
		data-aos="fade-down"
        
    />
 <h3> Real-time Condition Reports</h3>
  </Col>
  <Col className="third-inner-sec" xs={12} lg={6} md={6}>
<img
        className="third-inner-img"
        src={img2}
		data-aos="fade-down"
        
    />
 <h3>On-demand Vehicle Marketplace</h3>
  </Col>
</Row>
<Row>  
    <Col className="third-inner-sec" xs={12} lg={6} md={6}>
<img
        className="third-inner-img"
        src={img3}
		data-aos="fade-down"
        
    />
 <h3>Professional Inspections</h3>
  </Col>
  <Col className="third-inner-sec" xs={12} lg={6} md={6}>
<img
        className="third-inner-img"
        src={img4}
		data-aos="fade-down"
        
    />
 <h3>Pick Up and Delivery</h3>
  </Col>
</Row>
</Container>
</div>
</div>




<div className="fourth-sec">
<div className="fourth-inner">
  <Container>
  <div className="main-heading"><h1 data-aos="zoom-in" data-aos-duration="1000">Green Partners</h1></div>

    <Row>  
    <Col className="fourth-inner-sec col-6" xs={12} lg={6}>

 <h3>ADAREV</h3>
<p>E-Motive will employ 20kW solar generators from our partner, Adarev. It will utilize custom-designed solar panels from T1 solar firm to power our facilities.</p>
  </Col>
  <Col className="fourth-inner-sec col-6" xs={12} lg={6}>

 <h3>TIER ONE SOLAR</h3>
<p>To run 20kW generators, instead of relying completely on unsustainable fuels. Using Tier One Solar, we will procure their custom-created solar panels. We will successfully run sustainable and reliable energy for our entire ecosystem.</p>
  </Col>
</Row>
</Container>
</div>
</div>





<div className="fifth-sec">
<div className="fifth-inner">
  <Container>
  <div className="main-heading">

  <img
        className="third-inner-img"
        src={img5}
        data-aos="zoom-in" data-aos-duration="1000"
    />
  </div>
<div className="big-quote">

<h3 data-aos="zoom-in" data-aos-duration="1200">“LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. QUISQUE VIVERRA QUAM IN LAOREET QUIS JUSTO. IVAMUS VARIUS SEMPER SUSCIPIT. ALIQUAM ERAT VOLUTPATUT NEC MAGNA ARCU. INTERDUM ET.”
</h3>

</div>
    <Row>  
    <Col className="fifth-inner-sec" xs={12} lg={4}>

<i class="fa fa-quote-right" aria-hidden="true"></i>

<p>“Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis”</p>
  </Col>
  <Col className="fifth-inner-sec" xs={12} lg={4}>

 <i class="fa fa-quote-right" aria-hidden="true"></i>

<p>“Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis”</p>
  </Col>
  <Col className="fifth-inner-sec" xs={12} lg={4}>

<i class="fa fa-quote-right" aria-hidden="true"></i>

<p>“Nulla quis lorem ut libero malesuada feugiat. Pellentesque in ipsum id orci porta dapibus. Vivamus suscipit tortor eget felis”</p>
</Col>
</Row>
</Container>
</div>
</div>






<div className="sixth-sec"  data-aos="fade-up" data-aos-duration="2000">
<div className="sixth-inner">
  <Container fluid>

    <Row>  
    <Col xs={12} lg={6} md={6} className="sixth-inner-sec get-in-touch col-6">
    <h1>Get In Touch</h1>
    <h2>(888) 123-4562</h2>
<h3>Location</h3>
<p>2345 Divi St<br></br>
San Francisco, CA 94222</p>
  </Col>
  <Col xs={12} lg={6} md={6} className="sixth-inner-sec contact-form col-6">

 
				
				
				
          
          
          <h2 className="contact_main_title">Send A Message</h2>
          
            <form >
              <p>
          <input type="text" name="contact_name" placeholder="Name"/>
        </p>
        
        <p>
          <input type="text" id="contact_email" placeholder="Email Address"/>
        </p>
        
        <p>
          <textarea className="contact_message" placeholder="Message"></textarea>
        </p>
                
                <button type="submit" className="contact_submit">Send Message</button>
            </form>
        


  </Col>
</Row>
</Container>
</div>
</div>

</>
    </div>;
}