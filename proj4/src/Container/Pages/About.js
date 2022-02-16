import React from 'react';
import Navbar from '../Home/Header';
import Aboutme from '../Aboutme/Aboutme';
import Footer from '../Footer/Footer';

const About = () => {
  return (<>
  <div className='about-me'>
   <Navbar/>
   <Aboutme/>
  </div>
   <Footer />
  </>);
};

export default About;
