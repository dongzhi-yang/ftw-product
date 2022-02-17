import React from 'react';
import config from '../../../config';
import drawImage from '../../../assets/Method-Draw-Image.png';
import 'font-awesome/css/font-awesome.min.css';

export default function Footer() {
    const schemaImage = `${config.canonicalRootURL}`;
  return <div>

<div className="d-flex flex-column">

    <footer bg="gray" className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
            <div className="row gy-4 gx-5">
                <div className="col-lg-3 col-md-6 xs-hidden">
                <img
    className="footer-logo hide-mbl"
    src={schemaImage+drawImage}
    alt="E-Motive Logo"
    />

    <div className="social-icons hide-mbl">
<i className="fa fa-instagram"></i><i className="fa fa-facebook"></i><i className="fa fa-twitter"></i>
    </div>
    
                    <p className="logo-text small bold hide-mbl"> © 2022 E-Motive</p>                </div>
                <div className="col-lg-3 col-md-6 col-xs-6" xs={6}>
                    <h5 className="text-white">MENU</h5>
                    <ul className="list-unstyled">
                        <li><a href="#">Buy</a></li>
                        <li><a href="#">Sell</a></li>
                        <li><a href="#">About <span className="logo-color">E</span>-Motive</a></li>
                        <li><a href="#">How It Works</a></li>
                        <li><a href="#">Sign In/Sign Up</a></li>
                    </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-6" xs={6}>

                <div className="social-icons hide-pc">
<i className="fa fa-instagram"></i><i className="fa fa-facebook"></i><i className="fa fa-twitter"></i>
    </div>

                    <h5 className="text-white">LEGAL</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="#">Terms of Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <p className="logo-text small bold hide-pc"> © 2022 E-Motive</p>      
                    </ul>
                </div>
           
            </div>
        </div>
    </footer>
</div>
  

  </div>;
}
