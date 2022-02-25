import React from 'react';
import '../../../src/App.css';
import facebookImage from '../../assets/sneakertimeFacebook-1200x630.jpg';
import twitterImage from '../../assets/sneakertimeTwitter-600x314.jpg'
import Header from './my component/Header';
import Footer from './my component/Footer';
import Content from './my component/Content';
import config from '../../config';
export const LandingPageComponent = props => {
	
	  const siteTitle = config.siteTitle;
 
  return (
      <>
      <Header></Header>
      <Content></Content>
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
const LandingPage =(LandingPageComponent);

export default LandingPage;
