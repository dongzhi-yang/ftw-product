import React from 'react';
import '../../../src/App.css';
import Header from './my component/Header';
import Footer from './my component/Footer';
//import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

export const LandingPageComponent = props => {
  return (
      <>
      <Header></Header>
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
